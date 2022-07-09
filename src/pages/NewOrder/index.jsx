import React from 'react'
import { useState } from 'react'
import NewOrderModal from '../../components/NewOrderModal'
import './style.css'
const NewOrder = () => {
    const [modal, setModal] = useState(false)
    const handleFunction = () => {
        setModal(false)
    }
    return (
        <div id='NewOrder'>
            {
                !modal && <button onClick={() => setModal(true)}>
                    <i class="fa-solid fa-square-plus"></i>
                    <span>Yeni sifariş</span>
                </button>
            }




            {
                modal && <NewOrderModal setModal={setModal} modal={modal} handleFunction={handleFunction} />
            }
        </div>
    )
}

export default NewOrder