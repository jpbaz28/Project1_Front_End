import { useEffect, useState } from 'react';
import { backendAddress } from '../../dtos/backend-address';
import { Reimbursement, User } from '../../dtos/dtos';
import EmpReimbursementRow from '../Reimbursement-Row/emp-reimbursement-row';

export default function EmployeeReimViewer(props: {
  emp: User;
  updateEmployee: Function;
}) {
  const [reimburses, setReimburses] = useState([]);

  async function getReimbursementsForEmp() {
    const response: Response = await fetch(
      `${backendAddress}/reimbursements/${props.emp.username}`,
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

  const tableRows = reimburses.map((r) => (
    <EmpReimbursementRow key={r.id} reim={{ ...r }} />
  ));

  return (
    <>
      <h1>Reimbursements For: {props.emp.username}</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Comment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}
