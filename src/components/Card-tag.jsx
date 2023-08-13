import "./Card-tag.css";
import PropTypes from "prop-types";

function Cardtag({ skills }) {
  const levelEmojis = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };

  return (
    <ul className="tag-list">
      {skills.map((skillObj, index) => (
        <li
          className="tag"
          style={{ backgroundColor: skillObj.color }}
          key={index}
        >
          {skillObj.skill}
          <span className="emoji-wrap">{levelEmojis[skillObj.level]}</span>
        </li>
      ))}
    </ul>
  );
}

Cardtag.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Cardtag;
