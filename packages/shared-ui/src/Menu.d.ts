import * as React from 'react';

export interface MenuItem {
  label: string;
  onClick: () => void;
}

interface MenuProps {
  items: MenuItem[];
}

declare const Menu: React.FC<MenuProps>;

export default Menu;
