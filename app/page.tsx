"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Car,
  ShieldCheck,
  Home,
  HeartPulse,
  Plane,
  Briefcase,
  Phone,
  MessageCircle,
  Send,
  Lock,
  Clock,
  Users,
  Headphones,
  House,
  Menu,
  X,
  Ship,
  ChevronDown,
  Languages,
} from "lucide-react";

const data = {
  tr: {
    nav: [
      "Ana Sayfa",
      "Hizmetlerimiz",
      "Hakkımızda",
      "Sık Sorulanlar",
      "İletişim",
    ],
    badge: "HEP YANINIZDA, HEP GÜVENDE",
    heroTitle: "Güvenilir Sigorta Çözümleri Omber ile Yanınızda.",
    heroText:
      "Trafikten sağlığa, konuttan seyahate tüm sigorta ihtiyaçlarınız için hızlı, güvenilir ve kişiye özel çözümler sunuyoruz.",
    cta: "BİLGİ ALMAK İSTİYORUM",
    whatsapp: "WHATSAPP’TAN ULAŞ",
    servicesLabel: "HİZMETLERİMİZ",
    servicesTitle: "İhtiyacınıza Uygun Sigorta Çözümleri",
    aboutLabel: "HAKKIMIZDA",
    aboutTitle: "KKTC’de güven veren sigorta danışmanlığı",
    aboutText:
      "Omber Sigorta olarak KKTC’de bireysel ve kurumsal müşterilerimize modern, hızlı ve güvenilir sigorta danışmanlığı sunuyoruz. Amacımız yalnızca poliçe oluşturmak değil; ihtiyaçlarınızı doğru analiz eden, ulaşılabilir ve şeffaf bir danışmanlık deneyimi sağlamaktır.",
    contactLabel: "BİZE ULAŞIN",
    contactTitle: "Bilgilerinizi Bırakın, Sizi Arayalım",
    contactText:
      "Size en uygun sigorta çözümleri için formu doldurun. Ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    name: "Ad Soyad",
    phone: "Telefon",
    select: "Sigorta Türü Seçiniz",
    note: "Kısa Notunuz (isteğe bağlı)",
    privacy: "Bilgileriniz gizli tutulur ve üçüncü şahıslarla paylaşılmaz.",
    faqLabel: "SIK SORULAN SORULAR",
    faqTitle: "KKTC Sigorta Hakkında Merak Edilenler",
    faqText:
      "Trafik sigortası, kasko, navlun sigortası ve diğer sigorta hizmetleri hakkında en çok merak edilen konuları sizin için derledik.",
    formMessage: "Merhaba, Omber Sigorta hakkında bilgi almak istiyorum.",
    services: [
      ["Trafik Sigortası", "Zorunlu trafik sigortası ile güvende kalın.", Car],
      ["Kasko", "Aracınızı olası risklere karşı koruyun.", ShieldCheck],
      [
        "Konut Sigortası",
        "Evinizi ve sevdiklerinizi güvence altına alın.",
        Home,
      ],
      ["Sağlık Sigortası", "Sağlığınız bizim için önemli.", HeartPulse],
      ["Seyahat Sigortası", "Yolculuklarınızda içiniz rahat olsun.", Plane],
      [
        "İşyeri Sigortası",
        "İşinizi güvence altına almanın tam zamanı.",
        Briefcase,
      ],
      [
        "Navlun Sigortası",
        "Taşımacılık süreçlerinde yüklerinizi güvence altına alın.",
        Ship,
      ],
    ],
    faq: [
      [
        "KKTC’de trafik sigortası zorunlu mudur?",
        "Evet. KKTC’de trafiğe çıkan araçlar için trafik sigortası zorunludur. Trafik sigortası, olası bir kazada karşı tarafın maddi zararlarını güvence altına almak için yapılır.",
      ],
      [
        "Trafik sigortası ile kasko arasındaki fark nedir?",
        "Trafik sigortası karşı tarafın zararlarını karşılayan zorunlu bir sigorta türüdür. Kasko ise sizin aracınızı çarpma, çalınma, yangın, doğal afet ve benzeri risklere karşı koruyabilen isteğe bağlı bir sigortadır.",
      ],
      [
        "Kasko sigortası zorunlu mudur?",
        "Hayır. Kasko zorunlu değildir. Ancak aracınızı beklenmedik hasarlara, hırsızlığa, yangına ve farklı risklere karşı korumak istiyorsanız kasko yaptırmak önemli bir güvence sağlar.",
      ],
      [
        "KKTC’de kasko neleri kapsayabilir?",
        "Kasko poliçesinin kapsamı seçilen teminatlara göre değişebilir. Çarpışma, çalınma, yangın, doğal afet, cam kırılması, çekici ve yol yardım gibi ek teminatlar poliçeye göre dahil edilebilir.",
      ],
      [
        "Navlun sigortası nedir?",
        "Navlun sigortası; kara, hava veya deniz taşımacılığı sırasında taşınan malların hasar, kayıp veya taşıma sürecinde oluşabilecek risklere karşı güvence altına alınmasını sağlar.",
      ],
      [
        "Navlun sigortası kimler için önemlidir?",
        "İthalat, ihracat, lojistik, taşımacılık veya ticaret yapan işletmeler için navlun sigortası oldukça önemlidir. Taşınan yükün değeri yüksekse olası hasarlarda büyük finansal kayıpları önleyebilir.",
      ],
      [
        "Konut sigortası neden yaptırılır?",
        "Konut sigortası evinizi yangın, su baskını, hırsızlık, doğal afet ve poliçe kapsamına göre farklı risklere karşı güvence altına alabilir. Ev sahipleri ve kiracılar için önemli bir koruma sağlar.",
      ],
      [
        "Sağlık sigortası neleri kapsar?",
        "Sağlık sigortasının kapsamı poliçeye göre değişir. Muayene, tedavi, hastane masrafları, ameliyat giderleri ve bazı özel sağlık hizmetleri poliçe kapsamında olabilir.",
      ],
      [
        "Sigorta fiyatları nasıl belirlenir?",
        "Sigorta fiyatları; sigorta türüne, aracın veya mülkün özelliklerine, kullanım amacına, teminat kapsamına, risk durumuna ve geçmiş hasar bilgilerine göre değişebilir.",
      ],
      [
        "En uygun sigorta teklifini nasıl alabilirim?",
        "Web sitemizdeki formu doldurarak veya WhatsApp üzerinden Omber Sigorta’ya ulaşarak ihtiyacınıza uygun seçenekler hakkında bilgi alabilirsiniz.",
      ],
    ],
  },
  en: {
    nav: ["Home", "Services", "About", "FAQ", "Contact"],
    badge: "ALWAYS WITH YOU, ALWAYS SECURE",
    heroTitle: "Reliable Insurance Solutions with Omber.",
    heroText:
      "From motor insurance to health, home, travel and cargo insurance, we provide fast, reliable and personalized solutions.",
    cta: "GET INFORMATION",
    whatsapp: "CONTACT ON WHATSAPP",
    servicesLabel: "SERVICES",
    servicesTitle: "Insurance Solutions for Your Needs",
    aboutLabel: "ABOUT US",
    aboutTitle: "Trusted insurance consultancy in Northern Cyprus",
    aboutText:
      "At Omber Insurance, we provide modern, fast and reliable insurance consultancy for individual and corporate clients in Northern Cyprus. Our goal is not only to issue policies, but also to offer a transparent, accessible and trust-based consultancy experience.",
    contactLabel: "CONTACT US",
    contactTitle: "Leave Your Details, We Will Call You",
    contactText:
      "Fill out the form to receive information about the most suitable insurance solutions for your needs.",
    name: "Full Name",
    phone: "Phone",
    select: "Select Insurance Type",
    note: "Short Note (optional)",
    privacy:
      "Your information is kept confidential and is not shared with third parties.",
    faqLabel: "FAQ",
    faqTitle: "Frequently Asked Questions About Insurance in Northern Cyprus",
    faqText:
      "We have gathered the most common questions about motor insurance, comprehensive cover, cargo insurance and other insurance services.",
    formMessage:
      "Hello, I would like to get information about Omber Insurance.",
    services: [
      [
        "Motor Insurance",
        "Stay protected with compulsory motor insurance.",
        Car,
      ],
      [
        "Comprehensive Cover",
        "Protect your vehicle against possible risks.",
        ShieldCheck,
      ],
      ["Home Insurance", "Secure your home and loved ones.", Home],
      ["Health Insurance", "Your health matters to us.", HeartPulse],
      ["Travel Insurance", "Travel with peace of mind.", Plane],
      [
        "Business Insurance",
        "Protect your business with the right coverage.",
        Briefcase,
      ],
      ["Cargo Insurance", "Secure your goods during transportation.", Ship],
    ],
    faq: [
      [
        "Is motor insurance compulsory in Northern Cyprus?",
        "Yes. Motor insurance is compulsory for vehicles used in traffic. It is designed to cover third-party damages that may occur in an accident.",
      ],
      [
        "What is the difference between motor insurance and comprehensive cover?",
        "Motor insurance covers third-party damages and is compulsory. Comprehensive cover is optional and can protect your own vehicle against accident, theft, fire, natural disasters and similar risks.",
      ],
      [
        "Is comprehensive car insurance compulsory?",
        "No. Comprehensive cover is not compulsory. However, it provides important protection for your vehicle against unexpected damages and risks.",
      ],
      [
        "What can comprehensive cover include?",
        "Depending on the policy, comprehensive cover may include collision, theft, fire, natural disasters, glass damage, towing and roadside assistance.",
      ],
      [
        "What is cargo insurance?",
        "Cargo insurance protects goods transported by land, sea or air against loss, damage or transportation-related risks.",
      ],
      [
        "Who needs cargo insurance?",
        "Cargo insurance is especially important for importers, exporters, logistics companies and businesses transporting valuable goods.",
      ],
      [
        "Why is home insurance important?",
        "Home insurance can protect your property against fire, water damage, theft, natural disasters and other risks depending on the policy.",
      ],
      [
        "What can health insurance cover?",
        "Health insurance coverage may include doctor visits, treatment, hospital expenses, surgery and certain private healthcare services depending on the policy.",
      ],
      [
        "How are insurance prices calculated?",
        "Insurance prices depend on the type of insurance, risk factors, coverage, vehicle or property details, usage type and previous claims history.",
      ],
      [
        "How can I get the most suitable insurance offer?",
        "You can fill out the contact form or reach Omber Insurance via WhatsApp to receive information about suitable options.",
      ],
    ],
  },
};

export default function Page() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    note: "",
  });

  const t = data[lang];
  const whatsappNumber = "905488504194";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `${t.formMessage}%0A%0A${t.name}: ${form.name}%0A${t.phone}: ${form.phone}%0A${t.select}: ${form.service}%0A${t.note}: ${form.note}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-[#071f3d]">
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-4 py-4 shadow-sm backdrop-blur-md sm:px-6 md:px-12 lg:px-20">
        <img
          src="/logo.png"
          alt="Omber Sigorta"
          className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
        />

        <div className="hidden items-center gap-6 text-sm font-bold tracking-wide md:flex lg:gap-10 lg:text-base xl:gap-14 xl:text-lg">
          <a className="text-[#c48725]" href="#">
            {t.nav[0]}
          </a>
          <a href="#services">{t.nav[1]}</a>
          <a href="#about">{t.nav[2]}</a>
          <a href="#faq">{t.nav[3]}</a>

          <a href="/blog">{lang === "tr" ? "Rehberler" : "Guides"}</a>

          <a href="#form">{t.nav[4]}</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="flex items-center gap-2 rounded-full border border-[#dfe4eb] px-4 py-3 text-sm font-black"
          >
            <Languages size={17} />
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <a
            href="#form"
            className="rounded-full bg-[#071f3d] px-5 py-3 text-xs font-extrabold text-white shadow-lg transition hover:bg-[#123862] sm:px-7 sm:py-4 sm:text-sm"
          >
            {t.cta}
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-full bg-[#071f3d] p-3 text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="relative z-40 border-t border-[#e7ebf2] bg-white px-6 py-6 shadow-md md:hidden">
          <div className="flex flex-col gap-5 text-lg font-bold">
            <a onClick={closeMenu} className="text-[#c48725]" href="#">
              {t.nav[0]}
            </a>
            <a onClick={closeMenu} href="#services">
              {t.nav[1]}
            </a>
            <a onClick={closeMenu} href="#about">
              {t.nav[2]}
            </a>
            <a onClick={closeMenu} href="#faq">
              {t.nav[3]}
            </a>
            <a onClick={closeMenu} href="/blog">
              {lang === "tr" ? "Rehberler" : "Guides"}
            </a>
            <a onClick={closeMenu} href="#form">
              {t.nav[4]}
            </a>
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="rounded-full border border-[#dfe4eb] px-6 py-4 text-left font-black"
            >
              {lang === "tr" ? "English Mode" : "Türkçe Mod"}
            </button>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f5f9fd] to-[#dceaf5] px-4 py-14 sm:px-6 md:px-14 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative z-10">
            <p className="mb-5 text-xs font-extrabold tracking-[0.22em] text-[#c48725] sm:text-sm">
              {t.badge}
            </p>

            <h1 className="max-w-xl text-4xl font-black leading-[1.08] sm:text-5xl md:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#566273] sm:text-lg">
              {t.heroText}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#071f3d] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:bg-[#123862]"
              >
                <Phone size={18} />
                {t.cta}
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#071f3d]/25 bg-white px-7 py-4 text-sm font-extrabold text-[#071f3d] transition hover:bg-[#f2f5f8]"
              >
                <MessageCircle size={18} />
                {t.whatsapp}
              </a>
              <a
                href="tel:+905488504194"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c48725]/30 bg-[#fff7eb] px-7 py-4 text-sm font-extrabold text-[#071f3d] transition hover:bg-[#ffe9c2]"
              >
                <Phone size={18} />
                {lang === "tr" ? "ARA" : "CALL"}
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] sm:min-h-[430px] md:min-h-[500px]">
            <div className="absolute right-0 top-4 h-[260px] w-[260px] rounded-full bg-[#071f3d]/10 blur-3xl sm:h-[360px] sm:w-[360px]" />

            <div className="absolute right-4 top-8 z-20 flex h-44 w-44 items-center justify-center rounded-[2rem] bg-[#071f3d] shadow-2xl sm:right-10 sm:h-60 sm:w-60 md:right-20 md:h-72 md:w-72">
              <ShieldCheck className="h-24 w-24 text-[#c48725] sm:h-32 sm:w-32 md:h-36 md:w-36" />
            </div>

            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1400&auto=format&fit=crop"
              alt="Omber Sigorta"
              className="absolute bottom-0 right-0 z-30 h-[230px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[300px] md:right-4 md:h-[330px] md:w-[520px]"
            />

            <div className="absolute right-0 top-32 z-10 h-[260px] w-full rounded-[2rem] bg-white/70 shadow-xl backdrop-blur sm:h-[330px] md:w-[430px]" />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-white px-4 py-16 sm:px-6 md:px-14 md:py-20"
      >
        <div className="text-center">
          <p className="text-sm font-extrabold tracking-[0.24em] text-[#c48725]">
            {t.servicesLabel}
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            {t.servicesTitle}
          </h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-[#c48725]" />
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
          {t.services.map(([title, desc, Icon]: any) => (
            <div
              key={title}
              className="rounded-3xl border border-[#e6ebf1] bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff4df] text-[#071f3d]">
                <Icon size={34} />
              </div>
              <h3 className="mt-6 font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#566273]">{desc}</p>
              <a
                href={
                  title === "Kasko" || title === "Comprehensive Cover"
                    ? "/kasko"
                    : title === "Trafik Sigortası" ||
                        title === "Motor Insurance"
                      ? "/trafik-sigortasi"
                      : title === "Navlun Sigortası" ||
                          title === "Cargo Insurance"
                        ? "/navlun-sigortasi"
                        : title === "Konut Sigortası" ||
                            title === "Home Insurance"
                          ? "/konut-sigortasi"
                          : title === "Sağlık Sigortası" ||
                              title === "Health Insurance"
                            ? "/saglik-sigortasi"
                            : title === "Seyahat Sigortası" ||
                                title === "Travel Insurance"
                              ? "/seyahat-sigortasi"
                              : title === "İşyeri Sigortası" ||
                                  title === "Business Insurance"
                                ? "/isyeri-sigortasi"
                                : "#form"
                }
                className="mt-6 inline-block text-sm font-extrabold"
              >
                {lang === "tr" ? "Detaylı Bilgi →" : "More Details →"}
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f7f8fb] px-4 py-16 sm:px-6 md:px-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold tracking-[0.24em] text-[#c48725]">
                {lang === "tr" ? "REHBERLER" : "GUIDES"}
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {lang === "tr"
                  ? "Sigorta Hakkında Bilmeniz Gerekenler"
                  : "What You Need To Know About Insurance"}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#566273]">
                {lang === "tr"
                  ? "KKTC trafik sigortası, kasko, navlun ve sağlık sigortası hakkında rehber içerikler."
                  : "Guides about motor insurance, comprehensive cover, cargo and health insurance in Northern Cyprus."}
              </p>
            </div>

            <a
              href="/blog"
              className="rounded-full bg-[#071f3d] px-7 py-4 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#123862]"
            >
              {lang === "tr" ? "Tüm Rehberler →" : "All Guides →"}
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title:
                  lang === "tr"
                    ? "KKTC’de Kasko Zorunlu mu?"
                    : "Is Comprehensive Cover Mandatory in Northern Cyprus?",
                desc:
                  lang === "tr"
                    ? "Kasko ile trafik sigortası arasındaki farkları öğrenin."
                    : "Learn the differences between comprehensive cover and motor insurance.",
                href: "/blog/kktc-kasko-zorunlu-mu",
              },
              {
                title:
                  lang === "tr"
                    ? "Araç Kazalarında En Çok Yapılan 5 Hata"
                    : "Top 5 Mistakes After Car Accidents",
                desc:
                  lang === "tr"
                    ? "Kaza sonrası sürücülerin yaptığı kritik hataları öğrenin."
                    : "Learn the most common mistakes drivers make after accidents.",
                href: "/blog/arac-kazalarinda-en-cok-yapilan-5-hata",
              },
              {
                title:
                  lang === "tr"
                    ? "KKTC’de Sigorta Seçerken Nelere Dikkat Etmelisiniz?"
                    : "What Should You Consider When Choosing Insurance in Cyprus?",
                desc:
                  lang === "tr"
                    ? "Doğru sigorta poliçesini seçerken dikkat edilmesi gerekenler."
                    : "Things to consider when choosing the right insurance policy.",
                href: "/blog/kktc-sigorta-secerken-nelere-dikkat-edilmeli",
              },
            ].map((post) => (
              <a
                key={post.href}
                href={post.href}
                className="rounded-[2rem] border border-[#e6ebf1] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-full bg-[#fff4df] px-4 py-2 text-xs font-black text-[#c48725]">
                  {lang === "tr" ? "REHBER" : "GUIDE"}
                </div>

                <h3 className="mt-6 text-2xl font-black leading-tight">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-[#566273]">{post.desc}</p>

                <p className="mt-7 font-black text-[#071f3d]">
                  {lang === "tr" ? "Devamını Oku →" : "Read More →"}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="bg-[#f7f8fb] px-4 py-16 sm:px-6 md:px-14 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-extrabold tracking-[0.24em] text-[#c48725]">
              {t.aboutLabel}
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {t.aboutTitle}
            </h2>
          </div>
          <p className="leading-8 text-[#566273]">{t.aboutText}</p>
        </div>
      </section>

      <section
        id="faq"
        className="bg-white px-4 py-16 sm:px-6 md:px-14 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-extrabold tracking-[0.24em] text-[#c48725]">
              {t.faqLabel}
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {t.faqTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#566273]">
              {t.faqText}
            </p>
          </div>

          <div className="mt-12 grid gap-4">
            {t.faq.map(([q, a], index) => (
              <div
                key={q}
                className="rounded-[1.5rem] border border-[#e6ebf1] bg-[#f8fafc] shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-5 p-6 text-left text-lg font-black"
                >
                  {q}
                  <ChevronDown
                    className={`shrink-0 text-[#c48725] transition ${openFaq === index ? "rotate-180" : ""}`}
                    size={24}
                  />
                </button>
                {openFaq === index && (
                  <p className="border-t border-[#e6ebf1] px-6 pb-6 pt-5 leading-8 text-[#566273]">
                    {a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="form"
        className="relative overflow-hidden bg-gradient-to-br from-[#f7ead5] via-[#f8fafc] to-white px-4 py-16 sm:px-6 md:px-14 md:py-24"
      >
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold tracking-[0.24em] text-[#c48725]">
              {t.contactLabel}
            </p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              {t.contactTitle}
            </h2>
            <div className="mt-5 h-1 w-12 bg-[#c48725]" />
            <p className="mt-7 max-w-md leading-8 text-[#566273]">
              {t.contactText}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-7 md:p-9"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                required
                placeholder={t.name}
                className="rounded-2xl border border-[#dfe4eb] px-5 py-4 outline-none"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                placeholder={t.phone}
                className="rounded-2xl border border-[#dfe4eb] px-5 py-4 outline-none"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <select
              required
              className="mt-5 w-full rounded-2xl border border-[#dfe4eb] px-5 py-4 outline-none"
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="">{t.select}</option>
              {t.services.map(([title]: any) => (
                <option key={title}>{title}</option>
              ))}
            </select>

            <textarea
              rows={5}
              placeholder={t.note}
              className="mt-5 w-full rounded-2xl border border-[#dfe4eb] px-5 py-4 outline-none"
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />

            <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#071f3d] px-8 py-5 font-black text-white transition hover:bg-[#123862]">
              <Send size={20} />
              {t.cta}
            </button>

            <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-[#566273]">
              <Lock size={16} />
              {t.privacy}
            </p>
          </form>
        </div>

        <div className="relative z-10 mx-auto mt-14 grid max-w-7xl gap-6 rounded-3xl bg-[#071f3d] p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              lang === "tr" ? "GÜVEN" : "TRUST",
              lang === "tr"
                ? "Güvenilir ve şeffaf hizmet anlayışı"
                : "Reliable and transparent service",
              ShieldCheck,
            ],
            [
              lang === "tr" ? "HIZ" : "SPEED",
              lang === "tr"
                ? "Hızlı teklif ve hızlı çözüm"
                : "Fast offer and fast solution",
              Clock,
            ],
            [
              lang === "tr" ? "DENEYİM" : "EXPERIENCE",
              lang === "tr"
                ? "Deneyimli danışmanlık yaklaşımı"
                : "Experienced consultancy approach",
              Users,
            ],
            [
              lang === "tr" ? "DESTEK" : "SUPPORT",
              lang === "tr"
                ? "Her an ulaşılabilir hizmet"
                : "Accessible support when needed",
              Headphones,
            ],
          ].map(([title, desc, Icon]: any) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="text-[#c48725]" size={38} />
              <div>
                <h3 className="font-black">{title}</h3>
                <p className="text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
