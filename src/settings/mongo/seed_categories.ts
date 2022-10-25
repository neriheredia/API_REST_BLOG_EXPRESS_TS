import CategoryModel from '../../models/nosql/Category';

const seedCategories = async () => {
  await CategoryModel.deleteMany();
  await CategoryModel.create(
    {
      name: 'news'
    },
    {
      name: 'music'
    },
    {
      name: 'sports'
    },
    {
      name: 'computing'
    },
    {
      name: 'labor'
    },
    {
      name: 'marketing'
    },
    {
      name: 'stories'
    }
  );
};

export { seedCategories };
