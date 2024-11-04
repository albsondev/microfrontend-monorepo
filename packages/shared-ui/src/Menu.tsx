import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';



const MenuContainer = styled.nav`
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const MenuItem = styled(Button)`
  background-color: #008CBA; /* Blue */
`;

interface MenuProps {
  items: { label: string; onClick: () => void }[];
}

/**
 * Componente de menu com itens clicáveis.
 * @param {MenuProps} props - As propriedades do componente.
 * @param {Array<{ label: string, onClick: () => void }>} props.items - Itens do menu.
 * @returns {JSX.Element} O componente Menu.
 */
const Menu: React.FC<MenuProps> = ({ items }) => (
  <MenuContainer>
    {items.map((item: { label: string; onClick: () => void }) => (
      <MenuItem key={item.label} onClick={item.onClick}>
        {item.label}
      </MenuItem>
    ))}
  </MenuContainer>
);

export default Menu;
