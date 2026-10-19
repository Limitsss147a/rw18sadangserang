"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, User } from "lucide-react";
import navigation, { NavItem } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.05)] border-b border-slate-200/80"
            : "bg-[#f8f9ff]/90 backdrop-blur-md border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo Area */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-hidden rounded-xl py-1 min-h-[48px]"
            aria-label="Beranda RW 18 Kelurahan Sadang Serang"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/logos/logo-kkn.png"
                alt="Logo RW 18 Sadang Serang"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold font-heading text-[#003e74] leading-tight">
                RW 18 Sadang Serang
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Kelurahan Sadang Serang, Coblong, Kota Bandung
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
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
                    className={`min-h-[44px] px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center ${
                      active
                        ? "bg-[#e4efff] text-[#003e74]"
                        : "text-slate-600 hover:text-[#003e74] hover:bg-[#eef4ff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

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
                      className={`min-h-[44px] pl-3.5 pr-1.5 py-2 rounded-l-lg text-sm font-semibold transition-colors flex items-center ${
                        active
                          ? "bg-[#e4efff] text-[#003e74]"
                          : "text-slate-600 hover:text-[#003e74] hover:bg-[#eef4ff]"
                      }`}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(isDropdownOpen ? null : item.label)
                      }
                      aria-expanded={isDropdownOpen}
                      aria-label={`Buka submenu ${item.label}`}
                      className={`min-h-[44px] pr-2.5 py-2 rounded-r-lg text-slate-600 hover:text-[#003e74] transition-colors flex items-center justify-center ${
                        active ? "bg-[#e4efff]" : "hover:bg-[#eef4ff]"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-60 z-50"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5">
                          <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                            Fasilitas Unggulan
                          </div>
                          {item.children?.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-center px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                                  childActive
                                    ? "bg-[#003e74] text-white font-semibold"
                                    : "text-slate-700 hover:text-[#003e74] hover:bg-[#eef4ff]"
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

          {/* Right Action CTA & Avatar */}
          <div className="flex items-center gap-3">
            <Link
              href="/edukasi"
              className="hidden md:inline-flex items-center justify-center px-6 h-11 rounded-full bg-[#1b6d24] text-white text-sm font-semibold shadow-xs hover:bg-emerald-800 transition-colors"
            >
              Edukasi Sampah
            </Link>

            <a
              href="https://instagram.com/kartaunit18_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#003e74] text-white hidden sm:flex items-center justify-center shrink-0 hover:bg-[#195694] transition-colors shadow-xs"
              title="Karang Taruna RW 18 (@kartaunit18_)"
              aria-label="Kontak Karang Taruna RW 18"
            >
              <User className="w-5 h-5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden min-h-[44px] min-w-[44px] p-2 rounded-xl text-slate-700 hover:text-[#003e74] hover:bg-[#eef4ff] flex items-center justify-center transition-colors"
              aria-label="Buka menu navigasi"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
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
