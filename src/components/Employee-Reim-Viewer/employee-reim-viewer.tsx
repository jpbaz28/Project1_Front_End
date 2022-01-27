import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backendAddress } from '../../dtos/backend-address';
import { Reimbursement, User } from '../../dtos/dtos';
import LogoutBtn from '../Logout-Btn/logout-btn';
import EmpReimbursementRow from '../Reimbursement-Row/emp-reimbursement-row';
import './employee-reimbursement-view.css';

export default function EmployeeReimViewer(props: { employee: User }) {
  const [reimburses, setReimburses] = useState([]);

  const navigate = useNavigate();

  async function getReimbursementsForEmp() {
    const response: Response = await fetch(
      `${backendAddress}/reimbursements/${props.employee.username}`,
      {
        method: 'GET',
      }
    );
    const reims: Reimbursement[] = await response.json();
    setReimburses(reims);
  }

  useEffect(() => {
    getReimbursementsForEmp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goBackHome() {
    navigate('/employee');
  }

  const tableRows = reimburses.map((r) => (
    <EmpReimbursementRow key={r.id} reim={{ ...r }} />
  ));

  return (
    <>
      <div className='reim-view-wrapper'>
        <h1 className='reim-view-title'>
          Reimbursements For: {props.employee.username}
        </h1>
        <table className='reim-table'>
          <thead className='reim-thead'>
            <tr>
              <th>Username</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Comment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='reim-tbody'>{tableRows}</tbody>
        </table>
      </div>
      <nav className='reim-nav-bar'>
        <button onClick={goBackHome} className='home-btn'>
          Home Page
        </button>
        <LogoutBtn />
      </nav>
    </>
  );
}
