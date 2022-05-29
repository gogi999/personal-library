import { useDispatch } from 'react-redux';
import { logout, fetchRandomUser } from '../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1>
        Personal Library
      </h1>
      <button 
        className="logout-btn"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
      <button 
        className="user-btn"
        onClick={() => dispatch(fetchRandomUser())}
      >
        Get User Data
      </button>
    </div>
  );
}

export default Header;
