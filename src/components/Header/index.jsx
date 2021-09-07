import useAuth from "../../hooks/useAuth";

import { HeaderContainer } from "./styles";

export function Header() {
  const { user, signout } = useAuth();
  return (
    <HeaderContainer>
      <span>Bem vindo(a) {user?.name}</span>
      <ul>
        <button onClick={() => signout()}>Deslogar</button>
      </ul>
    </HeaderContainer>
  );
}
