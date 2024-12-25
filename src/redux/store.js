import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { identityApi } from "./api/IdentityApi";
import globalStateReducer from "./slice/GlobalStateSlice";
import { carApi } from "./api/CarApi";
import { bookingApi } from "./api/BookingApi";
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [identityApi.reducerPath]: identityApi.reducer,
    [carApi.reducerPath]: carApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    globalState: globalStateReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(identityApi.middleware)
      .concat(carApi.middleware)
      .concat(bookingApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
