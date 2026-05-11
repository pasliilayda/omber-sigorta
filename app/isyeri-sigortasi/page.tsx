import Navbar from "@/components/Navbar";
export const metadata = {
  title: "KKTC İşyeri Sigortası | Omber Sigorta",
  description:
    "KKTC işyeri sigortası çözümleri. İş yerinizi yangın, hırsızlık, doğal afet ve farklı risklere karşı güvence altına alın.",
};

export default function IsyeriSigortasiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-20 md:px-20">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-bold tracking-[0.3em] text-[#c48725]">
            OMBER SİGORTA
          </span>
          <h1 className="mt-6 text-4xl font-black text-[#071f3d] md:text-6xl">
            KKTC İşyeri Sigortası
          </h1>
          <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
            İşyeri sigortası; işletmenizi, ekipmanlarınızı ve ticari
            faaliyetlerinizi beklenmedik risklere karşı korumaya yardımcı olur.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-[#e7edf3] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#071f3d]">
                Neleri Kapsayabilir?
              </h2>
              <ul className="mt-6 space-y-4 text-[#4d5b6b]">
                <li>• Yangın</li>
                <li>• Hırsızlık</li>
                <li>• Su baskını</li>
                <li>• Demirbaş ve ekipman hasarları</li>
                <li>• Poliçeye bağlı ek teminatlar</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#e7edf3] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#071f3d]">
                Kimler İçin Uygundur?
              </h2>
              <p className="mt-6 leading-8 text-[#4d5b6b]">
                Mağaza, ofis, depo, restoran ve farklı ticari işletmeler için
                işyeri sigortası önemli bir koruma sağlar.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
            <h2 className="text-3xl font-black">
              İşyeri Sigortası İçin Bilgi Alın
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              İşletmeniz için en uygun sigorta seçeneklerini öğrenmek üzere
              bizimle iletişime geçin.
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
    </>
  );
}
