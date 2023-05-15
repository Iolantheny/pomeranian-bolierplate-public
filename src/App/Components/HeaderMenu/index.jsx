import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { ArrowToBottom } from '../Icons/ArrowToBottom';

export const HeaderMenu = () => {
  return (
    <div className="headermenu">
      <SettingIcon className="headermenu__settings" />
      <img
        src="/images/pexels-luddmyla-14707145.jpg"
        alt="logo"
        className="headermenu__logo"
      />
      <div className="headermenu__text">
        <p>Jolanta</p>
        <p>kursant</p>
      </div>
      <ArrowToBottom className="headermenu__arrow" />
    </div>
  );
};
