//Recibe title y price como props
//Muestra datos dinámicos
//Es reutilizable

import { Link } from 'react-router-dom';

function ProductCard({ id, title, price }) {
    return (
        <div className="product-card">
            <h3>{title}</h3>
            <p>${price}</p>

            <Link to={`/product/${id}`}>
            <button>View details</button>
            </Link>
        </div>
    );
}
export default ProductCard;
