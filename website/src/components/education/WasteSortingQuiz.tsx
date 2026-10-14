"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, RotateCcw, Trophy, Sparkles } from "lucide-react";

interface Question {
  item: string;
  category: "organik" | "anorganik" | "residu";
  explanation: string;
  icon: string;
}

const quizData: Question[] = [
  {
    item: "Sisa Nasi & Sayur Basi",
    category: "organik",
    explanation:
      "Benar! Sisa makanan dapur adalah makanan bernutrisi tinggi untuk larva di Rumah Maggot BSF.",
    icon: "🍚",
  },
  {
    item: "Botol Plastik Air Mineral Bersih",
    category: "anorganik",
    explanation:
      "Tepat! Botol PET bernilai jual tinggi untuk didaur ulang melalui Bank Sampah.",
    icon: "🧴",
  },
  {
    item: "Popok Bayi Sekali Pakai",
    category: "residu",
    explanation:
      "Tepat! Popok dan pembalut tidak dapat didaur ulang dan langsung masuk ke wadah residu tertutup.",
    icon: "🧷",
  },
  {
    item: "Kulit Pisang & Potongan Pepaya",
    category: "organik",
    explanation:
      "Benar! Kulit buah segar sangat disukai larva BSF dan diurai cepat dalam 24 jam.",
    icon: "🍌",
  },
  {
    item: "Kardus Paket Belanja Lipat",
    category: "anorganik",
    explanation:
      "Benar! Kardus yang kering dan bersih dikumpulkan di wadah kuning untuk daur ulang kertas.",
    icon: "📦",
  },
  {
    item: "Styrofoam Bekas Makanan Berminyak",
    category: "residu",
    explanation:
      "Tepat! Styrofoam kotor berlemak tidak dapat diolah maggot maupun didaur ulang.",
    icon: "🥡",
  },
];

export default function WasteSortingQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = quizData[currentIndex];

  const handleSelect = (category: "organik" | "anorganik" | "residu") => {
    if (selectedAnswer) return; // Prevent double click

    setSelectedAnswer(category);
    if (category === current.category) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0f355c]">
            Kuis Uji Coba: Sampah Ini Masuk Wadah Mana?
          </h3>
        </div>
        {!isFinished && (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#003e74]">
            Pertanyaan {currentIndex + 1} dari {quizData.length}
          </span>
        )}
      </div>

      {!isFinished ? (
        <div className="flex flex-col items-center text-center max-w-xl mx-auto py-4">
          {/* Question Item Card */}
          <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center text-5xl mb-4 shadow-inner border border-slate-200">
            {current.icon}
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Jenis Barang:
          </p>
          <h4 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-6">
            “{current.item}”
          </h4>

          {/* Three Choice Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-6">
            <button
              onClick={() => handleSelect("organik")}
              disabled={selectedAnswer !== null}
              className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all flex flex-col items-center gap-2 ${
                selectedAnswer === "organik"
                  ? current.category === "organik"
                    ? "bg-emerald-100 border-emerald-600 text-emerald-900 shadow-md scale-102"
                    : "bg-red-100 border-red-500 text-red-900"
                  : selectedAnswer !== null && current.category === "organik"
                  ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                  : "bg-emerald-50/60 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
              }`}
            >
              <span className="text-xl">🟢</span>
              <span>Wadah Hijau (Organik)</span>
            </button>

            <button
              onClick={() => handleSelect("anorganik")}
              disabled={selectedAnswer !== null}
              className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all flex flex-col items-center gap-2 ${
                selectedAnswer === "anorganik"
                  ? current.category === "anorganik"
                    ? "bg-amber-100 border-amber-600 text-amber-950 shadow-md scale-102"
                    : "bg-red-100 border-red-500 text-red-900"
                  : selectedAnswer !== null && current.category === "anorganik"
                  ? "bg-amber-50 border-amber-500 text-amber-950"
                  : "bg-amber-50/60 border-amber-300 text-amber-900 hover:bg-amber-100"
              }`}
            >
              <span className="text-xl">🟡</span>
              <span>Wadah Kuning (Anorganik)</span>
            </button>

            <button
              onClick={() => handleSelect("residu")}
              disabled={selectedAnswer !== null}
              className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all flex flex-col items-center gap-2 ${
                selectedAnswer === "residu"
                  ? current.category === "residu"
                    ? "bg-red-100 border-red-600 text-red-900 shadow-md scale-102"
                    : "bg-red-100 border-red-500 text-red-900"
                  : selectedAnswer !== null && current.category === "residu"
                  ? "bg-red-50 border-red-500 text-red-900"
                  : "bg-red-50/60 border-red-300 text-red-800 hover:bg-red-100"
              }`}
            >
              <span className="text-xl">🔴</span>
              <span>Wadah Merah (Residu)</span>
            </button>
          </div>

          {/* Feedback Display */}
          {selectedAnswer !== null && (
            <div className="w-full p-4 rounded-2xl bg-[#eef4ff] border border-blue-200 text-left mb-6 animate-in fade-in duration-200">
              <div className="flex items-start gap-3">
                {selectedAnswer === current.category ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {selectedAnswer === current.category
                      ? "Hebat, jawaban Anda tepat!"
                      : `Kurang tepat, yang benar adalah Wadah ${
                          current.category === "organik"
                            ? "Hijau (Organik)"
                            : current.category === "anorganik"
                            ? "Kuning (Anorganik)"
                            : "Merah (Residu)"
                        }`}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {current.explanation}
                  </p>
                </div>
              </div>

              <div className="text-right mt-3">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 rounded-full bg-[#003e74] text-white text-xs font-bold hover:bg-[#195694] transition-colors"
                >
                  {currentIndex < quizData.length - 1
                    ? "Pertanyaan Berikutnya →"
                    : "Lihat Hasil Akhir →"}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Result Summary Screen */
        <div className="text-center max-w-md mx-auto py-8">
          <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10" />
          </div>

          <h4 className="text-2xl font-bold font-heading text-slate-900">
            Skor Anda: {score} / {quizData.length}
          </h4>

          <p className="text-sm text-slate-600 mt-2">
            {score === quizData.length
              ? "Luar biasa! Anda adalah Warga Teladan Pemilahan Sampah Sadang Serang! 🌟"
              : score >= 4
              ? "Bagus sekali! Pemahaman pemilahan sampah Anda sudah sangat baik. Mari terapkan setiap hari dari dapur rumah."
              : "Terima kasih sudah mencoba! Membiasakan memilah sampah butuh waktu. Coba ulangi lagi untuk mengingat wadah yang tepat."}
          </p>

          <button
            onClick={handleRestart}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#003e74] text-white text-xs font-bold inline-flex items-center gap-2 hover:bg-[#195694] transition-colors shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Coba Kuis Lagi</span>
          </button>
        </div>
      )}
    </div>
  );
}
