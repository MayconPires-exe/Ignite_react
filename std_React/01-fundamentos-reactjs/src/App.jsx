import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
           <Post
            author="Ingrid Barros"
            content="Muito ipsum"
          />
          <Post
            author="Maycon"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit at, non fugiat nam exercitationem cum culpa iure aliquid modi iste facilis dolores soluta in quos perferendis assumenda vero eligendi maxime."
          />
        </main>
      </div>
    </div>
  )
}