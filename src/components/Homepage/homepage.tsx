import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../dtos/dtos';
import EmployeeReimViewer from '../Employee-Reim-Viewer/employee-reim-viewer';
import ReimbursementViewer from '../Reimbursement-Viewer/reimbursement-viewer';
import LogoutBtn from '../Logout-Btn/logout-btn';
import './homepage.css';
import ReimbursementSubmit from '../Reimbursement-Submit/reimbursement-submit';

export default function Homepage(props: {
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
        <div className='manager-page-wrapper'>
          <div className='manager-header'>
            <h1 className='manager-title'>Manager Page</h1>
            <h3 className='manager-welcome'>Welcome, {props.employee.name}</h3>
          </div>
          <ReimbursementViewer />
          <div>
            <nav className='nav-bar'>
              <Link
                onClick={goToDetails}
                to='/manager/expenditureDetails'
                className='details-link'>
                Expenditure Details
              </Link>
              <LogoutBtn />
            </nav>
          </div>
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
        <EmployeeReimViewer
          emp={props.employee}
          updateEmployee={props.updateEmployee}
        />
      </div>
      <LogoutBtn />
    </>
  );
}
