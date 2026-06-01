"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs, deleteDoc, doc, } from "firebase/firestore";

export default function BrowsePage() {
  const [materials, setMaterials] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchMaterials = async () => {
      const querySnapshot = await getDocs(collection(db, "materials"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMaterials(data);
    };

    fetchMaterials();
  }, []);

  const deleteMaterial = async (id: string) => {
  try {
    await deleteDoc(doc(db, "materials", id));

    setMaterials(
      materials.filter((item) => item.id !== id)
    );
  } catch (error) {
    console.error(error);
    alert("Failed to delete listing");
  }
};
  

  return (
    <main className="min-h-screen p-10 bg-green-50">
      <h1 className="text-5xl font-bold text-green-700">
        Browse Waste Materials
      </h1>

      <p className="mt-4 text-gray-600">
        Explore recyclable and reusable industrial waste materials.
      </p>

      <input
        type="text"
        placeholder="Search materials..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-6 w-full max-w-md border border-green-500 bg-green-100 text-green-800 placeholder:text-green-500 p-4 rounded-xl"
      />

      <div className="flex gap-2 flex-wrap mt-4">
        {["All", "Plastic", "Metal", "Paper", "Glass", "E-Waste"].map(
          (cat) => (
           <button
             key={cat}
             onClick={() => setSelectedCategory(cat)}
             className={`px-4 py-2 rounded-lg border ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-white"
            }`}
           >
            {cat}
           </button>
         )
       )}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {materials
          .filter((item) =>
            item.material
              ?.toLowerCase()
              .includes(search.toLowerCase())
          )
          .filter(
            (item) =>
              selectedCategory === "All" ||
              item.category === selectedCategory
          )
          .map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl text-blue-300 font-bold">
              {item.material}
            </h2>

            <p className="text-green-700 font-semibold mt-2">
              {item.category}
            </p>

            <p className="mt-2 text-gray-600">
              {item.quantity} kg available
            </p>

            <p className="mt-4 text-gray-500">
              {item.description}
            </p>
            <button
              onClick={() => deleteMaterial(item.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
               Delete
           </button>
          </div>
        ))}
      </div>
    </main>
  );
}