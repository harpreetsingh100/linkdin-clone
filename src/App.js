import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="bg-[#f3f2ef] flex flex-col items-center h-screen">
      <Header />
      <div className="flex w-screen">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </div>
    </div>
  );
}

export default App;
