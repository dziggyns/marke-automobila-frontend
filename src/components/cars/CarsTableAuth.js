import { Fragment } from "react";
import CarRowItemAuth from "./CarRowItemAuth";

const CarsTableAuth = (props) => {
  const editCarHandler = () => {};

  const deleteCarHandler = () => {};

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
            <th>Izmena</th>
            <th>Brisanje</th>
          </tr>
        </thead>
        <tbody>
          {props.automobili.map((automobil) => (
            <CarRowItemAuth key={automobil.Id} automobil={automobil} onCarEdit={editCarHandler} onCarDelete={deleteCarHandler} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default CarsTableAuth;