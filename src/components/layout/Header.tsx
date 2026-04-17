import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

/**
 * HEADER COMPONENT
 * 
 * CUSTOMIZATION GUIDE:
 * - Logo/Name: Edit line 34 to change the name shown in the top-left corner.
 * - Navigation: Update the 'navItems' array (line 23) to add or remove links.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for sticky header styles
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", path: "/" },
    { name: "Approach", path: "/approach" },
    { name: "Photography", path: "/photography" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className={`h-20 border-b sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"}`}>
      <div className="container-custom h-full flex items-center justify-between">
        <NavLink to="/" className="text-sm font-bold tracking-[0.1em] uppercase hover:text-accent transition-colors">
          SIMON LALONDE
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10" />}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-0 mt-20">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-bold tracking-tight px-10 py-6 border-b border-border/50 transition-colors hover:bg-muted ${
                        isActive ? "text-accent" : "text-foreground/50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
