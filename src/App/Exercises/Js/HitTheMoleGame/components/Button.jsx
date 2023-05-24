export const Button = ({ isActive, onClick, label }) => {
  return (
    <button className={isActive ? 'game-btn-active' : ''} onClick={onClick}>
      {label}
    </button>
  );
};
