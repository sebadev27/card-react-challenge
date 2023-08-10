import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      {/* This component act as a wrapper of the whole card, it's border is done in CSS */}
      <div className="app">
        <Card />
      </div>
    </>
  );
}

export default App;
