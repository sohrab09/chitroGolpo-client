import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ManageService.css';


const ManageService = () => {
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="manageService">
                    <h1 className="text-center mb-5">Manage Service</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Description</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Service Name</td>
                                <td>Description</td>
                                <td>Price<button className="btn btn-danger ml-5">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;