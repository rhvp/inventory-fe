import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Inventory Inc.</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/products" style={{
                    backgroundColor: '#f1356d',
                    color: 'white',
                    borderRadius: '6px'
                }}>Products</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;