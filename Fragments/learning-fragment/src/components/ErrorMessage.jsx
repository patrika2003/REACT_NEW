const ErrorMessage = () => {
  let foodItems = ["Green Tea", "egg", "milk", "green vegetables", "dal"];
  return <>{foodItems.length === 0 && <h3>I am still hungry.</h3>}</>;
};
export default ErrorMessage;
