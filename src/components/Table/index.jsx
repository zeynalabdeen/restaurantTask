import React from 'react'
import './style.css'

const Table = () => {
    return (
        <div id='Table'>
            <table class="table table-bordered">
                <thead class="thead-light">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>m6</td>
                        <td>Zeynal</td>
                        <td>Sonlanmayıb</td>
                        <td>78.2 AZN</td>
                        <td>22.05.2002 15:04:35</td>
                        <td>
                            <button className='btn btn-sm px-3 btn-success'>Bax</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>m6</td>
                        <td>Zeynal</td>
                        <td>Sonlanıb</td>
                        <td>78.2 AZN</td>
                        <td>22.05.2002 15:04:35</td>
                        <td>
                            <button className='btn btn-sm px-3 btn-success'>Bax</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table