import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="metal-card p-16 text-center w-[80%]"
      >
        <h1 className="text-7xl font-bold tracking-widest">
          ZORO
        </h1>

        <p className="mt-5 text-gray-400 text-xl">
          Full Stack Developer • DevOps Engineer • CI/CD
        </p>

        <button className="mt-10 px-8 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 duration-300">
          Explore
        </button>
      </motion.div>
    </section>
  )
}
