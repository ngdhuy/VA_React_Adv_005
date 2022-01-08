import { Link } from 'react-router-dom';

export function Home() {
  return(
    <>
      <main>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quasi. Accusantium, fugiat eaque odio a dolores obcaecati deserunt mollitia maxime quia fuga cupiditate? Officia veritatis maxime quibusdam natus ullam quos?</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>

  );
}