import { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Employee } from '../../dtos/dtos';

export default function ManagerHomepage(props: {
  // manager: Employee;
  // updateUser: Function
}) {
  // const employee: Employee = useSelector(
  //   (state: RootStateOrAny) => state.employee.value
  // );

  // useEffect(() => {
  //   props.updateUser(props.manager);
  //   console.log("Beep")
  // });

  // const username = sessionStorage.getItem('username');
  // const isManager = Boolean(sessionStorage.getItem('isManager'));
  // const id = sessionStorage.getItem('id');
  // const fname = sessionStorage.getItem('fname');
  // const lname = sessionStorage.getItem('lname');
  // const password = sessionStorage.getItem('password');
  // const reimburseAccount = JSON.parse(sessionStorage.getItem('reimburseAccount'));
  // const department = sessionStorage.getItem('department');

  return (
    <>
      <h1>Manager Home Page </h1>

      <p>First Name: </p>

      <p>Last Name:</p>

      <p>Reimbursements: </p>

      <p>Department:</p>
    </>
  );
}
