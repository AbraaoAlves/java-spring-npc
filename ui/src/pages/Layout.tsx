import {
  Form,
  useNavigation,
  useLoaderData,
  redirect,
  Outlet,
  NavLink,
} from "react-router-dom";
import { UserList, UserListItem } from "../components/UserList/UserList";
import { AppBar } from "../components/AppBar/AppBar";
import { createUsuario, getUsuarios, JavaPage, type Usuario } from "../api";
import "./Layout.css";
import Drawer from "@mui/material/Drawer";
import { Box, Container, Toolbar } from "@mui/material";

Layout.loader = async () => getUsuarios();
Layout.action = async () => {
  const { data } = await createUsuario({ name: "novo usuario" });

  return redirect(`/users/${data.id}/edit`);
};
export default function Layout() {
  const { data } = useLoaderData() as { data: JavaPage<Usuario> | null };
  const navigation = useNavigation();
  const usuarios = data?.content;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: 340,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 340, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <div id="sidebar">
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
                  <NavLink to={`users/${id}`} key={id}>
                    {({ isActive, isPending }) => (
                      <UserListItem
                        selected={isActive}
                        loading={isPending}
                        name={name}
                        email={email}
                      />
                    )}
                  </NavLink>
                ))}
              </UserList>
            ) : (
              <p>
                <i>Sem usuarios</i>
              </p>
            )}
          </nav>

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              textAlign: "center",
              pl: 5,
            }}
          >
            <h4>UECE NPC APP! 👨🏿‍💻👩‍💻👩🏻‍💻👩🏼‍💻</h4>
          </Box>
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
