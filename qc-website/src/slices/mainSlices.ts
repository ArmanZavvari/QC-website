// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store/store";
// import { AccessToken, UserData } from "../utils/types";
// import { tokenApi } from "../api/analysServices";
// import { AxiosResponse } from "axios";

// interface MainState {
//   showAdvanceSearch: boolean;
//   showTextFilterRes: boolean;
//   showMenuRes: boolean;
//   textSearchloadModal: boolean;
//   textSearchMessageModal: boolean;
//   userAddModal: boolean;
//   userEditModal: boolean;
//   userCurrentData: object;
//   audioFileName: string;
//   accessToken: string;
//   audioUrl: any | null;
//   callScript: string | null;
//   analysData: string | null;
//   callBaseSearchCallFrom: number;
//   asrLoading: boolean;
//   llmLoading: boolean;
//   generateText: boolean;
//   generateAnylys: boolean;
//   ttsGenerator: string;
// }

// const initialState: MainState = {
//   showAdvanceSearch: false,
//   showTextFilterRes: false,
//   showMenuRes: false,
//   asrLoading: false,
//   llmLoading: false,
//   //modal
//   textSearchloadModal: false,
//   textSearchMessageModal: false,
//   userAddModal: false,
//   userEditModal: false,
//   userCurrentData: {},
//   //audio
//   audioFileName: "",
//   accessToken: "",
//   audioUrl: null,
//   callScript: null,
//   analysData: null,
//   generateText: false,
//   generateAnylys: false,
//   ttsGenerator: "TTS",
//   //advanceSearch
//   callBaseSearchCallFrom: 0,
// };

// export interface TokenRequestData {
//   client_id: string;
//   client_secret: string;
//   grant_type: string;
//   scope: string;
// }
// interface TokenData {
//   client_id: string;
//   client_secret: string;
//   grant_type: string;
//   scope: string;
// }
// export interface TokenRequestData {
//   data: any;
// }

// export const handleTokenApi = createAsyncThunk<void, TokenRequestData, { state: RootState }>(
//   "main/handleTokenApi",
//   async (data, { dispatch }) => {
//     // try {
//     //   // Make the API call
//     //   const response: AxiosResponse<TokenApiResponse> = await tokenApi(data);
//     //   const tokenApiRes: TokenApiResponse = response.data; // Extract the data from the Axios response
//     //   // Log the response data (optional)
//     //   console.log(tokenApiRes.data.access_token);
//     //   // Dispatch the action to set the access token in the state
//     //   dispatch(RsetAccessToken(tokenApiRes.data.access_token));
//     // } catch (err) {
//     //   // Log any errors that occur during the API call
//     //   console.error(err);
//     //   throw err; // Re-throw the error to be caught in the component
//     // }
//   }
// );

// const mainSlices = createSlice({
//   name: "main",
//   initialState,
//   reducers: {
//     RsetShowAdvanceSearch: (state, action: PayloadAction<boolean>) => {
//       state.showAdvanceSearch = action.payload;
//     },
//     RsetAsrLoading: (state, action: PayloadAction<boolean>) => {
//       state.asrLoading = action.payload;
//     },
//     RsetLlmLoading: (state, action: PayloadAction<boolean>) => {
//       state.llmLoading = action.payload;
//     },
//     RsetShowTextFilterRes: (state, action: PayloadAction<boolean>) => {
//       state.showTextFilterRes = action.payload;
//     },
//     RsetShowMenuRes: (state, action: PayloadAction<boolean>) => {
//       state.showMenuRes = action.payload;
//     },
//     RsetTextSearchLoadModal: (state, action: PayloadAction<boolean>) => {
//       state.textSearchloadModal = action.payload;
//     },
//     RsetTextSearchMessageModal: (state, action: PayloadAction<boolean>) => {
//       state.textSearchMessageModal = action.payload;
//     },
//     RsetUserAddModal: (state, action: PayloadAction<boolean>) => {
//       state.userAddModal = action.payload;
//     },
//     RsetUserEditModal: (state, action: PayloadAction<boolean>) => {
//       state.userEditModal = action.payload;
//     },
//     RsetUserCurrentData: (state, action: PayloadAction<object>) => {
//       state.userCurrentData = action.payload;
//     },
//     //audio
//     RsetAudioFileName: (state, action: PayloadAction<string>) => {
//       state.audioFileName = action.payload;
//     },
//     RsetAccessToken: (state, action: PayloadAction<string>) => {
//       state.accessToken = action.payload;
//     },
//     RsetAudioUrl(state, action: PayloadAction<any>) {
//       state.audioUrl = action.payload;
//     },
//     RsetCallScript(state, action: PayloadAction<any>) {
//       state.callScript = action.payload;
//     },
//     RsetAnalysData(state, action: PayloadAction<any>) {
//       state.analysData = action.payload;
//     },
//     RsetCallBaseSearchCallFrom(state, action: PayloadAction<any>) {
//       state.callBaseSearchCallFrom = action.payload;
//     },
//     RsetGenerateText(state, action: PayloadAction<any>) {
//       state.generateText = action.payload;
//     },
//     RsetGenerateAnalys(state, action: PayloadAction<any>) {
//       state.generateAnylys = action.payload;
//     },
//     RsetTtsGenerator(state, action: PayloadAction<any>) {
//       state.ttsGenerator = action.payload;
//     },
//   },
// });

// export const {
//   RsetShowAdvanceSearch,
//   RsetShowTextFilterRes,
//   RsetShowMenuRes,
//   RsetTextSearchLoadModal,
//   RsetTextSearchMessageModal,
//   RsetUserAddModal,
//   RsetUserEditModal,
//   RsetUserCurrentData,
//   RsetAudioFileName,
//   RsetAccessToken,
//   RsetAudioUrl,
//   RsetCallScript,
//   RsetAnalysData,
//   RsetCallBaseSearchCallFrom,
//   RsetAsrLoading,
//   RsetLlmLoading,
//   RsetGenerateText,
//   RsetGenerateAnalys,
//   RsetTtsGenerator,
// } = mainSlices.actions;

// export const selectShowAdvanceSearch = (state: RootState) => state.main.showAdvanceSearch;
// export const selectShowTextFilterRes = (state: RootState) => state.main.showTextFilterRes;
// export const selectShowMenuRes = (state: RootState) => state.main.showMenuRes;
// export const selectTextSearchLoadModal = (state: RootState) => state.main.textSearchloadModal;
// export const selectTextSearchMessageModal = (state: RootState) => state.main.textSearchMessageModal;
// export const selectUserAddModal = (state: RootState) => state.main.userAddModal;
// export const selectUserEditModal = (state: RootState) => state.main.userEditModal;
// export const selectUserCurrentData = (state: UserData) => state.main.userCurrentData;
// export const selectAudioFileName = (state: UserData) => state.main.audioFileName;
// export const selectAccessToken = (state: UserData) => state.main.accessToken;
// export const selectAudioUrl = (state: UserData) => state.main.audioUrl;
// export const selectCallScript = (state: UserData) => state.main.callScript;
// export const selectAnalysData = (state: UserData) => state.main.analysData;
// export const selectCallBaseSearchCallFrom = (state: UserData) => state.main.callBaseSearchCallFrom;
// export const selectAsrLoading = (state: UserData) => state.main.asrLoading;
// export const selectLlmLoading = (state: UserData) => state.main.llmLoading;
// export const selectGenerateText = (state: UserData) => state.main.generateText;
// export const selectGenerateAnalys = (state: UserData) => state.main.generateAnylys;
// export const selectTtsGenerator = (state: UserData) => state.main.ttsGenerator;

// export default mainSlices.reducer;
