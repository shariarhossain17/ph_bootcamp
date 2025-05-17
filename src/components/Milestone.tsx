import { ChevronDown } from "lucide-react";
import React from "react";
import type { MilestoneData } from "../lib/interface";
import { cn } from "../lib/utils";

type Props = {
  milestone: MilestoneData;
  toggleMilestone: (id: string) => void;
  toggleModule: (id: string) => void;
  handleVideoClick: (youtubeId: string) => void;
  expandedMilestones: Record<string, boolean>;
  expandedModules: Record<string, boolean>;
  activeVideo: string | null;
};

const Milestone: React.FC<Props> = ({
  milestone,
  toggleMilestone,
  toggleModule,
  handleVideoClick,
  expandedMilestones,
  expandedModules,
  activeVideo,
}) => {
  return (
    <div className="mb-4 bg-[#151922] rounded-[20px] mt-4">
      {/* Milestone Header */}
      <button
        onClick={() => toggleMilestone(milestone.id)}
        className="flex items-center justify-between w-full p-4 text-left hover:bg-zinc-800/50 cursor-pointer"
      >
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-white">
            {milestone?.title}
          </h2>
          <div className="flex items-center text-sm text-zinc-400 mt-1">
            <span>{milestone?.duration}</span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform",
            expandedMilestones[milestone?.id] ? "rotate-180" : ""
          )}
        />
      </button>

      {/* Modules */}
      {expandedMilestones[milestone.id] && (
        <div className="border-t border-zinc-800 rounded-[20px] mt-4 mb-4">
          {milestone.modules.map((module) => (
            <div
              key={module.id}
              className="border-b border-zinc-800/50 last:border-b-0"
            >
              <button
                onClick={() => toggleModule(module.id)}
                className="flex items-center justify-between w-full p-4 text-left hover:bg-zinc-800/50 cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="font-medium">{module.title}</h3>
                  <div className="flex items-center text-sm text-zinc-400 mt-1">
                    <span>{module.duration}</span>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    expandedModules[module.id] ? "rotate-180" : ""
                  )}
                />
              </button>

              {/* Videos */}
              {expandedModules[module.id] && (
                <div className="pl-4 pb-2">
                  {module.videos.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => handleVideoClick(video.youtubeId)}
                      className={cn(
                        "flex items-start w-full p-3 text-left hover:bg-zinc-800/30 rounded-md my-1 cursor-pointer",
                        activeVideo === video.youtubeId ? "bg-[#F507F11A]" : ""
                      )}
                    >
                      <div className="flex-1 text-sm">
                        <p className="text-left">{video.title}</p>
                        {video.duration && (
                          <span className="text-xs text-zinc-400 mt-1 block">
                            {video.duration}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Milestone;
