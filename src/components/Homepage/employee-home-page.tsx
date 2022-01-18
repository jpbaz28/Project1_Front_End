import { Employee } from '../../dtos/dtos';
import ReimbursementSubmit from '../Reimbursement-Submit/reimbursement-submit';
import ReimbursementViewer from '../Reimbursement-Viewer/reimbursement-viewer';

export default function EmployeeHomePage(props: {
  employee: Employee;
  updateEmployee: Function;
}) {
  if (props.employee.isManager) {
    return (
      <>
        <h1>Manager Page</h1>
        <ReimbursementViewer />
      </>
    );
  }

  return (
    <>
      <h1>Employee Home Page </h1>

      <p>First Name: {props.employee.fname}</p>

      <p>Last Name: {props.employee.lname}</p>

      <p>Reimbursements: </p>

      <p>Department: {props.employee.department}</p>

      <ReimbursementSubmit />
    </>
  );
}
