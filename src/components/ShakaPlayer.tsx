import { useEffect, useRef } from "react";
import shaka from "shaka-player";

const ShakaPlayer = ({ activeVideo }: { activeVideo: string | null }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    shaka.polyfill.installAll();

    if (!shaka.Player.isBrowserSupported()) {
      alert("Browser not supported!");
      return;
    }

    const video = videoRef.current;
    if (!video || !activeVideo) return;

    const player = new shaka.Player(video);

    player.addEventListener("error", (event: any) => {
      console.error("Error code", event.detail.code, ":", event.detail);
    });

    player
      .load(activeVideo)
      .then(() => {
        video.play().catch((e) => {
          console.warn("Play prevented:", e);
        });
      })
      .catch((err: any) => {
        console.error("Error loading video:", err);
      });

    return () => {
      player.destroy();
    };
  }, [activeVideo]);

  return (
    <div
      className="relative pb-[56.25%] rounded-lg shadow-lg"
      style={{ height: 0 }}
    >
      <video
        ref={videoRef}
        controls
        playsInline
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: "black" }}
      />
    </div>
  );
};

export default ShakaPlayer;
