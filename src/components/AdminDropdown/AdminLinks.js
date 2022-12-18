import { Link } from 'react-router-dom';

const AdminLinks = ({ to, children, ...rest }) => {
  return (
    <li>
      <Link to={to} {...rest}></Link>
      {children}
    </li>
  );
};

export default AdminLinks;
