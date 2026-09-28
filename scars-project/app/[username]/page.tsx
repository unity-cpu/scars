import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const dynamicParams = true;
export const revalidate = 60; // ISR - revalidate every 60 seconds

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: params.username },
      select: { name: true, bio: true, image: true },
    });

    if (!user) return { title: "Not Found" };

    return {
      title: `${user.name || params.username} - SCARS`,
      description: user.bio || `Check out ${user.name}'s profile on SCARS`,
      openGraph: {
        title: `${user.name || params.username} - SCARS`,
        description: user.bio || `Check out ${user.name}'s profile on SCARS`,
        images: user.image ? [{ url: user.image }] : [],
      },
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: params.username },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        bio: true,
        createdAt: true,
      },
    });

    if (!user) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-black">
        {/* Navigation */}
        <nav className="border-b border-red-900/30 bg-black/50 backdrop-blur">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-red-500">
              SCARS
            </Link>
            <Link
              href="/auth/signin"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
            >
              Sign In
            </Link>
          </div>
        </nav>

        {/* Profile Content */}
        <main className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-red-900/10 border border-red-900/30 rounded-2xl p-12 text-center">
            {/* Avatar */}
            {user.image && (
              <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl">
                <Image
                  src={user.image}
                  alt={user.name || user.username || "User"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Name */}
            <h1 className="text-4xl font-bold mb-2">
              {user.name || user.username}
            </h1>

            {/* Username */}
            {user.username && user.username !== user.name && (
              <p className="text-lg text-red-400 mb-6">@{user.username}</p>
            )}

            {/* Bio */}
            {user.bio && (
              <div className="bg-black/30 border border-red-900/30 rounded-xl p-6 mb-8 text-left">
                <p className="text-gray-300 whitespace-pre-wrap text-lg leading-relaxed">
                  {user.bio}
                </p>
              </div>
            )}

            {/* Joined date */}
            <p className="text-gray-500 text-sm">
              Joined {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="/auth/signin"
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition transform hover:scale-105"
              >
                Create Your Own Profile
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
