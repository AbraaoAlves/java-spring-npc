
export type Usuario = {
  id: string;
  name?: string;
  email: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}


export async function getUsuarios(){
  return Promise.resolve([] as Array<Usuario>);  
}

export async function getUsuario(id: string){
  console.log('id', id);
  return Promise.resolve({} as Usuario);  
}

export async function createUsuario(user: Omit<Usuario, 'id'>){
  console.log('user', user);
  return Promise.resolve({} as Usuario);  
}


export async function updateUsuario(id: string, user: Partial<Omit<Usuario, 'id'>>){
  console.log('id', id);
  console.log('user', user);
  return Promise.resolve({} as Usuario);  
}

export async function deleteUsuario(id: string){
  console.log('id', id);
  return Promise.resolve();  
}