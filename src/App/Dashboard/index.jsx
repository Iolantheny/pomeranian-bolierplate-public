import { Blocks } from '../Components/Blocks';
import { Mydata } from '../Components/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Blocks />
      <Mydata />
    </div>
  );
};
