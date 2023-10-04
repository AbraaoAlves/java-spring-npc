import { ActionFunctionArgs, redirect } from "react-router-dom";
import { deleteUsuario } from "../api";

export async function action({ params }: ActionFunctionArgs<{userId: string}>) {
  await deleteUsuario(`${params.userId}`);
  return redirect("/");
}