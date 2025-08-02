"use client";
import { useState } from "react";
import axios from "axios";

interface ImageUploaderProps {
  onImageUpload?: (url: string) => void; // Callback to send URL to parent
}

export default function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [imageLink, setImageLink] = useState<string>("");

  // Handle file selection and upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show a preview while uploading
    setPreview(URL.createObjectURL(file));

    // Upload to imgbb
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );
      const hostedUrl = res.data.data.url; // Hosted image URL
      setImageLink(hostedUrl);

      // Send hosted URL to parent component (the form)
      if (onImageUpload) onImageUpload(hostedUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Circle preview */}
      <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs text-gray-400">Add Image</span>
        )}
      </div>

      <div className="flex-1">
        {/* Show file input only if no image uploaded */}
        {!imageLink && (
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
          />
        )}

        {/* Show hosted link only after upload */}
        {imageLink && (
          <textarea
            readOnly
            value={imageLink}
            placeholder="Image URL will appear here"
            className="w-full mt-2 p-2 bg-[#070707] text-white text-sm border border-[#100A12] rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
