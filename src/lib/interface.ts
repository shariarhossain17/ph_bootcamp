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
export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
  youtubeUrl: string;
}
