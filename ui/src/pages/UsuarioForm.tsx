import {Form, useLoaderData, ActionFunctionArgs, redirect} from "react-router-dom";
import { Usuario, updateUsuario } from "../api";
import "./UsuarioForm.css";


UsuarioForm.action = async ({ request, params }: ActionFunctionArgs<{contactId: string}>) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  
  await updateUsuario(`${params.userId}`, updates);
  
  return redirect(`/users/${params.userId}`);
}

export function UsuarioForm() {
  const { data: user } = useLoaderData() as {data: Usuario};
  
  return (
    <Form method="post" id="user-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="name"
          defaultValue={user.name}
        />
      </p>
      <label>
        <span>Email</span>
        <input
          type="text"
          name="email"
          placeholder="maria@mail.com"
          defaultValue={user.email}
        />
      </label>
      <label>
        <span>Senha</span>
        <input
          placeholder="########"
          aria-label="Password"
          type="password"
          name="password"
          defaultValue={user.password}
        />
      </label>
      <p>
        <button type="submit">Salvar</button>
        <button type="button">Cancelar</button>
      </p>
    </Form>
  );
}
