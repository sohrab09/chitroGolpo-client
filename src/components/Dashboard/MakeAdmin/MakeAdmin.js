import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="login-box">
                    <form>
                        <h1 className="text-secondary mb-5">Make Admin</h1>
                        <div class="user-box">
                            <input type="text" name="name" required="" />
                            <label>Admin User Email</label>
                        </div>
                        <input class="buttonStyle" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;