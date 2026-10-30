"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Music, Palette, MousePointer2 } from "lucide-react";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = username.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
    if (clean.length >= 3 && clean.length <= 20) {
      // For now just go to the profile page (later this will be signup)
      router.push(`/${clean}`);
    }
  };

  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-sm font-bold">
            S
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">scarz.lol</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/dashboard" className="text-sm text-zinc-400 hover:text-white transition">
            Dashboard
          </a>
          <button className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition">
            Sign in
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Early access • Free forever
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1]"
        >
          Claim your name
          <br />
          <span className="gradient-text">before someone else does.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-zinc-400 max-w-xl"
        >
          One page for every link you own. Animated names, stacked badges, music, video backgrounds and effects people actually remember.
        </motion.p>

        {/* Claim form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleClaim}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
        >
          <div className="relative flex-1 w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm select-none">
              scarz.lol/
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="yourname"
              maxLength={20}
              className="w-full pl-[5.5rem] pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder:text-zinc-600 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 font-medium text-white flex items-center justify-center gap-2 transition shadow-lg shadow-purple-500/25"
          >
            Claim
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        <p className="mt-4 text-xs text-zinc-600">
          Letters, numbers, dots, underscores. 3–20 characters.
        </p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Palette, label: "Custom themes" },
            { icon: Music, label: "Music player" },
            { icon: MousePointer2, label: "Cursor effects" },
            { icon: Sparkles, label: "Name animations" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300"
            >
              <item.icon className="w-4 h-4 text-purple-400" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-10 text-sm text-zinc-600">
        scarz.lol — built for the internet
      </footer>
    </div>
  );
}
