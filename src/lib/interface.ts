export type MilestoneData = Course;

type Course = {
  id: string;
  title: string;
  duration: string;
  progress: string;
  modules: Module[];
};

type Module = {
  id: string;
  title: string;
  duration: string;
  progress: string;
  videos: Video[];
};

type Video = {
  id: string;
  title: string;
  duration?: string;
  completed: boolean;
  youtubeId: string;
};
