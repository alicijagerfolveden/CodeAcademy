import { Link } from "react-router-dom";
import { HeaderStyle } from "../pages/StyledComponents";

export const PageHeader = () => {
  return (
    <HeaderStyle>
      <div>
        <img
          src="https://img.freepik.com/free-vector/honey-comb-cartoon-vector-icon-illustration-food-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3660.jpg?w=826&t=st=1675799572~exp=1675800172~hmac=38c2e25c005390ed40b894e2a34fc9be03c33c78a95c8b1e884067f0bc4c5994"
          alt="honey logo"
        />
        <p>vetbee</p>
      </div>
      <nav>
        <Link to="/">Pets</Link>
        <Link to="/medications">Medications</Link>
      </nav>
    </HeaderStyle>
  );
};
