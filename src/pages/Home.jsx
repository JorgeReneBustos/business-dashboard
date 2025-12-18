import ProductCard from "../components/ProductCard";

function Home({products}) {
    return (
        <div className="products-grid">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
}
export default Home;
