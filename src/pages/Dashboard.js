import ContentWrapper from "../components/layout/Wrapper";
import CarsTableAuth from "../components/cars/CarsTableAuth";

const Dashboard = (props) => {
  return (
    <ContentWrapper>
        <CarsTableAuth automobili={props.data} />
    </ContentWrapper>
  );
};

export default Dashboard;
