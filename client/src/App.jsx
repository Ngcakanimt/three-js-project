import Canvas from "./canvas";
import Home from "./pages/Home";
import Customiser from "./pages/Customiser";

function App() {
  

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customiser />
    </main>
  )
}

export default App
