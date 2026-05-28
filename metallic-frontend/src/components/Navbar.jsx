export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md flex justify-between p-6 border-b border-gray-800 z-50">
      <h1 className="text-2xl font-bold">ZORO</h1>

      <div className="flex gap-8">
        <a href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}
