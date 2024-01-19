import { shallow } from "zustand/shallow";
import "./App.css";
import { useBookStore } from "./store/bookStore";

function App() {
  const amount = useBookStore((state) => state.amount);
  const author = useBookStore((state) => state.author);
  const name = useBookStore((state) => state.name);
  // const { amount, author, name } = useBookStore(
  //   (state) => ({
  //     amount: state.amount,
  //     author: state.author,
  //     name: state.name,
  //   }),
  //   shallow
  // );
  return (
    <>
      <h1>Books: {amount}</h1>
      <h1>Author: {author}</h1>
      <h2>Name: {name}</h2>
    </>
  );
}

export default App;
