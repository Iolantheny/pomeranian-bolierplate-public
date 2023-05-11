import './styles.css';
import { data } from './Data';

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
        <tbody>
          {data.map(({ band, yearFormed, albums, mostFamousSong }) => {
            return (
              <tr key={band}>
                <td>{band}</td>
                <td>{yearFormed}</td>
                <td>{albums}</td>
                <td>{mostFamousSong}</td>
              </tr>
            );
          })}
        </tbody>
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
