import Item from "./Item";
const FoodItems = () => {
  let foodItems = ["Green Tea", "egg", "milk", "green vegetables", "dal"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
