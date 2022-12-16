const employeeRole = {
  FE: 'Frontend developer',
  BE: 'Backend developer',
  SM: 'Scrum master',
  PO: 'Product owner',
};

export interface EmployeeArrProps {
  customerId: string;
  role: string;
  pii: {
    firstName: string;
    lastName: string;
    gender: string;
  };
}

export const employeeArr: EmployeeArrProps[] = [
  {
    customerId: '1233SD',
    role: employeeRole.FE,
    pii: {
      firstName: 'Saunderson',
      lastName: 'Dencs',
      gender: 'Male',
    },
  },
  {
    customerId: '1356EC',
    role: employeeRole.FE,
    pii: {
      firstName: 'Edgardo',
      lastName: 'Chateau',
      gender: 'Male',
    },
  },
  {
    customerId: '1275TW',
    role: employeeRole.BE,
    pii: {
      firstName: 'Tanner',
      lastName: 'Walkey',
      gender: 'Male',
    },
  },
  {
    customerId: '1358QP',
    role: employeeRole.BE,
    pii: {
      firstName: 'Quincy',
      lastName: 'Pollack',
      gender: 'Male',
    },
  },
  {
    customerId: '1358JC',
    role: employeeRole.SM,
    pii: {
      firstName: 'Jenni',
      lastName: 'Coverly',
      gender: 'Female',
    },
  },
  {
    customerId: '1816NW',
    role: employeeRole.PO,
    pii: {
      firstName: 'Nataniel',
      lastName: 'Walters',
      gender: 'Male',
    },
  },
];
