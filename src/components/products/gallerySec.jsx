import { useState , useRef} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
export default function ProductsGallerySec({ product }) {
  // Array of different product images for the gallery
  const swiperRef = useRef();
  const galleryImages = product?.images || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  const handlePrev = () => {
    console.log(swiperRef.current);
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    console.log(swiperRef.current);
    swiperRef.current?.slideNext();
  };

  if (!galleryImages.length) return null;

  return (
    <div className="space-y-6">
      <div className="w-full flex flex-col gap-6">
        {/* Main Image 1  */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 relative border border-slate-200 dark:border-slate-800 transition-all duration-300">
          <img
            src={activeImage.url}
           alt={activeImage.public_id}
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

        {/* Thumbnail Selector */}
        <div className="flex gap-3 scrollbar-hide">
            {galleryImages.map((img, index) => (
              <button
                key={img.public_id}
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-xl border transition ${
                  activeIndex === index
                    ? "border-cyan-400 ring-2 ring-cyan-300"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.public_id}
                  className="h-16 w-30 rounded-xl object-cover"
                />
              </button>
            ))}
        </div>

        {/* Image 2 */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 relative border border-slate-200 dark:border-slate-800 transition-all duration-300">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-cyan-500 transition"          >
            <ChevronLeft size={24} />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={16}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {galleryImages.map((img) => (
              <SwiperSlide key={img.public_id}>
                <img
                  src={img.url}
                  alt={img.public_id}
                  className="w-full h-70 rounded-2xl object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>


          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-cyan-500 transition"          >
            <ChevronRight size={24} />
          </button>

        </div>
      </div>
    </div>
  );
}