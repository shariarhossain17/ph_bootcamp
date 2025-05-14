import { useCallback } from "react";

import type { MilestoneData } from "../lib/interface";
import { findCurrentVideoInfo } from "../lib/videoNavigation";

interface UseVideoNavigationProps {
  courseData: MilestoneData[];
  activeVideo: string | null;
  setActiveVideo: (id: string) => void;
  setExpandedModules: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  setExpandedMilestones: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}

export const useVideoNavigation = ({
  courseData,
  activeVideo,
  setActiveVideo,
  setExpandedModules,
  setExpandedMilestones,
}: UseVideoNavigationProps) => {
  const handlePrevious = useCallback(() => {
    const currentInfo = findCurrentVideoInfo(courseData, activeVideo);
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
      const lastVideo = prevModule.videos.at(-1);
      if (lastVideo) {
        setActiveVideo(lastVideo.youtubeId);
        setExpandedModules((prev) => ({ ...prev, [prevModule.id]: true }));
      }
      return;
    }

    if (milestoneIndex > 0) {
      const prevMilestone = courseData[milestoneIndex - 1];
      const lastModule = prevMilestone.modules.at(-1);
      const lastVideo = lastModule?.videos.at(-1);
      if (lastVideo && lastModule) {
        setActiveVideo(lastVideo.youtubeId);
        setExpandedMilestones((prev) => ({
          ...prev,
          [prevMilestone.id]: true,
        }));
        setExpandedModules((prev) => ({ ...prev, [lastModule.id]: true }));
      }
    }
  }, [
    courseData,
    activeVideo,
    setActiveVideo,
    setExpandedModules,
    setExpandedMilestones,
  ]);

  const handleNext = useCallback(() => {
    const currentInfo = findCurrentVideoInfo(courseData, activeVideo);
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
      if (firstVideo) {
        setActiveVideo(firstVideo.youtubeId);
        setExpandedModules((prev) => ({ ...prev, [nextModule.id]: true }));
      }
      return;
    }

    if (milestoneIndex < courseData.length - 1) {
      const nextMilestone = courseData[milestoneIndex + 1];
      const firstModule = nextMilestone.modules[0];
      const firstVideo = firstModule?.videos[0];
      if (firstVideo && firstModule) {
        setActiveVideo(firstVideo.youtubeId);
        setExpandedMilestones((prev) => ({
          ...prev,
          [nextMilestone.id]: true,
        }));
        setExpandedModules((prev) => ({ ...prev, [firstModule.id]: true }));
      }
    }
  }, [
    courseData,
    activeVideo,
    setActiveVideo,
    setExpandedModules,
    setExpandedMilestones,
  ]);

  return { handlePrevious, handleNext };
};
