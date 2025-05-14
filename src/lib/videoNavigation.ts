import type { MilestoneData } from "./interface";

export const findCurrentVideoInfo = (
  courseData: MilestoneData[],
  activeVideo: string | null
) => {
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
