import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const ListCategories = () => {
    const {data: categories, isPending, error} = useFetch('https://inventory-be-app.herokuapp.com/api/v1/categories');
    return ( 
        <div className="list-main">
                <h1>Categories</h1>
                {error && <div> {error} </div>}
                {isPending && <div>Loading...</div>}
                {categories && categories.map(item=>(
                    <div className="list-preview" key={item._id}>
                        <Link to={`fetch-category/${item._id}`}>
                            <h2>{item.name}</h2>
                        </Link>
                    </div>
                ))}
                <Link to="/create-category"><button>Add</button></Link>
            </div>
     );
}
 
export default ListCategories;