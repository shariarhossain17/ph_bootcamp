import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "../lib/data";
import { cn } from "../lib/utils";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalTestimonials = testimonials.length;

  // Dynamically set how many testimonials to show based on screen width
  useEffect(() => {
    const updateVisibleTestimonials = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleTestimonials(1);
      } else if (width < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(4);
      }
    };

    updateVisibleTestimonials();
    window.addEventListener("resize", updateVisibleTestimonials);
    return () =>
      window.removeEventListener("resize", updateVisibleTestimonials);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalTestimonials - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - visibleTestimonials : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleCardClick = (youtubeUrl: string) => {
    window.open(youtubeUrl, "_blank");
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-pink-100 via-purple-50 to-white text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#262C33]">
          আমাদের সফলতার গল্প
        </h2>

        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(100 / visibleTestimonials) * totalTestimonials}%`,
                transform: `translateX(-${
                  (100 / totalTestimonials) * currentIndex
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full sm:w-1/2 lg:w-1/4 px-3 transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => handleCardClick(testimonial.youtubeUrl)}
                >
                  <div className="bg-gradient-to-b from-black/80 to-purple-900/80 rounded-lg p-6 h-full flex flex-col">
                    <div className="mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">"</span>
                      <div className="flex ml-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-4 h-4",
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-400"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm mb-4">{testimonial.quote}</p>
                    <div className="mt-auto flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-gray-300">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white font-medium hover:from-purple-700 hover:to-purple-900 transition-colors">
            আরো সকসেস দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
