import { useEffect, useState } from 'react';
import { Reimbursement } from '../../dtos/dtos';
import ReimbursementRow from '../Reimbursement-Row/reimbursement-row';

export default function ReimbursementViewer(props) {
  const [reimburses, setReimburses] = useState([]);

  async function getAllReimbursements() {
    const response: Response = await fetch(
      'http://localhost:5000/reimbursements',
      {
        method: 'GET',
      }
    );
    const reimburses: Reimbursement[] = await response.json();
    setReimburses(reimburses);
  }

  useEffect(() => {
    getAllReimbursements();
  }, []);

  const tableRows = reimburses.map((r) => (
    <ReimbursementRow key={r.id} reim={{ ...r }} setReimburse={setReimburses} />
    // setReimburse={setReimburses}
  ));
  return (
    <>
      <h2>Reimbursements Viewer</h2>
      <label htmlFor='user-select'>Select User:</label>
      <select name='user-select' id='user-select'>
        Select User
      </select>
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>amount</th>
            <th>date</th>
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
