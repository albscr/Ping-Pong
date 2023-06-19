import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeController from "./Pages/Home/HomeController";
import TrackerController from "./Pages/Tracker/TrackerController";
import { Leaderboard } from "./Pages/Leaderboard";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route  path="/tracker" element={<TrackerController />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
