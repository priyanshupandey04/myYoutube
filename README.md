# 📺 YouTube UI – React + Vite + Tailwind + Redux

This project is a **modern YouTube UI clone**, built with **React**, **Vite**, **Redux Toolkit**, and styled using **Tailwind CSS**.  It fetches live data using the **YouTube Data API v3**.

---

## ⚙️ Tech Stack

| Tech             | Purpose                          |
| ---------------- | -------------------------------- |
| ⚛️ React         | UI development                   |
| ⚡ Vite           | Fast dev server & bundling       |
| 🎨 Tailwind CSS  | Utility-first responsive styling |
| 🧠 Redux Toolkit | Global state management          |
| 🌐 YouTube API   | Video data integration           |
| 🔤 JSX + Babel   | JS templating & transpiling      |

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
    increment: (state) => { state.value++ },
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

## 📸 Screenshots

> Add your screenshots in a `/screenshots` folder and update paths.

### 🏠 Homepage

### 🎬 Video Listing

---

## 📦 Deployment (Optional)

You can deploy this using:

* [Vercel](https://vercel.com/)
* [Netlify](https://netlify.com/)

Just connect your GitHub repo and follow the instructions.

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
