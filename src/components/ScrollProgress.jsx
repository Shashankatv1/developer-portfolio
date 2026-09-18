import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}

export default ScrollProgress;