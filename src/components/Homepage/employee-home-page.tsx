import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../dtos/dtos';
import EmployeeReimViewer from '../Employee-Reim-Viewer/employee-reim-viewer';
import ReimbursementSubmit from '../Reimbursement-Submit/reimbursement-submit';
import ReimbursementViewer from '../Reimbursement-Viewer/reimbursement-viewer';
import LogoutBtn from '../Logout-Btn/logout-btn';

export default function EmployeeHomePage(props: {
  employee: User;
  updateEmployee: Function;
}) {
  const navigate = useNavigate();

  function goToDetails() {
    navigate('/manager/expenditureDetails');
  }

  if (props.employee.isManager) {
    return (
      <>
        <h1>Manager Page</h1>
        <h2>Welcome {props.employee.name}</h2>
        <ReimbursementViewer />
        <div>
          <nav>
            <Link onClick={goToDetails} to='/manager/expenditureDetails'>
              Expenditure Details
            </Link>
            <LogoutBtn />
          </nav>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Employee Home Page </h1>

      <p>Welcome {props.employee.name}</p>

      <ReimbursementSubmit emp={props.employee} />

      <div>
        <EmployeeReimViewer emp={props.employee} />
      </div>
      <LogoutBtn />
    </>
  );
}
