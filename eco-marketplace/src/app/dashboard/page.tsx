"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function DashboardPage() {
  const [totalListings, setTotalListings] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(
        collection(db, "materials")
      );

      const docs = snapshot.docs.map((doc) => doc.data());

      setTotalListings(docs.length);

      const quantity = docs.reduce(
        (sum: number, item: any) =>
          sum + Number(item.quantity || 0),
        0
      );

      setTotalQuantity(quantity);
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-5xl font-bold text-green-700">
        Buyer Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl text-black font-bold">
            Total Listings
          </h2>

          <p className="text-4xl mt-4 text-green-700">
            {totalListings}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl text-black font-bold">
            Total Waste Quantity
          </h2>

          <p className="text-4xl mt-4 text-green-700">
            {totalQuantity} kg
          </p>
        </div>

      </div>
    </main>
  );
}