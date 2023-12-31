import axios from "axios";

export type Usuario = {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
};

export async function getUsuarios() {
  return axios.get<JavaPage<Usuario>>("/api/users");
}

export async function getUsuario(id: string) {
  return axios.get<Usuario>("/api/users/" + id);
}

export async function createUsuario(user: Partial<Omit<Usuario, "id">>) {
  return axios.post<Usuario>("/api/users", user);
}

export async function updateUsuario(
  id: string,
  user: Partial<Omit<Usuario, "id">>
) {
  return axios.put<Usuario>("/api/users/" + id, user);
}

export async function deleteUsuario(id: string) {
  await axios.delete<Usuario>("/api/users/" + id);
}

export type JavaPage<T> = {
  content: Array<T>,
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    offset: number;
    unpaged: boolean;
  };
  size: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
  totalElements: number;
  totalPages: number;
};
