import './styles.css';

export const Mydata = () => {
  return (
    <div className="mydata">
      <img
        src="/images/pexels-luddmyla-14707145.jpg"
        alt="logo"
        className="mydata__logo"
      />
      <h2>Jolanta Jezierska</h2>
      <p className="mydata__city">Gdańsk</p>
      <div>
        <p>e-mail:</p>
        <p>iolanthe.com@gmail.com</p>
      </div>
      <div>
        <p>telefon:</p>
        <p>000 000 000</p>
      </div>
    </div>
  );
};
