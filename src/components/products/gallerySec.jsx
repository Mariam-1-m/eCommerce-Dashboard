import { useState } from "react";

export default function ProductsGallerySec({ product }) {
  // Array of different product images for the gallery
  const galleryImages = product?.images;
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

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
              onClick={() => setActiveImage(img)}
              className={`relative overflow-hidden rounded-xl border transition-all duration-300
                ${
                  activeImage.url === img.url
                    ? "border-cyan-300 ring-2 ring-cyan-300/20 scale-105"
                    : "border-slate-200 dark:border-slate-700 hover:border-cyan-300/50"
                }
              `}
            >
              <img
                src={img.url}
                alt={`Thumbnail ${index + 1}`}
                className="h-16 w-28 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Image 2 */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 relative border border-slate-200 dark:border-slate-800 mb-8">
          <img
            src={activeImage.url}
            alt={activeImage.public_id}
            className="w-full h-auto object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  );
}