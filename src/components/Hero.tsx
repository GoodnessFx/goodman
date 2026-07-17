import SEO from "./SEO";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Goodman & Goldsmith",
  description:
    "Leading procurement consulting firm in Lagos, Nigeria delivering strategic procurement, business development, and engineering services.",
  url: "https://goodmanandgoldsmith.com",
  telephone: "+2349039884866",
  email: "goodmangoldsmithltd@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://linkedin.com/company/goodman-and-goldsmith"],
};

export default function Hero() {
  return (
    <>
      <SEO
        title="Procurement Consultants in Lagos, Nigeria"
        description="Goodman & Goldsmith delivers expert procurement services, business development, and engineering solutions in Lagos, Nigeria. Trusted procurement consultants for supply chain optimization."
        canonical="/"
        ogType="website"
        structuredData={localBusinessSchema}
      />
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568066857905-5106db3c6120?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-blue-700 font-['Montserrat'] mb-8">
                Excellent Execution Everytime
              </h1>
              <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
                Leading firm delivering strategic solutions in Business
                Development, Procurement and Engineering services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
