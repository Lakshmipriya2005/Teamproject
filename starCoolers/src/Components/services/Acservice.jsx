
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {
  Snowflake,
  Wrench,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  ThermometerSun,
  Wind,
  Zap,
} from "lucide-react"

export default function ACServicePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [selectedTonnage, setSelectedTonnage] = useState({})
  const navigate = useNavigate()

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Regular Maintenance",
      description: "Preventive maintenance to keep your AC running efficiently and extend its lifespan.",
      details: ["Filter replacement", "Coil cleaning", "Refrigerant check", "System diagnostics"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Repair Services",
      description: "Quick and reliable repairs for all AC issues, from minor fixes to major overhauls.",
      details: ["Compressor repair", "Electrical fixes", "Thermostat repair", "Leak detection"],
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "New Installation",
      description: "Professional installation of new AC units with proper sizing and setup.",
      details: ["Unit sizing", "Professional setup", "Ductwork install", "Testing & calibration"],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency support for urgent AC problems.",
      details: ["Immediate response", "Emergency repairs", "Holiday service", "Night service"],
    },
  ]

  const acBrands = [
    { name: "LG", basePrice: 35000, rating: "4.85", reviews: "25K" },
    { name: "Daikin", basePrice: 42000, rating: "4.92", reviews: "18K" },
    { name: "Samsung", basePrice: 38000, rating: "4.78", reviews: "32K" },
    { name: "Blue Star", basePrice: 40000, rating: "4.81", reviews: "14K" },
    { name: "Voltas", basePrice: 32000, rating: "4.79", reviews: "22K" },
    { name: "Haier", basePrice: 34000, rating: "4.75", reviews: "16K" },
    { name: "Panasonic", basePrice: 39000, rating: "4.82", reviews: "19K" },
    { name: "Godrej", basePrice: 31000, rating: "4.73", reviews: "12K" },
  ]

  const serviceCards = [
    {
      title: "AC less/no cooling repair",
      price: "₹299",
      duration: "1-2 hrs",
      rating: "4.85",
      reviews: "25K",
    },
    {
      title: "AC power issue repair",
      price: "₹299",
      duration: "1-2 hrs",
      rating: "4.78",
      reviews: "18K",
    },
    {
      title: "AC noise/smell repair",
      price: "₹499",
      duration: "1-3 hrs",
      rating: "4.72",
      reviews: "12K",
    },
    {
      title: "AC water leakage repair",
      price: "₹899",
      duration: "2-3 hrs",
      rating: "4.88",
      reviews: "30K",
    },
  ]

  const tonnageMultipliers = {
    "1 ton": 1.0,
    "1.5 ton": 1.3,
    "2 ton": 1.6,
  }

  const getPrice = (basePrice, tonnage) => {
    return Math.round(basePrice * tonnageMultipliers[tonnage])
  }

  const handleTonnageChange = (brandName, tonnage) => {
    setSelectedTonnage((prev) => ({
      ...prev,
      [brandName]: tonnage,
    }))
  }

  const features = [
    { icon: <ThermometerSun className="w-6 h-6" />, title: "Temperature Control", desc: "Precise climate management" },
    { icon: <Wind className="w-6 h-6" />, title: "Air Quality", desc: "Clean, filtered air circulation" },
    { icon: <Zap className="w-6 h-6" />, title: "Energy Efficient", desc: "Reduced electricity bills" },
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
                Professional <span className="text-cyan-300">Air Conditioning</span> Services
              </h1>
              <p className="text-xl mb-8 text-cyan-100 leading-relaxed">
                Complete AC maintenance, repair and installation services for residential and commercial units. Keep
                your space cool and comfortable year-round with our expert technicians.
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
          <h2 className="text-4xl font-bold text-center mb-16">Our AC Services</h2>

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
                  { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "Licensed & Insured Technicians" },
                  { icon: <Users className="w-5 h-5 text-blue-500" />, text: "15+ Years of Experience" },
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

      {/* Service Cards Section */}
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}

      {/* Maintenance & Service Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Maintenance & Service</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AC filter check-up",
                price: "₹299",
                duration: "60 mins",
                rating: "4.82",
                reviews: "145K",
              },
              {
                title: "AC regular service",
                price: "₹1800",
                duration: "60 mins",
                rating: "4.84",
                reviews: "18K",
              },
              {
                title: "AC full service",
                price: "₹4000",
                duration: "60 mins",
                rating: "4.85",
                reviews: "8K",
                popular: true,
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  card.popular ? "ring-2 ring-blue-400" : ""
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}
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
                    <span className="text-xl font-bold text-blue-600">{card.price}</span>
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
onClick={() =>
    navigate("/book", {
      state: {
        serviceName: card.title,
        price: card.price,
      },
    })
  }

>
                    
                    
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Service Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Repair & Gas Refill Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Repair & Gas Refill</h2>
                <p className="text-gray-600">Expert repair services for all AC issues</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "AC less/no cooling repair",
                    price: "₹299",
                    duration: "1-2 hrs",
                    rating: "4.85 (25K)",
                  },
                  {
                    name: "AC power issue repair",
                    price: "₹299",
                    duration: "1-2 hrs",
                    rating: "4.78 (18K)",
                  },
                  {
                    name: "AC noise/smell repair",
                    price: "₹499",
                    duration: "1-3 hrs",
                    rating: "4.72 (12K)",
                  },
                  {
                    name: "AC water leakage repair",
                    price: "₹899",
                    duration: "2-3 hrs",
                    rating: "4.88 (30K)",
                  },
                  {
                    name: "Gas refill & check-up",
                    price: "₹2700",
                    duration: "2-4 hrs",
                    rating: "4.92 (45K)",
                    popular: true,
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102 ${
                      service.popular ? "bg-gradient-to-r from-orange-50 to-red-50 border-orange-400" : ""
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
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
                          <span className="text-sm text-gray-600">{service.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-600 mb-2">{service.price}</div>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md text-sm"
                      onClick={() =>
    navigate("/book", {
      state: {
        serviceName: service.name,
        price: service.price,
      },
    })
  }
 
                      
                      
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation/Uninstallation Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Installation/Uninstallation</h2>
                <p className="text-gray-600">Professional installation & removal services</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Split AC installation",
                    price: "₹1699",
                    duration: "2-3 hrs",
                    rating: "4.73 (102K)",
                  },
                  {
                    name: "Window AC installation",
                    price: "₹1099",
                    duration: "2-3 hrs",
                    rating: "4.81 (14K)",
                  },
                  {
                    name: "Split AC uninstallation",
                    price: "₹899",
                    duration: "1-2 hrs",
                    rating: "4.65 (8K)",
                  },
                  {
                    name: "Window AC uninstallation",
                    price: "₹699",
                    duration: "1-2 hrs",
                    rating: "4.58 (5K)",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500">Service Image</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{service.name}</h3>
                        <div className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm text-gray-600">{service.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600 mb-2">{service.price}</div>
                      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md text-sm"
                     onClick={() =>
    navigate("/book", {
      state: {
        serviceName: service.name,
        price: service.price,
      },
    })
  }
>
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AC Brands for Sale Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">AC Units for Sale</h2>
              <p className="text-gray-600 text-lg">Premium air conditioners from top brands</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {acBrands.map((brand, index) => {
                const currentTonnage = selectedTonnage[brand.name] || "1 ton"
                const currentPrice = getPrice(brand.basePrice, currentTonnage)

                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center mb-4 hover:bg-gray-300 transition-colors">
                        <span className="text-sm text-gray-500">AC Image</span>
                      </div>

                      <h3 className="font-bold text-xl text-gray-800 mb-2">{brand.name}</h3>

                      {/* Tonnage Selection */}
                      <div className="mb-4">
                        <div className="flex justify-center space-x-1 mb-2">
                          {Object.keys(tonnageMultipliers).map((tonnage) => (
                            <button
                              key={tonnage}
                              onClick={() => handleTonnageChange(brand.name, tonnage)}
                              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                                currentTonnage === tonnage
                                  ? "bg-green-500 text-white shadow-md"
                                  : "bg-gray-200 text-gray-600 hover:bg-green-100"
                              }`}
                            >
                              {tonnage}
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

                      <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                      onClick={() =>
    navigate("/buy-now", {
      state: {
        serviceName:brand.name,
        price:brand.basePrice,
      },
    })
  }
                      
                      >
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
            <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your AC Service?</h2>
            <p className="text-xl mb-8 text-cyan-100">Contact us today for professional, reliable AC services</p>

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
                <span>AC Repair</span>
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
                <span>info@cooltech.com</span>
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
