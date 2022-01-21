import ContentWrapper from "../components/layout/Wrapper";
import CarsTableNoAuth from "../components/cars/CarsTableNoAuth";

const Home = (props) => {
  return (
    <ContentWrapper>
      <CarsTableNoAuth automobili={props.data} />
    </ContentWrapper>
  );
};

export default Home;
