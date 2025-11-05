"use client";

import { useState } from 'react';
import { Search, Car, Bike, Truck, Zap, Battery, MapPin, Calendar, Gauge, ArrowRight, X, ChevronLeft, ChevronRight, Filter, Heart, Share2 } from 'lucide-react';

export default function ElectricVehiclesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { name: 'All', icon: Car },
    { name: 'Cars', icon: Car },
    { name: 'Bikes', icon: Bike },
    { name: 'Vans', icon: Truck },
    { name: 'Scooters', icon: Bike },
    { name: 'Trucks', icon: Truck }
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Tesla Model 3',
      category: 'Cars',
      price: 'Rs 12,500,000',
      location: 'Colombo',
      year: 2023,
      range: '568 km',
      battery: '75 kWh',
      power: '283 hp',
      description: 'The Tesla Model 3 is a premium electric sedan combining performance, safety, and efficiency. With its minimalist interior and advanced autopilot features, it delivers an unmatched driving experience.',
      features: ['Autopilot', 'Premium Sound', 'Glass Roof', 'Fast Charging', '15" Touchscreen', 'Over-the-air Updates'],
      seller: 'EV Motors Lanka',
      phone: '+94 77 123 4567',
      images: [
        'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
        'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800',
        'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
        'https://images.unsplash.com/photo-1562141961-4c5dd7098039?w=800'
      ]
    },
    {
      id: 2,
      name: 'Nissan Leaf',
      category: 'Cars',
      price: 'Rs 7,800,000',
      location: 'Kandy',
      year: 2022,
      range: '364 km',
      battery: '62 kWh',
      power: '214 hp',
      description: 'The Nissan Leaf is one of the world\'s best-selling electric cars. Perfect for daily commuting with excellent reliability and low running costs.',
      features: ['ProPILOT Assist', 'e-Pedal', 'Apple CarPlay', 'LED Headlights', 'Heated Seats', 'Around View Monitor'],
      seller: 'Green Auto Solutions',
      phone: '+94 81 234 5678',
      images: [
        'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
        'https://images.unsplash.com/photo-1583267746897-c5df0f12e5e1?w=800',
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
        'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800'
      ]
    },
    {
      id: 3,
      name: 'BMW iX Electric SUV',
      category: 'Cars',
      price: 'Rs 18,900,000',
      location: 'Galle',
      year: 2023,
      range: '630 km',
      battery: '105 kWh',
      power: '516 hp',
      description: 'Luxury meets sustainability in the BMW iX. This premium electric SUV offers exceptional range, cutting-edge technology, and the ultimate driving experience.',
      features: ['Curved Display', 'Adaptive Suspension', 'Panoramic Roof', 'Harman Kardon Sound', 'Autonomous Driving', 'Wireless Charging'],
      seller: 'Prestige EV Lanka',
      phone: '+94 91 345 6789',
      images: [
        'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
        'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=800',
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800'
      ]
    },
    {
      id: 4,
      name: 'Zero SR/F Electric Bike',
      category: 'Bikes',
      price: 'Rs 4,200,000',
      location: 'Colombo',
      year: 2023,
      range: '320 km',
      battery: '14.4 kWh',
      power: '110 hp',
      description: 'Experience the thrill of electric motorcycling with the Zero SR/F. Instant torque, silent operation, and cutting-edge technology make this the ultimate electric sportbike.',
      features: ['Cypher III+ OS', 'TFT Display', 'Bosch ABS', 'Fast Charging', 'Sport Mode', 'Mobile App Control'],
      seller: 'Electro Bikes LK',
      phone: '+94 77 456 7890',
      images: [
        'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800',
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800',
        'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800',
        'https://images.unsplash.com/photo-1599819177312-fca3651d6b1e?w=800',
        'https://images.unsplash.com/photo-1609077142403-e070a9d4e261?w=800'
      ]
    },
    {
      id: 5,
      name: 'Ather 450X Scooter',
      category: 'Scooters',
      price: 'Rs 680,000',
      location: 'Negombo',
      year: 2023,
      range: '146 km',
      battery: '3.7 kWh',
      power: '6.2 hp',
      description: 'Smart, stylish, and sustainable. The Ather 450X is India\'s most advanced electric scooter, now available in Sri Lanka. Perfect for urban commuting.',
      features: ['7" Touchscreen', 'Google Maps', 'Over-the-air Updates', 'Fast Charging', 'Cruise Control', 'Mobile App'],
      seller: 'Urban E-Mobility',
      phone: '+94 31 567 8901',
      images: [
        'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800',
        'https://images.unsplash.com/photo-1609078880878-3f9d99c08a3f?w=800',
        'https://images.unsplash.com/photo-1590148449562-2b4f36b45f88?w=800',
        'https://images.unsplash.com/photo-1583468323330-9032ad490fed?w=800',
        'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800'
      ]
    },
    {
      id: 6,
      name: 'BYD e6 Electric MPV',
      category: 'Vans',
      price: 'Rs 9,500,000',
      location: 'Kurunegala',
      year: 2022,
      range: '522 km',
      battery: '82 kWh',
      power: '122 hp',
      description: 'Spacious, efficient, and perfect for families. The BYD e6 offers exceptional range and comfort with seating for 7 passengers.',
      features: ['7-Seater', 'Touchscreen', 'Climate Control', 'Power Windows', 'Fast Charging', 'Spacious Interior'],
      seller: 'Family EV Center',
      phone: '+94 37 678 9012',
      images: [
        'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
        'https://images.unsplash.com/photo-1552683929-1f15fe5e3ab0?w=800',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
      ]
    },
    {
      id: 7,
      name: 'Rivian R1T Electric Truck',
      category: 'Trucks',
      price: 'Rs 22,000,000',
      location: 'Colombo',
      year: 2023,
      range: '505 km',
      battery: '135 kWh',
      power: '835 hp',
      description: 'The future of adventure. Rivian R1T combines the utility of a truck with electric performance and off-road capability.',
      features: ['Quad Motor AWD', 'Air Suspension', 'Gear Tunnel', 'Camp Kitchen', 'Towing 11,000 lbs', 'Wading 3ft'],
      seller: 'Adventure EV Lanka',
      phone: '+94 77 789 0123',
      images: [
        'https://images.unsplash.com/photo-1619976215249-60e163ca4a70?w=800',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
      ]
    },
    {
      id: 8,
      name: 'Hyundai Ioniq 5',
      category: 'Cars',
      price: 'Rs 11,200,000',
      location: 'Matara',
      year: 2023,
      range: '481 km',
      battery: '72.6 kWh',
      power: '302 hp',
      description: 'Award-winning design meets innovative technology. The Ioniq 5 redefines what an electric car can be with its unique retro-futuristic styling.',
      features: ['Vehicle-to-Load', 'Ultra-fast Charging', 'Augmented Reality HUD', 'Relaxation Seats', 'Bose Premium Sound', 'Smart Parking'],
      seller: 'Future Motors LK',
      phone: '+94 41 890 1234',
      images: [
        'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
        'https://images.unsplash.com/photo-1583267746897-c5df0f12e5e1?w=800'
      ]
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesCategory = selectedCategory === 'All' || vehicle.category === selectedCategory;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const nextImage = () => {
    if (selectedVehicle) {
      setCurrentImageIndex((prev) => 
        prev === selectedVehicle.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedVehicle) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedVehicle.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r shadow-lg from-[#00b151] via-[#1d58af] to-[#00b151] py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Electric Vehicles
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover the future of transportation. Zero emissions, maximum performance.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by vehicle name, type..."
                  className="w-full pl-14 pr-4 py-4 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-white/30 focus:border-white focus:outline-none text-lg text-gray-800 placeholder-gray-500 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-0 z-40 bg-gray-100/95 backdrop-blur-md  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-[#00b151] to-[#1d58af] text-white shadow-lg scale-105'
                      : 'border border-green-800 text-gray-700 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-green-800">
            {filteredVehicles.length} {selectedCategory} Available
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-gray-100 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#00b151] transition-all duration-300 hover:shadow-2xl hover:shadow-[#00b151]/20 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => toggleFavorite(vehicle.id)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(vehicle.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-700'
                      }`}
                    />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#00b151] text-white text-sm font-bold rounded-full">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
                  <p className="text-3xl font-black bg-gradient-to-r from-[#00b151] to-[#1d58af] bg-clip-text text-transparent">
                    {vehicle.price}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-gray-800">
                    <Zap className="w-4 h-4 text-[#00b151]" />
                    <span className="text-sm">{vehicle.range}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-800">
                    <Battery className="w-4 h-4 text-[#1d58af]" />
                    <span className="text-sm">{vehicle.battery}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-800">
                    <Calendar className="w-4 h-4 text-[#00b151]" />
                    <span className="text-sm">{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-800">
                    <MapPin className="w-4 h-4 text-[#1d58af]" />
                    <span className="text-sm">{vehicle.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedVehicle(vehicle);
                    setCurrentImageIndex(0);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00b151] to-[#1d58af] hover:from-[#009944] hover:to-[#1649a0] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00b151]/50"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-100 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-100 rounded-3xl shadow-2xl">
            <button
              onClick={() => setSelectedVehicle(null)}
              className="sticky top-4 right-4 float-right z-10 p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="p-8 space-y-8">
              {/* Image Gallery */}
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src={selectedVehicle.images[currentImageIndex]}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {selectedVehicle.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-[#00b151] w-8'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-4">
                {selectedVehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-[#00b151] scale-105'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedVehicle.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Vehicle Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-black text-white mb-2">
                      {selectedVehicle.name}
                    </h2>
                    <p className="text-5xl font-black bg-gradient-to-r from-[#00b151] to-[#1d58af] bg-clip-text text-transparent">
                      {selectedVehicle.price}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800 rounded-xl">
                      <div className="flex items-center space-x-2 text-[#00b151] mb-2">
                        <Zap className="w-5 h-5" />
                        <span className="font-bold">Range</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-100">{selectedVehicle.range}</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-xl">
                      <div className="flex items-center space-x-2 text-[#1d58af] mb-2">
                        <Battery className="w-5 h-5" />
                        <span className="font-bold">Battery</span>
                      </div>
                      <p className="text-2xl font-bold text-white">{selectedVehicle.battery}</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-xl">
                      <div className="flex items-center space-x-2 text-[#00b151] mb-2">
                        <Gauge className="w-5 h-5" />
                        <span className="font-bold">Power</span>
                      </div>
                      <p className="text-2xl font-bold text-white">{selectedVehicle.power}</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-xl">
                      <div className="flex items-center space-x-2 text-[#1d58af] mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-bold">Year</span>
                      </div>
                      <p className="text-2xl font-bold text-white">{selectedVehicle.year}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-[#00b151]/20 to-[#1d58af]/20 rounded-xl border border-[#00b151]/30">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Description</h3>
                    <p className="text-gray-800 leading-relaxed">{selectedVehicle.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-gray-800 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedVehicle.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-[#00b151] rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#00b151] to-[#1d58af] rounded-xl text-white">
                    <h3 className="text-xl font-bold mb-4">Seller Information</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-white/70">Dealer</p>
                        <p className="text-lg font-bold">{selectedVehicle.seller}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Location</p>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <p className="text-lg font-bold">{selectedVehicle.location}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Contact</p>
                        <p className="text-lg font-bold">{selectedVehicle.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
                      <span>Contact Seller</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-300 border-2 border-gray-700">
                      <Heart className={favorites.includes(selectedVehicle.id) ? 'fill-red-500 text-red-500' : ''} />
                      <span>{favorites.includes(selectedVehicle.id) ? 'Saved' : 'Save to Favorites'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}