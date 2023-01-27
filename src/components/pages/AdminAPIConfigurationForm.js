import React from 'react';

export default function AdminAPIConfigurationForm({onclick}) {
    return(
        <>
            <div className="container text-center">
                <h2 className="mt-5 display-5">API Configuration</h2>
            </div>
            <div className="p-5 mt-5 container shadow rounded" style={{backgroundColor: "#fff"}}>
                <form>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="api-url">API URL</label>
                        <input className="form-control w-50" id="api-url" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="api-key">API Key</label>
                        <input className="form-control w-50" id="api-key" type="text" />
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