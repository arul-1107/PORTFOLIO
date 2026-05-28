export default function Contact() {
  return (
    <section className="p-20 text-center">
      <h2 className="text-5xl font-bold mb-10">Contact</h2>

      <div className="metal-card p-10 w-[60%] mx-auto">
        <input
          placeholder="Name"
          className="w-full p-4 mb-5 bg-black border border-gray-700 rounded-xl"
        />

        <input
          placeholder="Email"
          className="w-full p-4 mb-5 bg-black border border-gray-700 rounded-xl"
        />

        <textarea
          placeholder="Message"
          className="w-full p-4 h-40 bg-black border border-gray-700 rounded-xl"
        />

        <button className="mt-5 px-8 py-3 bg-white text-black rounded-xl font-bold">
          Send
        </button>
      </div>
    </section>
  )
}
