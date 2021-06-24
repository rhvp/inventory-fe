import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Products = () => {
    const {data: products, isPending, error} = useFetch('https://inventory-be-app.herokuapp.com/api/v1/products');
    return ( 
        <div className="list-main">
            <h1>All Products</h1>
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            { products && 
                products.map(product => (
                    <div className="list-preview" key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <h2>{product.name}</h2>
                            <p>Status: {product.status}</p>
                        </Link> 
                    </div>
                ))
            }
            <Link to="/create-product"><button>Add</button></Link>
        </div>
     );
}
 
export default Products;