'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#212529] text-[#E9ECEF] font-mono">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-[#343a40]">
        <div className="text-2xl font-bold text-[#FFFFFF]">Testovací Kavárna "U Kódu"</div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#hero" className="hover:text-[#FFFFFF] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#FFFFFF] transition-colors">O nás</a></li>
          <li><a href="#services" className="hover:text-[#FFFFFF] transition-colors">Služby</a></li>
          <li><a href="#team" className="hover:text-[#FFFFFF] transition-colors">Tým</a></li>
          <li><a href="#pricing" className="hover:text-[#FFFFFF] transition-colors">Ceny</a></li>
          <li><a href="#contact" className="hover:text-[#FFFFFF] transition-colors">Kontakt</a></li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] text-center p-8 bg-[#212529] border-b border-[#343a40]">
          <h1 className="text-5xl md:text-7xl font-bold text-[#FFFFFF] mb-4 drop-shadow-lg">Testovací Kavárna "U Kódu"</h1>
          <p className="text-xl md:text-2xl text-[#E9ECEF] mb-8">Nejlepší káva pro vaše bugy.</p>
          <a href="#about" className="px-8 py-3 bg-[#E9ECEF] text-[#212529] rounded-full font-semibold hover:bg-[#FFFFFF] transition-colors shadow-lg">Prozkoumat</a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8 max-w-4xl mx-auto border-b border-[#343a40]">
          <h2 className="text-4xl font-bold text-[#FFFFFF] mb-8 text-center">O nás</h2>
          <p className="text-lg leading-relaxed text-center">
            Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání.
            Naše specialita je "debuggovací doppio".
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-8 max-w-6xl mx-auto border-b border-[#343a40]">
          <h2 className="text-4xl font-bold text-[#FFFFFF] mb-12 text-center">Naše služby</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2c3137] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Premium Káva</h3>
              <p className="text-[#E9ECEF]">Široký výběr zrnkové kávy od lokálních i zahraničních dodavatelů.</p>
            </div>
            <div className="bg-[#2c3137] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Pracovní Prostor</h3>
              <p className="text-[#E9ECEF]">Klidné koutky s WiFi a dostatkem zásuvek pro vaši práci.</p>
            </div>
            <div className="bg-[#2c3137] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Technická Podpora</h3>
              <p className="text-[#E9ECEF]">Přátelská konverzace o programování k každé kávě.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 px-8 max-w-4xl mx-auto border-b border-[#343a40]">
          <h2 className="text-4xl font-bold text-[#FFFFFF] mb-12 text-center">Náš Tým</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2c3137] p-8 rounded-lg text-center shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#343a40] flex items-center justify-center text-5xl text-[#E9ECEF]">
                {/* Placeholder for avatar, could be an SVG or image */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Alena Kávová</h3>
              <p className="text-[#E9ECEF]">Majitelka & Senior Barista</p>
            </div>
            <div className="bg-[#2c3137] p-8 rounded-lg text-center shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#343a40] flex items-center justify-center text-5xl text-[#E9ECEF]">
                {/* Placeholder for avatar, could be an SVG or image */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Tomáš Koder</h3>
              <p className="text-[#E9ECEF]">IT Podpora & Kávový Nadšenec</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-8 max-w-6xl mx-auto border-b border-[#343a40]">
          <h2 className="text-4xl font-bold text-[#FFFFFF] mb-12 text-center">Ceník</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2c3137] p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Malá Káva</h3>
              <p className="text-5xl font-bold text-[#FFFFFF] mb-4">70 Kč</p>
              <ul className="text-[#E9ECEF] text-left mx-auto max-w-[200px]">
                <li className="mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Espresso
                </li>
                <li className="mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Americano
                </li>
              </ul>
            </div>
            <div className="bg-[#2c3137] p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-2 border-[#E9ECEF]">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Střední Káva</h3>
              <p className="text-5xl font-bold text-[#FFFFFF] mb-4">90 Kč</p>
              <ul className="text-[#E9ECEF] text-left mx-auto max-w-[200px]">
                <li className="mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Latte
                </li>
                <li className="mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Cappuccino
                </li>
                <li className="mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Debuggovací Doppio
                </li>
              </ul>
            </div>
            <div className="bg-[#2c3137] p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Velká Káva</h3>
              <p className="text-5xl font-bold text-[#FFFFFF] mb-4">110 Kč</p>
              <ul className="text-[#E9ECEF] text-left mx-auto max-w-[200px]">
                <li className="mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Cold Brew 0.5l
                </li>
                <li className="mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Filter Coffee 0.5l
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#FFFFFF] mb-8">Kontakt</h2>
          <div className="text-lg leading-relaxed space-y-4">
            <p><strong className="text-[#FFFFFF]">Email:</strong> test@kavarna.cz</p>
            <p><strong className="text-[#FFFFFF]">Telefon:</strong> +420 777 123 456</p>
            <p><strong className="text-[#FFFFFF]">Adresa:</strong> Bugfixová 1, 110 00 Praha 1</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#E9ECEF] border-t border-[#343a40]">
        &copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.
      </footer>
    </div>
  );
}
