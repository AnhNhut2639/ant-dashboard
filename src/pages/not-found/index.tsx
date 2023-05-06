import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/person");
      }}
      className="text-red-500"
    >
      Not fucking found
    </div>
  );
};

export default NotFound;
