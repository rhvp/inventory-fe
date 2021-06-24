import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProductDetails = () => {
    const {id} = useParams();
    const {data: product, error, isPending} = useFetch('https://inventory-be-app.herokuapp.com/api/v1/products/'+id);
    return ( 
        <div className="list-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {product && (
                <article>
                    <h2>{product.name}</h2>
                    <div>
                        <p>Category: {product.category.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Stock: {product.availableStock}</p>
                        <p>Status: {product.status}</p>
                    </div>
                </article>
                
            )}
            
        </div>
     );
}
 
export default ProductDetails;