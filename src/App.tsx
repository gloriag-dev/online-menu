import styles from "./App.module.scss";
import Hero from "./components/Hero";

function App() {
  return (
    <div className={styles.root}>
      <Hero />
    </div>
  );
}

export default App;
