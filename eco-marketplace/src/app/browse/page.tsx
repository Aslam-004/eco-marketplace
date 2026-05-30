"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs, deleteDoc, doc, } from "firebase/firestore";

export default function BrowsePage() {
  const [materials, setMaterials] = useState<any[]>([]);

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

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {materials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-bold">
              {item.material}
            </h2>

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