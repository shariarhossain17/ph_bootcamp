import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const API_KEY = "AIzaSyBp7konpZH5jUEnlbPhmoTuGt9JJ3_XzLY";
const PLAYLIST_ID = "PL3Xso75sMgAG4o1_gMBqOet2vM_M5rbw_";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [videoIds, setVideoIds] = useState<string[]>([]);
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

  const totalTestimonials = videoIds.length;

  const nextSlide = () => {
    if (isTransitioning || totalTestimonials === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalTestimonials - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isTransitioning || totalTestimonials === 0) return;
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

  useEffect(() => {
    async function fetchPlaylistVideos(pageToken = "") {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}&pageToken=${pageToken}`
        );
        const data = await response.json();

        if (data.error) {
          console.error("YouTube API error:", data.error.message);
          return;
        }

        const ids = data.items.map((item: any) => item.contentDetails.videoId);

        setVideoIds((prev) => [...prev, ...ids]);

        if (data.nextPageToken) {
          fetchPlaylistVideos(data.nextPageToken);
        }
      } catch (error) {
        console.error("Fetch playlist videos failed:", error);
      }
    }

    fetchPlaylistVideos();
  }, []);

  const handleCardClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-pink-100 via-purple-50 to-white text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#262C33]">
          স্টুডেন্টদের ড্রিম জব জয় করার জার্নি
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
              {videoIds.map((videoId, index) => (
                <div
                  key={videoId}
                  className="w-full sm:w-1/2 lg:w-1/4 px-3 transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => handleCardClick(videoId)}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    width="100%"
                    height="200"
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-md"
                  ></iframe>
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

        <a
          href="https://www.youtube.com/playlist?list=PL3Xso75sMgAG4o1_gMBqOet2vM_M5rbw_"
          className="flex justify-center mt-10 cursor-pointer"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white font-medium hover:from-purple-700 hover:to-purple-900 transition-colors">
            আরো সাকসেস দেখুন
          </button>
        </a>
      </div>
    </div>
  );
};

export default Reviews;
