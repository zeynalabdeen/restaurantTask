import React, { useCallback, useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { updateData } from '../../store/data'

const Table = () => {
    const data = useSelector(state => state.data.value)
    const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useDispatch()


    useEffect(() => {
        const countTotal = (items) => items.reduce((acc, curr) => acc + curr.price, 0);
        setTotalPrice(countTotal(data))
    }, [data])


    return (
        <div id='Table' className='w-100' >
            <div className='table-responsive-lg'>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">S/S</th>
                            <th scope="col">Masa</th>
                            <th scope="col">Xidmətçi</th>
                            <th scope="col">Status</th>
                            <th scope="col">Məbləğ</th>
                            <th scope="col">Sonlanma Tarixi</th>
                            <th scope="col">Ətraflı</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={i}>
                                    <th scope="row">1</th>
                                    <td>{item.table}</td>
                                    <td>{item.person}</td>
                                    <td>{item.status}</td>
                                    <td>{item.price} AZN</td>
                                    <td>{new Date().toDateString()}</td>
                                    <td>
                                        <button className='btn btn-sm px-3 btn-success'>Bax</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="totalPrice mt-4 justify-content-end align-items-center d-flex w-100">
                <h4 className='me-3 w-auto mb-0'>Cəmi Məbləğ:</h4>
                <p className='w-auto mb-0'>{totalPrice} AZN</p>
            </div>
        </div>
    )
}

export default Table