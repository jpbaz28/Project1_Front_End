import { Reimbursement } from '../../dtos/dtos';

export default function EmpReimbursementRow(props: { reim: Reimbursement }) {
  const { amount, date, comment, isApproved, isPending, username } = props.reim;
  const milliseconds: number = Number(date) * 1000;
  const dateObj = new Date(milliseconds);
  return (
    <>
      <tr>
        <td>{username}</td>
        <td>${amount}</td>
        <td>{dateObj.toLocaleDateString()}</td>
        <td>{comment}</td>
        {isPending ? (
          <>
            <td>Pending</td>
          </>
        ) : (
          <>
            <td>{isApproved ? 'Approved' : 'Denied'}</td>
          </>
        )}
      </tr>
    </>
  );
}
