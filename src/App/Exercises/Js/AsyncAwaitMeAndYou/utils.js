import { faker } from '@faker-js/faker';

export const createRandomUser = (companyId) => {
  return {
    companyId,
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

export const createRandomCompany = () => {
  return {
    companyId: faker.string.uuid(),
    companyname: faker.company.name(),
    location: faker.location.city(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    registeredAt: faker.date.past(),
  };
};
