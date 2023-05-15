import './styles.css';
import { Link } from 'react-router-dom';
import { ArrowToRight } from './../Icons/ArrowToRight';

export const Block = ({ name, icon, text, slug }) => {
  return (
    <Link to={slug} className="block">
      <h3>{name}</h3>
      <div className="block__icon">{icon}</div>
      <p>{text}</p>
      <div className="block__see-more">
        <p>zobacz więcej</p>
        <ArrowToRight />
      </div>
    </Link>
  );
};
