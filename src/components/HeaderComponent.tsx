import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for open/close
import NavigationType from "../components/Navigation.astro"

interface NavigationItemType {
  title: string;
  linkType: "internal" | "external";
  slug: string;
  url?: string;
}
export interface HeaderProps {
  title: string;
  logo?: {
    url: string;
  };
  navigation: typeof NavigationType
}

const HeaderComponent = ({ header }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent) => {
    setIsOpen(!isOpen);
  }
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="px-4 bg-[#010201] md:sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        {header.logo && (
          <a href="/">
            <img src={header.logo.url} alt={header.logo.altText} className="w-24 h-24 p-2" />
          </a>
        )}

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden p-2 text-white w-12 h-12 flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Slide-in Navigation Panel */}
        <nav
          className={`fixed top-0 right-0 z-10 h-full w-64 bg-[#010201] text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-auto`}
        >
          {/* Close Button (inside panel) */}
          <button
            className="absolute top-4 right-4 text-white lg:hidden"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <ul className="flex flex-col lg:flex-row gap-6 p-6 lg:p-4 lg:gap-20">
            {header.navigation?.items.map((item: NavigationItemType) => (
              <li key={item.title} onClick={closeMenu}>
                {item.linkType === "external" ? (
                  <a href={item.slug} target="_blank" className="block">
                    {item.title}
                  </a>
                ) : (
                  <a href={item.slug === "home" ? "/" : `/${item.slug}`} className="block">
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay (closes menu when clicking outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}

export default HeaderComponent;
