import axios from 'axios';

export type Usuario = {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}

export async function getUsuarios(){
  const {data} = await axios.get<Array<Usuario>>('/api/users');

  return data;  
}

export async function getUsuario(id: string){
  const {data} = await axios.get<Usuario>('/api/users/' + id);
  return data;  
}

export async function createUsuario(user: Omit<Usuario, 'id'>){
  const {data} = await axios.post<Usuario>('/api/users/', user);
  
  return data;  
}


export async function updateUsuario(id: string, user: Partial<Omit<Usuario, 'id'>>){
  const {data} = await axios.put<Usuario>('/api/users/'+id, user);
  return data;  
}

export async function deleteUsuario(id: string){
  await axios.delete<Usuario>('/api/users/'+id);
}
