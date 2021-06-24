import {useState} from 'react';
import {useHistory} from "react-router-dom";
import { useAlert } from 'react-alert'

const Createcategory = () => {
    const [name, setTitle] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const alert = useAlert();
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {name};
        setIsPending(true)
        fetch('https://inventory-be-app.herokuapp.com/api/v1/categories', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(res => {
            setIsPending(false);
            if(res.ok) {
                console.log('category added');
                history.push('/categories');
            } else {
                return res.json();
            }  
        }).then(res => {
            // console.log(res);
            if(res) alert.error(res.error.message);
        }).catch(err => {
            console.log('error adding category', err)
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
            onChange={(e) => setTitle(e.target.value)}
            />
            {!isPending && <button>Add +</button>}
            {isPending && <button disabled>Adding...</button>}
        </form>
        </div>
     );
}
 
export default Createcategory;