import {useLocation, useNavigate} from 'react-router';
import SingleView from '../components/SingleView';

const Single = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state?.item;

  if (!item) {
    return (
      <>
        <p>No media selected.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </>
    );
  }

  return (
    <>
      <SingleView item={item} />

      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </>
  );
};

export default Single;
