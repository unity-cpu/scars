"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Music2, Disc3 } from "lucide-react";
import Link from "next/link";

// Temporary mock data (later this will come from Supabase)
const mockProfiles: Record<string, any> = {
  demo: {
    displayName: "Demo User",
    bio: "Just testing scarz.lol",
    avatar: null,
    links: [
      { title: "Twitter / X", url: "https://x.com" },
      { title: "GitHub", url: "https://github.com" },
      { title: "Portfolio", url: "https://example.com" },
    ],
    badges: ["Early Supporter", "Verified"],
    music: {
      title: "Blinding Lights",
      artist: "The Weeknd",
    },
  },
};

export default function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const profile = mockProfiles[username] || {
    displayName: username,
    bio: "This is a demo profile. Claim it and customize everything later!",
    avatar: null,
    links: [
      { title: "Add your links in the dashboard", url: "/dashboard" },
    ],
    badges: ["New"],
    music: null,
  };

  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-16 flex flex-col items-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 p-[3px] animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-4xl font-bold text-white">
              {profile.displayName.charAt(0).toUpperCase()}
            </div>
          </div>
        </motion.div>

        {/* Name with animation */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-3xl font-bold tracking-tight gradient-text"
        >
          {profile.displayName}
        </motion.h1>

        {/* Username */}
        <p className="mt-1 text-sm text-zinc-500">@{username}</p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {profile.badges.map((badge: string) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/20"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-center text-zinc-400 max-w-sm"
        >
          {profile.bio}
        </motion.p>

        {/* Music player mock */}
        {profile.music && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 w-full max-w-sm flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
              <Disc3 className="w-6 h-6 text-white animate-spin" style={{ animationDuration: "3s" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{profile.music.title}</p>
              <p className="text-xs text-zinc-500 truncate">{profile.music.artist}</p>
            </div>
            <Music2 className="w-4 h-4 text-purple-400" />
          </motion.div>
        )}

        {/* Links */}
        <div className="mt-10 w-full space-y-3">
          {profile.links.map((link: any, i: number) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.05 }}
              className="flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition group"
            >
              <span className="font-medium">{link.title}</span>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:text-zinc-400 transition"
          >
            Made with scarz.lol
          </Link>
        </div>
      </div>
    </div>
  );
}
