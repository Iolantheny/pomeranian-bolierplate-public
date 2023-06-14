import { createRandomCompany, createRandomUser } from './utils';

export const companies = Array(5)
  .fill()
  .map(() => createRandomCompany());

const randomNumber = Math.floor(Math.random() * companies.length);

export const employees = Array(25)
  .fill()
  .map(() => createRandomUser(companies[randomNumber].companyId));

export const getAllCompanies = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(companies);
  }, 300);
});

export const getAllEmployees = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(employees);
  }, 300);
});
