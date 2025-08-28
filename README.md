# TopVidVault 🎥

*A slick YouTube-style video browser with smart search suggestions and a lively in-page chat.*

## ✨ Overview
TopVidVault helps you discover videos quickly and comfortably:

- Start typing to get **instant search suggestions** (debounced to avoid noisy requests).
- Open a video and join a **playful live chat** that streams mock messages while you contribute.
- Browse popular videos and related content in a familiar, minimal UI—all in a **single-page app** that keeps navigation snappy.

## 🚀 Features
- **Typeahead Search** – Debounced input + cached suggestions for repeat queries (feels instant).
- **Result Caching** – A Redux store remembers prior searches to reduce API calls.
- **Live Chat** – Auto-generated messages simulate an active chat; you can post messages too.
- **Video Pages** – Watch videos with title, stats, and related items.
- **Responsive UI** – Works nicely on desktop and mobile.
- **Spa-Smooth Nav** – Client-side routing avoids full-page reloads.

## 🧰 Tech Stack
- **React** (Create React App)
- **Redux Toolkit** (state, caching)
- **React Router**
- **YouTube Data API v3**
- **Fetch API**
- **Jest + React Testing Library** (optional tests)
- **CSS / plain styling** (framework-agnostic)

> If your project uses Tailwind, Vite, or other tools, feel free to add them here.  
> This README assumes CRA because the repo was bootstrapped with **Create React App**.

## 🖼️ Screenshots
_Add screenshots or a short GIF here (e.g., search suggestions, video page, chat)._

## 🔑 Prerequisites
- **Node.js** 18+ (recommended)
- A **YouTube Data API v3** key

Create a key in Google Cloud Console → Enable *YouTube Data API v3* → Credentials → *API key*.

## 🛠️ Setup
```bash
# 1) Clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2) Install
npm install

# 3) Create environment file
# (CRA exposes only variables prefixed with REACT_APP_)
echo "REACT_APP_YT_API_KEY=YOUR_YOUTUBE_API_KEY" > .env

# 4) Run locally (http://localhost:3000)
npm start
```

## 📜 Available Scripts (CRA)
- `npm start` – Run in development mode with fast refresh.  
- `npm test` – Launch the interactive test runner.  
- `npm run build` – Create a production build in `/build`.  
- `npm run eject` – Copy config files locally (one-way).

## 🧠 How It Works (short & sweet)
- **Debounced Search**: The search box waits ~300ms after you stop typing before calling the API, reducing unnecessary requests and flicker.
- **Redux Cache**: Suggestions and results are stored by query. If you search again, results appear immediately while the app decides whether to refresh.
- **Live Chat**: A lightweight interval simulates incoming messages. Your messages are appended to the same stream, creating a “busy room” feel without a backend.

## 📁 Project Structure (example)
```
src/
  api/               # API helpers (YouTube endpoints, fetch utils)
  components/        # UI components (SearchBar, VideoCard, Chat, etc.)
  features/          # Redux slices (searchSlice, chatSlice, videoSlice)
  pages/             # Route views (Home, Watch, SearchResults)
  routes/            # Router config
  store/             # Redux store setup
  styles/            # CSS
  utils/             # small utilities (debounce, formatters)
  App.js
  index.js
```

## 🔌 Configuration

**Environment variables**
```
REACT_APP_YT_API_KEY=<your key>
```

**API usage notes**
- Endpoints typically used:
  - `search.list` (type=video) for suggestions / results
  - `videos.list` (chart=mostPopular) for “Top” feed
- Respect YouTube API quotas; caching helps reduce calls.
- 

## 🚢 Deployment
https://mi-youtube.netlify.app/

## 🗺️ Roadmap
- [ ] Infinite scroll on results
- [ ] Watch history & “Continue watching”
- [ ] Real WebSocket chat (replace mock stream)
- [ ] Skeleton loaders & better error states
- [ ] Dark mode

## 🙌 Acknowledgements
- YouTube Data API v3
- Create React App
- Redux Toolkit & React Router
