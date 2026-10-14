import {
  Layout,
  Sprout,
  Users,
  GraduationCap,
  Trash2,
  Bug,
  RefreshCw,
  PackageCheck,
  Home,
  Droplets,
  Wheat,
  Boxes,
  Hammer,
  Grid3X3,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Facility } from "@/data/facilities";

interface ProcessStepsProps {
  steps: Facility["steps"];
  facilityName: string;
  facilityColor: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Sprout,
  Users,
  GraduationCap,
  Trash2,
  Bug,
  RefreshCw,
  PackageCheck,
  Home,
  Droplets,
  Wheat,
  Boxes,
  Hammer,
  Grid3X3,
  Sparkles,
};

export default function ProcessSteps({
  steps,
  facilityName,
  facilityColor,
}: ProcessStepsProps) {
  return (
    <section className="w-full bg-[#f8f9ff] py-14 md:py-20 border-b border-slate-200/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-2"
            style={{ backgroundColor: facilityColor }}
          >
            Alur &amp; Cara Kerja
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#0f355c]">
            Bagaimana {facilityName} Bekerja
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Tahapan terpadu dan berkelanjutan yang melibatkan partisipasi aktif
            warga RW 18 dari proses awal hingga kemanfaatannya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || HelpCircle;
            const isLast = idx === steps.length - 1;

            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: facilityColor }}
                    >
                      {idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-slate-800" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0f355c]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Langkah {idx + 1} dari {steps.length}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
