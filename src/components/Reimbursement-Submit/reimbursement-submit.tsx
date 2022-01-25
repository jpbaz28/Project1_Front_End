import { useRef } from 'react';
import { User } from '../../dtos/dtos';

export default function ReimbursementSubmit(props: { emp: User }) {
  const amountInput = useRef(null);
  const descInput = useRef(null);
  // const [amountInput, setAmount] = useState(null);
  // const [descInput, setDesc] = useState(null);

  async function submitReimbursement(e) {
    e.preventDefault();

    const reimbursePayload = {
      username: props.emp.username,
      id: '',
      amount: amountInput.current?.value ?? NaN,
      date: String(Date.now()),
      comment: descInput.current?.value ?? '',
      isApproved: false,
      isPending: true,
    };

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
      <form onSubmit={submitReimbursement}>
        <label htmlFor='amountInput'>Amount</label>
        <input type='number' id='amountInput' ref={amountInput} />
        {/* ref={amountInput} */}
        <label htmlFor='descInput'>Description</label>
        <input type='text' id='amountInput' ref={descInput} />
        {/* ref={descInput} onChange={(e) => setDesc(e.target.value)} */}
        <button type='submit'>Submit Reimbursement</button>
      </form>
    </>
  );
}
