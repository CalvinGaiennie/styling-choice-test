import style from "./Home.module.css";

function Home({ setSelectedStyle, styleLink, selectedStyle }) {
  function handleChange(event) {
    setSelectedStyle(event.target.value);
  }
  return (
    <div className={style[styleLink]}>
      <h1>Here is a home page</h1>
      <p>It has a bunch of different element types on it</p>
      <input />
      <button>click me</button>
      <p>Choose your style preference</p>
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>{selectedStyle}</p>
    </div>
  );
}

export default Home;
