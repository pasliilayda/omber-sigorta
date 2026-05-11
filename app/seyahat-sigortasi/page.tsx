export const metadata = {
  title: "KKTC Seyahat Sigortası | Omber Sigorta",
  description:
    "KKTC seyahat sigortası çözümleri. Yurt içi ve yurt dışı seyahatlerinizde güvenli yolculuk için bilgi alın.",
};

export default function SeyahatSigortasiPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 md:px-20">
      <div className="mx-auto max-w-5xl">
        <span className="text-sm font-bold tracking-[0.3em] text-[#c48725]">
          OMBER SİGORTA
        </span>
        <h1 className="mt-6 text-4xl font-black text-[#071f3d] md:text-6xl">
          KKTC Seyahat Sigortası
        </h1>
        <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
          Seyahat sigortası, yolculuk sırasında karşılaşabileceğiniz sağlık,
          bagaj, iptal ve farklı risklere karşı güvence sağlayabilir.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[#e7edf3] p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#071f3d]">
              Neleri Kapsayabilir?
            </h2>
            <ul className="mt-6 space-y-4 text-[#4d5b6b]">
              <li>• Seyahat sırasında sağlık giderleri</li>
              <li>• Bagaj kaybı veya gecikmesi</li>
              <li>• Seyahat iptal riskleri</li>
              <li>• Acil yardım hizmetleri</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#e7edf3] p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#071f3d]">
              Neden Gerekli?
            </h2>
            <p className="mt-6 leading-8 text-[#4d5b6b]">
              Seyahat sırasında beklenmedik durumlarla karşılaşabilirsiniz.
              Seyahat sigortası bu süreçte finansal ve operasyonel destek
              sağlar.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
          <h2 className="text-3xl font-black">
            Seyahat Sigortası Teklifi Alın
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Yolculuğunuz öncesi size uygun sigorta seçenekleri için iletişime
            geçin.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/905488504194"
              target="_blank"
              className="rounded-full bg-[#c48725] px-7 py-4 font-bold text-white"
            >
              WhatsApp’tan Ulaş
            </a>
            <a
              href="tel:+905488504194"
              className="rounded-full border border-white/20 px-7 py-4 font-bold text-white"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
