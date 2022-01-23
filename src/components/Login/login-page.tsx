import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props: { updateUser: Function }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  async function login() {
    const loginPayload = {
      username: usernameInput.current?.value ?? '',
      password: passwordInput.current?.value ?? '',
    };

    const response = await fetch('http://localhost:5000/login', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginPayload),
    });

    const user = await response.json();
    const id: string = user.id;
    const isManager: boolean = user.isManager ? true : false;
    const fullname = `${user.fname} ${user.lname}`;
    const username = user.username;
    const authenticated: boolean = true;

    props.updateUser({
      name: fullname,
      isManager: isManager,
      isAuthenticated: authenticated,
    });

    sessionStorage.setItem('id', id);
    sessionStorage.setItem('fullname', fullname);
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('username', username);
    if (isManager) {
      sessionStorage.setItem('isManager', 'true');
      navigate('/manager');
    } else {
      navigate('/employee');
    }
  }
  return (
    <>
      <h1>Login Page</h1>
      <h3>Login Here</h3>
      <label htmlFor='usernameInput'>Username</label>
      <input ref={usernameInput} type='text' id='usernameInput' />

      <label htmlFor='passwordInput'>Password</label>
      <input ref={passwordInput} type='password' id='passwordInput' />

      <button onClick={login}>Login</button>
    </>
  );
}
