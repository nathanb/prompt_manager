export const DashboardPage = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard Home</h1>
        <button className="btn btn-primary">New Action</button>
      </div>

      {/* <!-- Dashboard content --> */}
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title card-header-inverse-color">User Statistics</h5>
              <p className="card-text">Total Users: --totalUsers--</p>
              <p className="card-text">Active Users: --activeUsers--</p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
        {/* <!-- More cards --> */}
      </div>

      {/* <!-- More dashboard content --> */}
    </>
  );
};
