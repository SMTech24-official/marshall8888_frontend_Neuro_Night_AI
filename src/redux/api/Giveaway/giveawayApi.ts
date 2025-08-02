/* eslint-disable @typescript-eslint/no-explicit-any */
// src/api/giveawayApi.ts

import { baseApi } from "../baseApi";

export const giveawayApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createGiveaway: builder.mutation({
      query: (giveawayData) => ({
        url: "/giveaway/create-giveaway",
        method: "POST",
        body: giveawayData,
      }),
      invalidatesTags: ["Giveaway"],
    }),
    getGiveaways: builder.query<any, void>({
      query: () => "/giveaway",
      providesTags: ["Giveaway"],
    }),

    getAllOngoingGiveaway: builder.query<any, { page?: number; limit?: number, sortBy?: string, sortOrder?: "asc" | "desc" }>({
      query: ({ page = 1, limit = 10 , sortBy, sortOrder } = {}) => ({
        url: `/giveaway/ongoing-giveaways`,
        params: { page, limit, sortBy, sortOrder },
      }),
      providesTags: ["AllOngoingGiveawayIds"],
    }),

    getGiveawayStats: builder.query<any, void>({
      query: () => "/giveaway/stats",
      providesTags: ["Giveaway"],
    }),
    getGiveawaysWithAtLeastOneParticipant: builder.query<any, void>({
      query: () => "/giveaway/get-giveaways/pick-winner",
      providesTags: ["getGiveawaysWithAtLeastOneParticipant"],
    }),

    getGiveawayById: builder.query({
      query: (id) => `/giveaway/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Giveaway", id }],
    }),
    updateGiveaway: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/giveaway/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Giveaway", id }],
    }),
    deleteGiveaway: builder.mutation({
      query: (id) => ({
        url: `/giveaway/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Giveaway"],
    }),
  }),
});

export const {
  useCreateGiveawayMutation,
  useGetGiveawaysQuery,
  useGetGiveawayByIdQuery,
  useUpdateGiveawayMutation,
  useDeleteGiveawayMutation,
  useGetGiveawayStatsQuery,
  useGetGiveawaysWithAtLeastOneParticipantQuery,
  useGetAllOngoingGiveawayQuery,
} = giveawayApi;
