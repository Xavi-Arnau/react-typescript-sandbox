import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="flex flex-row w-10/12 mx-auto gap-4 items-center justify-between p-4">
        <div className="text-2xl">SandBox</div>

        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
