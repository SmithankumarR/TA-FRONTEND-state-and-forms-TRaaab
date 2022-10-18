import Categories from "./Categories";
import '../stylesheets/index.css';
function App() {
  return (
    <>
      <header>
        <div className="title center">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
      </header>
    </>
  );
}

export default App;
