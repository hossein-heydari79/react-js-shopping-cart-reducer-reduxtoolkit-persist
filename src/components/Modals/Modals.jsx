import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import './Modals.css'
import { increaseConut, addCardList } from '../../Redux/cardlistReducer.js'

export const Modals = ({ show, hide }) => {


    const dataModal = useSelector(state => state.datamodal)
    const cardlist = useSelector(state => state.cardlist)
    const dispatch = useDispatch()

    function added() {


        let item = cardlist.find((i) => i.id === dataModal.id)
        if (item) {
            let arr = [...cardlist];
            let index = arr.findIndex((i) => i.id === dataModal.id);
            dispatch(increaseConut(index))
            hide();
        }
        else {
            dispatch(addCardList({ id: dataModal.id, url: dataModal.url, description: dataModal.title, price: dataModal.price, count: 1 }))
            hide();
        }


    }


    return (
        <div className="modal">
            <div className="mains">
                <div className="section-left">
                    <img src={dataModal.url} alt="" />
                </div>
                <div className="section-right">
                    <div className="title">
                        <p>{dataModal.title}</p>
                        <button onClick={hide}>x</button>
                    </div>

                    <div className="des">
                        <p>{dataModal.des}</p>
                    </div>

                    <div className="addto">
                        <p>Price : ${dataModal.price}</p>
                        <button onClick={added}>Add To Card</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
