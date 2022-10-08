import UserModel from '../../models/nosql/User';
import PostModel from '../../models/nosql/Post';
import { encryptPassword } from '../../utils';

const seedUsers = async () => {
  await UserModel.deleteMany();
  await PostModel.deleteMany();
  await UserModel.create(
    {
      avatar: 'AD',
      email: 'administrador@gmail.com',
      firstName: 'Administrador',
      isAdmin: true,
      lastName: 'Administrador',
      password: encryptPassword('administrador')
    },
    {
      avatar: 'AH',
      email: 'hernandez@gmail.com',
      firstName: 'Armando',
      lastName: 'hernandez',
      password: encryptPassword('123456789')
    },
    {
      avatar: 'AA',
      email: 'aparicio@gmail.com',
      firstName: 'Agustin',
      lastName: 'Aparicio',
      password: encryptPassword('123456789')
    },
    {
      avatar: 'OG',
      email: 'osvaldo@gmail.com',
      firstName: 'Osvaldo',
      lastName: 'Gutierrez',
      password: encryptPassword('123456789')
    },
    {
      avatar: 'NC',
      email: 'nicolas@gmail.com',
      firstName: 'Nicolas',
      lastName: 'Castro',
      password: encryptPassword('123456789')
    },
    {
      avatar: 'EU',
      email: 'esteban@gmail.com',
      firstName: 'Esteban',
      lastName: 'Urbano',
      password: encryptPassword('123456789')
    },
    {
      avatar: 'AC',
      email: 'carmona@gmail.com',
      firstName: 'Aldo',
      lastName: 'Carmona',
      password: encryptPassword('123456789')
    }
  );
  const userId = await UserModel.findOne({ isAdmin: false });
  await PostModel.create(
    {
      category: 'noticias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'noticias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'noticias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'noticias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'musica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'musica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'musica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'musica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'laboral',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'laboral',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'laboral',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'laboral',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'marketing',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'marketing',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'marketing',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'marketing',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'historias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'historias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'historias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'historias',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'informatica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'informatica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'informatica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'informatica',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'deportes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'deportes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'deportes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    },
    {
      category: 'deportes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      photo: 'https://www.lacupulamusic.com/blog/wp-content/uploads/2022/06/LCM-PS.jpg',
      title: 'What is Lorem Ipsum?',
      user: userId?._id
    }
  );
};

export { seedUsers };
