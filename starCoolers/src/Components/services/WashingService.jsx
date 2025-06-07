import { useState } from "react"
import {
  Wrench,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  Droplets,
  Zap,
  RotateCcw,
  Settings2,
} from "lucide-react"
import { useNavigate } from "react-router-dom";
export default function WashingService() {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Regular Maintenance",
      description: "Preventive maintenance to keep your washing machine running efficiently and extend its lifespan.",
      details: ["Filter cleaning", "Drum inspection", "Water level check", "System diagnostics"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Repair Services",
      description: "Quick and reliable repairs for all washing machine issues, from minor fixes to major overhauls.",
      details: ["Motor repair", "Electrical fixes", "Control panel repair", "Leak detection"],
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "New Installation",
      description: "Professional installation of new washing machines with proper setup and testing.",
      details: ["Unit positioning", "Water connection", "Drainage setup", "Testing & calibration"],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency support for urgent washing machine problems.",
      details: ["Immediate response", "Emergency repairs", "Holiday service", "Night service"],
    },
  ]

  const features = [
    { icon: <Droplets className="w-6 h-6" />, title: "Water Efficiency", desc: "Optimal water usage control" },
    { icon: <RotateCcw className="w-6 h-6" />, title: "Gentle Washing", desc: "Fabric care technology" },
    { icon: <Zap className="w-6 h-6" />, title: "Energy Efficient", desc: "Reduced electricity bills" },
    { icon: <Shield className="w-6 h-6" />, title: "Reliable Service", desc: "Guaranteed satisfaction" },
  ]
  // Added new state for product tabs
const [productTab, setProductTab] = useState('refrigerators')



const washingMachineBrands = [
  {
    brand: "LG",
    types: ["Top Load", "Front Load", "Semi-Automatic"],
    prices: {
      "Top Load": "₹22,000",
      "Front Load": "₹26,000",
      "Semi-Automatic": "₹18,000"
    },
    activeType: "Top Load",
    rating: "4.5",
    reviews: "42K",
  },
  {
    brand: "Samsung",
    types: ["Top Load", "Front Load", "Semi-Automatic"],
    prices: {
      "Top Load": "₹25,000",
      "Front Load": "₹29,000",
      "Semi-Automatic": "₹21,000"
    },
    activeType: "Top Load",
    rating: "4.4",
    reviews: "35K",
  },
  {
    brand: "Whirlpool",
    types: ["Top Load", "Front Load", "Semi-Automatic"],
    prices: {
      "Top Load": "₹20,500",
      "Front Load": "₹24,500",
      "Semi-Automatic": "₹17,500"
    },
    activeType: "Top Load",
    rating: "4.6",
    reviews: "28K",
  },
  {
    brand: "IFB",
    types: ["Top Load", "Front Load", "Semi-Automatic"],
    prices: {
      "Top Load": "₹26,000",
      "Front Load": "₹28,000",
      "Semi-Automatic": "₹22,000"
    },
    activeType: "Front Load",
    rating: "4.7",
    reviews: "22K",
  },
];


  const machineTypes = [
    {
      title: "Automatic top load machine check-up",
      price: "₹299",
      duration: "60 mins",
      rating: "4.80",
      reviews: "319K",
    },
    {
      title: "Automatic front load machine check-up",
      price: "₹299",
      duration: "60 mins",
      rating: "4.78",
      reviews: "144K",
    },
    {
      title: "Semi-automatic machine check-up",
      price: "₹299",
      duration: "60 mins",
      rating: "4.79",
      reviews: "80K",
    },
  ]

  const commonIssues = [
    {
      title: "Unknown issue",
      price: "₹99",
      rating: "4.81",
      reviews: "155K",
      duration: "1-2 hrs",
    },
    {
      title: "Not spinning/washing",
      price: "₹99",
      rating: "4.81",
      reviews: "69K",
      duration: "1-2 hrs",
    },
    {
      title: "Draining issue",
      price: "₹99",
      rating: "4.80",
      reviews: "33K",
      duration: "1-2 hrs",
    },
    {
      title: "Error in display",
      price: "₹99",
      rating: "4.81",
      reviews: "28K",
      duration: "1-2 hrs",
    },
    {
      title: "Noise issue",
      price: "₹99",
      rating: "4.76",
      reviews: "17K",
      duration: "1-2 hrs",
    },
    {
      title: "Power issue",
      price: "₹99",
      rating: "4.80",
      reviews: "17K",
      duration: "1-2 hrs",
    },
  ]

  const installationServices = [
    {
      title: "Washing machine installation",
      price: "₹599",
      rating: "4.85",
      reviews: "33K",
      duration: "1-2 hrs",
    },
    {
      title: "Washing machine uninstallation",
      price: "₹399",
      rating: "4.82",
      reviews: "15K",
      duration: "1 hr",
    },
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
                Professional <span className="text-cyan-300">Washing Machine</span> Services
              </h1>
              <p className="text-xl mb-8 text-cyan-100 leading-relaxed">
                Complete washing machine maintenance, repair and installation services for all types of machines. Keep
                your laundry routine smooth and efficient with our expert technicians.
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
          <h2 className="text-4xl font-bold text-center mb-16">Our Washing Machine Services</h2>

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

      {/* Machine Type Check-ups Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Machine Check-up Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {machineTypes.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-gray-500">Machine Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{machine.title}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {machine.rating} ({machine.reviews})
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{machine.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">{machine.price}</span>
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                    onClick={() =>
    navigate("/book", {
      state: {
        serviceName: machine.title,
        price: machine.price,
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
            {/* Common Issues Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Common Issues Repair</h2>
                <p className="text-gray-600">Expert repair services for all washing machine problems</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {commonIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500">Issue Image</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{issue.title}</h3>
                        <div className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm text-gray-600">{issue.rating} ({issue.reviews})</span>
                        </div>
                        <p className="text-sm text-gray-500">{issue.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-600 mb-2">{issue.price}</div>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md text-sm"
                      onClick={() =>
    navigate("/book", {
      state: {
        serviceName: issue.title,
        price: issue.price,
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
                  <Settings2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Installation & Uninstallation</h2>
                <p className="text-gray-600">Professional installation & removal services</p>
              </div>

              <div className="space-y-6">
                {installationServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500">Service Image</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
                        <div className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm text-gray-600">{service.rating} ({service.reviews})</span>
                        </div>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600 mb-3">{service.price}</div>
                      <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                      onClick={() =>
    navigate("/book", {
      state: {
        serviceName: service.title,
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
        </div>
      </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Premium Washing Machines for Sale</h2>
          <p className="text-xl text-gray-600">Top quality appliances from leading brands</p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {washingMachineBrands.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                index === 3 ? 'border-green-400 ring-2 ring-green-200' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="relative">
                <div className="w-full h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                  <span className="text-sm text-gray-500">Brand Logo</span>
                </div>
                {index === 3 && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-4">{product.brand}</h3>

                {/* Product Type Buttons */}
                <div className="space-y-2 mb-6">
                  {product.types.map((type, typeIndex) => (
                    <button
                      key={typeIndex}
                      onClick={() => handleTypeChange(index, type)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                        type === product.activeType
                          ? "bg-green-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <p className="text-green-600 font-semibold mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-green-600">
                    {product.prices[product.activeType]}
                  </p>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                </div>

                <button
  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md"
  onClick={() =>
    navigate("/buy-now", {
      state: {
        serviceName: `${product.brand} (${product.activeType})`,
        price: product.prices[product.activeType], // 👈 this fetches the exact price
      },
    })
  }
>
  Buy Now
</button>

              </div>
            </div>
          ))}
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
            <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your Washing Machine Service?</h2>
            <p className="text-xl mb-8 text-cyan-100">Contact us today for professional, reliable washing machine services</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20">
                <Phone className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-2xl text-cyan-300 font-bold mb-2">Call Now</h3>
                <p className="text-cyan-300 mb-4">Speak directly with our experts</p>
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
                <span>WM Repair</span>
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
                <span>info@starcoolers.com</span>
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