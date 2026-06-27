'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EventGalleryProps {
  images: string[];
}

export default function EventGallery({ images }: EventGalleryProps) {
  // 1. Set the initial active image to the first image in the array
  const [activeImage, setActiveImage] = useState<string | undefined>(images[0]);

  if (images.length === 0) {
    return (
      <div className="flex h-[420px] items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(255,110,125,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(197,111,255,0.16),transparent_40%)] rounded-[18px]">
        <span className="text-sm uppercase tracking-[2px] text-white/40">No event image available</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[1.1fr_0.9fr] gap-10 max-[980px]:grid-cols-1">
      {/* LEFT COLUMN: Main Feature Image */}
      <div className="rounded-[18px] border border-white/5 bg-[#121216] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="relative h-[420px] overflow-hidden rounded-[18px] bg-[#0c0c0f] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          {activeImage && (
            <Image
              src={activeImage}
              alt="Event photo"
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 980px) 100vw, 55vw"
            />
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Thumbnail Grid */}
      <div className="rounded-[18px] border border-white/5 bg-[#15151a] p-7 self-start">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[3px] text-red-soft">Event gallery</p>
        <div className="grid grid-cols-2 gap-3">
          {images.map((src, index) => {
            const isActive = src === activeImage;
            return (
              <button
                key={index}
                onClick={() => setActiveImage(src)}
                className={`group relative h-[120px] overflow-hidden rounded-[14px] bg-[#0d0d10] focus:outline-none border-2 transition-all duration-200 ${
                  isActive ? 'border-red scale-[0.98]' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 980px) 50vw, 22vw"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}