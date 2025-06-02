import React, { useState } from 'react';
import { Droplets, Wrench, Clock, Shield, Phone, CheckCircle, Star, Users, ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Filter, Zap, Settings } from 'lucide-react';

export default function Waterpurifier() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedCapacity, setSelectedCapacity] = useState({});

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Repair Services",
      description: "Quick and reliable repairs for all water purifier issues and problems.",
      details: ["Pump repair", "Filter replacement", "Electrical fixes", "System diagnostics"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Regular Service", 
      description: "Preventive maintenance to keep your water purifier running efficiently.",
      details: ["Filter check-up", "Regular cleaning", "Full service", "Performance testing"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "New Installation",
      description: "Professional installation of new water purifiers with proper setup.",
      details: ["Unit installation", "Plumbing setup", "System testing", "User training"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency support for urgent water purifier problems.",
      details: ["Immediate response", "Emergency repairs", "Holiday service", "Night service"]
    }
  ];

  const purifierBrands = [
    { name: "Aquaguard", basePrice: 15000, image: null },
    { name: "Kent", basePrice: 18000, image: null },
    { name: "Livpure", basePrice: 16000, image: null },
    { name: "Blue Star", basePrice: 17000, image: null },
    { name: "Pureit", basePrice: 14000, image: null },
    { name: "Eureka Forbes", basePrice: 16500, image: null },
    { name: "Havells", basePrice: 15500, image: null },
    { name: "LG", basePrice: 19000, image: null }
  ];

  const capacityMultipliers = {
    "5L": 1.0,
    "7L": 1.2,
    "10L": 1.4
  };

  const getPrice = (basePrice, capacity) => {
    return Math.round(basePrice * capacityMultipliers[capacity]);
  };

  const handleCapacityChange = (brandName, capacity) => {
    setSelectedCapacity(prev => ({
      ...prev,
      [brandName]: capacity
    }));
  };

  const features = [
    { icon: <Droplets className="w-6 h-6" />, title: "Pure Water", desc: "Clean, safe drinking water" },
    { icon: <Filter className="w-6 h-6" />, title: "Advanced Filtration", desc: "Multi-stage purification process" },
    { icon: <Zap className="w-6 h-6" />, title: "Energy Efficient", desc: "Low power consumption" },
    { icon: <Shield className="w-6 h-6" />, title: "Reliable Service", desc: "Guaranteed satisfaction" }
  ];

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
                Complete water purifier maintenance, repair and installation services for residential and commercial units. 
                Ensure clean, safe drinking water for your family with our expert technicians.
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
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
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
                    ? 'bg-white text-blue-600 shadow-md transform scale-105' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <div className={`${activeTab === index ? 'text-blue-600' : 'text-gray-400'}`}>
                  {service.icon}
                </div>
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
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
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
                  { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "Licensed & Certified Technicians" },
                  { icon: <Users className="w-5 h-5 text-blue-500" />, text: "12+ Years of Experience" },
                  { icon: <Shield className="w-5 h-5 text-green-500" />, text: "100% Satisfaction Guarantee" },
                  { icon: <Clock className="w-5 h-5 text-red-500" />, text: "Same-Day Service Available" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Repair Services Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Repair Services</h2>
                <p className="text-gray-600">Expert repair services for all water purifier issues</p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Not working",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.80 (52K)"
                  },
                  {
                    name: "Water leakage", 
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.79 (37K)"
                  },
                  {
                    name: "Low water flow",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.80 (16K)"
                  },
                  {
                    name: "Foul taste/odour",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.81 (8K)"
                  },
                  {
                    name: "Unknown issue",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.81 (30K)"
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1">{service.name}</h3>
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-600 mb-2">{service.price}</div>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service & Maintenance Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Service & Maintenance</h2>
                <p className="text-gray-600">Regular maintenance and filter services</p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Water purifier filter check-up",
                    price: "₹299",
                    duration: "60 mins",
                    rating: "4.82 (145K)"
                  },
                  {
                    name: "Water purifier regular service", 
                    price: "₹1800",
                    duration: "60 mins",
                    rating: "4.84 (18K)"
                  },
                  {
                    name: "Water purifier full service",
                    price: "₹4000",
                    duration: "60 mins",
                    rating: "4.85 (8K)",
                    popular: true
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center justify-between p-4 rounded-xl border-2 hover:shadow-lg transition-all duration-300 transform hover:scale-102 ${
                      service.popular 
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-400' 
                        : 'bg-gradient-to-r from-gray-50 to-white border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">Most Popular</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1">{service.name}</h3>
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600 mb-2">{service.price}</div>
                      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Installation/Uninstallation Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Installation/Uninstallation</h2>
                <p className="text-gray-600">Professional installation & removal services</p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Water purifier installation",
                    price: "₹450",
                    duration: "90 mins",
                    rating: "4.83 (68K)"
                  },
                  {
                    name: "Water purifier uninstallation", 
                    price: "₹400",
                    duration: "60 mins",
                    rating: "4.88 (11K)"
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">{service.name}</h3>
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600 mb-3">{service.price}</div>
                      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md">
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
                const currentCapacity = selectedCapacity[brand.name] || "5L";
                const currentPrice = getPrice(brand.basePrice, currentCapacity);
                
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
                                  ? 'bg-green-500 text-white shadow-md'
                                  : 'bg-gray-200 text-gray-600 hover:bg-green-100'
                              }`}
                            >
                              {capacity}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-2xl font-bold text-green-600 mb-4">
                        ₹{currentPrice.toLocaleString()}
                      </div>
                      
                      <div className="flex items-center justify-center mb-4">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-gray-600">4.{Math.floor(Math.random() * 4) + 6} ({Math.floor(Math.random() * 50) + 10}K)</span>
                      </div>
                      
                      <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cyan-600 opacity-90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120, 200, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your Water Purifier Service?</h2>
            <p className="text-xl mb-8 text-cyan-100">Contact us today for professional, reliable water purifier services</p>
            
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
              <span className="text-xl font-bold">PureWater Services</span>
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
            <p>&copy; 2025 PureWater Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}