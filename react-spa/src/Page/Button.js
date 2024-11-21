import React from "react";

const LearnMoreButtonBootstrap = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#propertyModal"
      >
        Learn More
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="propertyModal"
        tabIndex="-1"
        aria-labelledby="propertyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="propertyModalLabel">
                Property Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Discover more about this amazing property, including location,
              amenities, and pricing.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreButtonBootstrap;
