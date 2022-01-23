import { User } from '../../dtos/dtos';
import ReimbursementSubmit from '../Reimbursement-Submit/reimbursement-submit';
import ReimbursementViewer from '../Reimbursement-Viewer/reimbursement-viewer';

export default function EmployeeHomePage(props: {
  employee: User;
  updateEmployee: Function;
}) {
  if (props.employee.isManager) {
    return (
      <>
        <h1>Manager Page</h1>
        <h2>Welcome {props.employee.name}</h2>
        <ReimbursementViewer />
      </>
    );
  }

  return (
    <>
      <h1>Employee Home Page </h1>

      <p>Welcome {props.employee.name}</p>

      <ReimbursementSubmit emp={props.employee} />
    </>
  );
}
