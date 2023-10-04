import { Form, useLoaderData, LoaderFunctionArgs } from "react-router-dom";

import { UserCard } from "../components/UserCard/UserCard";
import Button from "@mui/material/Button";
import { Usuario, getUsuario } from "../api";
import "./UsuarioInfo.css";
import Box from "@mui/material/Box";

type Props = LoaderFunctionArgs<{ userId: string }>;
UsuarioInfo.loader = ({ params }: Props) => getUsuario(`${params.userId}`);

export function UsuarioInfo() {
  const { data: user } = useLoaderData() as { data: Usuario | null };

  if (!user) return "NOT FOUND";

  return (
    <Box sx={{ pl: 2 }}>
      <UserCard
        id={user.id}
        name={user.name}
        email={user.email}
        createdAt={user.createdAt}
        updatedAt={user.updatedAt}
      >
        <Form action="edit">
          {/** aqui o editar fará um redirect p a rota do UsuarioForm */}
          <Button size="small" color="primary" type="submit">
            Editar
          </Button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            type="submit"
          >
            Deletar
          </Button>          
        </Form>
      </UserCard>
    </Box>
  );
}
