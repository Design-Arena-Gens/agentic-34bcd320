export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Hi there! 👋
        </h1>
        <p className="text-2xl text-white/90">
          Welcome to your Next.js application
        </p>
        <div className="pt-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <p className="text-sm">Deployed with Vercel</p>
          </div>
        </div>
      </div>
    </main>
  );
}
