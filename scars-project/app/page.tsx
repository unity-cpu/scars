import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-black">
      <nav className="border-b border-red-900/30 bg-black/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-red-500">SCARS</h1>
          <Link
            href="/auth/signin"
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
          >
            Sign In
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="space-y-8 text-center">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Your Story, Your Brand
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create a unique bio profile with SCARS. Connect with Google, GitHub,
            or Discord and share your story with the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-2">Secure Login</h3>
              <p className="text-gray-400">
                Sign in with your favorite platforms
              </p>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Custom Bio</h3>
              <p className="text-gray-400">
                Express yourself with your personal bio
              </p>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-2">Shareable Profile</h3>
              <p className="text-gray-400">
                Get your unique profile URL to share
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/auth/signin"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition transform hover:scale-105"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
