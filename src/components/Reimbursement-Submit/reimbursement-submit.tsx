import { useRef } from 'react';
import { User } from '../../dtos/dtos';

export default function ReimbursementSubmit(props: { emp: User }) {
  const amountInput = useRef(null);
  const descInput = useRef(null);

  const reimbursePayload = {
    username: props.emp.username,
    id: '',
    amount: amountInput.current?.value ?? 0,
    date: String(Date.now()),
    comment: descInput.current?.value ?? '',
    isApproved: false,
    isPending: true,
  };

  async function submitReimbursement() {
    const response: Response = await fetch(
      `http://localhost:5000/employees/${props.emp.id}/reimbursements`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(reimbursePayload),
      }
    );
    const reimburse = await response.json();
    alert(`Submitted Reimbursement. ID is ${reimburse.id}`);
  }

  return (
    <>
      <h2>Submit a Reimbursement</h2>
      <label htmlFor='amountInput'>Amount</label>
      <input ref={amountInput} type='number' min={1} id='amountInput' />

      <label htmlFor='descInput'>Description</label>
      <input ref={descInput} type='text' id='amountInput' />

      <button onClick={submitReimbursement}>Submit Reimbursement</button>
    </>
  );
}
