import './styles.css';

const PaidImage = ({ isPaidUser }) => {
  return (
    <img
      src="/images/pexels-ivan-samkov-8084656.jpg"
      alt="nice drink"
      with="200px"
      height="400px"
      className={isPaidUser ? '' : 'blured'}
    />
  );
};

const ExampleImg = (props) => {
  return <img src={props.src} alt="nice drink" with="200px" height="400px" />;
};

export const Backgrounds = () => {
  return (
    <div>
      <PaidImage isPaidUser={false} />
      <img
        src="/images/pexels-ivan-samkov-8084656.jpg"
        alt="nice drink"
        with="200px"
        height="400px"
        className="img"
      />
      <img
        src="/images/pexels-ivan-samkov-8084656.jpg"
        alt="nice drink"
        with="200px"
        height="400px"
      />
      <ExampleImg src="/images/pexels-ivan-samkov-8084656.jpg" />
    </div>
  );
};
