import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ExpenditureDetails from '../Expenditure-Details/expenditure-details';
import EmployeeHomePage from '../Homepage/employee-home-page';
import LoginPage from '../Login/login-page';

export default function App() {
  const [user, setUser] = useState({
    id: sessionStorage.getItem('id'),
    name: sessionStorage.getItem('fullname'),
    isAuthenticated: sessionStorage.getItem('isAuthenticated'),
    isManager: sessionStorage.getItem('isManager'),
    username: sessionStorage.getItem('username'),
  });

  if (!user.isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage updateUser={setUser} />} />
          <Route path='*' element={<Navigate to={'/login'} />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path='*'
            element={
              <EmployeeHomePage employee={user} updateEmployee={setUser} />
            }
          />
          <Route
            path='/employee'
            element={
              <EmployeeHomePage employee={user} updateEmployee={setUser} />
            }
          />
          <Route
            path='/manager'
            element={
              <EmployeeHomePage employee={user} updateEmployee={setUser} />
            }
          />
          <Route
            path='/manager/expenditureDetails'
            element={<ExpenditureDetails />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
