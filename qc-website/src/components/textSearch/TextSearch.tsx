// import React, { useEffect, useState } from "react";
// import SideBarTextSearchRes from "../dashboardContainer/sidebar/sideBarTextSearch/SideBarTextSearchRes";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../store/store";
// import { RsetShowTextFilterRes } from "../../slices/mainSlices";
// import List from "../list/List";
// import TextSearchList from "./TextSearchList";
// import DatePicker from "react-multi-date-picker";
// import { Label } from "@radix-ui/react-label";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import TextSearchModal from "./modal/TextSearchLoadModal";
// import TextSearchMessage from "./modal/TextSearchMessageModal";
// import TextSearchLoadModal from "./modal/TextSearchLoadModal";

// const TextSearch = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [values, setValues] = useState();

//   useEffect(() => {
//     dispatch(RsetShowTextFilterRes(false));
//   }, []);

//   function handleChange(values: any) {
//     //your modification on passed value ....
//     setValues(values);
//   }

//   return (
//     <div id="textSearch-container">
//       <Label className="text-[12px]">انتخاب بازه زمانی تماس ها</Label>
//       <div className="mb-2 mt-2">
//         <DatePicker
//           value={values}
//           onChange={handleChange}
//           range
//           rangeHover
//           calendar={persian}
//           locale={persian_fa}
//         />
//       </div>
//       <TextSearchList />
//       <div>
//         <SideBarTextSearchRes />
//       </div>
//       <TextSearchModal />
//       <TextSearchMessage />
//     </div>
//   );
// };

// export default TextSearch;
