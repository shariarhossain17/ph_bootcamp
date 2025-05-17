import { useMemo, useState } from "react";
import Milestone from "../../components/Milestone";
import Navbar from "../../components/Navbar";
import { useVideoNavigation } from "../../hooks/useNavigation";
import { checkIsFirstVideo, checkIsLastVideo } from "../../lib/buttonDisable";
import { courseData } from "../../lib/data";
import "./Bootcamp.css";

const Bootcamp = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [expandedMilestones, setExpandedMilestones] = useState<
    Record<string, boolean>
  >({});
  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>
  >({});

  const { handlePrevious, handleNext, currentInfo } = useVideoNavigation({
    courseData,
    activeVideo,
    setActiveVideo,
    setExpandedModules,
    setExpandedMilestones,
  });

  const isFirst = useMemo(() => {
    if (!currentInfo) return true;
    const { milestoneId, moduleId, videoIndex } = currentInfo;
    return checkIsFirstVideo(courseData, milestoneId, moduleId, videoIndex);
  }, [currentInfo]);

  const isLast = useMemo(() => {
    if (!currentInfo) return true;
    const { milestoneId, moduleId, videoIndex } = currentInfo;
    return checkIsLastVideo(courseData, milestoneId, moduleId, videoIndex);
  }, [currentInfo]);

  const toggleMilestone = (id: string) => {
    setExpandedMilestones((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleVideoClick = (youtubeId: string) => {
    setActiveVideo(youtubeId);
  };

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col md:flex-row bg-[#010127] text-white mx-auto"
        style={{ minHeight: "calc(100vh - 75px)" }}
      >
        {/* Video Section */}
        <div className="flex-1 order-1 md:order-2 flex justify-center items-center p-4 md:px-4 md:py-8 min-h-[70vh]">
          <div className="w-full md:w-full max-w-4xl">
            {activeVideo ? (
              <>
                <div
                  className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-lg"
                  style={{ height: 0 }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                    className="absolute top-0 left-0 w-full h-full"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    onClick={handlePrevious}
                    disabled={isFirst}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      isFirst
                        ? "bg-zinc-700 cursor-not-allowed"
                        : "bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isLast}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      isLast
                        ? "bg-purple-400 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700 cursor-pointer"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Select a video to start learning
                  </h2>
                  <p className="text-zinc-400">
                    Click on any video from the sidebar to begin watching
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Section */}
        <div
          className="w-full md:w-96 bg-[#151922] border-t md:border-t-0 md:border-r border-zinc-800 order-2 md:order-1 flex flex-col"
          style={{ height: "calc(100vh - 75px)" }}
        >
          {/* Updated header container for alignment */}
          <div className="border-b border-zinc-800 shrink-0">
            <div className="px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto py-4">
              <h1 className="text-xl font-bold">Course Content</h1>
            </div>
          </div>

          <div className="relative group flex-1 overflow-hidden">
            <div className="overflow-y-hidden group-hover:overflow-y-auto scroll-on-hover h-full divide-y divide-zinc-800 pr-1">
              {courseData.map((milestone) => (
                <Milestone
                  key={milestone.id}
                  milestone={milestone}
                  toggleMilestone={toggleMilestone}
                  toggleModule={toggleModule}
                  handleVideoClick={handleVideoClick}
                  expandedMilestones={expandedMilestones}
                  expandedModules={expandedModules}
                  activeVideo={activeVideo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bootcamp;
