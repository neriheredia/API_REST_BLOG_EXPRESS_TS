import UserModel from '../../models/nosql/User'

const seedUsers = async () => {
  await UserModel.deleteMany()
  await UserModel.create(
    {
      avatar: 'AD',
      email: 'administrador@gmail.com',
      firstName: 'Administrador',
      isAdmin: true,
      lastName: 'Administrador',
      password: 'administrador'
    },
    {
      avatar: 'AH',
      email: 'hernandez@gmail.com',
      firstName: 'Armando',
      lastName: 'hernandez',
      password: '123456789'
    },
    {
      avatar: 'AA',
      email: 'aparicio@gmail.com',
      firstName: 'Agustin',
      lastName: 'Aparicio',
      password: '123456789'
    },
    {
      avatar: 'OG',
      email: 'osvaldo@gmail.com',
      firstName: 'Osvaldo',
      lastName: 'Gutierrez',
      password: '123456789'
    },
    {
      avatar: 'NC',
      email: 'nicolas@gmail.com',
      firstName: 'Nicolas',
      lastName: 'Castro',
      password: '123456789'
    },
    {
      avatar: 'EU',
      email: 'esteban@gmail.com',
      firstName: 'Esteban',
      lastName: 'Urbano',
      password: '123456789'
    },
    {
      avatar: 'AC',
      email: 'carmona@gmail.com',
      firstName: 'Aldo',
      lastName: 'Carmona',
      password: '123456789'
    }
  )
}

export { seedUsers }
