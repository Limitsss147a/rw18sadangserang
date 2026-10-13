"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import navigation, { NavItem } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor scroll position for sticky background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown hover handlers with slight debounce for smooth interaction
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const isItemActive = (item: NavItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    if (pathname.startsWith(item.href)) {
      return true;
    }
    if (item.children?.some((child) => pathname === child.href)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2 sm:py-2.5"
            : "bg-white border-b border-slate-100 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo Area */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#195694] rounded-xl px-2 py-1 min-h-[48px]"
              aria-label="Beranda RW 18 Kelurahan Sadang Serang"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#195694] flex items-center justify-center text-white font-bold text-lg shadow-xs group-hover:bg-[#134577] transition-colors shrink-0">
                18
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#195694] group-hover:text-[#134577] transition-colors leading-tight">
                  RW 18
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 uppercase leading-none">
                  Sadang Serang
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-2"
              aria-label="Navigasi Utama"
            >
              {navigation.map((item: NavItem) => {
                const hasChildren = item.children && item.children.length > 0;
                const active = isItemActive(item);
                const isDropdownOpen = activeDropdown === item.label;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`min-h-[48px] px-3.5 lg:px-4 py-2 rounded-xl text-base lg:text-lg font-medium transition-all flex items-center ${
                        active
                          ? "text-[#195694] bg-[#eef5fb] font-semibold"
                          : "text-slate-700 hover:text-[#195694] hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                // Item with dropdown (Fasilitas)
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`min-h-[48px] pl-3.5 lg:pl-4 pr-1.5 py-2 rounded-l-xl text-base lg:text-lg font-medium transition-all flex items-center ${
                          active
                            ? "text-[#195694] bg-[#eef5fb] font-semibold"
                            : "text-slate-700 hover:text-[#195694] hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdown(
                            isDropdownOpen ? null : item.label
                          )
                        }
                        aria-expanded={isDropdownOpen}
                        aria-label={`Buka submenu ${item.label}`}
                        className={`min-h-[48px] min-w-[36px] pr-2.5 py-2 rounded-r-xl text-slate-600 hover:text-[#195694] transition-all flex items-center justify-center ${
                          active ? "bg-[#eef5fb]" : "hover:bg-slate-50"
                        }`}
                      >
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                    </div>

                    {/* Animated Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-2 w-64 z-50"
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5">
                            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                              Fasilitas Unggulan
                            </div>
                            {item.children?.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors min-h-[44px] ${
                                    childActive
                                      ? "bg-[#195694] text-white font-semibold"
                                      : "text-slate-700 hover:text-[#195694] hover:bg-[#eef5fb]"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="min-h-[48px] min-w-[48px] p-2.5 rounded-xl text-slate-700 hover:text-[#195694] hover:bg-[#eef5fb] flex items-center justify-center transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#195694]"
                aria-label="Buka menu navigasi"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
