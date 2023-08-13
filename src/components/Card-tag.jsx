import "./Card-tag.css";
import PropTypes from "prop-types";

function Cardtag({ skills }) {
  return (
    <ul className="tag-list">
      {skills.map((skillObj, index) => (
        <li
          className="tag"
          style={{ backgroundColor: skillObj.color }}
          key={index}
        >
          {skillObj.skill}
        </li>
      ))}
    </ul>
  );
}

Cardtag.propTypes = {
  skills: PropTypes.object.isRequired,
};

export default Cardtag;
