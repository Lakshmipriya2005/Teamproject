
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import {
  Phone,
  Mail,
  MapPin,
  Snowflake,
  Wind,
  Thermometer,
  PenToolIcon as Tool,
  Clock,
  ChevronRight,
  Menu,
  X,
  Refrigerator,
  Zap,
  Star,
  Shield,
  Users,
  Award,
  User,
  ChevronDown,
  Component,
} from "lucide-react"
import AircoolerService from "../services/AircoolerService";
import FridgeService from "../services/FridgeService";
import WashingService from "../services/WashingService";
import ACServicePage from "../services/Acservice";
 export const services = [
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Air Conditioning Service",
      description: "Complete AC maintenance, repair and installation services for residential and commercial units.",
      features: ["Regular Maintenance", "Repair Services", "New Installation", "24/7 Emergency Support"],
      color: "from-blue-500 to-cyan-500",
      route: "/ac-service",
      component:ACServicePage
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Air Cooler Service",
      description: "Professional air cooler maintenance, repair and installation for optimal cooling efficiency.",
      features: ["Pad Replacement", "Motor Servicing", "Water System Check", "Complete Overhaul"],
      color: "from-green-500 to-emerald-500",
      route: "/cooler-service",
      component:AircoolerService // replace with actual component
    },
    {
      icon: <Refrigerator className="w-12 h-12" />,
      title: "Refrigerator Service",
      description: "Expert refrigerator repair and maintenance services for all brands and models.",
      features: ["Cooling Issues", "Compressor Repair", "Door Seal Replacement", "Temperature Control"],
      color: "from-purple-500 to-pink-500",
      route: "/fridge-service",
      component: FridgeService // replace with actual component
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Washing Machine Service",
      description: "Professional washing machine repair and maintenance for front load and top load machines.",
      features: ["Drum Cleaning", "Motor Repair", "Water Inlet Issues", "Spin Problems"],
      color: "from-orange-500 to-red-500",
      route: "/washing-service",
      component: WashingService
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "HVAC Solutions",
      description: "Comprehensive heating, ventilation and air conditioning solutions for all environments.",
      features: ["System Design", "Duct Cleaning", "Filter Replacement", "Energy Optimization"],
      color: "from-indigo-500 to-purple-500",
      route: "/hvac-service",
      component: () => <div>HVAC Service</div>,
    },
    {
      icon: <Tool className="w-12 h-12" />,
      title: "General Appliance Repair",
      description: "Professional repair services for all types of home appliances and electrical equipment.",
      features: ["Microwave Repair", "Dishwasher Service", "Water Heater", "Small Appliances"],
      color: "from-teal-500 to-green-500",
      route: "/general-repair",
      component: () => <div>General Repair</div>,
    },
  ];

export default function HomeApplianceServices() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserDropdownOpen && !event.target.closest(".relative")) {
        setIsUserDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isUserDropdownOpen])

 

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Service",
      description: "Same day service available",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Warranty",
      description: "6 months service warranty",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Technicians",
      description: "Certified and experienced",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Rates",
      description: "Competitive pricing",
    },
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Phone",
      content: "+91 98765 43210",
      subtext: "Available 24/7",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email",
      content: "info@homeappliancecare.com",
      subtext: "Quick Response",
      color: "bg-gradient-to-br from-green-100 to-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Address",
      content: "123 Service Street",
      subtext: "Business District, India",
      color: "bg-gradient-to-br from-red-100 to-red-200",
      iconColor: "text-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Tool className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ApplianceCare
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Book Service
              </button>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                >
                  <User className="w-6 h-6" />
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isUserDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <a
                      href="#profile"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-2"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </a>
                    <a
                      href="#login"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-2"
                    >
                      <Shield className="w-4 h-4" />
                      <span>Login</span>
                    </a>
                    <hr className="my-2 border-gray-100" />
                    <a
                      href="#settings"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-2"
                    >
                      <Tool className="w-4 h-4" />
                      <span>Settings</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* User Dropdown for Mobile */}
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                >
                  <User className="w-6 h-6" />
                </button>

                {/* Mobile Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <a
                      href="#profile"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-2"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </a>
                    <a
                      href="#login"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-2"
                    >
                      <Shield className="w-4 h-4" />
                      <span>Login</span>
                    </a>
                    <hr className="my-2 border-gray-100" />
                    <a
                      href="#settings"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-2"
                    >
                      <Tool className="w-4 h-4" />
                      <span>Settings</span>
                    </a>
                  </div>
                )}
              </div>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </a>
                <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">
                  Services
                </a>
                <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">
                  About
                </a>
                <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </a>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full">
                  Book Service
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible.home ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Home Appliances,
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Our Expertise
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional repair and maintenance services for all your home appliances. From air conditioners to
                washing machines, we've got you covered with expert technicians and guaranteed satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Service
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Book Online
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible.home ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="grid grid-cols-2 gap-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="text-center">
                          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="text-blue-600">{benefit.icon}</div>
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{benefit.title}</h3>
                          <p className="text-xs text-gray-600 mt-1">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose ApplianceCare?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are the leading home appliance service provider with years of experience and thousands of satisfied
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-110 transition-all duration-500 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-lg md:text-xl opacity-90 font-medium">Years Experience</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-lg md:text-xl opacity-90 font-medium">Happy Customers</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-lg md:text-xl opacity-90 font-medium">Emergency Service</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                6M
              </div>
              <div className="text-lg md:text-xl opacity-90 font-medium">Service Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.services ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We offer comprehensive repair and maintenance services for all your home appliances. Our expert
              technicians are trained to handle all major brands and models.
            </p>

            {/* Service Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                <Snowflake className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">Cooling</div>
                <div className="text-sm text-gray-600">AC & Coolers</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 text-center">
                <Refrigerator className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">Kitchen</div>
                <div className="text-sm text-gray-600">Fridge & More</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">Laundry</div>
                <div className="text-sm text-gray-600">Washing Machines</div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 text-center">
                <Tool className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">General</div>
                <div className="text-sm text-gray-600">All Appliances</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group border border-gray-100 ${isVisible.services ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
               
                  onClick={() => navigate(service.route)}>
                  Learn more 
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Real reviews from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                rating: 5,
                text: "Excellent AC repair service! Fixed my AC in no time and the technician was very professional.",
                location: "Mumbai",
                serviceType: "AC Repair",
              },
              {
                name: "Priya Sharma",
                rating: 5,
                text: "My washing machine was making strange noises. They diagnosed and fixed it perfectly. Highly recommend!",
                location: "Delhi",
                serviceType: "Washing Machine",
              },
              {
                name: "Amit Patel",
                rating: 5,
                text: "Refrigerator cooling issue resolved quickly. Great service and reasonable pricing.",
                location: "Bangalore",
                serviceType: "Refrigerator",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${isVisible.about ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {testimonial.serviceType}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.contact ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mb-12">
              Ready to get started? Contact us today for a free consultation and personalized appliance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${isVisible.contact ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                >
                  <div className={item.iconColor}>{item.icon}</div>
                </div>
                <div className="font-bold text-gray-900 text-xl mb-3">{item.title}</div>
                <div className="text-gray-600 text-lg">{item.content}</div>
                <div className="text-sm text-gray-500 mt-2">{item.subtext}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-16 transform transition-all duration-1000 ${isVisible.contact ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Emergency Service?</h3>
              <p className="text-gray-600 mb-6">
                Our technicians are available 24/7 for all your appliance emergencies!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Book Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <Tool className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">ApplianceCare</span>
              </div>
              <p className="text-gray-400">
                Your trusted appliance service partner for all home appliance requirements. Serving customers since
                2010.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Air Conditioning Service</li>
                <li>Refrigerator Repair</li>
                <li>Washing Machine Service</li>
                <li>General Appliance Repair</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Book Online</li>
                <li>Service Areas</li>
                <li>Contact Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>info@homeappliancecare.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ApplianceCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
