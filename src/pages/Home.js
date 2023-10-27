import "../App.css";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="cursor-pointer">
          <Link className="font-blue" to="ProjectOne">
            <h1 className="text-8xl">AI at Spotify</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
