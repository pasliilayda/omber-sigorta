import Navbar from "@/components/Navbar";
export const metadata = {
  title: "KKTC’de Kasko Zorunlu mu? | Omber Sigorta",
  description:
    "KKTC’de kasko sigortasının zorunlu olup olmadığını, trafik sigortası ile farklarını ve neden önemli olduğunu öğrenin.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-20 md:px-20">
        <article className="mx-auto max-w-4xl">
          <span className="text-sm font-bold tracking-[0.3em] text-[#c48725]">
            OMBER SİGORTA BLOG
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#071f3d] md:text-6xl">
            KKTC’de Kasko Zorunlu mu?
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
            KKTC’de araç sahiplerinin en sık sorduğu sorulardan biri kasko
            sigortasının zorunlu olup olmadığıdır.
          </p>

          <div className="mt-12 space-y-8 text-lg leading-9 text-[#4d5b6b]">
            <p>
              KKTC’de zorunlu olan sigorta türü trafik sigortasıdır. Trafik
              sigortası, olası bir kazada karşı tarafın zararlarını karşılamak
              amacıyla yapılır.
            </p>

            <p>
              Kasko sigortası ise zorunlu değildir. Ancak aracınızı hırsızlık,
              çarpma, doğal afet, yangın ve farklı risklere karşı koruma altına
              almak için oldukça önemlidir.
            </p>

            <p>
              Özellikle yeni model araçlarda veya yüksek maliyetli araçlarda
              kasko sigortası ciddi maddi kayıpların önüne geçebilir.
            </p>

            <p>
              Kasko poliçeleri; poliçe kapsamına göre yol yardım, cam kırılması,
              mini onarım ve farklı ek teminatlar da içerebilir.
            </p>

            <p>
              Omber Sigorta olarak KKTC’de ihtiyaçlarınıza uygun trafik ve kasko
              sigortası çözümleri sunuyoruz.
            </p>
          </div>

          <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
            <h2 className="text-3xl font-black">
              Kasko Teklifi Almak İçin Bizimle İletişime Geçin
            </h2>

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
        </article>
      </main>
    </>
  );
}
