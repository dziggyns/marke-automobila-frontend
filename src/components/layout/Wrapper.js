import Header from "./Header";

const ContentWrapper = (props) => {
  return (
    <div className="container text-center">
      <Header />
      {props.children}
    </div>
  );
};

export default ContentWrapper;
