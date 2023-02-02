import React from 'react';

export default function AdminSettings({onclick}) {
    return(
        <div className="container text-center">
            <h2 className="mt-5 display-5">Settings</h2>
            <div className="p-5 mt-5 container shadow rounded" style={{backgroundColor: "#fff"}}>
                <div className="d-flex justify-content-between p-2">
                    <div className="container w-75"></div>
                    <div className="container w-25 text-end">
                        <div className="container shadow btn w-25" onClick={onclick}>
                            <i className="ri-arrow-go-back-fill display-6 text-info"></i>
                        </div>
                    </div>
                </div>
                <div className="mt-5 container">
                    <div className="row">
                        <div className="admin-settings--btn--change-password p-5 m-5 col-5 container shadow rounded btn" onClick={onclick}>
                            <div className="admin-settings--btn--change-password row"><div className="admin-settings--btn--change-password col"><i className="admin-settings--btn--change-password ri-lock-password-fill display-1"></i></div></div>
                            <div className="admin-settings--btn--change-password row"><div className="admin-settings--btn--change-password col mt-5 h3">Change Password</div></div>
                        </div>
                        <div className="admin-settings--btn--api-configuration p-5 m-5 col-5 container shadow rounded btn" onClick={onclick}>
                            <div className="admin-settings--btn--api-configuration row"><div className="admin-settings--btn--api-configuration col"><i className="admin-settings--btn--api-configuration ri-computer-fill display-1"></i></div></div>
                            <div className="admin-settings--btn--api-configuration row"><div className="admin-settings--btn--api-configuration col mt-5 h3">API Configuration</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}