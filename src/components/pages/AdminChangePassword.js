import React from 'react';

export default function AdminChangePassword({onclick}) {
    return(
        <>
            <div className="container text-center">
                <h2 className="mt-5 display-5">Change Password</h2>
            </div>
            <div className="p-5 mt-5 container shadow rounded" style={{backgroundColor: "#fff"}}>
                <form>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="password-old">Old Password</label>
                        <input className="form-control w-50" id="password-old" type="password" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="password-new">New Password</label>
                        <input className="form-control w-50" id="password-new" type="password" />
                        <div className="form-text">Must not contain special characters ie. !#$</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="password-new-retype">Retype Password</label>
                        <input className="form-control w-50" id="password-new-retype" type="password" />
                        <div className="form-text">Must match new password</div>
                    </div>
                    <div className="mt-5 container">
                        <button class="me-5 btn shadow-sm text-info" onClick={onclick}>Update</button>
                        <button class="mx-5 btn shadow-sm text-info" onClick={onclick}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}