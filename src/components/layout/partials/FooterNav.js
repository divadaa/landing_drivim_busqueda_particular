import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">☎️ 621336676</Link>
        </li>
        <li>
          <Link to="#0">📬 info@drivium.es</Link>
        </li>
        <li>
          <Link to="#0">⏰ 24 horas -  360 días</Link>
        </li>
        <li>
          <Link to="#0">🚀 Entrega inmediata</Link>
        </li> 
      </ul>
    </nav>
  );
}

export default FooterNav;