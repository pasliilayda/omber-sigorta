export const metadata = {
  title: "Konut Sigortası Gerçekten Gerekli mi? | Omber Sigorta",
  description:
    "Konut sigortasının ev sahipleri ve kiracılar için neden önemli olduğunu, hangi risklere karşı koruma sağlayabileceğini öğrenin.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 md:px-20">
      <article className="mx-auto max-w-4xl">
        <span className="text-sm font-black tracking-[0.3em] text-[#c48725]">
          OMBER SİGORTA REHBERİ
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight text-[#071f3d] md:text-6xl">
          Konut Sigortası Gerçekten Gerekli mi?
        </h1>

        <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
          Ev, çoğu kişi için en değerli varlıklardan biridir. Konut sigortası,
          beklenmedik risklere karşı evinizi ve yaşam düzeninizi korumaya
          yardımcı olur.
        </p>

        <div className="mt-12 space-y-10 text-lg leading-9 text-[#4d5b6b]">
          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              1. Yangın ve su baskını gibi riskler her zaman olabilir
            </h2>
            <p className="mt-4">
              Evlerde en sık karşılaşılan riskler arasında yangın, su baskını,
              tesisat problemleri ve doğal afet kaynaklı zararlar bulunur. Konut
              sigortası bu risklere karşı finansal koruma sağlayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              2. Sadece ev sahipleri için değil, kiracılar için de önemlidir
            </h2>
            <p className="mt-4">
              Konut sigortası yalnızca bina için düşünülmemelidir. Kiracılar da
              eşyalarını ve yaşam alanlarını güvence altına almak için uygun
              poliçe seçeneklerini değerlendirebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              3. Hırsızlık riski göz ardı edilmemelidir
            </h2>
            <p className="mt-4">
              Hırsızlık, ev sahipleri ve kiracılar için ciddi maddi kayıp
              oluşturabilir. Poliçe kapsamına göre eşya teminatı önemli bir
              güvence sağlayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              4. Poliçe kapsamı ihtiyaca göre belirlenmelidir
            </h2>
            <p className="mt-4">
              Her evin ve her ailenin ihtiyacı farklıdır. Bina teminatı, eşya
              teminatı ve ek teminatlar doğru şekilde değerlendirilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              5. Küçük bir prim, büyük kayıpları önleyebilir
            </h2>
            <p className="mt-4">
              Konut sigortası çoğu zaman büyük risklere karşı ulaşılabilir bir
              maliyetle koruma sağlar. Bu nedenle uzun vadede önemli bir güvence
              aracıdır.
            </p>
          </section>
        </div>

        <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
          <h2 className="text-3xl font-black">
            Konut Sigortası İçin Bilgi Alın
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Eviniz ve eşyalarınız için uygun sigorta seçeneklerini birlikte
            değerlendirelim.
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
  );
}
