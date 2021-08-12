import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Pay.css'
import { True } from '../../Redux/modeReducer.js'

export const Pay = () => {

    const cardlist = useSelector(state => state.cardlist)
    const mode = useSelector(state => state.mode)
    const dispatch = useDispatch()

    function change() {
        dispatch(True(true))
    }
    let total = 0;
    cardlist.forEach(element => {
        total += element.price * element.count;
    });


    return (
        <div className="pay" >
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={change}>Proceed</button>
        </div >
    )

}
