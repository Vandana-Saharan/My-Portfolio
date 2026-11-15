import { useState, useEffect } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isJerking, setIsJerking] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 15 + 5;
        const next = prev + diff;
        return next >= 100 ? 100 : next;
      });
    }, 90);

    const safetyTimeout = setTimeout(() => {
      setProgress(100);
    }, 2200);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const jerkTimer = setTimeout(() => {
        setIsJerking(true);
      }, 300);

      const loadedTimer = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = "unset";
      }, 700);

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 1800);

      return () => {
        clearTimeout(jerkTimer);
        clearTimeout(loadedTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center cursor-none transition-transform ease-in-out ${
        isLoaded
          ? "-translate-y-full duration-[1000ms]"
          : isJerking
            ? "translate-y-4 duration-300"
            : "translate-y-0 duration-200"
      }`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          #18181b,
          #18181b 10vh,
          #fef08a 10vh,
          #fef08a 10.5vh
        )`,
        backgroundColor: "#18181b",
      }}
    >
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-custom-yellow font-shrikhand text-5xl md:text-7xl mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-wider">
            LOADING...
          </h1>
          <div className="font-mono font-bold text-2xl text-white bg-black px-5 py-1.5 inline-block border-2 border-b-4 border-r-4 border-white rounded-md">
            {Math.floor(progress)}%
          </div>
        </div>

        <div className="w-72 sm:w-96 md:w-[500px] h-14 bg-black border-4 border-white border-b-8 border-r-8 rounded-full p-1 relative shadow-neo">
          <div
            className="h-full bg-custom-yellow rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-6 bg-custom-yellow border-t-4 border-black" />
    </div>
  );
}
