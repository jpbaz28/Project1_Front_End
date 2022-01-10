import { useState } from 'react';
import EmployeeHomePage from './components/employee-home-page';
import LoginPage from './components/login-page';
import ManagerHomepage from './components/manager-homepage';

export default function App() {
  const [user, setUser] = useState({
    username: sessionStorage.getItem('username'),
    isManager: Boolean(sessionStorage.getItem('isManager')),
  });

  return (
    <>
      {!user.username ? (
        <LoginPage updateUser={setUser} />
      ) : user.isManager ? (
        <ManagerHomepage />
      ) : (
        <EmployeeHomePage />
      )}
    </>
  );
}
