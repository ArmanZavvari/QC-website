// import React, { useState } from "react";
// import { BadgeCheck, Copy, Printer } from "lucide-react";
// import { analysDetailData } from "../../helper/data";

// // Notification Component
// const Notification: React.FC<{ message: string; onClose: () => void }> = ({
//   message,
//   onClose,
// }) => {
//   return (
//     <div className="fixed top-21 left-20 bg-green-100 text-green-600  py-2 px-4 rounded-lg shadow-lg">
//       <span className="ml-5">{message}</span>
//       <button onClick={onClose} className="text-sm">
//         ✕
//       </button>
//     </div>
//   );
// };

// export const CallDetailAnalys: React.FC = () => {
//   const [notification, setNotification] = useState<string | null>(null);

//   // Function to handle copying text to the clipboard
//   const handleCopy = (text: string) => {
//     navigator.clipboard.writeText(text).then(
//       () => {
//         // Set notification message and display
//         setNotification(" کپی شد ");
//         // Hide notification after 2 seconds
//         setTimeout(() => setNotification(null), 1500);
//       },
//       (err) => {
//         console.error("Failed to copy text: ", err);
//       }
//     );
//   };

//   // Function to render details with line numbers
//   const renderDetail = (detail: string) => {
//     return detail.split(/(\d+\.)/).map((part, index) => {
//       if (/\d+\./.test(part)) {
//         return <div key={index}>.</div>;
//       }
//       return <span key={index}>{part}</span>;
//     });
//   };

//   return (
//     <div
//       id="detailContainer"
//       className="flex flex-col gap-5 overflow-y-scroll h-[69vh]"
//     >
//       <header className="border-b border-gray-300 pb-3 text-gray-600 flex justify-between">
//         <span className="text-[12px]">تحلیل صوت</span>
//         <span>
//           <Printer className="w-4 h-4 me-2 cursor-pointer" />
//         </span>
//       </header>
//       <div
//         id="detail"
//         className="flex flex-col gap-5 overflow-y-scroll h-[80vh]"
//       >
//         {analysDetailData.map((item, idx) => (
//           <div key={idx} className="bg-white p-5 rounded-lg shadow">
//             <div className="text-[12px] border-b py-2 mb-3 flex justify-between gap-1 items-center">
//               <span className="flex gap-2">
//                 <BadgeCheck className="w-4 h-4" color="green" />
//                 {item.title}
//               </span>
//               <span onClick={() => handleCopy(item.detail)}>
//                 <Copy className="w-4 h-4 text-gray-600 cursor-pointer" />
//               </span>
//             </div>
//             <div className="text-[12px] leading-6">
//               {renderDetail(item.detail)}
//             </div>
//           </div>
//         ))}
//       </div>
//       {notification && (
//         <Notification
//           message={notification}
//           onClose={() => setNotification(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default CallDetailAnalys;
