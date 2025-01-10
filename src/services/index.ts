/*Como usamos moralis, aqui van los endpoints de moralis
Esto es para que sea mas facil de cambiar en el futuro
y no tener que buscar en todo el codigo donde se hace la llamada a la api
y cambiarlo manualmente */
export const Services = {
  auth: {
    signUp: 'createUser',
    logIn: 'logIn',
  },
  users: {
    update: 'updateUser',
    getUserById: 'getUserById',
    getAll: 'https://jsonplaceholder.typicode.com/users',
    getSession: 'https://jsonplaceholder.typicode.com/users/1',
  },
  table: {
    find: 'findInTable',
  },
} as const
