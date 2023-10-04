import { Form } from "react-router-dom";
import { UserList, UserListItem } from "../components/UserList/UserList";
import ActiveNavLink from "../components/ActiveNavlink";
import { Usuario } from "../api";

export default function Layout() {
  const usuarios = [] as Array<Usuario>;
  
  return (
    <div id="sidebar">
      <h1>UECE NPC APP: </h1>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <Form method="post">
          <button type="submit">Novo</button>
        </Form>
      </div>
      <nav>
        <UserList>
          {usuarios.map(({id, name, email}) => 
            <ActiveNavLink to={`users/${id}`}>
              <UserListItem name={name} email={email} />
            </ActiveNavLink>
          )}
        </UserList>
      </nav>
    </div>
  );
}





Layout.otherProps = "";
