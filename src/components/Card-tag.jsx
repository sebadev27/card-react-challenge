import "./Card-tag.css";
import PropTypes from "prop-types";

function Cardtag(props) {
  const tagName = props.tagName;
  const colorTag = props.colorProp;

  return (
    <>
      <div className="tag" style={colorTag}>
        {tagName}
      </div>
    </>
  );
}

Cardtag.propTypes = {
  tagName: PropTypes.string.isRequired,
  colorProp: PropTypes.object.isRequired,
};

export default Cardtag;
