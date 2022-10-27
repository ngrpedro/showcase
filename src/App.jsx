import heromain from "./assets/heromain.png";
import Navbar from "./patterns/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <img src={heromain} alt="" className="w-screen h-screen object-cover" />
      </div>
    </div>
  );
}

export default App;
