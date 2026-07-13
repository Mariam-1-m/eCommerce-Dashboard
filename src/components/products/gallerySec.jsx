// Only omar-samir can edit this file
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Eye } from 'lucide-react';
import Loader from '../loader'
export default function ProductsGallerySec() {
  const [isLoading, setIsLoading] = useState(true);

  // Array of different product images for the gallery
  const galleryImages = [
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop", // Black BMW (Original)
    "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop", // Grey BMW M4
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop", // Dark BMW interior/detail
    "https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=2078&auto=format&fit=crop"  // Another angle/car
  ];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading screen
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-[#06080e] text-white p-8 font-sans flex flex-col items-center">
      <div className="w-full flex flex-col gap-6">
        
        <header className="bg-linear-to-r from-[#111727] to-[#1c243b] rounded-3xl p-6 pb-8 relative overflow-hidden">        
          <div className="absolute top-0 left-0 right-0 h-px bg-white/5"></div>
          
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group text-sm font-medium">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <Eye size={20} className="text-gray-300" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl tracking-wide mb-1" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: 600 }}>
                <span style={{ fontFamily: 'cursive', letterSpacing: '-1px' }}>BMW</span> car
              </h1>
              <p className="text-gray-400 text-sm font-medium">
                Product details overview
              </p>
            </div>
          </div>
        </header>
        
        {/* Main Image 1  */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 transition-opacity duration-300">
           <img 
              src={activeImage} 
              alt="BMW Car Front View" 
              className="w-full h-auto object-cover aspect-21/9"
            />
        </div>

        {/* Thumbnail Selector */}
        <div className="flex gap-4 px-2 overflow-x-auto pb-2 scrollbar-hide">
          {galleryImages.map((imgSrc, index) => (
            <button 
              key={index}
              onClick={() => setActiveImage(imgSrc)}
              className={`relative rounded-xl overflow-hidden shrink-0 transition-all duration-200 ${
                activeImage === imgSrc 
                  ? 'border-2 border-[#4176e0] p-.5 bg-[#06080e] scale-105 opacity-100' 
                  : 'border-2 border-transparent p-.5 opacity-60 hover:opacity-100'
              }`}
            >
               <img 
                  src={imgSrc} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-32 h-16 object-cover rounded-lg"
                />
            </button>
          ))}
        </div>
        
        {/* Image 2 */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 mb-8">
           <img 
              src={galleryImages[0]} 
              alt="BMW Car Front View - Secondary" 
              className="w-full h-auto object-cover aspect-21/9"
            />
        </div>

      </div>
    </div>
  ); }