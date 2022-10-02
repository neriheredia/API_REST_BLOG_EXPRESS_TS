import CategoryModel from '../../models/nosql/Category';

const seedCategories = async () => {
  await CategoryModel.deleteMany()
  await CategoryModel.create(
    {
      name: 'Noticias'
    },
    {
      name: 'Musica'
    },
    {
      name: 'Deportes'
    },
    {
      name: 'Informatica'
    },
    {
      name: 'Laboral'
    },
    {
      name: 'Marketing'
    },
    {
      name: 'Historias'
    }
  );
};

export { seedCategories };
