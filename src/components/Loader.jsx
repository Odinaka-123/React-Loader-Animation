"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("loading");
  const [text, setText] = useState("Hello");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("curtain"), 400);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let newText = "Hello";
    if (progress >= 40 && progress < 80) newText = "And";
    if (progress >= 80) newText = "Welcome";

    if (newText !== text) {
      setFade(false);
      setTimeout(() => {
        setText(newText);
        setFade(true);
      }, 250);
    }
  }, [progress, text]);

  // Curtain stage animation
  useEffect(() => {
    if (stage === "curtain") {
      const timer = setTimeout(() => setStage("done"), 1800);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-colors duration-700 ${
        stage === "loading"
          ? "bg-white text-black dark:bg-black dark:text-white"
          : "bg-transparent"
      }`}
    >
      {stage === "loading" && (
        <>

          <div
            className="absolute bottom-0 left-0 w-full transition-all duration-100 ease-linear bg-black/10 dark:bg-white/10"
            style={{ height: `${progress}%` }}
          ></div>

          <h1 className="absolute text-[30vw] font-extrabold leading-none select-none z-10 text-black/10 dark:text-white/10">
            {progress}%
          </h1>

          <div
            className={`text-center relative z-20 transition-all duration-500 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h2
              className="text-[8vw] font-bold tracking-tight"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              {text}
            </h2>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-80 hover:opacity-100 transition text-black dark:text-white">
            <FaGithub size={28} />
            <a
              href="https://github.com/odinaka-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              @Odinaka-123
            </a>
          </div>
        </>
      )}

      {stage === "curtain" && (
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-[#272727]/50 dark:bg-[#d7d7d7]/30 backdrop-blur-md border-r border-white/10 animate-curtainLeftOpen"></div>
          <div className="w-1/2 bg-[#272727]/50 dark:bg-[#d7d7d7]/30 backdrop-blur-md border-l border-white/10 animate-curtainRightOpen"></div>
        </div>
      )}
    </div>
  );
}
