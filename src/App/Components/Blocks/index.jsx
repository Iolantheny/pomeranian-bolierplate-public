import { Block } from '../Block';
import { EditIcon } from '../Icons/EditIcon';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { BookIcon } from '../Icons/BookIcon';
import { FAQIcon } from '../Icons/FAQIcon';

import './styles.css';

export const Blocks = () => {
  return (
    <div className="blocks">
      <h1>Hej, tu Jolanta!</h1>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="blocks__grid">
        <Block
          name="Moje CV"
          icon={<PersonalCardIcon />}
          text="podgląd cv wraz z doświadczeniem"
        />
        <Block
          name="Ćwiczenia"
          icon={<EditIcon />}
          text="wszystkie wykonane ćwiczenia"
        />
        <Block
          name="Blog"
          icon={<BookIcon />}
          text="wpisy blogowe o technologii fron-end"
        />
        <Block
          name="Tech stack"
          icon={<EditIcon />}
          text="stack technologiczny realizowany na kursie"
        />
        <Block
          name="FAQ"
          icon={<FAQIcon />}
          text="odpowiedzi na najczęstsze pytania"
        />
      </div>
    </div>
  );
};
