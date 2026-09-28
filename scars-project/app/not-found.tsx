import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-black flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-300">Profile not found</p>
        <p className="text-gray-400 max-w-md">
          The user you're looking for doesn't exist or has deleted their
          profile.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
