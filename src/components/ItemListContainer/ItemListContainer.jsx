import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h2 className="greeting-message">{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;