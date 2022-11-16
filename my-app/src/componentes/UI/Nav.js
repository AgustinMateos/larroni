import './Nav.css'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (<div className="containerNavBar">
        <div >
           
        <ul className='containerNavBarButtons'>
                <Link to={'/'}>Home</Link>
            <li><Link to={'/categoria/comun'}>Bebidas Comunes</Link></li>
            <li><Link to={'/categoria/light'}>Bebidas Light</Link></li>
        </ul>
        </div> 
    </div>)
}

export default Nav