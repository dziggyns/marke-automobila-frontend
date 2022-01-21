const CarRowItemNoAuth = (props) => {
    return (
      <tr>
        <td>{props.automobil.Model}</td>
        <td>{props.automobil.Cena}</td>
        <td>{props.automobil.GodinaProizvodnje}</td>
        <td>{props.automobil.KonjskihSnaga}</td>
        <td>{props.automobil.MarkaNaziv}</td>
        <td><button className="btn btn-sm btn-outline-warning" onClick={props.onCarEdit}>Izmena</button></td>
        <td><button className="btn btn-sm btn-outline-danger" onClick={props.onCarDelete}>Brisanje</button></td>
      </tr>
    );
};

export default CarRowItemNoAuth;