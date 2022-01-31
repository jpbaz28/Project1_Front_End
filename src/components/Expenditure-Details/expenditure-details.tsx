import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backendAddress } from '../../dtos/backend-address';
import { Employee } from '../../dtos/dtos';
import LogoutBtn from '../Logout-Btn/logout-btn';
import './expenditure-details.css';

export default function ExpenditureDetails() {
  const [average, setAverage] = useState(null);
  const [highCostUser, setHighCostUser] = useState(null);

  const navigate = useNavigate();

  async function getStats() {
    const empResponse: Response = await fetch(`${backendAddress}/employees`, {
      method: 'GET',
    });

    const employees: Employee[] = await empResponse.json();

    //to store the total for all reimbursements
    let total: number = 0;
    // to store user name and total for said user
    let userSpending = [];
    //used to sync the index of userSpending with the employee array
    let index = 0;
    // for calculating the average
    let totalNumOfReims = 0;
    //stores username of highest spender
    let costUser = '';
    //to keep track of current total for highest spender
    let currentHigh = -1;

    //loop through employee array and creates an entry in userSpending array to accumulate the users total
    //it then loops through all of the reimburses for that employee adds each reimbursement amount to the userSpending array
    //then adds each reimbursement to the grand total for all reimbursements and increments the counter for number of reimbursements
    for (const emp of employees) {
      userSpending.push({ username: emp.username, userTotal: 0 });
      for (const reim of emp.reimburseAccount) {
        userSpending[index].userTotal += Number(reim.amount);
        total += Number(reim.amount);
        totalNumOfReims++;
      }
      index++;
    }

    //loops through userSpending array to find the user with the highest total spending
    for (let i = 0; i < userSpending.length; i++) {
      if (userSpending[i].userTotal > currentHigh) {
        currentHigh = userSpending[i].userTotal;
        costUser = userSpending[i].username;
      }
    }

    const average = (total / totalNumOfReims).toFixed(2);
    setAverage(average);
    setHighCostUser(costUser);
  }

  function backHome() {
    navigate('/manager');
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <div className='exp-details-wrapper'>
        <div className='exp-details-title'>
          <h1>Expenditure Details Page</h1>
        </div>
        <div className='exp-details-body'>
          <h3>The employee with the most spending was: {highCostUser}</h3>
          <h3>
            The average amount for submitted reimbursements was: ${average}
          </h3>
        </div>
        <nav className='exp-details-navbar'>
          <button onClick={backHome} className='home-btn'>
            Home Page
          </button>
          <LogoutBtn nav={navigate} />
        </nav>
      </div>
    </>
  );
}
