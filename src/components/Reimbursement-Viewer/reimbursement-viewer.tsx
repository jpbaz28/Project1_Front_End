import { useEffect, useState } from 'react';
import { backendAddress } from '../../dtos/backend-address';
import { Reimbursement } from '../../dtos/dtos';
import ReimbursementRow from '../Reimbursement-Row/reimbursement-row';
import './reimbursement-viewer.css';

export default function ReimbursementViewer(props) {
  const [reimburses, setReimburses] = useState([]);

  async function getAllReimbursements() {
    const response: Response = await fetch(`${backendAddress}/reimbursements`, {
      method: 'GET',
    });
    const reims: Reimbursement[] = await response.json();
    setReimburses(reims);
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
      <div className='reim-view-wrapper'>
        <h2 className='reim-view-title'>Reimbursements Viewer</h2>

        <table className='reim-table'>
          <thead>
            <tr>
              <th className='reim-thead'>Username</th>
              <th className='reim-thead'>Amount</th>
              <th className='reim-thead'>Date</th>
              <th className='reim-thead'>Comment</th>
              <th className='reim-thead'>Approve/Deny</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
}
