"use client";

import { useState } from "react";
import { db } from "@/firebase/config";

import {
  collection,
  addDoc,
} from "firebase/firestore";

export default function UploadPage() {

  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Plastic");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {

      await addDoc(collection(db, "materials"), {
        material,
        quantity,
        category,
        description,
        createdAt: new Date(),
      });

      alert("Waste uploaded successfully!");

      setMaterial("");
      setQuantity("");
      setDescription("");

    } catch (error) {
      console.error(error);
      alert("Error uploading waste");
    }
  };

  return (
    <main className="min-h-screen text-green-700 p-10 bg-white">

      <h1 className="text-5xl font-bold ">
        Upload Waste
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-xl space-y-6"
      >

        <input
          type="text"
          placeholder="Material Name"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="number"
          placeholder="Quantity (kg)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border p-4 rounded-xl"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-4 rounded-xl"
        >
          <option>Plastic</option>
          <option>Metal</option>
          <option>Paper</option>
          <option>Glass</option>
          <option>E-Waste</option>
        </select>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-4 rounded-xl h-40"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-4 rounded-xl"
        >
          Submit
        </button>

      </form>

    </main>
  );
}