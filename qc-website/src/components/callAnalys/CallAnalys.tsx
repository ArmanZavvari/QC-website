// import { BadgeCheck, Copy, FileAudio, FileText, Printer } from "lucide-react";
// import CallAnalysWaveform from "./CallAnalysWaveform";
// import { analysDetailData } from "../../helper/data";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   RsetAccessToken,
//   handleTokenApi,
//   selectAudioFileName,
//   selectAccessToken,
//   selectAudioUrl,
//   selectCallScript,
//   RsetCallScript,
//   RsetAnalysData,
//   selectAnalysData,
//   RsetAudioUrl,
//   RsetAsrLoading,
//   selectAsrLoading,
//   RsetLlmLoading,
//   selectLlmLoading,
//   selectGenerateText,
//   RsetGenerateText,
//   selectGenerateAnalys,
//   RsetGenerateAnalys,
//   RsetTtsGenerator,
//   selectTtsGenerator,
// } from "../../slices/mainSlices";
// import { useEffect } from "react";
// import { openAi, tokenApi, aipaAsrApi, asrOpera, tokenOpera } from "../../api/analysServices";
// import Loaidng from "../../utils/Loading";
// import Loading from "../../utils/Loading";
// import axios from "axios";
// import { errorMessage } from "../../utils/msg";

// interface AsrApiData {
//   file: File;
//   token: string;
// }

// interface TokenData {
//   client_id: string;
//   client_secret: string;
//   grant_type: string;
//   scope: string;
// }

// interface OpenAiData {
//   model: string;
//   messages: {
//     role: string;
//     content: string;
//   }[];
// }

// // call analysDetail ---------------------------------------------------------------------

// export const AnalysDetail: React.FC = () => {
//   const audioFileName = useSelector(selectAudioFileName);
//   const accessToken = useSelector(selectAccessToken);
//   const audioUrl = useSelector(selectAudioUrl);
//   const callScript = useSelector(selectCallScript);
//   const analysData = useSelector(selectAnalysData);
//   const llmLoading = useSelector(selectLlmLoading);
//   const generateText = useSelector(selectGenerateText);
//   const generateAnalys = useSelector(selectGenerateAnalys);
//   const ttsgenerator = useSelector(selectTtsGenerator);
//   const dispatch = useDispatch();

//   let analysisArray: [] | null;

//   useEffect(() => {
//     dispatch(RsetCallScript(null));
//     analysisArray = null;
//   }, []);

//   // aipa api -----------------------------------------------------------------------

//   //peiman acc -----------------------------
//   // const tokenData: TokenData = {
//   //   client_id: "WxoYbyAGa3OM0fDIwLYoeNXm255ToCViHDseUWaw",
//   //   client_secret:
//   //     "2HeDXgEkodTMBdK6bk6MgqCUPbvDIRFkmImI0O8yJdhYDZNwyryIzzdy22nEhG95JRQRHNGPKFnTll9WtPsFqOzEEc8a28GhHeKDWM9SvuhwdVtQ9Lw8R84T86E7hYhN",
//   //   grant_type: "client_credentials",
//   //   scope: "file_manager text voice image video",
//   // };

//   // shayan acc ---------------------------
//   const tokenData: TokenData = {
//     client_id: "SLyDjyUvXvsjuDExw2O49Xnur2wMmVHHGYIJQ6mm",
//     client_secret:
//       "V4rQtUD8QgOp37ycQf6rdJBhH0sjz0iaqJlCNvDYY6HItwZgEr6O9lcUzId6RqofPmIBFnsai14MeCWUm0fHdmcyKMiWiaNWjrjoYSRUgxu7TgSzpjq6McYYvkwjQqzY",
//     grant_type: "client_credentials",
//     scope: "file_manager text voice image video",
//   };

//   const handleTokenApi = async () => {
//     try {
//       const tokenApiRes = await tokenApi(tokenData);
//       console.log(tokenApiRes);
//       dispatch(RsetAccessToken(tokenApiRes.data.access_token));
//       console.log("token generated");
//     } catch (err) {
//       console.log("tokenApi dosent work");
//       console.log(err);
//     }
//   };

//   const asrApiData: AsrApiData = {
//     file: audioUrl,
//     token: accessToken,
//   };

//   const handleTtsAipa = async () => {
//     dispatch(RsetAsrLoading(true));
//     try {
//       const ttsAipaRes = await aipaAsrApi(asrApiData.file, asrApiData.token);
//       if (ttsAipaRes.status === 200) {
//         console.log(ttsAipaRes.data.transcripts[0]);
//         dispatch(RsetCallScript(ttsAipaRes.data.transcripts[0]));
//         dispatch(RsetAsrLoading(false));
//         dispatch(RsetGenerateText(false));
//       } else {
//         alert("tts dosent generate message");
//         dispatch(RsetCallScript("خطا"));
//         dispatch(RsetCallScript(" ارور تکست وجود ندارد بده"));
//         // dispatch(RsetLlmLoading(false));
//         dispatch(RsetGenerateText(false));
//       }
//     } catch (err) {
//       console.log("tts dosent generate message");
//       console.log(err);
//       dispatch(RsetAsrLoading(false));
//       dispatch(RsetGenerateText(false));
//     }
//   };

//   // opera api ---------------------------------------------------------------------------

//   console.log(accessToken);

//   const handleTokenOpera = async () => {
//     const tokenOperaData = {
//       grant_type: "",
//       username: "hinava",
//       password: "AO5!JGlEsOl1;MP",
//       scope: "",
//       client_id: "",
//       client_secret: "",
//     };
//     try {
//       const tokenOperaRes = await tokenOpera(tokenOperaData);
//       console.log(tokenOperaRes);
//       dispatch(RsetAccessToken(tokenOperaRes.data.access_token));
//     } catch (err) {
//       console.log("opera tokenApi dosent work");
//       console.log(err);
//     }
//   };

//   const operaApiData: any = {
//     file: audioUrl,
//     token: accessToken,
//   };

//   const handleOperaAsr = async () => {
//     try {
//       const operaAsrRes = await asrOpera(operaApiData.file, operaApiData.token);
//       console.log(operaAsrRes);
//       if (operaAsrRes.status === 200) {
//         console.log(operaAsrRes.data.results);
//         dispatch(RsetCallScript(operaAsrRes.data.results));
//         dispatch(RsetAsrLoading(false));
//         dispatch(RsetGenerateText(false));
//       } else {
//         alert("opera tts dosent generate message");
//         dispatch(RsetCallScript("خطا"));
//         dispatch(RsetCallScript(" ارور تکست وجود ندارد بده"));
//         dispatch(RsetGenerateText(false));
//       }
//     } catch (err) {
//       console.log("opera tts dosent generate message");
//       console.log(err);
//     }
//   };

//   //call the apis ----------------------------------------------------------------------

//   //token
//   useEffect(() => {
//     if (ttsgenerator === "TTS") {
//       handleTokenApi();
//       console.log("tss");
//     }
//     if (ttsgenerator === "opera") {
//       handleTokenOpera();
//       console.log("opera");
//     }
//   }, [audioUrl, ttsgenerator]);

//   //tts
//   useEffect(() => {
//     if (ttsgenerator === "TTS") {
//       generateText === true && handleTtsAipa();
//       console.log("tss");
//     }
//     if (ttsgenerator === "opera") {
//       generateText === true && handleOperaAsr();
//       console.log("opera");
//     }
//   }, [generateText]);

//   //cleanup
//   useEffect(() => {
//     dispatch(RsetAudioUrl(null));
//     analysisArray = null;
//   }, []);

//   // openAI client ------------------------------------------------------------------------------

//   const openAidata: OpenAiData = {
//     model: "gpt-4o",
//     messages: [
//       { role: "system", content: "." },
//       {
//         role: "user",
//         content: `این یک تماس از سمت مشتری با شرکت است لطفا را بر اساس شاخصهای زیر تحلیل کن.خلاصه تماس - موضوع تماس - مشکل مطرح شده در تماس - نام مشتری - نام کارشناس - وضعیت مشکل مشتری - میزان رضایت مشتری از 1 تا 10 - نقاط ضعف کارشناس در جوابدهی - راهکارهای پیشنهادی برای بهبود پاسخ دهی - و تمام موارد رو با # جدا کن و توضیحات رو بعد از : بزار مثلا #خلاصه تماس : توضیحات خلاصه تماس  . متن تماس:${callScript}`,
//       },
//     ],
//   };
//   const handleOpenAi = async () => {
//     dispatch(RsetLlmLoading(true));
//     try {
//       const openAiRes = await openAi(openAidata);
//       console.log(openAiRes);
//       dispatch(RsetAnalysData(openAiRes.data.choices[0].message.content));
//       dispatch(RsetLlmLoading(false));
//       dispatch(RsetGenerateAnalys(false));
//     } catch (err) {
//       console.log("openAi has issue");
//       console.log(err);
//       dispatch(RsetLlmLoading(false));
//       dispatch(RsetGenerateAnalys(false));
//     }
//   };

//   useEffect(() => {
//     if (callScript !== null && generateAnalys !== false) {
//       handleOpenAi();
//     } else if (generateAnalys !== false) {
//       errorMessage("هیچ تکستی موجود نیست");
//     }
//   }, [generateAnalys]);

//   // handle own open ai call 2 ------------------------------------------------------------

//   // let callScript = "اگر ابن بود فقط بگو connect";
//   // const handleOpenAi = async (callScript: any) => {
//   //   dispatch(RsetLlmLoading(true));

//   //   try {
//   //     const response = await axios.post("https://185.208.181.161/api/handleOpenAi", { callScript });
//   //     // const response = await axios.post("http://localhost:3000/api/handleOpenAi", { callScript });

//   //     if (response.status !== 200) {
//   //       throw new Error("Network response was not ok");
//   //     }

//   //     dispatch(RsetAnalysData(response.data.data));
//   //     dispatch(RsetLlmLoading(false));
//   //   } catch (err) {
//   //     console.log("openAi has issue");
//   //     console.log(err);
//   //     dispatch(RsetLlmLoading(false));
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (callScript !== null) {
//   //     handleOpenAi(callScript);
//   //   }
//   // }, [callScript]);

//   //detail ready --------------------------------------------------------------------------

//   const parts = analysData && analysData.split(/#/).filter((part: string) => part.trim() !== "");

//   analysisArray =
//     parts &&
//     parts.map((part: string) => {
//       const lines = part.trim().split(":");
//       const header = lines[0].trim();
//       const desc = lines.slice(1).join("\n").trim();
//       return { header, desc };
//     });

//   //render the items in items of the chatGPT
//   const renderDetail = (detail: string) => {
//     return detail.split(/(\d+\.)/).map((part: any, index: any) => {
//       if (/\d+\./.test(part)) {
//         return <div key={index}>.</div>;
//       }
//       return <span key={index}>{part}</span>;
//     });
//   };

//   return (
//     <div id="detailContainer" className="flex flex-col gap-5 overflow-y-scroll h-[80vh] ">
//       <header className="border-b border-gray-300 pb-3 text-gray-600 flex justify-between">
//         <span className="text-[12px]">تحلیل صوت</span>
//         <span>
//           <Printer className="w-4 h-4 me-2 cursor-pointer" />
//         </span>
//       </header>
//       <div id="detail" className="flex flex-col gap-5 overflow-y-scroll h-[80vh] ">
//         {llmLoading === false && analysisArray !== null ? (
//           analysisArray.map((item: any, idx: any) => {
//             return (
//               <div className="bg-white p-5 rounded-lg shadow">
//                 <div className="text-[13px] border-b py-2 mb-3 flex justify-between gap-1 items-center">
//                   <span className="flex gap-2">
//                     {<BadgeCheck className="w-4 h-4" color="green" />}
//                     {item.header}
//                   </span>
//                   <span>{<Copy className="w-4 h-4 text-gray-600" />}</span>
//                 </div>
//                 <div className="text-[13px] leading-6">{item.desc}</div>
//               </div>
//             );
//           })
//         ) : (
//           <div className="flex justify-center items-center h-[100%] text-[12px]  text-gray-400">
//             {llmLoading === true ? (
//               <Loading height="100" width="100" />
//             ) : (
//               <span>هیج فایلی آپلود نشده است !</span>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // callAnalyser ------------------------------------------------------------------------------------

// const CallAnalyser: React.FC = () => {
//   const audioFileName = useSelector(selectAudioFileName);
//   const callScript = useSelector(selectCallScript);
//   const asrLoading = useSelector(selectAsrLoading);

//   return (
//     <div id="rootContainer" className="grid grid-cols-1 md:grid-cols-6 gap-2 max-h-[87vh]">
//      <div id="mp3PlayerAndCallScript" className="md:col-span-3 flex flex-col gap-2">
//         <div className="bg-white shadow p-7 rounded-lg">
//           <header className="border-b border-gray-200 pb-3 mb-5 text-gray-600 flex justify-between">
//             <span className="flex gap-2">
//               <span className="text-[12px]">آپلود فایل صوتی</span>
//               <span className="text-[12px] text-blue-400 cursor-pointer">
//                 {audioFileName && ` - ` + audioFileName}
//               </span>
//             </span>
//             <span>
//               <FileAudio className="w-4 h-4" />
//             </span>
//           </header>
//           <div>
//             {<CallAnalysWaveform url="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" />}
//           </div>
//         </div>
//         <div id="callScript" className="bg-[#d9c6f7] rounded-lg flex-grow p-5">
//           <header className="border-b-2 border-white pb-3 mb-3 text-gray-600 flex justify-between">
//             <span className="text-[13px]">متن صوت</span>
//             <span className="flex gap-2">
//               <Copy className="w-4 h-4 cursor-pointer" />
//               <FileText className="w-4 h-4 cursor-pointer" />
//             </span>
//           </header>
//           <div className="w-full h-[90%] ">
//             {asrLoading === false && callScript !== null ? (
//               <textarea
//                 value={callScript}
//                 className="h-full w-full p-5 rounded-lg bg-white focus:border-none text-[12px]"
//               />
//             ) : (
//               <div className="flex justify-center items-center h-[100%] text-[12px] text-gray-400">
//               {asrLoading === true ? (
//                 <Loading height="100" width="100" />
//               ) : (
//                 <span>هیج فایلی آپلود نشده است !</span>
//               )}
//             </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-7 md:col-span-3 flex-grow">
//         <AnalysDetail />
//       </div>
//     </div>
//   );
// };

// export default CallAnalyser;
