"use client";

import { useState } from "react";
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <main className="min-h-screen p-10 bg-green-50 text-green-700">
      <h1 className="text-5xl font-bold ">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mt-10 space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded-xl"
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-4 rounded-xl h-40"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-4 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}