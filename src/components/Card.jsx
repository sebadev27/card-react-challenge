import Cardtag from "./Card-tag";
import "./Card.css";

function Card() {
  const tagNames = [
    "HTML + CSS 💪",
    "JavaScript 😊",
    "WebDesign 💪",
    " Git and Github 👍",
    "React ✅",
    "Svelte 😭",
  ];

  const styles = [
    {
      backgroundColor: "#0074D9",
    },
    {
      backgroundColor: "#2ECC40",
    },
    {
      backgroundColor: "#FF851B",
    },
    {
      backgroundColor: "#FF4136",
    },
    {
      backgroundColor: "#FFDC00",
    },
    {
      backgroundColor: "#B10DC9",
    },
  ];

  return (
    <>
      <img
        className="img"
        src="https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg"
        alt="man portrait of a famous actor"
      />
      <h2 className="title">Yorch Clunei</h2>
      <p className="description">
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjou the Portuguese sun at the beach.
      </p>
      <div className="tag-wrapper">
        <Cardtag tagName={tagNames[0]} colorProp={styles[0]} />
        <Cardtag tagName={tagNames[1]} colorProp={styles[1]} />
        <Cardtag tagName={tagNames[2]} colorProp={styles[2]} />
        <Cardtag tagName={tagNames[3]} colorProp={styles[3]} />
        <Cardtag tagName={tagNames[4]} colorProp={styles[4]} />
        <Cardtag tagName={tagNames[5]} colorProp={styles[5]} />
      </div>
    </>
  );
}

export default Card;
