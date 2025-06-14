import React, { useState } from 'react';
import { Snowflake, Wrench, Clock, Shield, Phone, CheckCircle, Star, Users, ChevronLeft, ChevronRight, Play, Pause, ArrowRight, ThermometerSun, Wind, Zap } from 'lucide-react';
import { useNavigate } from "react-router-dom";
export default function FridgeService() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTonnage, setSelectedTonnage] = useState({});
  const navigate = useNavigate();

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Regular Maintenance",
      description: "Preventive maintenance to keep your refrigerator running efficiently and extend its lifespan.",
      details: ["Coil cleaning", "Temperature calibration", "Door seal check", "Defrost system inspection"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Repair Services", 
      description: "Quick and reliable repairs for all refrigerator issues, from minor fixes to major overhauls.",
      details: ["Compressor repair", "Thermostat replacement", "Water leakage fix", "Cooling system repair"]
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Gas Refill",
      description: "Professional refrigerant refill service to restore optimal cooling performance.",
      details: ["Gas leak detection", "Refrigerant refill", "Pressure testing", "Performance check"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency support for urgent refrigerator problems.",
      details: ["Immediate response", "Emergency repairs", "Holiday service", "Critical cooling issues"]
    }
  ];

  const fridgeBrands = [
    { name: "LG", basePrice: 15000, logo: null },
    { name: "Samsung", basePrice: 18000, logo: null },
    { name: "Whirlpool", basePrice: 14500, logo: null },
    { name: "Godrej", basePrice: 12000, logo: null },
    { name: "Haier", basePrice: 13500, logo: null },
    { name: "Panasonic", basePrice: 16500, logo: null },
    { name: "Hitachi", basePrice: 22000, logo: null },
    { name: "Blue Star", basePrice: 25000, logo: null }
  ];

  const capacityMultipliers = {
    "Single Door": 1.0,
    "Double Door": 1.4,
    "Side by Side": 1.8
  };

  const getPrice = (basePrice, capacity) => {
    return Math.round(basePrice * capacityMultipliers[capacity]);
  };

  const handleCapacityChange = (brandName, capacity) => {
    setSelectedTonnage(prev => ({
      ...prev,
      [brandName]: capacity
    }));
  };

  const features = [
    { icon: <ThermometerSun className="w-6 h-6" />, title: "Temperature Control", desc: "Optimal food preservation" },
    { icon: <Wind className="w-6 h-6" />, title: "Fresh Air Circulation", desc: "Advanced cooling technology" },
    { icon: <Zap className="w-6 h-6" />, title: "Energy Efficient", desc: "Reduced electricity consumption" },
    { icon: <Shield className="w-6 h-6" />, title: "Reliable Service", desc: "Guaranteed satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="text-blue-300">Refrigerator</span> Services
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Complete refrigerator maintenance, repair and installation services for all types of refrigerators. 
                Keep your food fresh and your appliance running efficiently with our expert technicians.
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
                  <div className="text-blue-300 mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-cyan-300 mb-2">{feature.title}</h3>  
                  <p className="text-blue-100 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Refrigerator Services</h2>
          
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

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "Licensed & Insured Technicians" },
                  { icon: <Users className="w-5 h-5 text-blue-500" />, text: "15+ Years of Experience" },
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Repair & Maintenance Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Repair & Maintenance</h2>
                <p className="text-gray-600">Expert repair services for all refrigerator issues</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Single door refrigerator check-up",
                    price: "₹299",
                    duration: "1-2 hrs",
                    rating: "4.82 (104K)"
                  },
                  {
                    name: "Double door refrigerator check-up (inverter)", 
                    price: "₹399",
                    duration: "1-2 hrs",
                    rating: "4.77 (87K)"
                  },
                  {
                    name: "Double door refrigerator check-up (non-inverter)",
                    price: "₹349",
                    duration: "1-2 hrs",
                    rating: "4.78 (88K)"
                  },
                  {
                    name: "Side-by-side door refrigerator check-up",
                    price: "₹599",
                    duration: "2-3 hrs",
                    rating: "4.66 (11K)"
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102"
                  >
                    <div className="text-center">
                      <div className="w-full h-20 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-xs text-gray-500">Service Image</span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm mb-2">{service.name}</h3>
                      <div className="flex items-center justify-center mb-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                        <span className="text-xs text-gray-600">{service.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{service.duration}</p>
                      <div className="text-xl font-bold text-orange-600 mb-3">{service.price}</div>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md w-full text-sm"
                      onClick={() =>
    navigate("/book", {
      state: {
        serviceName: service.name,
        price: service.price,
        serviceType:"Refrigerator",
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

            {/* Gas Refill & Advanced Services Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Gas Refill & Advanced Services</h2>
                <p className="text-gray-600">Professional gas refill and specialized services</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Gas refill & check-up",
                    price: "₹2,500",
                    duration: "2-3 hrs",
                    rating: "4.85 (45K)",
                    popular: true
                  },
                  {
                    name: "Compressor replacement", 
                    price: "₹3,500",
                    duration: "3-4 hrs",
                    rating: "4.72 (18K)"
                  },
                  {
                    name: "Thermostat repair",
                    price: "₹899",
                    duration: "1-2 hrs",
                    rating: "4.68 (12K)"
                  },
                  {
                    name: "Water leakage repair",
                    price: "₹1,299",
                    duration: "2-3 hrs",
                    rating: "4.74 (28K)"
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-2 hover:shadow-lg transition-all duration-300 transform hover:scale-102 ${
                      service.popular ? 'border-blue-400 bg-gradient-to-r from-blue-50 to-cyan-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">Most Popular</span>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="w-full h-20 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-xs text-gray-500">Service Image</span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm mb-2">{service.name}</h3>
                      <div className="flex items-center justify-center mb-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                        <span className="text-xs text-gray-600">{service.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{service.duration}</p>
                      <div className="text-xl font-bold text-blue-600 mb-3">{service.price}</div>
                      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md w-full text-sm"
                      onClick={() =>
    navigate("/book", {
      state: {
        serviceName: service.name,
        price: service.price,
        serviceType:"Refrigerator",
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

          {/* Standard Rate Card Notice */}
          {/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16 rounded-r-lg shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800">Standard Rate Card</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  All services follow our transparent pricing structure. Additional charges may apply for parts replacement. 
                  Free diagnosis included with every service call.
                </p>
              </div>
            </div>
          </div> */}

          {/* Refrigerator Brands for Sale Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Premium Refrigerators for Sale</h2>
              <p className="text-gray-600 text-lg">Top quality refrigerators from leading brands</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {fridgeBrands.map((brand, index) => {
                const currentCapacity = selectedTonnage[brand.name] || "Single Door";
                const currentPrice = getPrice(brand.basePrice, currentCapacity);
                
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center mb-4 hover:bg-gray-300 transition-colors">
                        <span className="text-sm text-gray-500">Brand Logo</span>
                      </div>
                      
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{brand.name}</h3>
                      
                      {/* Capacity Selection */}
                      <div className="mb-4">
                        <div className="flex flex-col space-y-1 mb-2">
                          {Object.keys(capacityMultipliers).map((capacity) => (
                            <button
                              key={capacity}
                              onClick={() => handleCapacityChange(brand.name, capacity)}
                              className={`px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
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
                      
                      <div className="text-lg font-bold text-green-600 mb-2">
                        Starting from
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-4">
                        ₹{currentPrice.toLocaleString()}
                      </div>
                      
                      <div className="flex items-center justify-center mb-4">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-gray-600">4.{Math.floor(Math.random() * 4) + 6} ({Math.floor(Math.random() * 50) + 10}K)</span>
                      </div>
                      
                      <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                                   onClick={() =>
    navigate("/buy-now", {
      state: {
        serviceName:brand.name,
        price:brand.basePrice,
        serviceType: "Refrigerator Purchase",
      },
    })
  }
     
                      >
                        Buy now
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your Refrigerator Service?</h2>
            <p className="text-xl mb-8 text-blue-100">Contact us today for professional, reliable refrigerator services</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20">
                <Phone className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Call Now</h3>
                <p className="text-cyan-300 mb-4">Speak directly with our experts</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 w-full">
                  (555) 123-4567
                </button>
              </div>
               <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20">
                <Clock className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-2xl text-cyan-300 font-bold mb-2">Book Online</h3>
                <p className="text-blue-300 mb-4">Schedule at your convenience</p>
                <button className="border-2 border-white text-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105 w-full">
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
              <span className="text-xl font-bold">Refrigerator Services</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-white">Services:</span>
                <span>Repair</span>
                <span>•</span>
                <span>Maintenance</span>
                <span>•</span>
                <span>Gas Refill</span>
                <span>•</span>
                <span>Emergency</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-white">Contact:</span>
                <span>(555) 123-4567</span>
                <span>•</span>
                <span>info@fridgetech.com</span>
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
            <p>&copy; 2025 FridgeTech Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}