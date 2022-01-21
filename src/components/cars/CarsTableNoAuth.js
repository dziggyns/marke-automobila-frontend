import { Fragment } from "react";
import CarRowItemNoAuth from "./CarRowItemNoAuth";

const CarsTableNoAuth = (props) => {
  return (
    <Fragment>
      <h2 className="text-center mb-3">Automobili</h2>
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Model</th>
            <th>Cena</th>
            <th>God. Prvog Modela</th>
            <th>Konjskih Snaga</th>
            <th>Marka</th>
          </tr>
        </thead>
        <tbody>
          {props.automobili.map((automobil) => (
            <CarRowItemNoAuth key={automobil.Id} automobil={automobil} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default CarsTableNoAuth;
