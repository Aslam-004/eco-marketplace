export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 shadow-sm bg-white">
        <h1 className="text-3xl font-bold text-green-700">
          EcoLoop
        </h1>

        <div className="flex gap-6 font-medium">
          <a href="/browse" className="hover:text-green-600">
            Browse
          </a>

          <a href="/upload" className="hover:text-green-600">
            Upload
          </a>

          <a href="/dashboard" className="hover:text-green-600">
            Dashboard
          </a>

          <a href="/impact" className="hover:text-green-600">
            Impact
          </a>

          <a href="/contact" className="hover:text-green-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-6xl font-extrabold text-green-700 leading-tight">
          Turning Waste Into Opportunity
        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          A circular economy marketplace where industries can upload,
          buy, and recycle waste materials sustainably.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/upload"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
          >
            Upload Waste
          </a>

          <a
            href="/browse"
            className="border-2 border-green-600 text-green-700 hover:bg-green-100 px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Browse Materials
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-4xl font-bold text-green-700">
            1200+
          </h3>

          <p className="mt-3 text-gray-600">
            Waste listings uploaded
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-4xl font-bold text-green-700">
            85%
          </h3>

          <p className="mt-3 text-gray-600">
            Reduction in landfill waste
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-4xl font-bold text-green-700">
            300+
          </h3>

          <p className="mt-3 text-gray-600">
            Businesses connected
          </p>
        </div>

      </section>

      {/* About EcoLoop Section */}
      <section className="py-20 px-10 bg-white">
       <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-green-700">
         About EcoLoop
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
         EcoLoop is a circular economy marketplace that connects industries,
         recyclers, and buyers to transform waste into valuable resources.
         Instead of sending reusable materials to landfills, businesses can
         list their waste materials on EcoLoop, allowing others to purchase,
         recycle, or repurpose them sustainably.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

         <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-green-700">
           ♻️ Reduce Waste
          </h3>
          <p className="mt-3 text-gray-600">
           Divert reusable materials away from landfills.
          </p>
         </div>

         <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-green-700">
           🌱 Promote Sustainability
          </h3>
          <p className="mt-3 text-gray-600">
            Encourage responsible recycling and resource reuse.
          </p>
         </div>

         <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-green-700">
           🤝 Connect Businesses
          </h3>
          <p className="mt-3 text-gray-600">
            Create opportunities between waste producers and buyers.
          </p>
         </div>

        </div>
      </div>
</section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6">
        <p>
          © 2026 EcoLoop — Sustainable Waste Marketplace
        </p>
      </footer>
    </main>
  );
}