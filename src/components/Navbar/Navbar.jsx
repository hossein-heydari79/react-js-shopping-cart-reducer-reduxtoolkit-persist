import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css'
import { AddPrice, AddSize } from '../../Redux/filterReducer.js'

export const Navbar = ({ len }) => {

    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    function change(e) {

        if (e.target.name === "price") {
            dispatch(AddPrice(e.target.value))
        }
        else {
            dispatch(AddSize(e.target.value))
        }
    }




    return (
        <div className="menu">
            <div>{len} Products</div>
            <div>
                <span>Order </span>
                <select onChange={change} value={filter.price} name="price" id="">
                    <option value="lowest">Lowest</option>
                    <option value="highes">Highest</option>
                </select>
            </div>
            <div>
                <span>Filter </span>
                <select name="size" onChange={change} value={filter.size} id="">
                    <option value="ALL">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}
