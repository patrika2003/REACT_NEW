import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Green Tea", "egg", "milk", "green vegetables", "dal"];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
