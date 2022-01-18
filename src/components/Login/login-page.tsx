import { useRef } from 'react';

export default function LoginPage(props: { updateUser: Function }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  async function login() {
    const loginPayload = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    const response = await fetch('http://localhost:5000/login', {
      method: 'PATCH',
      body: JSON.stringify(loginPayload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const user = await response.json();
    props.updateUser({
      username: user.username,
      isManager: user.isManager,
    });

    sessionStorage.setItem('id', user.id);
    sessionStorage.setItem('fname', user.fname);
    sessionStorage.setItem('lname', user.lname);
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('password', user.password);
    sessionStorage.setItem(
      'reimburseAccount',
      JSON.stringify(user.reimburseAccount)
    );
    sessionStorage.setItem('isManager', user.isManager);
    sessionStorage.setItem('department', user.department);
  }

  return (
    <>
      <h1>Login Page</h1>
      <h3>Login Here</h3>

      <label htmlFor='usernameInput'>Username</label>
      <input ref={usernameInput} type='text' id='usernameInput' />

      <label htmlFor='passwordInput'>Username</label>
      <input ref={passwordInput} type='password' id='passwordInput' />

      <button onClick={login}>Login</button>
    </>
  );
}
