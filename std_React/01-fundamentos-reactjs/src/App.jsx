import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Ingrid Barros"
        content="Muito ipsum"
      />
      <Post
        author="Maycon"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit at, non fugiat nam exercitationem cum culpa iure aliquid modi iste facilis dolores soluta in quos perferendis assumenda vero eligendi maxime."
      />
    </>
  )
}