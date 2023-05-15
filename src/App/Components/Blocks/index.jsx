import { Block } from '../Block';
import { data } from './data';

import './styles.css';

export const Blocks = () => {
  return (
    <div className="blocks">
      <h1>Hej, tu Jolanta!</h1>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="blocks__content">
        {data.map((item) => {
          return (
            <Block
              key={item.id}
              name={item.name}
              icon={item.icon}
              text={item.text}
              slug={item.slug}
            />
          );
        })}
      </div>
    </div>
  );
};
