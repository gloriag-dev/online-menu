import styles from "./App.module.scss";
import Routing from "./Routing";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
