"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, MapPin, ExternalLink } from "lucide-react";
import { Instagram } from "@/components/icons/InstagramIcon";
import navigation, { NavItem } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  
  // Track expanded accordion items (Fasilitas Unggulan expanded by default if relevant)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "Fasilitas Unggulan": true,
  });

  // Auto-close menu when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative z-10 flex flex-col w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl border-l border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white">
              <Link
                href="/"
                onClick={onClose}
                className="flex flex-col group min-h-[48px] justify-center focus:outline-hidden focus:ring-2 focus:ring-[#195694] rounded-lg px-1"
                aria-label="Kembali ke Beranda RW 18 Sadang Serang"
              >
                <span className="text-2xl font-bold tracking-tight text-[#195694] group-hover:text-[#134577] transition-colors">
                  RW 18
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Sadang Serang
                </span>
              </Link>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="min-h-[48px] min-w-[48px] flex items-center justify-center rounded-xl text-slate-600 hover:text-[#195694] hover:bg-[#eef5fb] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#195694]"
                aria-label="Tutup menu navigasi"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-1.5 focus:outline-hidden">
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
                      className={`min-h-[48px] flex items-center px-4 rounded-xl text-lg font-medium transition-colors ${
                        active
                          ? "bg-[#195694] text-white shadow-sm font-semibold"
                          : "text-slate-700 hover:text-[#195694] hover:bg-[#eef5fb]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                // Item with children (e.g. Fasilitas)
                return (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`min-h-[48px] flex-1 flex items-center px-4 rounded-xl text-lg font-medium transition-colors ${
                          active
                            ? "bg-[#195694] text-white shadow-sm font-semibold"
                            : "text-slate-700 hover:text-[#195694] hover:bg-[#eef5fb]"
                        }`}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleExpand(item.label)}
                        className={`min-h-[48px] min-w-[48px] flex items-center justify-center rounded-xl transition-colors ${
                          active
                            ? "text-[#195694] hover:bg-[#eef5fb]"
                            : "text-slate-600 hover:text-[#195694] hover:bg-[#eef5fb]"
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
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden pl-3 pr-1 space-y-1 border-l-2 border-[#195694]/20 ml-4 my-1"
                        >
                          {item.children?.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className={`min-h-[48px] flex items-center px-4 rounded-lg text-base sm:text-lg font-normal transition-colors ${
                                  childActive
                                    ? "bg-[#195694]/10 text-[#195694] font-semibold"
                                    : "text-slate-600 hover:text-[#195694] hover:bg-[#eef5fb]"
                                }`}
                              >
                                {child.label}
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

            {/* Social Links & Info at Bottom */}
            <div className="border-t border-slate-200 bg-slate-50/70 p-5 space-y-4">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Media Sosial
                </span>
                <div className="space-y-1.5">
                  <a
                    href="https://instagram.com/kartaunit18_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] flex items-center justify-between px-3 py-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-[#195694] hover:border-[#195694]/30 hover:bg-[#eef5fb] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-[#195694]">
                          @kartaunit18_
                        </span>
                        <span className="text-xs text-slate-500">
                          Karang Taruna Unit RW 18
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#195694]" />
                  </a>

                  <a
                    href="https://instagram.com/kkn3_sadangserang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] flex items-center justify-between px-3 py-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-[#195694] hover:border-[#195694]/30 hover:bg-[#eef5fb] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-[#195694]">
                          @kkn3_sadangserang
                        </span>
                        <span className="text-xs text-slate-500">
                          KKN UNIKOM Kelompok 3
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#195694]" />
                  </a>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <MapPin className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Sadang Serang, Kec. Coblong, Kota Bandung</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
