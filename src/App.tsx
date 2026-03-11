/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Car, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Users, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  Award,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'about' | 'founder' | 'services' | 'target' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'founder', label: 'Founder' },
    { id: 'services', label: 'Services' },
    { id: 'target', label: 'Who We Serve' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <span className="text-2xl font-serif font-bold tracking-tighter text-stone-900">
              FIRXTLADY <span className="text-stone-500">CAB</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-stone-900 ${
                  currentPage === item.id ? 'text-stone-900 border-b-2 border-stone-900' : 'text-stone-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-stone-700 hover:bg-stone-50 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <footer className="bg-stone-900 text-stone-400 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-xl font-serif font-bold mb-4">FIRXTLADY CAB</h3>
          <p className="max-w-md mb-6">
            A private transportation service committed to delivering safe, reliable, and comfortable rides for every passenger. Ride with Class.
          </p>
          <div className="flex items-center space-x-2 text-white font-medium">
            <Phone size={18} />
            <span>0902 215 3029</span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Our Services</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Book a Ride</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Service Hours</h4>
          <p>Available 24/7</p>
          <p className="mt-2 text-sm">Reliable transportation whenever you need it.</p>
        </div>
      </div>
      <div className="border-t border-stone-800 mt-12 pt-8 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Firxtlady Cab. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Car Interior" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-6">
            Ride with <span className="italic font-normal">Comfort</span>, Safety, and <span className="italic font-normal">Class</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light leading-relaxed">
            Firxtlady Cab is a private transportation service committed to delivering safe, reliable, and comfortable rides for every passenger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-all flex items-center justify-center gap-2"
            >
              Book Your Ride Now <ChevronRight size={20} />
            </button>
            <a 
              href="tel:09022153029"
              className="border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call: 0902 215 3029
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Why Choose Firxtlady Cab</h2>
          <div className="w-20 h-1 bg-stone-900 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck className="text-stone-900" size={32} />, title: "Safe & Reliable", desc: "We prioritize safety with professional service and well-maintained vehicles." },
            { icon: <Clock className="text-stone-900" size={32} />, title: "24/7 Availability", desc: "Available early morning or late at night whenever you need dependable transport." },
            { icon: <UserCheck className="text-stone-900" size={32} />, title: "Professional Service", desc: "Transportation delivered with professionalism, respect, and courtesy." },
            { icon: <Car className="text-stone-900" size={32} />, title: "Comfortable Rides", desc: "Clean, comfortable, and well-maintained vehicles for a smooth experience." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Services Preview */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Our Services</h2>
            <p className="text-stone-600 text-lg">
              Firxtlady Cab offers flexible transportation services tailored to meet the needs of individuals and businesses.
            </p>
          </div>
          <button 
            onClick={() => setCurrentPage('services')}
            className="text-stone-900 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Services <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Private Ride Services", icon: <UserCheck size={24} /> },
            { title: "Personal Pickup & Drop-off", icon: <MapPin size={24} /> },
            { title: "Short Distance Transportation", icon: <Car size={24} /> },
          ].map((service, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img 
                src={`https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800&seed=${i}`} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="text-white mb-2">{service.icon}</div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Promise */}
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Car size={400} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Our Promise</h2>
          <p className="text-xl md:text-2xl text-stone-300 leading-relaxed mb-8">
            At Firxtlady Cab, we understand that transportation is more than just moving from one place to another. 
            It is about trust, comfort, safety, and professionalism.
          </p>
          <p className="text-2xl font-serif font-light text-white">
            Our goal is to make every journey a pleasant experience for our passengers.
          </p>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-8">About Firxtlady Cab</h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            Firxtlady Cab is a private transportation service dedicated to providing safe, reliable, and comfortable rides to passengers.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            The brand was founded on the belief that transportation services should combine professionalism, safety, and class.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Every ride with Firxtlady Cab is designed to ensure passengers feel secure, respected, and valued throughout their journey. We are committed to building a transportation experience that customers can trust and depend on.
          </p>
        </motion.div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2017" 
            alt="Transportation Service" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 bg-stone-900 text-white p-8 rounded-2xl hidden md:block">
            <p className="text-3xl font-serif italic">"Ride with Class"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-stone-50 p-12 rounded-3xl border border-stone-100">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            To provide dependable and professional transportation services while maintaining the highest level of safety, comfort, and respect for every passenger.
          </p>
        </div>
        <div className="bg-stone-900 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-stone-300 leading-relaxed">
            To grow Firxtlady Cab into a widely recognized and trusted transportation brand known for reliability, class, and excellent customer service.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Our Core Values</h2>
        <div className="w-20 h-1 bg-stone-900 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <ShieldCheck size={32} />, title: "Safety", desc: "Passenger safety is our highest priority. We ensure every ride is conducted with responsibility and care." },
          { icon: <UserCheck size={32} />, title: "Professionalism", desc: "We maintain a respectful and courteous relationship with every customer." },
          { icon: <Clock size={32} />, title: "Reliability", desc: "Customers can count on Firxtlady Cab to be available whenever transportation is needed." },
          { icon: <Star size={32} />, title: "Class", desc: "We believe transportation should be delivered with elegance, comfort, and style." },
        ].map((value, i) => (
          <div key={i} className="text-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 text-stone-900 mb-6">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{value.title}</h3>
            <p className="text-stone-600">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FounderPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976" 
              alt="Ajayi Opeoluwa Omolara" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden md:block">
            <p className="text-stone-900 font-bold text-lg">Ajayi Opeoluwa Omolara</p>
            <p className="text-stone-500">Founder & Operator</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-stone-500 font-semibold tracking-widest uppercase mb-4">Meet the Founder</h4>
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-2">Ajayi Opeoluwa Omolara</h1>
          <p className="text-xl text-stone-500 font-medium mb-8">Founder & Operator</p>
          
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
            <p>
              Firxtlady Cab was founded by Ajayi Opeoluwa Omolara, a passionate and determined female entrepreneur with a vision to redefine transportation services through professionalism and class.
            </p>
            <p>
              Driven by her commitment to quality service, she established Firxtlady Cab to provide passengers with a transportation experience built on trust, comfort, and reliability.
            </p>
            <p>
              As a woman operating in the transportation industry, she also hopes to inspire confidence among passengers—especially those who value safety, professionalism, and respect during their journeys.
            </p>
            <p>
              Her dedication to excellence continues to shape the standards and values of Firxtlady Cab.
            </p>
          </div>

          <div className="mt-12 flex gap-8">
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-stone-900">100%</p>
              <p className="text-sm text-stone-500 uppercase tracking-tighter">Commitment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-stone-900">24/7</p>
              <p className="text-sm text-stone-500 uppercase tracking-tighter">Availability</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-stone-900">Classy</p>
              <p className="text-sm text-stone-500 uppercase tracking-tighter">Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-serif font-bold text-stone-900 mb-6">Our Transportation Services</h1>
        <p className="text-lg text-stone-600">
          Firxtlady Cab provides flexible transportation services designed to meet the needs of individuals and businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Private Ride Services", desc: "Personal and comfortable rides for passengers who prefer privacy and convenience.", icon: <UserCheck size={28} /> },
          { title: "Pickup and Drop-off Services", desc: "Reliable transportation to and from homes, offices, events, and other destinations.", icon: <MapPin size={28} /> },
          { title: "Short Distance Rides", desc: "Fast and efficient city transportation for your daily errands.", icon: <Car size={28} /> },
          { title: "Long Distance Travel", desc: "Comfortable rides for journeys beyond the city limits.", icon: <MapPin size={28} /> },
          { title: "Scheduled Transportation", desc: "Plan your rides ahead of time and avoid last-minute stress.", icon: <Calendar size={28} /> },
          { title: "Car Hire", desc: "Hire a vehicle for personal, family, or corporate needs.", icon: <Car size={28} /> },
          { title: "Drivers on Standby", desc: "Professional drivers available when transportation is needed.", icon: <UserCheck size={28} /> },
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 mb-8 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900">{service.title}</h3>
            <p className="text-stone-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const TargetCustomersPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-serif font-bold text-stone-900 mb-6">Who We Serve</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Firxtlady Cab provides services for a wide range of passengers who value safety, professionalism, and comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            title: "Students", 
            desc: "Safe and reliable transportation for school and campus travel, ensuring peace of mind for both students and parents.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070",
            icon: <Users size={24} />
          },
          { 
            title: "Working Professionals", 
            desc: "Comfortable and dependable rides for daily work commutes, allowing you to focus on your day while we handle the road.",
            image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80&w=2070",
            icon: <Briefcase size={24} />
          },
          { 
            title: "Individuals Seeking Private Rides", 
            desc: "Passengers who value privacy, comfort, and security for their personal journeys across the city.",
            image: "https://images.unsplash.com/photo-1549194388-2469d59ec69c?auto=format&fit=crop&q=80&w=2070",
            icon: <UserCheck size={24} />
          },
          { 
            title: "Business Travelers", 
            desc: "Professional transport services for meetings, appointments, and corporate engagements where punctuality is key.",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071",
            icon: <Award size={24} />
          },
        ].map((target, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative h-[400px] rounded-3xl overflow-hidden group"
          >
            <img 
              src={target.image} 
              alt={target.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/60 group-hover:bg-stone-900/70 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
              <div className="mb-4">{target.icon}</div>
              <h3 className="text-3xl font-serif font-bold mb-4">{target.title}</h3>
              <p className="text-stone-200 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                {target.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-8">Book a Ride</h1>
          <p className="text-xl text-stone-600 mb-12">
            Need a safe and reliable ride? Firxtlady Cab is ready to serve you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">Phone Number</h3>
                <p className="text-2xl font-serif font-bold text-stone-900">0902 215 3029</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">Service Hours</h3>
                <p className="text-xl text-stone-600">Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-stone-50 rounded-3xl border border-stone-100">
            <h3 className="text-xl font-bold mb-6">Why Ride with Firxtlady Cab</h3>
            <ul className="space-y-4">
              {[
                "Reliable Transportation",
                "Professional Service",
                "Comfortable Vehicles",
                "24/7 Availability",
                "Trusted by Customers"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <div className="w-5 h-5 rounded-full bg-stone-900 flex items-center justify-center text-white">
                    <ChevronRight size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 rounded-3xl p-12 text-white flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Phone size={64} className="mb-8 text-stone-400" />
            <h2 className="text-4xl font-serif font-bold mb-6">Call Now to Book</h2>
            <a 
              href="tel:09022153029" 
              className="text-5xl md:text-6xl font-serif font-bold text-white hover:text-stone-300 transition-colors block mb-12"
            >
              0902 215 3029
            </a>
            <div className="space-y-4 text-xl font-light text-stone-400">
              <p>Ride with comfort.</p>
              <p>Ride with confidence.</p>
              <p className="text-white font-serif italic text-2xl mt-8">Ride with Class, Ride with Firxtlady.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'founder': return <FounderPage />;
      case 'services': return <ServicesPage />;
      case 'target': return <TargetCustomersPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
