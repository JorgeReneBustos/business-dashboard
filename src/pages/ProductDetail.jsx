import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();

    return (
        <div className="product-detail">
            <h2>Product Detail</h2>

            <div className="detail-card">
                <p><strong>Product ID:</strong> {id}</p>
                <p>This page simulates a real product detail view.</p>
                <button>Buy now</button>
            </div>
        </div>
    );
}
export default ProductDetail;