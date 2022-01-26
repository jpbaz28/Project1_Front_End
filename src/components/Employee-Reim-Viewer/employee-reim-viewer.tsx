import { useEffect, useState } from 'react';
import { Reimbursement, User } from '../../dtos/dtos';
import ReimbursementRow from '../Reimbursement-Row/reimbursement-row';

export default function EmployeeReimViewer(props: { emp: User }) {
  const [reimburses, setReimburses] = useState([]);

  async function getReimbursementsForEmp() {
    const response: Response = await fetch(
      `http://localhost:5000/reimbursements/${props.emp.username}`,
      {
        method: 'GET',
      }
    );
    const reimburses: Reimbursement[] = await response.json();
    setReimburses(reimburses);
  }

  useEffect(() => {
    getReimbursementsForEmp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tableRows = reimburses.map((r) => (
    <ReimbursementRow key={r.id} reim={{ ...r }} setReimburse={setReimburses} />
  ));

  return (
    <>
      <h1>Reimbursements For: {props.emp.username}</h1>
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>amount</th>
            <th>date/time</th>
            <th>comment</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}
