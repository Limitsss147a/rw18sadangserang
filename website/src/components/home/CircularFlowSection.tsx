import { Utensils, Dna, Sprout, Soup } from "lucide-react";

export default function CircularFlowSection() {
  const steps = [
    {
      step: 1,
      icon: Utensils,
      title: "Dapur Warga",
      desc: "Sisa sayur mentah, nasi, dan kupasan buah dikumpulkan rapi di wadah hijau.",
      highlight: "Input 150+ kg / minggu",
      badgeColor: "bg-emerald-100 text-emerald-800",
      accent: "text-emerald-700",
      borderHover: "hover:border-emerald-500",
    },
    {
      step: 2,
      icon: Dna,
      title: "Rumah Maggot",
      desc: "Larva BSF mengurai sampah organik dalam 24 jam; menghasilkan kasgot bernutrisi tinggi.",
      highlight: "Biokonversi Cepat 0 Bau",
      badgeColor: "bg-blue-100 text-[#003e74]",
      accent: "text-[#003e74]",
      borderHover: "hover:border-[#003e74]",
    },
    {
      step: 3,
      icon: Sprout,
      title: "Buruan SAE",
      desc: "Pupuk kasgot & kompos Bata Terawang menyuburkan aneka sayuran hijau pekarangan warga.",
      highlight: "Sosin & Sayur Subur",
      badgeColor: "bg-amber-100 text-amber-900",
      accent: "text-amber-800",
      borderHover: "hover:border-amber-600",
    },
    {
      step: 4,
      icon: Soup,
      title: "Meja Makan Warga",
      desc: "Panen sayur sosin, pakcoy, kangkung, dan cabai segar dikonsumsi sehat oleh keluarga & balita posyandu.",
      highlight: "Gizi Sayur Mandiri",
      badgeColor: "bg-emerald-100 text-emerald-800",
      accent: "text-emerald-700",
      borderHover: "hover:border-emerald-500",
    },
  ];

  return (
    <section className="w-full bg-white py-10 border-b border-slate-200/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50/80 via-[#eef4ff] to-amber-50/70 border border-emerald-200/50 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#1b6d24] text-white text-xs font-bold uppercase tracking-wider">
                Siklus Sirkular
              </span>
              <h3 className="text-xl sm:text-2xl text-[#0f355c] font-bold font-heading">
                Alur Mandiri Sampah Organik RW 18
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs text-emerald-800 font-semibold border border-emerald-200 shadow-xs self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Zero Food Waste Movement
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className={`bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between transition-colors ${item.borderHover}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center ${item.badgeColor}`}
                    >
                      {item.step}
                    </span>
                    <Icon className={`w-6 h-6 ${item.accent}`} />
                  </div>

                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-slate-900 font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className={`mt-4 pt-2 border-t border-dashed border-slate-200 text-xs font-semibold ${item.accent}`}
                  >
                    {item.highlight}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
