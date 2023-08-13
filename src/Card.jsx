import "./Card.css";
import Cardtag from "./components/Card-tag";
import Image from "./components/Image";
import TittleDescription from "./components/Tittle&description";
import skills from "./assets/data";
("./assets/data.jsx");

function Card() {
  return (
    <main className="main">
      <Image />
      <TittleDescription />
      <ul className="tag-wrapper">
        <Cardtag skills={skills} />
      </ul>
    </main>
  );
}

export default Card;
