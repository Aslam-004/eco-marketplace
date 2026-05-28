export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-5xl font-bold text-green-700">
        EcoLoop
      </h1>

      <p className="mt-4 text-lg">
        Circular Economy Waste Marketplace
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
          Upload Waste
        </button>

        <button className="border border-green-600 px-6 py-3 rounded-lg">
          Browse Materials
        </button>
      </div>
    </main>
  )
}