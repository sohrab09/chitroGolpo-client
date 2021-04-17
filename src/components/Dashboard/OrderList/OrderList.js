import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-8 col-sm-12 col-12 d-flex justify-content-center ml-5 mt-5 pt-5 pb-5">
                <div>
                <h1 className="text-center mb-5">Order List</h1>
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arefin</td>
                            <td>arefin@gmail.com</td>
                            <td>Stationary</td>
                            <td>Credit Card</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>Shahin</td>
                            <td>shahin@gmail.com</td>
                            <td>Gown</td>
                            <td>Credit Card</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>Shahin</td>
                            <td>shahin@gmail.com</td>
                            <td>Gown</td>
                            <td>Credit Card</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>Shahin</td>
                            <td>shahin@gmail.com</td>
                            <td>Gown</td>
                            <td>Credit Card</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>Shahin</td>
                            <td>shahin@gmail.com</td>
                            <td>Gown</td>
                            <td>Credit Card</td>
                            <td>Done</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;