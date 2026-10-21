"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronDown,
  MapPin,
  ExternalLink,
  BookOpen,
  Compass,
  Sparkles,
} from "lucide-react";
import { Instagram } from "@/components/icons/InstagramIcon";
import navigation, { NavItem } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Track expanded accordion items (Fasilitas Unggulan expanded by default)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "Fasilitas Unggulan": true,
  });

  // Auto-close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll cleanly when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      // Prevent layout shift from scrollbar disappearing
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      return () => {
        document.body.style.overflow = originalOverflow || "";
        document.body.style.paddingRight = originalPaddingRight || "";
      };
    }
  }, [isOpen]);

  const toggleExpand = useCallback((label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(href);
    },
    [pathname]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex justify-start lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel opening from LEFT with responsive slide animation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 flex flex-col w-[85vw] max-w-sm sm:max-w-md bg-white h-[100dvh] shadow-2xl border-r border-slate-200 overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-sm shrink-0">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2.5 group focus:outline-hidden"
                aria-label="Kembali ke Beranda RW 18 Sadang Serang"
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/logos/logo-kkn.png"
                    alt="Logo RW 18"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-bold font-heading text-[#003e74] leading-tight">
                    RW 18 Sadang Serang
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Kec. Coblong, Kota Bandung
                  </span>
                </div>
              </Link>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:text-[#003e74] hover:bg-[#eef4ff] active:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#003e74]"
                aria-label="Tutup menu navigasi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Drawer Content (Nav Links + CTAs + Socials) */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-5 focus:outline-hidden">
              {/* Navigation Links */}
              <nav className="space-y-1.5" aria-label="Navigasi Menu Mobile">
                {navigation.map((item: NavItem) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = !!expandedItems[item.label];
                  const active = isActive(item.href);

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={`min-h-[46px] flex items-center px-4 rounded-xl text-base font-semibold transition-all ${
                          active
                            ? "bg-[#003e74] text-white shadow-xs"
                            : "text-slate-700 hover:text-[#003e74] hover:bg-[#eef4ff] active:bg-slate-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  // Item with children (e.g. Fasilitas Unggulan)
                  return (
                    <div key={item.label} className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={`min-h-[46px] flex-1 flex items-center px-4 rounded-xl text-base font-semibold transition-all ${
                            active
                              ? "bg-[#003e74] text-white shadow-xs"
                              : "text-slate-700 hover:text-[#003e74] hover:bg-[#eef4ff] active:bg-slate-100"
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>

                        <button
                          type="button"
                          onClick={() => toggleExpand(item.label)}
                          className={`min-h-[46px] min-w-[46px] flex items-center justify-center rounded-xl transition-colors ${
                            active
                              ? "text-slate-700 hover:bg-[#eef4ff]"
                              : "text-slate-500 hover:text-[#003e74] hover:bg-[#eef4ff]"
                          }`}
                          aria-label={
                            isExpanded
                              ? `Tutup submenu ${item.label}`
                              : `Buka submenu ${item.label}`
                          }
                          aria-expanded={isExpanded}
                        >
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.span>
                        </button>
                      </div>

                      {/* Expandable Submenu */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key={`submenu-${item.label}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden pl-3 pr-1 space-y-1 border-l-2 border-[#003e74]/20 ml-4 my-1.5"
                          >
                            {item.children?.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className={`min-h-[42px] flex items-center px-3.5 rounded-lg text-sm transition-all ${
                                    childActive
                                      ? "bg-[#003e74]/10 text-[#003e74] font-bold"
                                      : "text-slate-600 hover:text-[#003e74] hover:bg-[#eef4ff] active:bg-slate-100 font-medium"
                                  }`}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#003e74]/40 mr-2 shrink-0" />
                                  <span>{child.label}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* Quick Action CTAs */}
              <div className="pt-2 space-y-2.5 border-t border-slate-100">
                <Link
                  href="/edukasi"
                  onClick={onClose}
                  className="w-full h-11 px-4 rounded-xl bg-[#1b6d24] hover:bg-emerald-800 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Edukasi &amp; Booklet Sampah</span>
                </Link>

                <a
                  href="https://maps.app.goo.gl/MBDpJ1thWyLbS2x16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 px-4 rounded-xl bg-[#eef4ff] hover:bg-[#e0ecff] text-[#003e74] text-sm font-semibold flex items-center justify-center gap-2 border border-blue-200 transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#003e74]" />
                  <span>Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Social Media & Community Info */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Media Sosial Warga
                </span>

                <div className="space-y-2">
                  <a
                    href="https://instagram.com/kartaunit18_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#eef4ff] border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#003e74]">
                          @kartaunit18_
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Karang Taruna Unit 18
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#003e74]" />
                  </a>

                  <a
                    href="https://instagram.com/kkn3_sadangserang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#eef4ff] border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#003e74]">
                          @kkn3_sadangserang
                        </span>
                        <span className="text-[11px] text-slate-500">
                          KKN UNIKOM Kelompok 3
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#003e74]" />
                  </a>
                </div>

                {/* Location Footer Note */}
                <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Kawasan Taman Dahlia RW 18, Sadang Serang, Bandung</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
