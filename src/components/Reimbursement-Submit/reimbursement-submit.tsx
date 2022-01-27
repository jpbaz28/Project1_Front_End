import { useRef } from 'react';
import { backendAddress } from '../../dtos/backend-address';
import { User } from '../../dtos/dtos';

export default function ReimbursementSubmit(props: { emp: User }) {
  const amountInput = useRef(null);
  const descInput = useRef(null);

  async function submitReimbursement(e) {
    e.preventDefault();

    const reimbursePayload = {
      username: props.emp.username,
      id: '',
      amount: amountInput.current?.value ?? NaN,
      date: String(Date.now() / 1000),
      comment: descInput.current?.value ?? '',
      isApproved: false,
      isPending: true,
    };

    const response: Response = await fetch(
      `${backendAddress}/employees/${props.emp.id}/reimbursements`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(reimbursePayload),
      }
    );
    const emp = await response.json();
    alert(`Submitted reimbursement for ${emp.username}`);
  }

  return (
    <>
      <h2>Submit a Reimbursement</h2>
      <form onSubmit={submitReimbursement}>
        <label htmlFor='amountInput'>Amount</label>
        <input type='number' id='amountInput' ref={amountInput} />

        <label htmlFor='descInput'>Description</label>
        <input type='text' id='descInput' ref={descInput} />

        <button type='submit'>Submit Reimbursement</button>
      </form>
    </>
  );
}
