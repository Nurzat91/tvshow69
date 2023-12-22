import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="nav-link">Home</NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;