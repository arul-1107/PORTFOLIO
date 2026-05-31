import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    try {
      const res = await fetch("http://localhost:8091/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message Sent!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send");
      }
    } catch (err) {
      console.error(err);
      alert("Backend not reachable");
    }
  };

  return (
    <section className="p-20 text-center">
      <h2 className="text-5xl font-bold mb-10">Contact</h2>

      <div className="metal-card p-10 w-[60%] mx-auto">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-4 mb-5 bg-black border border-gray-700 rounded-xl"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-4 mb-5 bg-black border border-gray-700 rounded-xl"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-4 h-40 bg-black border border-gray-700 rounded-xl"
        />

        <button
          onClick={sendMessage}
          className="mt-5 px-8 py-3 bg-white text-black rounded-xl font-bold"
        >
          Send
        </button>
      </div>
    </section>
  );
}
