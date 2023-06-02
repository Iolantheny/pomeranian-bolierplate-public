export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`button ${isActive ? 'game-btn-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
