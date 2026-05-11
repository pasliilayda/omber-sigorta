import Navbar from "@/components/Navbar";
export const metadata = {
  title: "KKTC’de Kasko Yaptırmazsanız Ne Olur? | Omber Sigorta",
  description:
    "KKTC’de kasko yaptırmamanın araç sahipleri için doğurabileceği maddi riskleri ve kaskonun neden önemli olduğunu öğrenin.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-20 md:px-20">
        <article className="mx-auto max-w-4xl">
          <span className="text-sm font-black tracking-[0.3em] text-[#c48725]">
            OMBER SİGORTA REHBERİ
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#071f3d] md:text-6xl">
            KKTC’de Kasko Yaptırmazsanız Ne Olur?
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
            Kasko zorunlu değildir; fakat aracınızı beklenmedik hasarlara karşı
            korumak için en önemli sigorta türlerinden biridir.
          </p>

          <div className="mt-12 space-y-10 text-lg leading-9 text-[#4d5b6b]">
            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                1. Kaza sonrası tüm masraf size kalabilir
              </h2>
              <p className="mt-4">
                Trafik sigortası karşı tarafın zararlarını karşılar. Ancak sizin
                aracınızda oluşan hasarlar çoğu durumda trafik sigortası
                tarafından karşılanmaz. Kasko yoksa onarım masraflarını kendiniz
                ödemek zorunda kalabilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                2. Hırsızlık ve yangın gibi risklerde korunmasız kalırsınız
              </h2>
              <p className="mt-4">
                Aracınızın çalınması, yanması veya ciddi hasar görmesi gibi
                durumlarda kasko poliçesi önemli bir güvence sağlayabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                3. Yeni ve değerli araçlarda risk daha büyüktür
              </h2>
              <p className="mt-4">
                Araç değeri yükseldikçe olası hasar maliyeti de artar. Özellikle
                yeni, lüks veya yüksek maliyetli araçlarda kasko yaptırmamak
                ciddi finansal risk oluşturabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                4. Yol yardım ve çekici desteğinden mahrum kalabilirsiniz
              </h2>
              <p className="mt-4">
                Bazı kasko poliçeleri çekici, yol yardım, cam kırılması ve mini
                onarım gibi ek hizmetler sunabilir. Bu destekler acil durumlarda
                büyük kolaylık sağlar.
              </p>
            </section>
          </div>

          <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
            <h2 className="text-3xl font-black">Kasko Teklifi Alın</h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Aracınız için uygun kasko seçeneklerini öğrenmek üzere Omber
              Sigorta ile iletişime geçebilirsiniz.
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
        </article>
      </main>
    </>
  );
}
