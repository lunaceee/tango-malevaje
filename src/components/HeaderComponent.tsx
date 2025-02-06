import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for open/close


// Define the type for each navigation item
interface NavigationItem {
  title: string;
  slug?: string;
  url?: string;
  linkType: "internal" | "external";
}

// Define the type for the navigation object
interface Navigation {
  items: NavigationItem[];
}

// Define the type for the header data
interface HeaderData {
  title: string;
  logo?: {
    url: string;
  };
  navigation?: Navigation;
}

// Define the props for the Header component
interface HeaderProps {
  header: HeaderData;
}

const HeaderComponent = ({ header }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  console.log(header.navigation?.items)

  console.log("isopen", isOpen)


  return (
    <header className="px-4 bg-[#010201] md:sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        {header.logo && (
          <a href="/">
            <img src={header.logo.url} alt={header.title} className="w-24 h-24 p-2" />
          </a>
        )}

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Slide-in Navigation Panel */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-[#010201] text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
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
            {header.navigation?.items.map((item) => (
              <li key={item.title} onClick={closeMenu}>
                {item.linkType === "external" ? (
                  <a href={item.url} target="_blank" className="block">
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