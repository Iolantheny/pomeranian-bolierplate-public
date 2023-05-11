import './styles.css';
import { Data } from './data';
import { StarIcon } from '../../../Components/Icons/StarIcon';

export const HTMLTables = () => {
  return (
    <>
      <div className="tables">
        <p>
          1. The following data were collected by a group of students as they
          tested four different types of plastics.
        </p>
        <table>
          <thead>
            <tr>
              <th>Plastic</th>
              <th>Acetone</th>
              <th>Flame test</th>
              <th>Heat</th>
              <th>Crease color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>No effect</td>
              <td>Green color</td>
              <td>Softens</td>
              <td>None</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>Softended</td>
              <td>No change</td>
              <td>No change</td>
              <td>White</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>3</td>
              <td>No effect</td>
              <td>Red color</td>
              <td>Softens</td>
              <td>None</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>4</td>
              <td>No effect</td>
              <td>Green color</td>
              <td>Softens</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
        <p>
          Which plastic would be unsafe to use to store products that contain
          acetone?
        </p>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ol>
      </div>
      <hr />
      <table className="rating__table">
        <thead>
          <tr>
            <th>Location</th>
            <th>PLAYER_ID</th>
            <th>Rating</th>
          </tr>
        </thead>
        {Data.map((row) => {
          return (
            <tbody key={row.id}>
              <tr>
                <td>{row.location}</td>
                <td>{row.playerID}</td>
                <td>
                  {Array.from({ length: row.rating }, (_, i) => (
                    <span key={i}>
                      <StarIcon />
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
