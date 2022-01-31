import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../dtos/dtos';
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

  function goToPastSubmittals() {
    navigate('/employee/');
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
              <LogoutBtn nav={navigate} />
            </nav>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='emp-page-wrapper'>
        <div className='emp-page-header'>
          <h1 className='emp-title'>Employee Home Page </h1>
          <h3 className='emp-welcome'>Welcome {props.employee.name}</h3>
        </div>
        <div className='emp-reim-submit'>
          <ReimbursementSubmit emp={props.employee} />
        </div>
        <div>
          <nav className='nav-bar'>
            <Link
              onClick={goToPastSubmittals}
              to='/employee/previousReimbursements'
              className='details-link'>
              Past Submittals
            </Link>
            <LogoutBtn nav={navigate} />
          </nav>
        </div>
      </div>
    </>
  );
}
