const employeeRole = {
  FE: 'Frontend Developer',
  BE: 'Backend Developer',
  SM: 'Scrum Master',
  PO: 'Product Owner',
  PM: 'Product Manager',
};

export interface EmployeeArrayProps {
  employeeId: string;
  role: string;
  pii: {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    number: string;
  };
}

export const employeeArray: EmployeeArrayProps[] = [
  {
    employeeId: '1233SD',
    role: employeeRole.FE,
    pii: {
      firstName: 'Saunderson',
      lastName: 'Dencs',
      gender: 'Male',
      email: 'SaundDencs@cbsnews.com',
      number: '56899531',
    },
  },
  {
    employeeId: '1356EC',
    role: employeeRole.FE,
    pii: {
      firstName: 'Edgardo',
      lastName: 'Chateau',
      gender: 'Male',
      email: 'Edgardo_Chat@123-reg.co.uk',
      number: '73289592',
    },
  },
  {
    employeeId: '1275TW',
    role: employeeRole.BE,
    pii: {
      firstName: 'Tanner',
      lastName: 'Walkey',
      gender: 'Male',
      email: 'twalkeyy@cbsnews.com',
      number: '58246680',
    },
  },
  {
    employeeId: '1358QP',
    role: employeeRole.BE,
    pii: {
      firstName: 'Quincy',
      lastName: 'Pollack',
      gender: 'Male',
      email: 'qpollack10@oracle.com',
      number: '42380853',
    },
  },
  {
    employeeId: '1358JC',
    role: employeeRole.SM,
    pii: {
      firstName: 'Jenni',
      lastName: 'Coverly',
      gender: 'Female',
      email: 'jcoverlyi@china.com.cn',
      number: '49661904',
    },
  },
  {
    employeeId: '1816NW',
    role: employeeRole.PO,
    pii: {
      firstName: 'Nataniel',
      lastName: 'Walters',
      gender: 'Male',
      email: 'nwalters8@studiopress.com',
      number: '51872677',
    },
  },
  {
    employeeId: '1946NM',
    role: employeeRole.PM,
    pii: {
      firstName: 'Nataniel',
      lastName: 'Murry',
      gender: 'Male',
      email: 'natMur@cocolog-nifty.com',
      number: '90675265',
    },
  },
];
