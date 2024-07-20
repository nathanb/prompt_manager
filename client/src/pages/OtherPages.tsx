export const OtherPages = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Other Pages</h1>
        <button className="btn btn-primary">New Action</button>
      </div>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title card-header-inverse-color">
                User Statistics
              </h5>
              <p className="card-text">Total Users: 1,234</p>
              <p className="card-text">Active Users: 987</p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title card-header-inverse-color">Revenue</h5>
              <p className="card-text">Monthly: $45,678</p>
              <p className="card-text">Yearly: $543,210</p>
              <a href="#" className="btn btn-primary">Generate Report</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title card-header-inverse-color">Tasks</h5>
              <p className="card-text">Completed: 75</p>
              <p className="card-text">Pending: 12</p>
              <a href="#" className="btn btn-primary">Manage Tasks</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header card-header-color">Recent Activity</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">User login - John Doe</li>
              <li className="list-group-item">New order placed - #12345</li>
              <li className="list-group-item">Payment received - $199.99</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header card-header-color">Quick Actions</div>
            <div className="card-body">
              <a href="#" className="btn btn-primary mb-2">Add New User</a>
              <a href="#" className="btn btn-primary mb-2">Create Invoice</a>
              <a href="#" className="btn btn-primary mb-2">Send Newsletter</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header card-header-color">Card Title</div>
            <div className="card-body">
              <p className="card-text">
                This is an example card with the new color scheme.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      {' '}

    </>
  );
};
