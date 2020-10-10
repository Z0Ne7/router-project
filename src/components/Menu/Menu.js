import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true,
  },
  {
    name: 'Sản phẩm',
    to: '/product-list',
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        const active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  showMenu = () => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        console.log(menu);
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
        // MenuLink({
        //   label: menu.name,
        //   to: menu.to,
        //   activeOnlyWhenExact: menu.exact,
        // });
      });
    }
  };

  render() {
    return (
      <div className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </div>
    );
  }
}

export default Menu;
