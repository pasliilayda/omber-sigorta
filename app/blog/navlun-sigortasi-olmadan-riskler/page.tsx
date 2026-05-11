import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Navlun Sigortası Olmadan Yük Taşımanın Riskleri | Omber Sigorta",
  description:
    "Navlun sigortası olmadan yük taşımanın doğurabileceği maddi riskleri ve taşımacılıkta sigortanın önemini öğrenin.",
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
            Navlun Sigortası Olmadan Yük Taşımanın Riskleri
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#4d5b6b]">
            Taşımacılık sürecinde ürünleriniz yalnızca varış noktasına gitmez;
            yol boyunca birçok riske de maruz kalır. Navlun sigortası bu
            risklere karşı önemli bir güvence sağlar.
          </p>

          <div className="mt-12 space-y-10 text-lg leading-9 text-[#4d5b6b]">
            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                1. Taşıma sırasında hasar oluşabilir
              </h2>
              <p className="mt-4">
                Yükleme, boşaltma, aktarma veya taşıma sırasında mallar zarar
                görebilir. Özellikle kırılabilir, yüksek değerli veya hassas
                ürünlerde bu risk daha yüksektir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                2. Kayıp ve eksilme riski vardır
              </h2>
              <p className="mt-4">
                Taşıma zincirinde ürünlerin kaybolması, eksik teslim edilmesi
                veya yanlış yönlendirilmesi gibi durumlar ticari zararlara yol
                açabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                3. Deniz, kara ve hava taşımacılığında farklı riskler oluşur
              </h2>
              <p className="mt-4">
                Deniz taşımacılığında hava koşulları, kara taşımacılığında kaza
                riski, hava taşımacılığında gecikme ve operasyonel riskler
                oluşabilir. Navlun sigortası bu süreçte finansal koruma sağlar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                4. Ticari itibar zarar görebilir
              </h2>
              <p className="mt-4">
                Ürünlerin hasarlı veya eksik ulaşması yalnızca maddi kayıp
                yaratmaz; müşteri ilişkilerini ve ticari güveni de
                etkileyebilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071f3d]">
                5. Doğru poliçe seçimi önemlidir
              </h2>
              <p className="mt-4">
                Navlun sigortasında yükün türü, taşıma şekli, rota ve ürün
                değeri dikkate alınmalıdır. Bu yüzden standart değil, ihtiyaca
                uygun poliçe seçimi yapılmalıdır.
              </p>
            </section>
          </div>

          <div className="mt-16 rounded-3xl bg-[#071f3d] p-10 text-white">
            <h2 className="text-3xl font-black">
              Navlun Sigortası İçin Bilgi Alın
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Taşıma süreçleriniz için uygun sigorta seçeneklerini Omber Sigorta
              ile değerlendirebilirsiniz.
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
