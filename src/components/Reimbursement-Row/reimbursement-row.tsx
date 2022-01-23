import { Reimbursement } from '../../dtos/dtos';

export default function ReimbursementRow(props: {
  reim: Reimbursement;
  setReimburse: Function;
}) {
  const { id, amount, date, comment, isApproved, isPending, username } =
    props.reim;
  const milliseconds: number = Number(date) * 1000;
  const dateObj = new Date(milliseconds);

  async function approveReimburse() {
    const response: Response = await fetch(
      `http://localhost:5000/reimbursements/approve/${username}/${id}`,
      { method: 'PATCH', headers: { 'content-type': 'application/json' } }
    );
    const reimburses: Reimbursement[] = await response.json();
    props.setReimburse(reimburses);
  }

  async function denyReimburse() {
    const response: Response = await fetch(
      `http://localhost:5000/reimbursements/deny/${username}/${id}`,
      { method: 'PATCH', headers: { 'content-type': 'application/json' } }
    );
    const reimburses: Reimbursement[] = await response.json();
    props.setReimburse(reimburses);
  }

  return (
    <tr>
      <td>{username}</td>
      <td>${amount}</td>
      <td>{dateObj.toLocaleDateString()}</td>
      <td>{comment}</td>
      {isPending ? (
        <>
          <td>
            <button onClick={approveReimburse}>Approve</button>
            {/* onClick={approveReimburse} */}
            <button onClick={denyReimburse}>Deny</button>
          </td>
        </>
      ) : (
        <>
          <td>{isApproved ? 'Approved' : 'Denied'}</td>
        </>
      )}
    </tr>
  );
}
