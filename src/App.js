import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "./redux/userSlice";

function App() {
  const user = useSelector((store) => store.user.user);
  if (user) {
    var { email, name, photoUrl, uid } = user;
  }
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          logIn({
            email: email,
            uid: uid,
            displayName: name,
            photoUrl: photoUrl,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, []);

  return !user ? (
    <Login />
  ) : (
    <div className="bg-[#f3f2ef] flex flex-col items-center h-auto w-screen border-4 border-red-700 ">
      <Header />
      <div className="flex mx-auto w-screen border-2 border-green-600 max-w-[1200px] mt-4">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
