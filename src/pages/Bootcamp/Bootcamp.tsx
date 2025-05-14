import { useState } from "react";
import Milestone from "../../components/Milestone";
import Navbar from "../../components/Navbar";
import { courseData } from "../../lib/data";

const Bootcamp = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const [expandedMilestones, setExpandedMilestones] = useState<
    Record<string, boolean>
  >({
    "milestone-1": true,
  });

  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>
  >({
    "module-1-1": true,
  });

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

  const findCurrentVideoInfo = () => {
    for (const milestone of courseData) {
      for (const module of milestone.modules) {
        const videoIndex = module.videos.findIndex(
          (video) => video.youtubeId === activeVideo
        );
        if (videoIndex !== -1) {
          return {
            milestoneId: milestone.id,
            moduleId: module.id,
            videoIndex,
            module,
            videos: module.videos,
          };
        }
      }
    }
    return null;
  };

  const handlePrevious = () => {
    const currentInfo = findCurrentVideoInfo();
    if (!currentInfo) return;

    const { videoIndex, module, moduleId, milestoneId } = currentInfo;

    if (videoIndex > 0) {
      setActiveVideo(module.videos[videoIndex - 1].youtubeId);
      return;
    }

    const milestoneIndex = courseData.findIndex((m) => m.id === milestoneId);
    const moduleIndex = courseData[milestoneIndex].modules.findIndex(
      (m) => m.id === moduleId
    );

    if (moduleIndex > 0) {
      const prevModule = courseData[milestoneIndex].modules[moduleIndex - 1];
      const lastVideo = prevModule.videos[prevModule.videos.length - 1];
      setActiveVideo(lastVideo.youtubeId);
      setExpandedModules((prev) => ({ ...prev, [prevModule.id]: true }));
      return;
    }

    if (milestoneIndex > 0) {
      const prevMilestone = courseData[milestoneIndex - 1];
      const lastModule =
        prevMilestone.modules[prevMilestone.modules.length - 1];
      const lastVideo = lastModule.videos[lastModule.videos.length - 1];
      setActiveVideo(lastVideo.youtubeId);
      setExpandedMilestones((prev) => ({ ...prev, [prevMilestone.id]: true }));
      setExpandedModules((prev) => ({ ...prev, [lastModule.id]: true }));
    }
  };

  const handleNext = () => {
    const currentInfo = findCurrentVideoInfo();
    if (!currentInfo) return;

    const { videoIndex, module, moduleId, milestoneId } = currentInfo;

    if (videoIndex < module.videos.length - 1) {
      setActiveVideo(module.videos[videoIndex + 1].youtubeId);
      return;
    }

    const milestoneIndex = courseData.findIndex((m) => m.id === milestoneId);
    const moduleIndex = courseData[milestoneIndex].modules.findIndex(
      (m) => m.id === moduleId
    );

    if (moduleIndex < courseData[milestoneIndex].modules.length - 1) {
      const nextModule = courseData[milestoneIndex].modules[moduleIndex + 1];
      const firstVideo = nextModule.videos[0];
      setActiveVideo(firstVideo.youtubeId);
      setExpandedModules((prev) => ({ ...prev, [nextModule.id]: true }));
      return;
    }

    if (milestoneIndex < courseData.length - 1) {
      const nextMilestone = courseData[milestoneIndex + 1];
      const firstModule = nextMilestone.modules[0];
      const firstVideo = firstModule.videos[0];
      setActiveVideo(firstVideo.youtubeId);
      setExpandedMilestones((prev) => ({ ...prev, [nextMilestone.id]: true }));
      setExpandedModules((prev) => ({ ...prev, [firstModule.id]: true }));
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row min-h-screen bg-zinc-950 text-white">
        <div className="w-full md:w-96 bg-zinc-900 overflow-y-auto border-r border-zinc-800">
          <div className="p-4 border-b border-zinc-800">
            <h1 className="text-xl font-bold">Course Content</h1>
          </div>
          <div className="divide-y divide-zinc-800">
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

        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {activeVideo ? (
            <div className="w-full">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  className="absolute top-0 left-0 w-full h-full"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePrevious}
                  className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
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
    </>
  );
};

export default Bootcamp;
