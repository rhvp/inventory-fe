import { useParams } from "react-router-dom";
// import { useAlert } from 'react-alert'
import useFetch from "./useFetch";

const CategoryDetails = () => {
    const {id} = useParams();
    const {data: category, isPending, error} = useFetch('https://inventory-be-app.herokuapp.com/api/v1/categories/'+id);
    // const history = useHistory();
    // const alert = useAlert();
    // const handleDelete = (e) => {
    //     fetch('http://localhost:1900/api/v1/news/'+ news._id, {
    //         method: 'DELETE'
    //     }).then(res => {
    //         if(res.ok) {
    //             alert.success('item deleted');
    //             history.push('/news');
    //         } else {
    //             return res.json();
    //         }
            
    //     }).then(res => {
    //         alert.error(res.error.message);
    //     }).catch(err => {
    //         console.log('error deleting item', err);
    //     })
    // }
    return ( 
        <div className="list-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {category && (
                <article>
                    <h2>{category.name}</h2>
                    <div>
                        <p>{category._id}</p>
                        {/* <p>Author: {news.author}</p>
                        <button onClick={handleDelete}>Delete</button> */}
                    </div>
                </article>
                
            )}
            
        </div>
     );
}
 
export default CategoryDetails;