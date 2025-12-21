import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  return (
    <div>
      <video
        ref={videoRef}
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      ></video>

      <div>
        <button onClick={() => videoRef.current.play()}>▶️ Play</button>

        <button onClick={() => videoRef.current.pause()}>⏸ Pause</button>

        <button onClick={() => (videoRef.current.currentTime += 5)}>
          ⏩ Forward
        </button>

        <button onClick={() => (videoRef.current.currentTime -= 5)}>
          ⏪ Rewind
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
