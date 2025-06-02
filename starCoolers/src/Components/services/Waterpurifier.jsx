

import { useState } from "react"
import {
  Droplets,
  Wrench,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  Filter,
  Zap,
  Settings,
} from "lucide-react"

export default function WaterPurifierServicePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [selectedCapacity, setSelectedCapacity] = useState({})

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Repair Services",
      description: "Quick and reliable repairs for all water purifier issues and problems.",
      details: ["Pump repair", "Filter replacement", "Electrical fixes", "System diagnostics"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Regular Service",
      description: "Preventive maintenance to keep your water purifier running efficiently.",
      details: ["Filter check-up", "Regular cleaning", "Full service", "Performance testing"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "New Installation",
      description: "Professional installation of new water purifiers with proper setup.",
      details: ["Unit installation", "Plumbing setup", "System testing", "User training"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency support for urgent water purifier problems.",
      details: ["Immediate response", "Emergency repairs", "Holiday service", "Night service"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const purifierBrands = [
    {
      name: "Aquaguard",
      basePrice: 15000,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.85",
      reviews: "25K",
    },
    {
      name: "Kent",
      basePrice: 18000,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.78",
      reviews: "18K",
    },
    {
      name: "Livpure",
      basePrice: 16000,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.73",
      reviews: "12K",
    },
    {
      name: "Blue Star",
      basePrice: 17000,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.81",
      reviews: "14K",
    },
    {
      name: "Pureit",
      basePrice: 14000,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.79",
      reviews: "22K",
    },
    {
      name: "Eureka Forbes",
      basePrice: 16500,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.82",
      reviews: "19K",
    },
    {
      name: "Havells",
      basePrice: 15500,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.75",
      reviews: "16K",
    },
    {
      name: "LG",
      basePrice: 19000,
      image: "/placeholder.svg?height=200&width=200",
      rating: "4.88",
      reviews: "21K",
    },
  ]

  const serviceCards = [
    {
      title: "Water purifier not working",
      price: "₹299",
      duration: "60 mins",
      rating: "4.80",
      reviews: "52K",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      title: "Water leakage",
      price: "₹299",
      duration: "60 mins",
      rating: "4.79",
      reviews: "37K",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      title: "Low water flow",
      price: "₹299",
      duration: "60 mins",
      rating: "4.80",
      reviews: "16K",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      title: "Foul taste/odour",
      price: "₹299",
      duration: "60 mins",
      rating: "4.81",
      reviews: "8K",
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const capacityMultipliers = {
    "5L": 1.0,
    "7L": 1.2,
    "10L": 1.4,
  }

  const getPrice = (basePrice, capacity) => {
    return Math.round(basePrice * capacityMultipliers[capacity])
  }

  const handleCapacityChange = (brandName, capacity) => {
    setSelectedCapacity((prev) => ({
      ...prev,
      [brandName]: capacity,
    }))
  }

  const features = [
    { icon: <Droplets className="w-6 h-6" />, title: "Pure Water", desc: "Clean, safe drinking water" },
    { icon: <Filter className="w-6 h-6" />, title: "Advanced Filtration", desc: "Multi-stage purification process" },
    { icon: <Zap className="w-6 h-6" />, title: "Energy Efficient", desc: "Low power consumption" },
    { icon: <Shield className="w-6 h-6" />, title: "Reliable Service", desc: "Guaranteed satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-cyan-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="text-cyan-300">Water Purifier</span> Services
              </h1>
              <p className="text-xl mb-8 text-cyan-100 leading-relaxed">
                Complete water purifier maintenance, repair and installation services for residential and commercial
                units. Ensure clean, safe drinking water for your family with our expert technicians.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
                  <span>Schedule Service</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  Get Free Estimate
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-cyan-300 mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-cyan-300 mb-2">{feature.title}</h3>
                  <p className="text-cyan-300 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Water Purifier Services</h2>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-xl p-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === index
                    ? "bg-white text-blue-600 shadow-md transform scale-105"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <div className={`${activeTab === index ? "text-blue-600" : "text-gray-400"}`}>{service.icon}</div>
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {services[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{services[activeTab].title}</h3>
                  <p className="text-gray-600 text-lg">{services[activeTab].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {services[activeTab].details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Service Image */}
              {/* <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-sm text-gray-500">Service Image</span>
              </div> */}
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "Licensed & Certified Technicians" },
                  { icon: <Users className="w-5 h-5 text-blue-500" />, text: "12+ Years of Experience" },
                  { icon: <Shield className="w-5 h-5 text-green-500" />, text: "100% Satisfaction Guarantee" },
                  { icon: <Clock className="w-5 h-5 text-red-500" />, text: "Same-Day Service Available" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  >
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section - Similar to the AC service cards in the image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Repair Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-gray-500">Service Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {card.rating} ({card.reviews})
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{card.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-600">{card.price}</span>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Service Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Maintenance & Service</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Water purifier filter check-up",
                price: "₹299",
                duration: "60 mins",
                rating: "4.82",
                reviews: "145K",
              },
              {
                title: "Water purifier regular service",
                price: "₹1800",
                duration: "60 mins",
                rating: "4.84",
                reviews: "18K",
              },
              {
                title: "Water purifier full service",
                price: "₹4000",
                duration: "60 mins",
                rating: "4.85",
                reviews: "8K",
                popular: true,
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                  card.popular ? "border-blue-400" : "border-gray-200"
                }`}
              >
                {card.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-sm text-gray-500">Service Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{card.title}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {card.rating} ({card.reviews})
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{card.duration}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{card.price}</span>
                  </div>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 w-full">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing Section - Styled like the image */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Repair & Filter Replacement Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Repair & Filter Replacement</h2>
                <p className="text-gray-600 text-center">Expert repair services for all water purifier issues</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Water purifier not working",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.85",
                    reviews: "25K",
                  },
                  {
                    name: "Water leakage repair",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.78",
                    reviews: "18K",
                  },
                  {
                    name: "Low water flow repair",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.72",
                    reviews: "12K",
                  },
                  {
                    name: "Foul taste/odour repair",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.88",
                    reviews: "30K",
                  },
                  {
                    name: "Filter replacement",
                    price: "₹1200",
                    duration: "30 mins",
                    rating: "4.92",
                    reviews: "45K",
                    popular: true,
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-between p-4 rounded-xl border hover:shadow-md transition-all duration-300 ${
                      service.popular ? "border-orange-400 bg-orange-50" : "border-gray-200 bg-white"
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500">Service Image</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{service.name}</h3>
                        <div className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm text-gray-600">
                            {service.rating} ({service.reviews})
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-600 mb-2">{service.price}</div>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation/Uninstallation Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Installation/Uninstallation</h2>
                <p className="text-gray-600 text-center">Professional installation & removal services</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "RO purifier installation",
                    price: "₹699",
                    duration: "90 mins",
                    rating: "4.73",
                    reviews: "102K",
                  },
                  {
                    name: "UV purifier installation",
                    price: "₹599",
                    duration: "60 mins",
                    rating: "4.81",
                    reviews: "14K",
                  },
                  {
                    name: "RO purifier uninstallation",
                    price: "₹399",
                    duration: "60 mins",
                    rating: "4.65",
                    reviews: "8K",
                  },
                  {
                    name: "UV purifier uninstallation",
                    price: "₹299",
                    duration: "45 mins",
                    rating: "4.58",
                    reviews: "5K",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500">Service Image</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{service.name}</h3>
                        <div className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm text-gray-600">
                            {service.rating} ({service.reviews})
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600 mb-2">{service.price}</div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Water Purifier Brands for Sale Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Water Purifiers for Sale</h2>
              <p className="text-gray-600 text-lg">Premium water purifiers from top brands</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {purifierBrands.map((brand, index) => {
                const currentCapacity = selectedCapacity[brand.name] || "5L"
                const currentPrice = getPrice(brand.basePrice, currentCapacity)

                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center mb-4 hover:bg-gray-300 transition-colors">
                        <span className="text-sm text-gray-500">Purifier Image</span>
                      </div>

                      <h3 className="font-bold text-xl text-gray-800 mb-2">{brand.name}</h3>

                      {/* Capacity Selection */}
                      <div className="mb-4">
                        <div className="flex justify-center space-x-1 mb-2">
                          {Object.keys(capacityMultipliers).map((capacity) => (
                            <button
                              key={capacity}
                              onClick={() => handleCapacityChange(brand.name, capacity)}
                              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                                currentCapacity === capacity
                                  ? "bg-green-500 text-white shadow-md"
                                  : "bg-gray-200 text-gray-600 hover:bg-green-100"
                              }`}
                            >
                              {capacity}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="text-2xl font-bold text-green-600 mb-4">₹{currentPrice.toLocaleString()}</div>

                      <div className="flex items-center justify-center mb-4">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-gray-600">
                          {brand.rating} ({brand.reviews})
                        </span>
                      </div>

                      <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
                        Buy Now
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cyan-600 opacity-90"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(120, 200, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your Water Purifier Service?</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Contact us today for professional, reliable water purifier services
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20">
                <Phone className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-2xl text-cyan-300 font-bold mb-2">Call Now</h3>
                <p className="text-cyan-300  mb-4">Speak directly with our experts</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 w-full">
                  (555) 123-4567
                </button>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20">
                <Clock className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-2xl text-cyan-300 font-bold mb-2">Book Online</h3>
                <p className="text-cyan-300 mb-4">Schedule at your convenience</p>
                <button className="border-2 border-white text-cyan-300 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 w-full">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold">Star Coolers</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-white">Services:</span>
                <span>Repair</span>
                <span>•</span>
                <span>Installation</span>
                <span>•</span>
                <span>Maintenance</span>
                <span>•</span>
                <span>Emergency</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-semibold text-white">Contact:</span>
                <span>(555) 123-4567</span>
                <span>•</span>
                <span>info@purewater.com</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-semibold text-white">Areas:</span>
                <span>Downtown</span>
                <span>•</span>
                <span>Suburbs</span>
                <span>•</span>
                <span>East Side</span>
                <span>•</span>
                <span>West Side</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 Star Coolers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
