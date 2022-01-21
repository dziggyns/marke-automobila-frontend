const CarRowItemNoAuth = (props) => {
    return (
      <tr>
        <td>{props.automobil.Model}</td>
        <td>{props.automobil.Cena}</td>
        <td>{props.automobil.GodinaProizvodnje}</td>
        <td>{props.automobil.KonjskihSnaga}</td>
        <td>{props.automobil.MarkaNaziv}</td>
      </tr>
    );
};

export default CarRowItemNoAuth;
