"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit3,
  Camera,
  Settings,
  Bell,
  Shield,
  CreditCard,
  History,
  Heart,
  Star,
  Award,
  Clock,
  CheckCircle,
  Wrench,
  Home,
  ChevronRight,
  Download,
  Share2,
  MoreVertical,
  Save,
  X,
  Loader2,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isUploadingImage, setIsUploadingImage] = useState(false)
  const fileInputRef = useRef(null)
  const Navigate = useNavigate()
  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
  })

  // Original profile data from backend
  const [originalProfileData, setOriginalProfileData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    joinDate: "",
    membershipType: "",
    avatar: "",
  })

  // Editable profile data
  const [profileData, setProfileData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    joinDate: "",
    membershipType: "",
    avatar: "",
  })

  // Form validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  })

  // Fetch user profile data from backend
  const fetchProfileData = async () => {
    setIsLoading(true)
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/user/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const userData = await response.json()
        setOriginalProfileData(userData)
        setProfileData(userData)
      } else {
        console.error("Failed to fetch profile data")
        // Fallback to mock data for demo
        const mockData = {
          id: "user123",
          name: "Priya Sharma",
          email: "priya.sharma@gmail.com",
          phone: "+91 98765 43210",
          location: "Bandra West, Mumbai",
          joinDate: "March 2022",
          membershipType: "Gold Member",
          avatar: "",
        }
        setOriginalProfileData(mockData)
        setProfileData(mockData)
      }
    } catch (error) {
      console.error("Error fetching profile:", error)
      // Fallback to mock data for demo
      const mockData = {
        id: "user123",
        name: "Priya Sharma",
        email: "priya.sharma@gmail.com",
        phone: "+91 98765 43210",
        location: "Bandra West, Mumbai",
        joinDate: "March 2022",
        membershipType: "Gold Member",
        avatar: "",
      }
      setOriginalProfileData(mockData)
      setProfileData(mockData)
    } finally {
      setIsLoading(false)
    }
  }

  // Load profile data on component mount
  useEffect(() => {
    fetchProfileData()
  }, [])

  // Handle input changes
  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  // Validate form data
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      location: "",
    }

    if (!profileData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!profileData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!profileData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\+91\s\d{5}\s\d{5}$/.test(profileData.phone)) {
      newErrors.phone = "Phone number format should be +91 XXXXX XXXXX"
    }

    if (!profileData.location.trim()) {
      newErrors.location = "Location is required"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }

  // Handle profile image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      showNotification("Please select a valid image file", "error")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showNotification("Image size should be less than 5MB", "error")
      return
    }

    setIsUploadingImage(true)

    try {
      const formData = new FormData()
      formData.append("avatar", file)
      formData.append("userId", profileData.id)

      // Replace with your actual image upload endpoint
      const response = await fetch("/api/user/upload-avatar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        setProfileData((prev) => ({
          ...prev,
          avatar: result.avatarUrl,
        }))
        showNotification("Profile picture updated successfully!")
      } else {
        // For demo purposes, create a local URL
        const imageUrl = URL.createObjectURL(file)
        setProfileData((prev) => ({
          ...prev,
          avatar: imageUrl,
        }))
        showNotification("Profile picture updated successfully! (Demo mode)")
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      showNotification("Failed to upload image. Please try again.", "error")
    } finally {
      setIsUploadingImage(false)
    }
  }

  // Handle save profile
  const handleSaveProfile = async () => {
    if (!validateForm()) {
      return
    }

    setIsSaving(true)

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: profileData.id,
          name: profileData.name,
          email: profileData.email,
          phone: profileData.phone,
          location: profileData.location,
          avatar: profileData.avatar,
        }),
      })

      if (response.ok) {
        const updatedData = await response.json()
        setOriginalProfileData(updatedData)
        setProfileData(updatedData)
        setIsEditing(false)
        showNotification("Profile updated successfully!")
      } else {
        // For demo purposes, simulate successful update
        setOriginalProfileData(profileData)
        setIsEditing(false)
        showNotification("Profile updated successfully! (Demo mode)")
      }
    } catch (error) {
      console.error("Error updating profile:", error)
      showNotification("Failed to update profile. Please try again.", "error")
    } finally {
      setIsSaving(false)
    }
  }
  const showNotification = (message, type = "success") => {
    setNotification({
      isVisible: true,
      message,
      type,
    })
  }

  // Hide notification function
  const hideNotification = () => {
    setNotification((prev) => ({
      ...prev,
      isVisible: false,
    }))
  }

  // Handle cancel edit
  const handleCancelEdit = () => {
    setProfileData(originalProfileData)
    setErrors({
      name: "",
      email: "",
      phone: "",
      location: "",
    })
    setIsEditing(false)
  }
  const handleLogoClick = () => {
    // Handle logo click event
    Navigate("/")
  }

  const stats = [
    { label: "Services Booked", value: "32", icon: <Wrench className="w-5 h-5" />, color: "text-blue-600" },
    { label: "Money Saved", value: "₹18,750", icon: <Award className="w-5 h-5" />, color: "text-green-600" },
    { label: "Member Since", value: "2.5 Years", icon: <Calendar className="w-5 h-5" />, color: "text-purple-600" },
    { label: "Reviews Given", value: "28", icon: <Star className="w-5 h-5" />, color: "text-yellow-600" },
  ]

  

  
  const menuItems = [
    { id: "overview", label: "Overview", icon: <Home className="w-5 h-5" /> },
    // { id: "services", label: "Service History", icon: <History className="w-5 h-5" /> },
    // { id: "appliances", label: "My Appliances", icon: <Settings className="w-5 h-5" /> },
    // { id: "favorites", label: "Favorites", icon: <Heart className="w-5 h-5" /> },
    // { id: "achievements", label: "Rewards", icon: <Award className="w-5 h-5" /> },
    { id: "settings", label: "Account Settings", icon: <User className="w-5 h-5" /> },
  ]

  const myAppliances = [
    {
      type: "Air Conditioner",
      brand: "LG",
      model: "Dual Inverter 1.5 Ton",
      purchaseDate: "Jan 2022",
      lastService: "Dec 18, 2024",
      nextService: "Mar 18, 2025",
      warrantyStatus: "Active",
      warrantyExpiry: "Jan 2025",
    },
    {
      type: "Refrigerator",
      brand: "Samsung",
      model: "Double Door 253L",
      purchaseDate: "Mar 2021",
      lastService: "Nov 25, 2024",
      nextService: "On-demand",
      warrantyStatus: "Expired",
      warrantyExpiry: "Mar 2024",
    },
    {
      type: "Washing Machine",
      brand: "LG",
      model: "Front Load 7kg",
      purchaseDate: "Oct 2024",
      lastService: "Installation",
      nextService: "Apr 2025",
      warrantyStatus: "Active",
      warrantyExpiry: "Oct 2025",
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Notification */}
      {notification.isVisible && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg ${
              notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{notification.message}</span>
              <button onClick={hideNotification} className="ml-4 text-white hover:text-gray-200">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <img
                src={logo || "/placeholder.svg"}
                className="logo"
                alt="logo"
                onClick={handleLogoClick}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Star Coolers
              </span>
            </div>
           
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* Profile Card */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  {profileData.avatar ? (
                    <img
                      src={profileData.avatar || "/placeholder.svg"}
                      alt="Profile"
                      className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {profileData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploadingImage}
                    className="absolute -bottom-1 -right-1 bg-white rounded-full p-2 shadow-lg border-2 border-gray-100 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    {isUploadingImage ? (
                      <Loader2 className="w-4 h-4 text-gray-600 animate-spin" />
                    ) : (
                      <Camera className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
                <p className="text-gray-500 text-sm mb-4">{profileData.membershipType}</p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-700">Customer Since {profileData.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>{stat.icon}</div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Profile Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Profile Information</h3>
                    <div className="flex space-x-2">
                      {isEditing ? (
                        <>
                          <button
                            onClick={handleCancelEdit}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <X className="w-4 h-4" />
                            <span>Cancel</span>
                          </button>
                          <button
                            onClick={handleSaveProfile}
                            disabled={isSaving}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                          >
                            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            <span>{isSaving ? "Saving..." : "Save"}</span>
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        {isEditing ? (
                          <div>
                            <input
                              type="text"
                              value={profileData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.name ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder="Enter your full name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <User className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-900">{profileData.name}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        {isEditing ? (
                          <div>
                            <input
                              type="email"
                              value={profileData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.email ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder="Enter your email address"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-900">{profileData.email}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        {isEditing ? (
                          <div>
                            <input
                              type="tel"
                              value={profileData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.phone ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder="+91 XXXXX XXXXX"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-900">{profileData.phone}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        {isEditing ? (
                          <div>
                            <input
                              type="text"
                              value={profileData.location}
                              onChange={(e) => handleInputChange("location", e.target.value)}
                              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.location ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder="Enter your location"
                            />
                            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-900">{profileData.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Saved Addresses</h3>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <MapPin className="w-4 h-4" />
                      <span>Add Address</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        type: "Home",
                        address: "A-204, Sunrise Apartments, Bandra West, Mumbai - 400050",
                        isDefault: true,
                      },
                      {
                        type: "Office",
                        address: "Floor 12, Tech Tower, Andheri East, Mumbai - 400069",
                        isDefault: false,
                      },
                    ].map((addr, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-white rounded-lg">
                            <MapPin className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-gray-900">{addr.type}</h4>
                              {addr.isDefault && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{addr.address}</p>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700">
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
               
              </div>
            )}

            {/* {activeTab === "services" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Service History</h3>
                <div className="space-y-6">
                  {recentServices.map((service) => (
                    <div
                      key={service.id}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                            <Wrench className="w-8 h-8 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{service.service}</h4>
                            <p className="text-gray-500">Appliance: {service.appliance}</p>
                            <p className="text-gray-500">
                              Technician: {service.technician} ({service.technicianPhone})
                            </p>
                            <p className="text-sm text-gray-400">
                              {service.date}, {service.serviceTime}
                            </p>
                            {service.warranty && <p className="text-sm text-gray-500">Warranty: {service.warranty}</p>}
                            {service.nextService && (
                              <p className="text-sm text-gray-500">Next Service Due: {service.nextService}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">{service.price}</div>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < service.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {service.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            View Details
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Book Again
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "appliances" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">My Appliances</h3>
                <div className="space-y-6">
                  {myAppliances.map((appliance, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-gray-900">{appliance.type}</h4>
                      <p className="text-gray-500">
                        Brand: {appliance.brand}, Model: {appliance.model}
                      </p>
                      <p className="text-sm text-gray-500">Purchase Date: {appliance.purchaseDate}</p>
                      <p className="text-sm text-gray-500">
                        Last Service: {appliance.lastService}, Next Service: {appliance.nextService}
                      </p>
                      <p className="text-sm text-gray-500">
                        Warranty Status: {appliance.warrantyStatus} (Expires: {appliance.warrantyExpiry})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "favorites" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Favorite Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteServices.map((service, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-blue-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                        <span className="text-sm text-gray-500">{service.bookings} bookings</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-sm text-gray-500 mb-4">Last booked: {service.lastBooked}</p>
                      {service.nextDue && <p className="text-sm text-gray-500 mb-4">Next Due: {service.nextDue}</p>}
                      {service.avgRating && (
                        <p className="text-sm text-gray-500 mb-4">Avg Rating: {service.avgRating}</p>
                      )}
                      {service.savings && <p className="text-sm text-gray-500 mb-4">Savings: {service.savings}</p>}
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements & Badges</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`border rounded-xl p-6 transition-all duration-300 ${
                        achievement.earned
                          ? "border-green-200 bg-green-50 hover:shadow-md"
                          : "border-gray-200 bg-gray-50 opacity-60"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                          <p className="text-sm text-gray-500">{achievement.description}</p>
                        </div>
                      </div>
                      {achievement.earned ? (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span className="font-medium">Earned on {achievement.earnedDate}</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-5 h-5 mr-2" />
                          <span className="font-medium">In Progress ({achievement.progress})</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Bell className="w-5 h-5" />,
                        title: "Notifications",
                        desc: "Manage your notification preferences",
                      },
                      {
                        icon: <Shield className="w-5 h-5" />,
                        title: "Privacy & Security",
                        desc: "Control your privacy settings",
                      },
                      {
                        icon: <CreditCard className="w-5 h-5" />,
                        title: "Payment Methods",
                        desc: "Manage your payment options",
                      },
                      {
                        icon: <History className="w-5 h-5" />,
                        title: "Download Data",
                        desc: "Export your account data",
                      },
                    ].map((setting, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-white rounded-lg text-gray-600">{setting.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{setting.title}</h4>
                            <p className="text-sm text-gray-500">{setting.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Danger Zone</h3>
                  <div className="space-y-4">
                    <button className="w-full p-4 border-2 border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition-colors">
                      Deactivate Account
                    </button>
                    <button className="w-full p-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
