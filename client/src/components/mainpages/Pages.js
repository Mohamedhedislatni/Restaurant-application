import React ,{useContext}  from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'

import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'
import Contactus from './contactus/contactus'
import AboutUs from './aboutus/AboutUs'
import Welcome from './welcome/Welcome'
import ContactList from './Contact/ContactList'




function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/product" component={Products} />
            <Route path="/" exact component={Welcome} />
            <Route path="/contactus" exact component={Contactus} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/contact" exact component={isAdmin ? ContactList : NotFound} />
 
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            

            <Route path="/cart" exact component={Cart} /> 
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages