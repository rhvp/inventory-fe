import {useState} from 'react';
import {useHistory} from "react-router-dom";
import { useAlert } from 'react-alert';
import useFetch from './useFetch';

const CreateProduct = () => {
    const {data: categories, isPending: fetchPening, error} = useFetch('https://inventory-be-app.herokuapp.com/api/v1/categories');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [availableStock, setAvailableStock] = useState(0);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const alert = useAlert();
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {name, category, price: parseInt(price), availableStock: parseInt(availableStock)};
        setIsPending(true)
        fetch('https://inventory-be-app.herokuapp.com/api/v1/products', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(res => {
            setIsPending(false);
            if(res.ok) {
                console.log('product added');
                history.push('/products');
            } else {
                return res.json();
            }  
        }).then(res => {
            // console.log(res);
            if(res) alert.error(res.error.message);
        }).catch(err => {
            console.log('error adding product', err)
            setIsPending(false);
            alert.error(err.message);
        })
    }
    return ( 
        <div className="create">
        <h2>Add News</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label>Stock:</label>
            <input 
            type="Number" 
            required 
            value={availableStock}
            onChange={(e) => setAvailableStock(e.target.value)}
            />
            <label>Price:</label>
            <input 
            type="Number" 
            required 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <label>Category:</label>
            <select
            onChange={(e) => setCategory(e.target.value)}
            >
            <option value="">Select</option>
            {error && <option value="" disabled>{error}</option>}
            {fetchPening && <option value="satoshi-nakomoto" disabled>Loading...</option>}
            {categories && categories.map(item => (
                <option value={item._id} key={item._id}>{item.name}</option>
            ))}
            </select>
            {!isPending && <button>Add +</button>}
            {isPending && <button disabled>Adding...</button>}
        </form>
        </div>
     );
}
 
export default CreateProduct;