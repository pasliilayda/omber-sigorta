import Navbar from "@/components/Navbar";
export const metadata = {
  title: "KKTC’de Sigorta Seçerken Nelere Dikkat Etmelisiniz? | Omber Sigorta",
  description:
    "KKTC’de sigorta seçerken dikkat edilmesi gereken önemli noktaları öğrenin. Doğru poliçeyi seçmek için rehber içerik.",
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
            KKTC’de Sigorta Seçerken Nelere Dikkat Etmelisiniz?
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
            Sigorta seçimi yalnızca fiyat karşılaştırması yapmak değildir. Doğru
            poliçe; ihtiyaçlarınıza uygun teminatları ve güvenilir hizmeti
            birlikte sunmalıdır.
          </p>

          <div className="mt-12 space-y-10 text-lg leading-9 text-[#4d5b6b]">
            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                1. Poliçe kapsamını mutlaka inceleyin
              </h2>

              <p className="mt-4">
                Bazı poliçeler düşük fiyatlı görünse de kapsamları sınırlı
                olabilir. Hangi risklerin güvence altında olduğunu detaylıca
                öğrenmek önemlidir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                2. Sadece fiyata odaklanmayın
              </h2>

              <p className="mt-4">
                En ucuz poliçe her zaman en doğru seçenek olmayabilir. Hasar
                süreçleri, destek hizmetleri ve ek teminatlar da
                değerlendirilmelidir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                3. İhtiyacınıza uygun sigorta türünü seçin
              </h2>

              <p className="mt-4">
                Araç, sağlık, konut veya iş yeri sigortalarında ihtiyaçlar
                farklıdır. Kullanım şeklinize göre doğru poliçe tercih
                edilmelidir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                4. Hasar süreçlerini öğrenin
              </h2>

              <p className="mt-4">
                Olası bir hasar durumunda nasıl ilerleyeceğinizi önceden bilmek,
                süreci daha güvenli ve hızlı yönetmenizi sağlar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                5. Güvenilir danışmanlık önemlidir
              </h2>

              <p className="mt-4">
                Doğru yönlendirme almak, ihtiyaçlarınıza uygun poliçeyi
                seçmenizde büyük fark yaratabilir.
              </p>
            </section>
          </div>

          <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
            <h2 className="text-3xl font-black">
              Size Uygun Sigorta Çözümünü Birlikte Belirleyelim
            </h2>

            <p className="mt-4 max-w-2xl text-white/80">
              Omber Sigorta ile ihtiyaçlarınıza uygun sigorta seçenekleri
              hakkında bilgi alabilirsiniz.
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
