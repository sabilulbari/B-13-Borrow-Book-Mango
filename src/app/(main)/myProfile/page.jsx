"use client";
import React, { useState } from "react";
import { Button, Input, Label } from "@heroui/react";
import { authClient } from "../../../../lib/auth-client";
import Image from "next/image";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name.trim() && !image.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim() || undefined,
          image: image.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update profile");
      }

      alert("Profile updated successfully!");
      // Clear the input fields
      setName("");
      setImage("");
      // Optionally refresh the session to get updated data
      window.location.reload();
    } catch (err) {
      console.error("Update failed:", err);
      alert(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Please login to view your profile</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950/80 py-10 px-4">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 p-8 shadow-2xl">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <Image width={200} height={200}
            src={session.user.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
          />
        </div>

        {/* Name and Email */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{session.user.name}</h2>
          <p className="text-white/70">{session.user.email}</p>
        </div>

        {/* Update Form */}
        <div className="space-y-4">
          <div>
            <Label className="text-white block mb-2">New Name</Label>
            <Input
              type="text"
              placeholder="Enter new name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
            />
          </div>

          <div>
            <Label className="text-white block mb-2">New Profile Picture URL</Label>
            <Input
              type="url"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
            />
          </div>

          <Button
            onClick={handleUpdate}
            disabled={loading || (!name.trim() && !image.trim())}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
