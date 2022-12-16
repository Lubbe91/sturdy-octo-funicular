import { EmployeeArrProps } from 'overview/employees';

/**
 *
 * @param {EmployeeArrProps} data The object set with employee information
 */

export const createData = ({ customerId, role, pii }: EmployeeArrProps) => ({
  customerId,
  role,
  ...pii,
});
