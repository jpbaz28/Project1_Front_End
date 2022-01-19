import { Reimbursement } from '../../dtos/dtos';

export default function ReimbursementRow(props: Reimbursement) {
  const { id, amount, date, comment, isApproved, isPending } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>${amount}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>{comment}</td>
      <td>{isApproved}</td>
      <td>{isPending}</td>
    </tr>
  );
}
