import { EditIcon } from '../Icons/EditIcon';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { BookIcon } from '../Icons/BookIcon';
import { FAQIcon } from '../Icons/FAQIcon';

export const data = [
  {
    id: 1,
    name: 'Moje CV',
    icon: <PersonalCardIcon />,
    text: 'podgląd cv wraz z doświadczeniem',
    slug: '/mycv',
  },
  {
    id: 2,
    name: 'Ćwiczenia',
    icon: <EditIcon />,
    text: 'wszystkie wykonane ćwiczenia',
    slug: '/exercises',
  },
  {
    id: 3,
    name: 'Blog',
    icon: <BookIcon />,
    text: 'wpisy blogowe o technologii fron-end',
    slug: '/blog',
  },
  {
    id: 4,
    name: 'Tech stack',
    icon: <EditIcon />,
    text: 'stack technologiczny realizowany na kursie',
    slug: '/',
  },
  {
    id: 5,
    name: 'FAQ',
    icon: <FAQIcon />,
    text: 'odpowiedzi na najczęstsze pytania',
    slug: '/faq',
  },
];
