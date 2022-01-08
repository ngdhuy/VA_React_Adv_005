import { Link } from "react-router-dom";

export function About() {
  return(
    <>
      <main>
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia magni magnam quo harum eligendi asperiores possimus qui quidem? Aut recusandae doloremque aperiam nemo dignissimos ullam debitis aspernatur unde necessitatibus.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas obcaecati laborum quis numquam voluptatum! Quam eveniet eligendi sint nulla ducimus eius totam deserunt aliquam commodi laborum, cupiditate fugit ipsam officiis?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}