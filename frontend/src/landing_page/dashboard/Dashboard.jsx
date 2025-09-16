// Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <iframe
        src="https://stock-verge-dashboard.onrender.com"
        title="Dashboard App"
        style={{
          width: "100%",
          height: "90vh",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default Dashboard;
