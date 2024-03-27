import styles from "./App.module.scss"
import Routing from "./Routing"
import { Navbar } from "./components/Navbar"

function App() {
    return (
        <main className={styles.root}>
            <Navbar />
            <Routing />
        </main>
    )
}

export default App
