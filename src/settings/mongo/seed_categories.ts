import CategoryModel from '../../models/nosql/Category';

const seedCategories = async () => {
  await CategoryModel.deleteMany();
  await CategoryModel.create(
    {
      name: 'noticias'
    },
    {
      name: 'musica'
    },
    {
      name: 'deportes'
    },
    {
      name: 'informatica'
    },
    {
      name: 'laboral'
    },
    {
      name: 'marketing'
    },
    {
      name: 'historias'
    }
  );
};

export { seedCategories };
