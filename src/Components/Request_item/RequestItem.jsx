import React from "react";
import "./RequestItem.css";

const RequestItem = () => {
  // Sample data for demonstration
  const requests = [];

  return (
    <div className="request-container">
      <h1>Request New Item</h1>
      <div className="request-list">
        {requests.length === 0 ? (
          <p className="no-request">Currently no requests available!!!</p>
        ) : (
          requests.map((request, index) => (
            <div key={index} className="request-item">
              {/* Render each request item */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RequestItem;