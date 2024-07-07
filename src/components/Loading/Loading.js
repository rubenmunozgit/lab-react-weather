import React, { useContext } from 'react';

const Loading = () => {
  return (
      <div className="card m-2">
        <h2 className="card-header text-bg-secondary d-flex justify-content-center align-items-center placeholder-glow">
            <span className="placeholder col-6"></span>
        </h2>
        <div className="m-2 d-flex" style={{ height: '10em' }}>
          <div className="col-6">
            <div className="d-flex flex-column align-items-center placeholder-glow">
                <span className="placeholder bg-info w-25 mb-2">&nbsp;&nbsp;&nbsp;</span>
                <span className="placeholder bg-info w-50 mb-2"></span>
              <div
                className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-center align-items-center placeholder-glow w-100">
                  <span className="placeholder bg-info w-75 mb-2"></span>
                  <span className="placeholder bg-info w-75 mb-2"></span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column align-items-center placeholder-glow">
              <span className="placeholder bg-info w-25 mb-2">&nbsp;&nbsp;&nbsp;</span>
              <span className="placeholder bg-info w-50 mb-2"></span>
              <div
                className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-center align-items-center placeholder-glow w-100">
                <span className="placeholder bg-info w-75 mb-2"></span>
                <span className="placeholder bg-info w-75 mb-2"></span>
                <span className="placeholder bg-info w-75 mb-2"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer placeholder-glow">
          <span className="placeholder col-6"></span>
        </div>
      </div>
  );
};

export default Loading;
