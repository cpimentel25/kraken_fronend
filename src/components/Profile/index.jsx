import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCalendarDays,
  faEnvelope,
  faGear,
  faPlus,
  faUser,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const ProfileComponent = () => {
  const handleDeleteCredentials = () => {
    localStorage.clear();
  };

  const userData = useSelector((state) => state.financeData.user.profile);
  const dataUser = useSelector((state) => state.financeData);

  const guestData = dataUser.guest.profile;

  function guest() {
    if (guestData === null) {
      return 'No guest';
    }
    return guestData;
  }

  const date = new Date(userData.createdAt)
    .toString()
    .split(' ')
    .splice(0, 4)
    .join(' ');

  return (
    <div className='profile-component'>
      <div className='profile-component_topMenu'>
        <div className='profile-component_topMenu_setting'>
          <FontAwesomeIcon className='shape-icon' icon={faGear} />
        </div>
        <h3 className='profile-component_topMenu_title'>Profile</h3>
        <div className='profile-component_topMenu_notification'>
          <FontAwesomeIcon className='shape-icon' icon={faBell} />
        </div>
      </div>
      <div className='profile-component_sectionID'>
        <div className='profile-component_sectionID_img'>
          <div className='profile-component_sectionID_img_button'>
            <FontAwesomeIcon className='shape-icon' icon={faPlus} />
          </div>
        </div>
        <div className='profile-component_sectionID_name'>
          <h3>
            {userData.firstName} {userData.lastName}
          </h3>
        </div>
      </div>
      <hr className='profile-component_hr' />
      <div className='profile-component_sectionInfo'>
        <div className='profile-component_sectionInfo_01'>
          <div className='profile-component_sectionInfo_01_shape'>
            <FontAwesomeIcon className='shape-icon' icon={faEnvelope} />
          </div>
          <div className='profile-component_sectionInfo_01_info'>
            <p className='profile-component_sectionInfo_01_info_email'>
              {userData.email}
            </p>
            <p className='profile-component_sectionInfo_01_info_description'>
              email
            </p>
          </div>
        </div>
        <div className='profile-component_sectionInfo_01'>
          <div className='profile-component_sectionInfo_01_shape'>
            <FontAwesomeIcon className='shape-icon' icon={faCalendarDays} />
          </div>
          <div className='profile-component_sectionInfo_01_info'>
            <p className='profile-component_sectionInfo_01_info_date'>{date}</p>
            <p className='profile-component_sectionInfo_01_info_description'>
              joined
            </p>
          </div>
        </div>
        <div className='profile-component_sectionInfo_01'>
          <div className='profile-component_sectionInfo_01_shape'>
            <FontAwesomeIcon className='shape-icon' icon={faWallet} />
          </div>
          <div className='profile-component_sectionInfo_01_info'>
            <p className='profile-component_sectionInfo_01_info_email'>
              {dataUser.currency}
            </p>
            <p className='profile-component_sectionInfo_01_info_description'>
              currency
            </p>
          </div>
        </div>
        <div className='profile-component_sectionInfo_01'>
          <div className='profile-component_sectionInfo_01_shape'></div>
          <div className='profile-component_sectionInfo_01_info'>
            <p className='profile-component_sectionInfo_01_info_email'>
              {userData.role}
            </p>
            <p className='profile-component_sectionInfo_01_info_description'>
              role
            </p>
          </div>
        </div>
        <div className='profile-component_sectionInfo_01'>
          <div className='profile-component_sectionInfo_01_shape'>
            <FontAwesomeIcon className='shape-icon' icon={faUser} />
          </div>
          <div className='profile-component_sectionInfo_01_info'>
            <p className='profile-component_sectionInfo_01_info_email'>
              {guest()}
            </p>
            <p className='profile-component_sectionInfo_01_info_description'>
              guest
            </p>
          </div>
        </div>
      </div>
      <div className='profile-component-button'>
        <button
          className='profile-component-button_logOut'
          type='submit'
          value='submit'
          onClick={handleDeleteCredentials}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileComponent;