



// "use client";

// import { useState } from "react";
// import { useGetGiveawaysQuery } from "@/redux/api/Giveaway/giveawayApi";
// import { IGiveaway } from "@/types/giveaway/giveaway";
// import { EyeIcon } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// export default function GiveawaysTable() {
//   const { data: giveaways = { data: [] } } = useGetGiveawaysQuery();
//   const [selectedGiveaway, setSelectedGiveaway] = useState<IGiveaway | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   // Calculate pagination
//   const totalItems = giveaways.data.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = giveaways.data.slice(startIndex, endIndex);

//   // Handle page change
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="p-6 bg-black md:10 lg:mb-20 text-white">
//       <h2 className="text-xl font-semibold mb-4">Giveaway Performance</h2>

//       <Card className="w-full overflow-x-auto bg-[#000000] rounded-2xl border border-gray-800">
//         <CardContent className="p-0">
//           <table className="min-w-full text-sm text-left">
//             <thead className="text-xs text-gray-300 uppercase border-b border-gray-800">
//               <tr>
//                 <th className="px-6 py-4">Author Email</th>
//                 <th className="px-6 py-4">Title</th>
//                 <th className="px-6 py-4">priceMoney</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4">Deadline</th>
//                 <th className="px-6 py-4 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.map((giveaway: IGiveaway) => (
//                 <tr
//                   key={giveaway._id}
//                   className="border-b border-gray-800 hover:bg-gray-900 transition"
//                 >
//                   <td className="px-6 py-4 text-white">
//                     {giveaway.authorId?.userId?.email}
//                   </td>
//                   <td className="px-6 py-4 text-gray-300">{giveaway.title}</td>
//                   <td className="px-6 py-4 truncate max-w-xs text-gray-300">
//                     {giveaway.priceMoney}
//                   </td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         giveaway.status === "ongoing"
//                           ? "bg-green-900 text-green-400"
//                           : "bg-blue-900 text-blue-400"
//                       }`}
//                     >
//                       {giveaway.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-gray-300">
//                     {new Date(giveaway.deadline).toLocaleDateString()}
//                   </td>
//                   <td className="px-6  py-4 text-right">
//                       {/* Detail icon */}
//                     <button
//                       className="text-white mr-2 bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md shadow-md"
//                       onClick={() => setSelectedGiveaway(giveaway)}
//                     >
//                       <EyeIcon className="w-4 h-4" />
//                     </button>
//                     {/* Update icon  */}
//                     <button
//                       className="text-white mr-2 bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md shadow-md"
//                       onClick={() => setSelectedGiveaway(giveaway)}
//                     >
//                       <EyeIcon className="w-4 h-4" />
//                     </button>
//                     {/* Delete icon  */}
//                     <button
//                       className="text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md shadow-md"
//                       onClick={() => setSelectedGiveaway(giveaway)}
//                     >
//                       <EyeIcon className="w-4 h-4" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="mt-4 flex justify-center items-center gap-2">
//           <button
//             className="px-3 py-1 bg-gray-800 text-white rounded-md disabled:opacity-50"
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Prev
//           </button>
          
//           <div className="flex gap-1">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 className={`px-3 py-1 rounded-md ${
//                   currentPage === page
//                     ? "bg-red-600 text-white"
//                     : "bg-gray-800 text-white hover:bg-gray-700"
//                 }`}
//                 onClick={() => handlePageChange(page)}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>

//           <button
//             className="px-3 py-1 bg-gray-800 text-white rounded-md disabled:opacity-50"
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Modal */}
//       {selectedGiveaway && (
//         <div className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center p-4 z-50 text-gray-200">
//           <div className="bg-[#121212] border border-red-500 rounded-2xl shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
//             <div className="p-6 border-b border-gray-800">
//               <h2 className="text-xl font-semibold">
//                 {selectedGiveaway?.title}
//               </h2>
//             </div>
//             <div className="p-6 space-y-6">
//               <div>
//                 <p className="text-sm font-medium text-gray-400">Author</p>
//                 <p className="text-sm">
//                   {selectedGiveaway?.authorId?.userId?.firstName}{" "}
//                   {selectedGiveaway?.authorId?.userId?.lastName} (
//                   {selectedGiveaway?.authorId?.userId?.email})
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-400">Description</p>
//                 <p className="text-sm">{selectedGiveaway?.description}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-400">Rules</p>
//                 <ul className="list-disc list-inside text-sm space-y-1">
//                   {selectedGiveaway?.rules?.map((rule, i) => (
//                     <li key={i}>{rule}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm font-medium text-gray-400">Status</p>
//                   <span
//                     className={`text-xs px-3 py-1 rounded-full font-semibold inline-block ${
//                       selectedGiveaway?.status === "ongoing"
//                         ? "bg-green-900 text-green-400"
//                         : "bg-blue-900 text-blue-400"
//                     }`}
//                   >
//                     {selectedGiveaway?.status}
//                   </span>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-400">Deadline</p>
//                   <p className="text-sm">
//                     {new Date(selectedGiveaway?.deadline).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//               {selectedGiveaway?.priceMoney && (
//                 <div>
//                   <p className="text-sm font-medium text-gray-400">
//                     Prize Money
//                   </p>
//                   <p className="text-sm">${selectedGiveaway?.priceMoney}</p>
//                 </div>
//               )}
//             </div>
//             <div className="p-4 border-t border-gray-800 flex justify-end">
//               <button
//                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//                 onClick={() => setSelectedGiveaway(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import {
  useGetGiveawaysQuery,
  useUpdateGiveawayMutation,
  useDeleteGiveawayMutation,
} from "@/redux/api/Giveaway/giveawayApi";
import { IGiveaway } from "@/types/giveaway/giveaway";
import { EyeIcon, EditIcon, TrashIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Hardcoded logged-in user (replace with auth context/hook in production)
const user = {
  email: "founder@gmail.com",
  role: "founder",
  id: "688e5072fcbcceec32b693ae",
};

export default function GiveawaysTable() {
  const { data: giveaways = { data: [] }, refetch } = useGetGiveawaysQuery();
  const [updateGiveaway] = useUpdateGiveawayMutation();
  const [deleteGiveaway] = useDeleteGiveawayMutation();
  const [selectedGiveaway, setSelectedGiveaway] = useState<IGiveaway | null>(null);
  const [updateForm, setUpdateForm] = useState<Partial<IGiveaway> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter giveaways where authorId.userId._id matches logged-in user.id
  const userGiveaways = giveaways.data.filter(
    (giveaway: IGiveaway) => giveaway.authorId.userId._id === user.id
  );

  // Calculate pagination for filtered giveaways
  const totalItems = userGiveaways.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = userGiveaways.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle update form submission
  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (updateForm?._id) {
      try {
        await updateGiveaway({
          id: updateForm._id,
          data: {
            title: updateForm.title,
            description: updateForm.description,
            status: updateForm.status,
            rules: updateForm.rules,
            deadline: updateForm.deadline,
          },
        }).unwrap();
        setUpdateForm(null);
        refetch();
      } catch (error) {
        console.error("Failed to update giveaway:", error);
      }
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this giveaway?")) {
      try {
        await deleteGiveaway(id).unwrap();
        refetch();
      } catch (error) {
        console.error("Failed to delete giveaway:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-black md:10 lg:mb-20 text-white">
      <h2 className="text-xl font-semibold mb-4">Your Giveaways</h2>

      {totalItems === 0 ? (
        <p className="text-gray-400 text-center">No giveaways found for your account.</p>
      ) : (
        <>
          <Card className="w-full overflow-x-auto bg-[#000000] rounded-2xl border border-gray-800">
            <CardContent className="p-0">
              <table className="min-w-full text-sm text-left">
                <thead className="text-xs text-gray-300 uppercase border-b border-gray-800">
                  <tr>
                    <th className="px-6 py-4">Author Email</th>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Price Money</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Deadline</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((giveaway: IGiveaway) => (
                    <tr
                      key={giveaway._id}
                      className="border-b border-gray-800 hover:bg-gray-900 transition"
                    >
                      <td className="px-6 py-4 text-white">
                        {giveaway.authorId?.userId?.email}
                      </td>
                      <td className="px-6 py-4 text-gray-300">{giveaway.title}</td>
                      <td className="px-6 py-4 truncate max-w-xs text-gray-300">
                        {giveaway.priceMoney}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            giveaway.status === "ongoing"
                              ? "bg-green-900 text-green-400"
                              : giveaway.status === "closed"
                              ? "bg-red-900 text-red-400"
                              : "bg-blue-900 text-blue-400"
                          }`}
                        >
                          {giveaway.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {new Date(giveaway.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right flex justify-end gap-2">
                        <button
                          className="text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md shadow-md"
                          onClick={() => setSelectedGiveaway(giveaway)}
                        >
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button
                          className="text-white bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-md shadow-md"
                          onClick={() => setUpdateForm(giveaway)}
                        >
                          <EditIcon className="w-4 h-4" />
                        </button>
                        <button
                          className="text-white bg-red-800 hover:bg-red-900 px-2 py-1 rounded-md shadow-md"
                          onClick={() => handleDelete(giveaway._id)}
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-4 flex justify-center items-center gap-2">
              <button
                className="px-3 py-1 bg-gray-800 text-white rounded-md disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === page
                        ? "bg-red-600 text-white"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                className="px-3 py-1 bg-gray-800 text-white rounded-md disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* Details Modal */}
      {selectedGiveaway && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 text-gray-200">
          <div className="bg-[#121212] border border-gray-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">{selectedGiveaway?.title}</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-400">Author</p>
                <p className="text-sm">
                  {selectedGiveaway?.authorId?.userId?.firstName}{" "}
                  {selectedGiveaway?.authorId?.userId?.lastName} (
                  {selectedGiveaway?.authorId?.userId?.email})
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">Description</p>
                <p className="text-sm">{selectedGiveaway?.description}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">Rules</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {selectedGiveaway?.rules?.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-400">Status</p>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold inline-block ${
                      selectedGiveaway?.status === "ongoing"
                        ? "bg-green-900 text-green-400"
                        : selectedGiveaway?.status === "closed"
                        ? "bg-red-900 text-red-400"
                        : "bg-blue-900 text-blue-400"
                    }`}
                  >
                    {selectedGiveaway?.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Deadline</p>
                  <p className="text-sm">
                    {new Date(selectedGiveaway?.deadline).toLocaleString()}
                  </p>
                </div>
              </div>
              {selectedGiveaway?.priceMoney && (
                <div>
                  <p className="text-sm font-medium text-gray-400">Prize Money</p>
                  <p className="text-sm">${selectedGiveaway?.priceMoney}</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-800 flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => setSelectedGiveaway(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {updateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 text-gray-200">
          <div className="bg-[#121212] border border-gray-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
            <form onSubmit={handleUpdateSubmit}>
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-semibold">Update Giveaway</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-400">Title</label>
                  <Input
                    value={updateForm.title || ""}
                    onChange={(e) =>
                      setUpdateForm({ ...updateForm, title: e.target.value })
                    }
                    className="bg-gray-900 text-white border-gray-700"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Description</label>
                  <Textarea
                    value={updateForm.description || ""}
                    onChange={(e) =>
                      setUpdateForm({ ...updateForm, description: e.target.value })
                    }
                    className="bg-gray-900 text-white border-gray-700"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Status</label>
                  <select
                    value={updateForm.status || ""}
                    onChange={(e) =>
                      setUpdateForm({
                        ...updateForm,
                        status: e.target.value as "ongoing" | "closed",
                      })
                    }
                    className="w-full bg-gray-900 text-white border-gray-700 rounded-md p-2"
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="closed">Closed</option>
                    
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Rules</label>
                  <Textarea
                    value={updateForm.rules?.join("\n") || ""}
                    onChange={(e) =>
                      setUpdateForm({
                        ...updateForm,
                        rules: e.target.value.split("\n").filter((rule) => rule.trim()),
                      })
                    }
                    className="bg-gray-900 text-white border-gray-700"
                    placeholder="Enter each rule on a new line"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Deadline</label>
                  <Input
                    type="datetime-local"
                    value={updateForm.deadline?.slice(0, 16) || ""}
                    onChange={(e) =>
                      setUpdateForm({ ...updateForm, deadline: e.target.value })
                    }
                    className="bg-gray-900 text-white border-gray-700"
                  />
                </div>
              </div>
              <div className="p-4 border-t border-gray-800 flex justify-end gap-2">
                <Button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white"
                  onClick={() => setUpdateForm(null)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}