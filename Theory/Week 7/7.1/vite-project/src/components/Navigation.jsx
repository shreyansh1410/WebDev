// components/Navigation.js
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => { navigate("/") }}>Landing</button>
      <button onClick={() => { navigate("/dash") }}>Dashboard</button>
    </div>
  );
};

export default Navigation;
