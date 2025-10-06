import { FaGithub } from "react-icons/fa";
import Loader from "@/components/Loader";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Loader />
      <ThemeToggle />

      <main
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          transition: "background-color 0.5s ease, color 0.5s ease",
        }}
      >
        <div className="overflow-hidden">
          <h1
            className="text-[6vw] font-bold mb-4 slideUp"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            Welcome to My Website
          </h1>
        </div>

        <p
          className="text-lg"
          style={{ color: "var(--foreground)", transition: "color 0.5s ease" }}
        >
          Building creative digital experiences 🚀
        </p>
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-80 hover:opacity-100 transition"
          style={{ color: "var(--foreground)", transition: "color 0.5s ease" }}
        >
          <FaGithub size={28} />
          <a
            href="https://github.com/odinaka-123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium"
            style={{
              fontFamily: "Clash Display, sans-serif",
              color: "var(--foreground)",
              transition: "color 0.5s ease",
            }}
          >
            @odinaka-123
          </a>
        </div>
      </main>
    </>
  );
}
