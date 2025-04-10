// Development Branch

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center px-4">
      <h1 className="font-sans text-4xl sm:text-3xl md:text-4xl lg:text-5xl bg-green-600 rounded-4xl w-full md:w-auto p-3 text-center text-white shadow-xl animate-bounce">
        🚧 Under Construction 🚧
      </h1>
      <div className="group relative overflow-hidden">
        <div className="transition-opacity opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
          <p className="text-xl text-white">Hang Tight! We will be up and running soon.</p>
        </div>
      </div>
    </div>
  );
}
