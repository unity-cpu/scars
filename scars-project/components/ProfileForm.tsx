"use client";

import { FormEvent, useState, useEffect } from "react";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  username: string | null;
  bio: string | null;
}

export default function ProfileForm({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: user.name || "",
    username: user.username || "",
    bio: user.bio || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Failed to update profile");
        return;
      }

      setMessage("Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-2 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
        />
      </div>

      {/* Username */}
      <div>
        <label className="block text-sm font-medium mb-2">Username</label>
        <div className="flex items-center">
          <span className="px-4 py-2 bg-black/50 border border-red-900/30 border-r-0 rounded-l-lg text-gray-400">
            scars.vercel.app/@
          </span>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="yourname"
            className="flex-1 px-4 py-2 bg-black/50 border border-red-900/30 border-l-0 rounded-r-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Only letters, numbers, and underscores
        </p>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium mb-2">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell people about yourself..."
          rows={6}
          className="w-full px-4 py-2 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition resize-none"
        />
        <p className="text-xs text-gray-500 mt-1">
          {formData.bio.length}/500 characters
        </p>
      </div>

      {/* Message */}
      {message && (
        <div
          className={`p-3 rounded-lg text-sm ${
            message.includes("success")
              ? "bg-green-900/30 border border-green-900/50 text-green-400"
              : "bg-red-900/30 border border-red-900/50 text-red-400"
          }`}
        >
          {message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold rounded-lg transition"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
