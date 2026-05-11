import Link from "next/link";

export const metadata = {
  title: "Sigorta Rehberi | Omber Sigorta",
  description:
    "KKTC trafik sigortası, kasko, navlun sigortası, konut, sağlık ve iş yeri sigortası hakkında bilgilendirici rehberler.",
};

const posts = [
  {
    category: "Kasko",
    title: "KKTC’de Kasko Yaptırmazsanız Ne Olur?",
    desc: "Kasko olmayan araç sahiplerini bekleyen maddi riskleri öğrenin.",
    href: "/blog/kktc-kasko-yaptirmazsaniz-ne-olur",
    read: "4 dk",
  },
  {
    category: "Araç",
    title: "Araç Kazalarında En Çok Yapılan 5 Hata",
    desc: "Kaza sonrası sürücülerin yaptığı kritik hatalar ve dikkat edilmesi gerekenler.",
    href: "/blog/arac-kazalarinda-en-cok-yapilan-hatalar",
    read: "5 dk",
  },
  {
    category: "Genel",
    title: "KKTC’de Sigorta Seçerken Nelere Dikkat Etmelisiniz?",
    desc: "Doğru poliçeyi seçerken dikkat edilmesi gereken önemli detaylar.",
    href: "/blog/kktc-sigorta-secerken-nelere-dikkat-edilmeli",
    read: "5 dk",
  },
  {
    category: "Navlun",
    title: "Navlun Sigortası Olmadan Yük Taşımanın Riskleri",
    desc: "Taşımacılık sürecinde oluşabilecek maddi kayıpları keşfedin.",
    href: "/blog/navlun-sigortasi-olmadan-riskler",
    read: "4 dk",
  },
  {
    category: "Konut",
    title: "Konut Sigortası Gerçekten Gerekli mi?",
    desc: "Ev sahipleri ve kiracılar için konut sigortasının önemi.",
    href: "/blog/konut-sigortasi-gerekli-mi",
    read: "4 dk",
  },
  {
    category: "Sağlık",
    title: "Sağlık Sigortası Size Uzun Vadede Nasıl Kazandırır?",
    desc: "Sağlık sigortasının uzun vadeli avantajlarını öğrenin.",
    href: "/blog/saglik-sigortasi-avantajlari",
    read: "5 dk",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-[#071f3d]">
      <section className="bg-gradient-to-br from-white via-[#f5f9fd] to-[#dceaf5] px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-black tracking-[0.3em] text-[#c48725]">
            OMBER SİGORTA REHBERİ
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            KKTC’de sigorta hakkında bilmeniz gerekenler
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#566273]">
            Trafik sigortası, kasko, navlun, konut ve sağlık sigortası hakkında
            sade, anlaşılır ve güvenilir rehberler.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <Link
            href="/blog/kktc-kasko-zorunlu-mu"
            className="rounded-[2rem] bg-[#071f3d] p-8 text-white shadow-xl lg:col-span-2"
          >
            <span className="rounded-full bg-[#c48725] px-4 py-2 text-sm font-black">
              Öne Çıkan Rehber
            </span>

            <h2 className="mt-8 text-3xl font-black md:text-5xl">
              KKTC’de Kasko Zorunlu mu?
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/75">
              Kasko sigortasının zorunlu olup olmadığını, trafik sigortasından
              farklarını ve aracınızı neden koruma altına almanız gerektiğini
              öğrenin.
            </p>

            <p className="mt-8 font-black text-[#c48725]">Devamını Oku →</p>
          </Link>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black">Rehber Kategorileri</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Tümü", "Araç", "Kasko", "Navlun", "Konut", "Sağlık"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e1e6ee] px-4 py-2 text-sm font-bold text-[#566273]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="rounded-[2rem] border border-[#e6ebf1] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#fff4df] px-4 py-2 text-xs font-black text-[#c48725]">
                  {post.category}
                </span>

                <span className="text-sm font-bold text-[#8893a2]">
                  {post.read}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black">{post.title}</h2>

              <p className="mt-4 leading-7 text-[#566273]">{post.desc}</p>

              <p className="mt-7 font-black text-[#071f3d]">Devamını Oku →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
