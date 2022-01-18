import { useState } from 'react';
import EmployeeHomePage from '../Homepage/employee-home-page';
import LoginPage from '../Login/login-page';
export default function App() {
  // const employee = useSelector((state: RootState) => state.employee.value);
  // const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: sessionStorage.getItem('username'),
    isManager: Boolean(sessionStorage.getItem('isManager')),
    id: sessionStorage.getItem('id'),
    fname: sessionStorage.getItem('fname'),
    lname: sessionStorage.getItem('lname'),
    password: sessionStorage.getItem('password'),
    reimburseAccount: JSON.parse(sessionStorage.getItem('reimburseAccount')),
    department: sessionStorage.getItem('department'),
  });

  if (!user.username) {
    return <LoginPage updateUser={setUser} />;
  } else {
    return <EmployeeHomePage employee={user} updateEmployee={setUser} />;
  }
}
