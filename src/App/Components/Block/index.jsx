import './styles.css';

export const Block = ({ name, icon, text }) => {
  return (
    <div className="block">
      <h3>{name}</h3>
      {icon}
      <p>{text}</p>
      <p>zobzacz więcej</p>
    </div>
  );
};
