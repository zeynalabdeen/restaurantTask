import React from 'react'
import './style.css'
const NewOrderModal = ({ modal, setModal, handleFunction }) => {

    return (
        <div id='NewOrderModal'>
            <div className="modal-container">
                <select className="form-select mb-2" aria-label="Default select example">
                    <option selected>Masanı seçin</option>
                    <option value="3">m2</option>
                    <option value="1">m6</option>
                    <option value="2">k2</option>
                    <option value="3">k7</option>
                </select>

                <select className="form-select mb-2" aria-label="Default select example">
                    <option selected>Xidmətçini seçin</option>
                    <option value="3">Zeynal</option>
                    <option value="1">Şahmar</option>
                    <option value="2">Jhon</option>
                    <option value="3">Uğur</option>
                </select>

                <div className='action-button d-flex justify-content-between mt-3'>
                    <button onClick={() => setModal(false)}>Ləğv et</button>
                    <button onClick={() => handleFunction()}>Sifariş yarat</button>
                </div>
            </div>
        </div>
    )
}

export default NewOrderModal