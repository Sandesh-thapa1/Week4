import PropTypes from 'prop-types';

const SingleView = ({item}) => {
  return (
    <>
      <h2>{item.title}</h2>

      <p>{item.description}</p>

      <p>Owner: {item.username}</p>

      {item.media_type.includes('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}
    </>
  );
};

SingleView.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SingleView;
