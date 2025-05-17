import type { MilestoneData } from "./interface";

export const checkIsFirstVideo = (
  courseData: MilestoneData[],
  milestoneId: string,
  moduleId: string,
  videoIndex: number
): boolean => {
  const milestoneIndex = courseData.findIndex((m) => m.id === milestoneId);
  if (milestoneIndex !== 0) return false;

  const moduleIndex = courseData[milestoneIndex].modules.findIndex(
    (m) => m.id === moduleId
  );
  if (moduleIndex !== 0) return false;

  return videoIndex === 0;
};

export const checkIsLastVideo = (
  courseData: MilestoneData[],
  milestoneId: string,
  moduleId: string,
  videoIndex: number
): boolean => {
  const milestoneIndex = courseData.findIndex((m) => m.id === milestoneId);
  if (milestoneIndex !== courseData.length - 1) return false;

  const moduleIndex = courseData[milestoneIndex].modules.findIndex(
    (m) => m.id === moduleId
  );
  if (moduleIndex !== courseData[milestoneIndex].modules.length - 1)
    return false;

  const module = courseData[milestoneIndex].modules[moduleIndex];
  return videoIndex === module.videos.length - 1;
};
