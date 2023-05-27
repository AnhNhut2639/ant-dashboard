import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
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
