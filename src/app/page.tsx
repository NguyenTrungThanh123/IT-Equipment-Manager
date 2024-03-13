'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.scss"
import Sidebar from "./components/sidebar/page";
import GroundFloor from './pages/pc_status/groundFloor/page';
import Demo from './components/Demo/page'
export default function Home() {

  return (
    <main className={styles.main}>
      <GroundFloor />
    </main>
  );
}
