// import React from "react";
// import UserManagmentList from "./UserManagmentList";
// import { Button } from "../ui/button";
// import UserAddModal from "./modal/UserAddModal";
// import UserEditModal from "./modal/UserEditModal";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch } from "../../store/store";
// import { RsetUserAddModal, selectUserAddModal } from "../../slices/mainSlices";

// const UserManagment = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const userAddModal = useSelector(selectUserAddModal);

//   const openUserAddModal = () => {
//     dispatch(RsetUserAddModal(true));
//   };

//   const closeUserAddModal = () => {
//     dispatch(RsetUserAddModal(false));
//   };

//   return (
//     <div>
//       <Button className="bg-purple-700" onClick={openUserAddModal}>
//         + افزودن کاربر
//       </Button>
//       <div className="mt-2">
//         <UserManagmentList />
//       </div>
//       <UserAddModal open={userAddModal} onOpenChange={closeUserAddModal} />
//       <UserEditModal />
//     </div>
//   );
// };

// export default UserManagment;
