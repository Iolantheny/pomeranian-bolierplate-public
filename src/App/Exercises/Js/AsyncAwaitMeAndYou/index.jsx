import './styles.css';
import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { getAllCompanies, getAllEmployees } from './db';

const createRandomUser = (source) => {
  return {
    source,
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

const fbDB = Array(10)
  .fill()
  .map(() => createRandomUser('facebook'));

// const googleDB = Array(10)
//   .fill()
//   .map(() => createRandomUser('google'));

export const AsyncAwaitMeAndYou = () => {
  // useEffect(() => {
  //   // const getData = async () => {
  //   //   const myPromise = new Promise((resolve, reject) => {
  //   //     setTimeout(() => {
  //   //       resolve(fbDB);
  //   //     }, 1000);
  //   //   });

  //   //   return myPromise.then((data) => data).catch((err) => err);
  //   // };

  //   // async function getDataFaster() {
  //   //   const myPromise = new Promise((resolve, reject) => {
  //   //     setTimeout(() => {
  //   //       reject('error');
  //   //     }, 100);
  //   //   });

  //   //   return myPromise.then((data) => data).catch((err) => err);
  //   // }

  //   const fbDataPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       reject('The DB seems to be out of order.');
  //     }, 100);
  //   });
  //   const googleDataPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(fbDB);
  //     }, 1000);
  //   });

  //   Promise.allSettled([fbDataPromise, googleDataPromise]).then((promises) => {
  //     console.log(promises);
  //     console.log(promises.filter((prom) => prom.status !== 'fulfilled'));
  //   });
  // }, []);

  const [employees, setEmployees] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    Promise.all([getAllEmployees, getAllCompanies]).then((prom) => {
      setEmployees(prom[0]);
      setCompanies(prom[1]);
    });
  });

  return (
    <div>
      {' '}
      <h5>Companies</h5>
      {companies.map((company) => (
        <div key={company.companyId} title={company.companyId}>
          {company.companyname}
        </div>
      ))}
      <hr />
      <h5>Employees</h5>
      {employees.map((employee) => (
        <div key={employee.userId} title={employee.id}>
          <b>Username: {employee.username}</b>
          <p>
            {employee.firstName} {employee.lastName}, DoB:{' '}
            {`${employee.birthdate.getDay()}.${employee.birthdate.getMonth()}.${employee.birthdate.getFullYear()}`}
          </p>
          <p>
            Works for:{' '}
            {companies.find(
              (company) => company.companyId === employee.companyId
            )?.companyname || 'unemployeed'}
          </p>
        </div>
      ))}
    </div>
  );
};
