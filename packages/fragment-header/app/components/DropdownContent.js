import React from 'react';

function onProfileClick(id, name) {
  console.log(`profile is changed for ${name}`);
    const customEvent = new CustomEvent("profileChange", {
        detail: {
            promotionId: id,
            username: name
        }
    });

  // Trigger it!
    window.dispatchEvent(customEvent);
}

const dropdownContent = () => (

  <div className="dropdownContainer">
    <div className="navigation__container--userLogo">
      <div className="dropdownContent">
        <div  onClick={(e) => onProfileClick(63350, 'Vimal')}>
          <div className="dropdownContent--user"></div>
          <p className="dropdownContent--user-text">Vimal</p>
        </div>
        <div  onClick={(e) => onProfileClick(63174, 'Mohannad')}>
          <div className="dropdownContent--user dropdownContent--user-2"></div>
          <p className="dropdownContent--user-text">Mohannad</p>
        </div>
        <div onClick={(e) => onProfileClick(66732, 'Iven')}>
          <div className="dropdownContent--user dropdownContent--user-3"></div>
          <p className="dropdownContent--user-text">Iven</p>
        </div>
        <p className="dropdownContent-text">Manage Profiles</p>

      </div>
      <div className="dropdownContent dropdownContent--2">
        <p className="dropdownContent-textOutside">Account</p>
        <p className="dropdownContent-textOutside">Help Center</p>
        <p className="dropdownContent-textOutside">Sign out of Netflix</p>
      </div>
    </div>
  </div>
);

export default dropdownContent;

