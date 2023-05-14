import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';

export const HeaderMenu = () => {
  return (
    <div className="headermenu">
      <SettingIcon className="headermenu__settings" />
      <div className="headermenu__logo" />
      <div className="headermenu__text">
        <p>Jolanta</p>
        <p>kursant</p>
      </div>
    </div>
  );
};
