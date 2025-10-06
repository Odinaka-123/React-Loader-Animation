import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Loader Animation",
  description: "Custom Cursor Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <ThemeProvider>
          <CustomCursor />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
