import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Flávio Félix"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum exercitationem perspiciatis, delectus sit similique, molestias voluptates consequatur, quos ad numquam. Illo quisquam nihil, velit consequatur reprehenderit omnis illum placeat?"
      />
      <Post author="Valéria Nascimento" content="Um novo post" />
    </div>
  );
}
