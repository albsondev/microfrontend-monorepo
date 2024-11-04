import styled from 'styled-components';
import * as React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

/**
 * Botão estilizado reutilizável.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.children - O conteúdo do botão.
 * @param {function} props.onClick - Função chamada ao clicar no botão.
 * @returns {JSX.Element} O componente Button.
 */
const StyledButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer; /* Adiciona o cursor de pointer */
  &:hover { /* Adiciona um efeito de hover */
    background-color: #45a049;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
