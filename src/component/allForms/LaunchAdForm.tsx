"use client";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import ImageUploader from "../sellCourse/ImageUploader"; // Reusable component

// Form data type (adImage is now a string because we store the hosted URL)
type FormData = {
  campaignName: string;
  adPlatform: string;
  budget: string;
  location: string;
  age: string;
  interest: string;
  influencerName: string;
  handle: string;
  socialLink: string;
  adImage: string; // Hosted image URL
};

export default function LaunchAdForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  // Submit handler
  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);

    // Example: Convert to FormData for backend
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Example: Send to API
    // fetch("/api/ads", { method: "POST", body: formData });
  };

  return (
    <div className="relative z-10 p-4">
      <Toaster />
      <div className="px-4 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[1150px] space-y-6 text-white bg-black py-8 px-4 md:px-12 rounded-lg"
        >
          {/* Campaign Name */}
          <div className="border border-red-600 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-3 font-medium text-base">Campaign Name</label>
              <input
                type="text"
                {...register("campaignName", { required: "Campaign name is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.campaignName && <p className="text-red-500 text-sm mt-1">{errors.campaignName.message}</p>}
            </div>
            <div>
              <label className="block mb-3 font-medium text-base">Name your ad (e.g. "Summer Drop Promo")</label>
              <input
                type="text"
                {...register("campaignName", { required: "Ad name is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.campaignName && <p className="text-red-500 text-sm mt-1">{errors.campaignName.message}</p>}
            </div>
          </div>

          {/* Ad Platform */}
          <div className="border border-red-600 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-3 font-medium text-base">Ad Platform</label>
              <input
                type="text"
                {...register("adPlatform", { required: "Ad platform is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.adPlatform && <p className="text-red-500 text-sm mt-1">{errors.adPlatform.message}</p>}
            </div>
            <div>
              <label className="block mb-3 font-medium text-base">Where will this ad run?</label>
              <input
                type="text"
                {...register("adPlatform", { required: "Where ad will run is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.adPlatform && <p className="text-red-500 text-sm mt-1">{errors.adPlatform.message}</p>}
            </div>
          </div>

          {/* Budget */}
          <div className="border border-red-600 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-3 font-medium text-base">Budget</label>
              <input
                type="text"
                {...register("budget", { required: "Budget is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
            </div>
            <div>
              <label className="block mb-3 font-medium text-base">How much do you want to spend?</label>
              <input
                type="text"
                {...register("budget", { required: "Amount to spend is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
            </div>
          </div>

          {/* Target Audience */}
          <div className="border border-red-600 p-4 rounded-lg">
            <h2 className="block mb-3 font-medium text-base">Target Audience (Optional)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-3 font-medium text-base">Location</label>
                <input
                  type="text"
                  {...register("location")}
                  className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-base">Age (18-35)</label>
                <input
                  type="text"
                  {...register("age")}
                  className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-base">Interest</label>
                <input
                  type="text"
                  {...register("interest")}
                  className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>
          </div>

          {/* Influencer Info */}
          <div className="border border-red-600 p-4 rounded-lg">
            <h2 className="block mb-3 font-medium text-base">Influencer Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-3 font-medium text-base">Name</label>
                <input
                  type="text"
                  {...register("influencerName")}
                  className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-base">@ Handle</label>
                <input
                  type="text"
                  {...register("handle")}
                  className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-base">Social Link</label>
                <input
                  type="text"
                  {...register("socialLink")}
                  className="w-full px-4 py-2 rounded-lg bg-[#070707] text-white text-sm border border-[#100A12] focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-base">Ad Image</label>
                <ImageUploader onImageUpload={(url) => setValue("adImage", url)} />
                <input type="hidden" {...register("adImage", { required: "Ad image is required" })} />
                {errors.adImage && <p className="text-red-500 text-sm mt-1">{errors.adImage.message}</p>}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white text-sm px-10 py-3 rounded-md shadow transition duration-300"
            >
              Launch my Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
