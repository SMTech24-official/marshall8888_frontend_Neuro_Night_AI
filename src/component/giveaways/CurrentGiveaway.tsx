"use client";

import { useGetAllOngoingGiveawayQuery } from "@/redux/api/Giveaway/giveawayApi";
import { IGiveaway } from "@/types/giveaway/giveaway";
import Link from "next/link";
import CommonPagination from "../shared/CommonPagination";
import { useState } from "react";

export default function CurrentGiveaways() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data: response, isLoading } = useGetAllOngoingGiveawayQuery({
    page,
    limit,
  });

  const giveaways = response?.data?.data || [];
  const meta = response?.data?.meta || {};
  const totalPages = meta ? Math.ceil(meta.total / meta.limit) : 1;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-[28px] font-semibold mb-2">
          View Current Ongoing Giveaways
        </h1>
        <p className="text-[18px] text-gray-300">
          Browse active giveaways and participate for a chance to win fabulous
          prizes
        </p>
      </div>

      {/* Giveaway List */}
      <div className="max-w-xl mx-auto space-y-5">
        {isLoading && <p className="text-center">Loading giveaways...</p>}
        {!isLoading && giveaways.length === 0 && (
          <p className="text-center text-gray-400">No giveaways found.</p>
        )}

        {giveaways?.map((giveaway: IGiveaway) => (
          <div
            key={giveaway._id}
            className="bg-[#000000] border border-[#551212] rounded-xl px-4 py-5 space-y-4  mb-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">{giveaway.title}</h2>
                <p className="text-md text-white">${giveaway.priceMoney}</p>
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-red-700">
                  {giveaway.participants?.length || 0}
                </span>{" "}
                people Joined
              </p>
            </div>

            <div className="flex justify-between gap-5">
              <div>
                <h2 className="mb-2">Rules:</h2>
                <div className="flex flex-wrap gap-2">
                  {giveaway.rules.map((rule, index) => (
                    <span
                      key={index}
                      className="text-sm text-white border border-red-500 rounded-md px-3 py-1 hover:bg-red-700/20 transition"
                    >
                      {rule}
                    </span>
                  ))}
                </div>
              </div>

              {/* Join the giveaway */}

              <div className="cursor-pointer mt-4">
                <Link
                  href={`/participant?giveawayId=${giveaway._id}`}
                  key={giveaway._id}
                >
                  <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
                    Join now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <CommonPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
