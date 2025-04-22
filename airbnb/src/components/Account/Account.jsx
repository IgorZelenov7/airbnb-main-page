import navIcon from './nav.svg';
import './style.scss';

const Account = () => {
  return ( 
    <button className="account">
      <div className="account__nav-icon">
        <img src={navIcon} alt="nav" />
      </div>
      <div href="#" className="account__avatar">
        <img src="./img/icons/user-avatar.svg" alt="user avatar" />
      </div>
    </button>
   );
}
 
export default Account;