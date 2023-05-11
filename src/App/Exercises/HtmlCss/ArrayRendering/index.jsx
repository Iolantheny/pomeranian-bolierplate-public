import './styles.css';
import { Data } from './Data';

export const ArrayRendering = () => {
  return (
    <div>
      <table className="band__table">
        <thead>
          <tr>
            <th>Band</th>
            <th>Year Formed</th>
            <th>Albums</th>
            <th>Most Famous Song</th>
          </tr>
        </thead>
        {Data.map(({ band, yearFormed, albums, mostFamousSong }) => {
          return (
            <tbody key={band}>
              <tr>
                <td>{band}</td>
                <td>{yearFormed}</td>
                <td>{albums}</td>
                <td>{mostFamousSong}</td>
              </tr>
            </tbody>
          );
        })}
        <tfoot>
          <tr>
            <td colSpan={2}>Total albums</td>
            <td colSpan={2}>77</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
