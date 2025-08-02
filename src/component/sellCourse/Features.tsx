import React from "react";

import Image from "next/image";

export type AiToolType = {
  id: number;
  image: string;

  title: string;
  description: string; // ✅ now it's just one paragraph
};

export const aiToolData: AiToolType[] = [
  {
    "id": 1,
    "image": "/coinImage.png",
    "title": "Smart Contract Logic",
    "description": "Founder & influencers agree to Revenue share (e.g. 70/30/10) Contract duration (e.g. month) Auto-Payout rules"
  },
  {
    "id": 2,
    "image": "/coinImage.png",
    "title": "Gamified Points System",
    "description": "Users earn XP: +5 points Make a sale: +20 points Win giveaway: +50 point Leaderboard resets monthly"
  },
  {
    "id": 3,
    "image": "/coinImage.png",
    "title": "AI Recommendation Engine (Future)",
    "description": "Suggest tools to Influencers Suggest tools to Founders"
  },
  {
    "id": 4,
    "image": "/coinImage.png",
    "title": "Multi Language Support",
    "description": "Add Swedish, Arabic, Spanish Based on Location or Button"
  },
  {
    "id": 5,
    "image": "/coinImage.png",
    "title": "2FA / Verification (Optional)",
    "description": "Email Confirmation on Sign Up Optional 2 FA for Payout"
  }
];

export default function ThereStepsCard() {
  return (
    <div className="lg:p-16 p-4">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-10 ">
        {aiToolData.map((item) => (
          <div
            key={item.id}
            className="  border-[0.7px] rounded-lg mx-auto p-6  border-white md:border-[#D10800]"
          >
            <div className="mb-5">
              <Image
                src={item.image}
                alt={item.title}
                width={147}
                height={147}
                className=" mx-auto mt-4"
              />
            </div>
            <div className="  text-white flex flex-col justify-between items-center text-center">
              <div className="  ">
                <h2 className="text-lg md:text-[23px] md:font-semibold mb-2 leading-6">
                  {item.title}
                </h2>
                <p className="text-base mt-3 text-[#FFFFFF]  leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
