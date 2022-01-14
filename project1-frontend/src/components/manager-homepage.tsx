import { RootStateOrAny, useSelector } from 'react-redux';
import { Employee } from '../dtos/dtos';

export default function ManagerHomepage() {
  const employee = useSelector((state: RootStateOrAny) => state.employee.value);
  return (
    <>
      <h1>Manager Home Page {employee.id}</h1>

      <p>First Name: {employee.fname}</p>

      <p>Last Name: {employee.lname}</p>

      <p>Reimbursements: {employee.reimburseAccount}</p>

      <p>Department: {employee.department}</p>
    </>
  );
}
