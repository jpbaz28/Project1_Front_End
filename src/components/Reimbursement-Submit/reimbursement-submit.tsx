import { useRef } from 'react';
import { backendAddress } from '../../dtos/backend-address';
import { User } from '../../dtos/dtos';
import './reimbursement-submit.css';

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
      <div className='reim-submit-wrapper'>
        <div className='reim-submit-title'>
          <h3>Submit a Reimbursement</h3>
        </div>
        <div className='submit-form'>
          <form onSubmit={submitReimbursement}>
            <div>
              <label htmlFor='amountInput' className='amount-label'>
                Amount
              </label>
              <input
                type='number'
                id='amountInput'
                ref={amountInput}
                className='amount-input'
              />
            </div>

            <div>
              <label htmlFor='descInput' className='desc-label'>
                Description
              </label>
              <input
                type='text'
                id='descInput'
                ref={descInput}
                className='desc-input'
              />
            </div>
            <div>
              <button type='submit' className='submit-btn'>
                Submit Reimbursement
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
