import './styles.css';

const planets = [
  'Słońce',
  'Merkury',
  'Wenus',
  'Ziemia',
  'Mars',
  'Jowisz',
  'Saturn',
  'Uran',
  'Neptun',
];

const users = [
  {
    name: 'Kamil',
    age: 33,
    sport: 'Basketball',
  },
  {
    name: 'Arek',
    age: 22,
    sport: 'Volleyball',
  },
  {
    name: 'Igor',
    age: 18,
    sport: 'Soccer',
  },
  {
    name: 'Aleksander',
    age: 25,
  },
];

const obj = {
  name: 'dog',
  legs: 4,
  color: 'white',
};

export function JSFuncions() {
  const getPlanet = (number) => {
    return <p>{planets[number]}</p>;
  };
  const getSport = (name) => {
    if (users.find((element) => element.name === name)) {
      const UsersSport = users.find((element) => element.name === name);
      return <p>{UsersSport.sport ? UsersSport.sport : 'brak danych'}</p>;
    }
    return <p>Błędne dane</p>;
  };

  const animal = ({ color, name, legs }) => {
    return (
      <p>
        This {color} {name} have {legs} legs
      </p>
    );
  };

  return (
    <div>
      {getPlanet(4)}
      {getSport('Kamil')}
      {animal(obj)}
    </div>
  );
}
