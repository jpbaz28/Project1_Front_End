import { useState } from 'react';
import EmployeeHomePage from '../Homepage/employee-home-page';
import LoginPage from '../Login/login-page';
export default function App() {
  const [user, setUser] = useState({
    id: sessionStorage.getItem('id'),
    name: sessionStorage.getItem('fullname'),
    isAuthenticated: sessionStorage.getItem('isAuthenticated'),
    isManager: sessionStorage.getItem('isManager'),
  });

  if (!user.isAuthenticated) {
    return <LoginPage updateUser={setUser} />;
  } else {
    return <EmployeeHomePage employee={user} updateEmployee={setUser} />;
  }
}
