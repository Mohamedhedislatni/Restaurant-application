import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './icon/logo.png'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
                <li><Link to="/contact">List of users</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <headerx>
            <div className="menux" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logox">
                <h1>
                    <Link to="/"><img src={logo} alt="logo" style={{ height: 60 }}/></Link>
                </h1>
            </div>

            <ul style={styleMenu}>

                <li><Link to="/product">{isAdmin ? 'Products' : 'Products'}</Link></li>
                <li><Link to="/contactus">Contact US</Link></li>
                <li><Link to="/aboutus">About US</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menux" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-iconx">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </headerx>
    )
}

export default Header