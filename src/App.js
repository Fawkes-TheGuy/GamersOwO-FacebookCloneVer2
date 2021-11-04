import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import "./App.css";
import { useStateValue } from "./StateProvider";
import { LikeButton } from "@lyket/react";
//import Posts from "./Posts";

function App() {
  const [{ user }, distpatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

/*<div className="app_posts">
<Posts user={user} />
</div>*/
