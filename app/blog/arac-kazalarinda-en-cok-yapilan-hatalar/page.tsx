export const metadata = {
  title: "Araç Kazalarında En Çok Yapılan 5 Hata | Omber Sigorta",
  description:
    "Araç kazası sonrası sürücülerin yaptığı en yaygın hataları ve dikkat edilmesi gerekenleri öğrenin.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 md:px-20">
      <article className="mx-auto max-w-4xl">
        <span className="text-sm font-black tracking-[0.3em] text-[#c48725]">
          OMBER SİGORTA REHBERİ
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight text-[#071f3d] md:text-6xl">
          Araç Kazalarında En Çok Yapılan 5 Hata
        </h1>

        <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
          Kaza sonrası yapılan bazı hatalar hem sigorta sürecini zorlaştırabilir
          hem de maddi kayıplara neden olabilir.
        </p>

        <div className="mt-12 space-y-10 text-lg leading-9 text-[#4d5b6b]">
          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              1. Panikle olay yerini terk etmek
            </h2>

            <p className="mt-4">
              Kaza sonrası sakin kalmak çok önemlidir. Olay yerinden erken
              ayrılmak sigorta ve tutanak süreçlerinde sorun yaratabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              2. Fotoğraf ve video almamak
            </h2>

            <p className="mt-4">
              Araçların konumu, hasar durumu ve olay yeri mutlaka kayıt altına
              alınmalıdır. Bu belgeler sigorta sürecinde büyük önem taşır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              3. Eksik tutanak doldurmak
            </h2>

            <p className="mt-4">
              Eksik veya yanlış bilgiler sigorta işlemlerinin uzamasına neden
              olabilir. Tutanak dikkatli şekilde doldurulmalıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              4. Sigorta şirketine geç bilgi vermek
            </h2>

            <p className="mt-4">
              Kaza sonrası süreci hızlı başlatmak önemlidir. Geciken bildirimler
              bazı durumlarda sorun oluşturabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#071f3d]">
              5. Poliçe kapsamını bilmemek
            </h2>

            <p className="mt-4">
              Birçok sürücü hangi durumların poliçe kapsamında olduğunu
              bilmediği için yanlış beklentiye girebilir.
            </p>
          </section>
        </div>

        <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
          <h2 className="text-3xl font-black">
            Sigorta Süreçlerinde Profesyonel Destek Alın
          </h2>

          <p className="mt-4 max-w-2xl text-white/80">
            Omber Sigorta ile ihtiyaçlarınıza uygun sigorta çözümlerini hızlıca
            değerlendirebilirsiniz.
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
