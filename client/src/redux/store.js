import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import themeModeSlice from "./features/themeSlice";
import globalLoadingSlice from "./features/globalLodaingSlice";
import authModalSlice from "./features/authModelSlice";
import appStateSlice from "./features/appStateSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
    appState: appStateSlice,
  },
});

export default store;
