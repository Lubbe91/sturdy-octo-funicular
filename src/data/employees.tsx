const employeeRole = {
  EX: 'Expert',
  SP: 'Specialist',
  FA: 'Facilitator',
  CFA: 'Co-facilitator',
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

export const employeeArray = {
  autoproff: [
    {
      employeeId: '1233SD',
      role: employeeRole.FA,
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
      role: employeeRole.CFA,
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
      role: employeeRole.SP,
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
      role: employeeRole.SP,
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
      role: employeeRole.SP,
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
      role: employeeRole.EX,
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
      role: employeeRole.EX,
      pii: {
        firstName: 'Nataniel',
        lastName: 'Murry',
        gender: 'Male',
        email: 'natMur@cocolog-nifty.com',
        number: '90675265',
      },
    },
  ],
  iis: [
    {
      employeeId: '1233EC',
      role: employeeRole.FA,
      pii: {
        firstName: 'Erwin',
        lastName: 'Corn',
        gender: 'Male',
        email: 'ecornq@ehow.com',
        number: '52434881',
      },
    },
    {
      employeeId: '1356KB',
      role: employeeRole.SP,
      pii: {
        firstName: 'Kathe',
        lastName: 'Barnicott',
        gender: 'Non-binary',
        email: 'kbarnicottr@sohu.com',
        number: '84571672',
      },
    },
  ],
  awesome: [
    {
      employeeId: '1495TS',
      role: employeeRole.FA,
      pii: {
        firstName: 'Tallie',
        lastName: 'Santino',
        gender: 'Female',
        email: 'tsantinov@xing.com',
        number: '65576332',
      },
    },
    {
      employeeId: '1356WW',
      role: employeeRole.CFA,
      pii: {
        firstName: 'Windham',
        lastName: 'Wannell',
        gender: 'Male',
        email: 'wwannellz@quantcast.com',
        number: '19431377',
      },
    },
    {
      employeeId: '5739AS',
      role: employeeRole.EX,
      pii: {
        firstName: 'Auroora',
        lastName: 'Stapforth',
        gender: 'Female',
        email: 'astapforth11@cpanel.net',
        number: '94413244',
      },
    },
    {
      employeeId: '6309OG',
      role: employeeRole.SP,
      pii: {
        firstName: 'Olly',
        lastName: 'Garthside',
        gender: 'Female',
        email: 'ogarthside13@zdnet.com',
        number: '32529548',
      },
    },
  ],
};
