import { useEffect, useState } from 'react';
import { Reimbursement } from '../../dtos/dtos';
import ReimbursementRow from '../Reimbursement-Row/reimbursement-row';

export default function ReimbursementViewer(props) {
  const [reimburses, setReimburses] = useState(null);

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

  // const reimburseRows = reimburses.map((r) => (
  //   <ReimbursementRow key={r.id} {...r} />
  // ));
  return (
    <>
      <h2>Reimbursements Viewer</h2>
      <label htmlFor='user-select'>Select User:</label>
      <select name='user-select' id='user-select'>
        Select User
      </select>
      <button onClick={getAllReimbursements}>Get All Reimbursements</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>amount</th>
            <th>date</th>
            <th>comment</th>
            <th>approved?</th>
            <th>pending</th>
          </tr>
        </thead>
        <tbody>{JSON.stringify(reimburses)}</tbody>
      </table>
    </>
  );
}
