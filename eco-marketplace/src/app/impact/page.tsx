"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function ImpactPage() {
  const [totalWaste, setTotalWaste] = useState(0);
  const [co2Saved, setCo2Saved] = useState(0);

  useEffect(() => {
    const fetchImpact = async () => {
      const snapshot = await getDocs(
        collection(db, "materials")
      );

      const docs = snapshot.docs.map((doc) => doc.data());

      const waste = docs.reduce(
        (sum: number, item: any) =>
          sum + Number(item.quantity || 0),
        0
      );

      setTotalWaste(waste);

      // Example estimate:
      // 1 kg recycled waste = 1.8 kg CO₂ saved
      setCo2Saved(waste * 1.8);
    };

    fetchImpact();
  }, []);

  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-5xl font-bold text-green-700">
        Sustainability Impact
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-green-100 text-green-700 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Total Waste Recycled
          </h2>

          <p className="text-4xl mt-4">
            {totalWaste} kg
          </p>
        </div>

        <div className="bg-green-100 text-green-700 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Estimated CO₂ Saved
          </h2>

          <p className="text-4xl mt-4">
            {co2Saved.toFixed(0)} kg
          </p>
        </div>

      </div>
    </main>
  );
}