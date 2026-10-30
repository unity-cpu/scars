"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Link as LinkIcon,
  Palette,
  Music,
  MousePointer2,
  Image as ImageIcon,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    title: "Profile",
    description: "Display name, bio, avatar",
    icon: User,
    href: "/dashboard/profile",
  },
  {
    title: "Links",
    description: "Add & reorder your links",
    icon: LinkIcon,
    href: "/dashboard/links",
  },
  {
    title: "Appearance",
    description: "Colors, fonts, name effects",
    icon: Palette,
    href: "/dashboard/appearance",
  },
  {
    title: "Music",
    description: "Background music player",
    icon: Music,
    href: "/dashboard/music",
  },
  {
    title: "Backgrounds",
    description: "Image, GIF or video backgrounds",
    icon: ImageIcon,
    href: "/dashboard/backgrounds",
  },
  {
    title: "Effects",
    description: "Cursor trails, particles, animations",
    icon: MousePointer2,
    href: "/dashboard/effects",
  },
  {
    title: "Widgets",
    description: "Discord, Last.fm, Roblox & more",
    icon: Sparkles,
    href: "/dashboard/widgets",
  },
  {
    title: "Settings",
    description: "Username, account, premium",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold">
              S
            </div>
            <span className="font-display font-semibold">scarz.lol</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/demo"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              View my page
            </Link>
            <button className="text-sm text-zinc-400 hover:text-white transition flex items-center gap-1.5">
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="mt-2 text-zinc-400">
            Customize everything about your scarz.lol page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={section.href}
                className="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/30 transition group h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center mb-4 group-hover:bg-purple-500/25 transition">
                  <section.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="font-semibold text-lg">{section.title}</h2>
                <p className="mt-1 text-sm text-zinc-500">{section.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
          <p className="text-sm text-purple-200">
            <strong>This is the starter dashboard.</strong>
            <br />
            Next we will connect Supabase (auth + database), then build each editor page one by one.
          </p>
        </div>
      </main>
    </div>
  );
}
