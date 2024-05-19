import PropTypes from "prop-types";

export default function Social({ name, handle }) {
  return (
    <>
      <span className="social">
        <a href={handle} target="_blank">
          <img src={`/socials/${name}.svg`} alt={`${name} logo`} width={20} />
        </a>
      </span>
    </>
  );
}

Social.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};
