export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image with Zoom Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568066857905-5106db3c6120?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-blue-700 font-['Montserrat'] mb-8">
              Excellent Execution Everytime
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Leading firm delivering strategic solutions in Business Development, Procurement and Engineering services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
