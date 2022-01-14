import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeHomePage from './components/employee-home-page';
import LoginPage from './components/login-page';
import ManagerHomepage from './components/manager-homepage';
import { loginState } from './features/employeeSlice';
import employeeReducer from './features/employeeSlice';
import { RootState } from './App/store';

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
    reimburseAccount: sessionStorage.getItem('reimburseAccount'),
    department: sessionStorage.getItem('department'),
  });

  if (!user.username) {
    return <LoginPage updateUser={setUser} />;
  } else if (user.isManager) {
    return <ManagerHomepage />;
  } else {
    return <EmployeeHomePage />;
  }
}
