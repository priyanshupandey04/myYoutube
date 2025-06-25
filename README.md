# 📺 YouTube UI – React + Vite + Tailwind + Redux

This project is a **modern YouTube UI clone**, built with **React**, **Vite**, **Redux Toolkit**, and styled using **Tailwind CSS**. It fetches live data using the **YouTube Data API v3**.

---

## ⚙️ Tech Stack

| Tech             | Purpose                          |
| ---------------- | -------------------------------- |
| ⚛️ React         | UI development                   |
| ⚡ Vite           | Fast dev server & bundling       |
| 🎨 Tailwind CSS  | Utility-first responsive styling |
| 🧠 Redux Toolkit | Global state management          |
| 🌐 YouTube API   | Video data integration           |
| 🌤 JSX + Babel   | JS templating & transpiling      |

---

## 📁 Folder Structure

```
myYoutube/
├── public/
├── src/
│   ├── components/        # Sidebar, Header, VideoList, etc.
│   ├── redux/             # Store & Slices
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
```

---

## 🚀 Setup & Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Add YouTube API Key

Create a `.env` file in the root folder:

```env
VITE_GOOGLE_API_KEY=your_api_key_here
```

✅ Never expose this key publicly!

### 3. Run the Dev Server

```bash
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Redux Toolkit Setup

### 🏪 Store – `src/redux/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
```

### 🍰 Slice – `src/redux/slices/exampleSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

export const { increment } = exampleSlice.actions;
export default exampleSlice.reducer;
```

### 🌐 Using Redux in Component

```js
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/slices/exampleSlice";

const Counter = () => {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Count is {value}
    </button>
  );
};
```

---

## ✅ Today's Progress on YouTube Clone Project

🚀 **Key Features Implemented:**

1. **🔁 React Routing for SPA**

   * Integrated `react-router-dom` to enable **Single Page Application** behavior.
   * Ensured smooth transitions between components like Home, Watch Page, etc., without full page reloads.

2. **📦 Redux State Management**

   * Configured Redux using `@reduxjs/toolkit` to manage global states like sidebar toggle and search results.
   * Structured slices for clean modular state logic.

3. **💡 Debounced Search Suggestions (Live API)**

   * Implemented **debouncing** (using `setTimeout`) to reduce redundant API calls while typing.
   * Used **Google’s search suggestion API** for real-time feedback.

4. **⚡ API Caching for Search Suggestions**

   * Cached previously fetched suggestions using Redux (object/map), reducing network calls and improving UX.

5. **🧵 Recursive Nested Comments (Reddit-style)**

   * Built a **recursive component structure** for displaying deeply nested comment threads.
   * Supports unlimited comment depth similar to Reddit.

---

### 6. 💬 **YouTube-Style Live Chat Feature**

✅ Added a **real-time live chat interface** just like YouTube’s Watch Page:

* **📱 API Polling Simulation**:
  Chat messages are dynamically fetched using a simulated **API polling mechanism** every `1.5 seconds`.

* **🔃 FIFO Message Management**:
  Messages are stored in a **First-In-First-Out (FIFO)** manner.
  When the chat length exceeds **100 messages**, older messages are **automatically removed from the top** to prevent UI lag.

* **📤 Bottom-Up Rendering**:
  Latest messages appear at the **bottom**, maintaining a natural reading flow like YouTube’s live chat.
  UI uses `flex-col-reverse` layout to reverse rendering order.

* **🧠 Smart Auto-Scroll**:

  * If the user is **at the bottom**, new messages auto-scroll smoothly into view.
  * If the user **scrolls upward** to read past messages, auto-scroll is **disabled** so their scroll position remains stable.
  * Once they scroll back near the bottom, auto-scroll **resumes automatically** for better UX.

* **⚡ Flicker-Free Experience**:
  Optimized scroll calculations with `useLayoutEffect` to avoid any **visual flickering** or scroll jumps on message updates.

---

### Sample Code Snippet

```js
// FIFO Logic & Trimming
setMessages((prev) => {
  const updated = [newMsg, ...prev];
  return updated.length > 100 ? updated.slice(0, 100) : updated;
});
```

---

### 📌 UX Focus

* Mirrors YouTube’s **real-time chat flow** behavior.
* Ensures performance even during **high-frequency message loads**.
* Designed with **reactive scroll sync logic** to provide consistent user control.

---

🔨 **Tech Stack Used:**
`React`, `Redux Toolkit`, `React Router`, `Tailwind CSS`, `JavaScript`, `Google Search Suggestion API`

---

## ✍️ Author

**Priyanshu Pandey**
🧑‍💻 Full Stack Developer | MERN | DSA | Vite & Tailwind enthusiast

---

## 🛡 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Support

If you like this project, consider ⭐ starring the repo and sharing it!
