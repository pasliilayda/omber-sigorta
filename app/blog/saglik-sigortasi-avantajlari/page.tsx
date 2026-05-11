export const metadata = {
  title: "Sağlık Sigortası Size Uzun Vadede Nasıl Kazandırır? | Omber Sigorta",
  description:
    "Sağlık sigortasının uzun vadeli avantajlarını, bütçe yönetimine ve sağlık hizmetlerine erişime katkılarını öğrenin.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 md:px-20">
      <article className="mx-auto max-w-4xl">
        <span className="text-sm font-black tracking-[0.3em] text-[#c48725]">
          OMBER SİGORTA REHBERİ
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight text-[#071f3d] md:text-6xl">
          Sağlık Sigortası Size Uzun Vadede Nasıl Kazandırır?
        </h1>

        <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
          Sağlık sigortası yalnızca hastalık anında değil, uzun vadeli finansal
          planlama açısından da önemli bir güvence sağlayabilir.
        </p>

        <div className="mt-12 space-y-10 text-lg leading-9 text-[#4d5b6b]">
          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              1. Beklenmedik sağlık giderlerine karşı koruma sağlar
            </h2>
            <p className="mt-4">
              Ani sağlık problemleri bütçenizi zorlayabilir. Sağlık sigortası,
              poliçe kapsamına göre muayene, tedavi ve hastane giderlerinde
              finansal destek sağlayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              2. Sağlık hizmetlerine erişimi kolaylaştırabilir
            </h2>
            <p className="mt-4">
              Uygun sağlık sigortası, ihtiyaç duyduğunuz sağlık hizmetlerine
              daha planlı ve daha hızlı ulaşmanıza yardımcı olabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              3. Aile bütçesini daha öngörülebilir hale getirir
            </h2>
            <p className="mt-4">
              Sağlık giderleri beklenmedik şekilde ortaya çıkabilir. Sigorta, bu
              giderleri daha yönetilebilir hale getirerek bütçe planlamasına
              katkı sağlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              4. Poliçe kapsamını doğru seçmek gerekir
            </h2>
            <p className="mt-4">
              Her sağlık poliçesi aynı değildir. Teminat limitleri, anlaşmalı
              kurumlar ve ek hizmetler dikkatle değerlendirilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              5. Uzun vadede güven hissi sağlar
            </h2>
            <p className="mt-4">
              Sağlık sigortası, yalnızca finansal değil, psikolojik olarak da
              güven sağlar. Sağlığınızla ilgili riskleri daha rahat yönetmenize
              yardımcı olur.
            </p>
          </section>
        </div>

        <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
          <h2 className="text-3xl font-black">
            Sağlık Sigortası İçin Bilgi Alın
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Size ve ailenize uygun sağlık sigortası seçenekleri için Omber
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
  );
}
