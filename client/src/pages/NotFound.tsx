export const NotFoundPage = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Not Found</h1>
      </div>
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Page Not Found</h4>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  );
};
