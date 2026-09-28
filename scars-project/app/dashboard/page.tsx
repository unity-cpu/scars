import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/ProfileForm";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-red-900/30 bg-black/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-red-500">
            SCARS
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut({ redirect: true, redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
            >
              Sign Out
            </button>
          </form>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile preview */}
          <div className="md:col-span-1">
            <div className="bg-red-900/10 border border-red-900/30 rounded-2xl p-6 sticky top-4">
              <h3 className="text-lg font-bold mb-4">Profile Preview</h3>

              {session.user.image && (
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-500">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-center font-semibold text-lg mb-2">
                {session.user.name || "No name set"}
              </p>
              <p className="text-center text-gray-400 mb-4">
                {session.user.email}
              </p>

              {session.user && "username" in session.user && session.user.username && (
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500">Your Profile URL:</p>
                  <Link
                    href={`/${session.user.username}`}
                    className="text-red-400 hover:text-red-300 break-all text-sm"
                  >
                    scars.vercel.app/@{session.user.username}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Edit form */}
          <div className="md:col-span-2">
            <div className="bg-red-900/10 border border-red-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Edit Your Profile</h2>
              <ProfileForm user={session.user as any} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
