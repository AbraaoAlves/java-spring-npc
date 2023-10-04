import { Form, useNavigation, useLoaderData } from "react-router-dom";
import { UserList, UserListItem } from "../components/UserList/UserList";
import ActiveNavLink from "../components/ActiveNavlink";
import { Outlet } from "@mui/icons-material";
import { createUsuario, getUsuarios, type Usuario } from "../api";

Layout.loader = async () => getUsuarios();
Layout.action = async () => {
  const {data} = await createUsuario({name: 'novo usuario'});
  
  return redirect(`/users/${data.id}/edit`);
}
export default function Layout() {

  const usuarios = useLoaderData() as Array<Usuario>;
  const navigation = useNavigation();

  return (
    <>
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
          {usuarios?.length ? (
            <UserList>
              {usuarios.map(({ id, name, email }) => (
                <ActiveNavLink to={`users/${id}`}>
                  <UserListItem name={name} email={email} />
                </ActiveNavLink>
              ))}
            </UserList>
          ) : (
            <p>
              <i>Sem usuarios</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}


function redirect(arg0: string) {
  throw new Error("Function not implemented.");
}

