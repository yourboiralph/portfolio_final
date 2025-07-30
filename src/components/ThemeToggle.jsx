import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils"

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(()=>{
    const storedTheme = localStorage.getItem('theme')
    console.log(storedTheme)
    if (storedTheme === "light") {
        setIsDarkMode(false)
        document.documentElement.classList.add("light")
    } else {
        setIsDarkMode(true);
        localStorage.setItem('theme', 'dark')
    }
  },[])
  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "outline-hidden"
    )}>
      {isDarkMode ? (
        <Sun className="h-6. w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6. w-6 text-blue-300" />
      )}
    </button>
  );
};
