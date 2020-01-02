import React from 'react';

function Home(){
    return (
        <div className="container">
            <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-5">
                    <div className="card">
                        <div className="card-header">hello</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" placeholder="Enter your name" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="submit" className="btn btn-primary"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;