import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="position-relative">
      <i className="fas fa-shopping-cart text-white"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        4
      </span>
    </div>
  );
};


  export default CartWidget;