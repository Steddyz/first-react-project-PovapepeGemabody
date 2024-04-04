import logo from "/logo.svg";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
// import "./Header.css";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />

      <span>Текущее время: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
