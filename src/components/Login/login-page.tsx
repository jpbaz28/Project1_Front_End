import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import revatureLogo from './revature-logo.png';

export default function LoginPage(props: { updateUser: Function }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

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
    const userId: string = user.id;
    const isManager: boolean = user.isManager ? true : false;
    const fullname = `${user.fname} ${user.lname}`;
    const uname = user.username;
    const authenticated: boolean = true;

    props.updateUser({
      id: userId,
      username: uname,
      name: fullname,
      isManager: isManager,
      isAuthenticated: authenticated,
    });

    sessionStorage.setItem('id', userId);
    sessionStorage.setItem('fullname', fullname);
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('username', uname);
    if (isManager) {
      sessionStorage.setItem('isManager', 'true');
      navigate('/manager');
    } else {
      navigate('/employee');
    }
  }
  return (
    <>
      <div>
        <img
          src={revatureLogo}
          alt='Revature-Logo'
          width={'200'}
          height={'100'}
        />
      </div>
      <div className='login-wrapper'>
        <div className='login-title'>
          <h2>Welcome, Log in Here!</h2>
        </div>
        <form onSubmit={login}>
          <div>
            <label htmlFor='usernameInput'>Username</label>
            <input ref={usernameInput} type='text' className='username-input' />
          </div>
          <div className='passwordInput'>
            <label htmlFor='passwordInput'>Password</label>
            <input
              ref={passwordInput}
              type='password'
              className='password-input'
            />
          </div>
          <div className='login-btn'>
            <button type='reset' className='reset-btn'>
              Clear
            </button>
            <button type='submit' className='submit-btn'>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
