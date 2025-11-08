import { Switch } from "@/components/modern-ui/switch";
import { useState } from "react";

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="flex items-center justify-between py-5 px-6 border-b border-input-surface-light dark:border-border">
      <h1 className="text-xl font-bold"><span className="text-primary-light dark:text-primary-dark">Opalp</span> Calculator</h1>
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
    </header>
  );
}
