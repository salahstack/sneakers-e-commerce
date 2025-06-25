import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const mockDatabase = [
  { id: 1, email: "admin@example.comm", password: "123456", role: "admin" },
  { id: 2, email: "user@example.com", password: "password", role: "user" },
];

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: null,
  status: "idle",
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async ({ navigate }, { rejectWithValue }) => {
    const userString = localStorage.getItem("user");
    if (!userString) {
      return rejectWithValue("No user data found in localStorage");
    }

    const user = JSON.parse(userString);
    if (!user) {
      return rejectWithValue("Invalid user data");
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const client = mockDatabase.find(
          (u) => u.email === user.email && u.id === user.id
        );
        if (client) {
          resolve({
            user: client,
            navigate,
          });
        } else {
          console.log("error");
          reject(rejectWithValue("User not found"));
        }
      }, 2000);
    });
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ credentials }, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockDatabase.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          resolve({
            user: { id: user.id, email: user.email, role: user.role },
          });
        } else {
          reject(rejectWithValue("Invalid email or password"));
        }
      }, 2000);
    });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        action.meta.arg.navigate("/");
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        action.payload.navigate("/");
      })

      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        action.meta.arg.navigate("/login");
        state.user = null;
        localStorage.removeItem("user");
        action.meta.arg.navigate("/login");
      });
  },
});

export default authSlice.reducer;
