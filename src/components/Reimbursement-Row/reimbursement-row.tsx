import { Reimbursement } from '../../dtos/dtos';

export default function ReimbursementRow(props: Reimbursement) {
  const { id, amount, date, comment, isApproved, isPending, username } = props;
  const milliseconds: number = Number(date) * 1000;
  const dateObj = new Date(milliseconds);
  return (
    <tr>
      <td>{username}</td>
      <td>${amount}</td>
      <td>{dateObj.toLocaleDateString()}</td>
      <td>{comment}</td>
      {isPending ? (
        <>
          <td>
            <button>Approve</button> <button>Deny</button>
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
