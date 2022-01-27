import './logout-btn.css';

export default function LogoutBtn() {
  function logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <button onClick={logout} className='logout-btn'>
        Logout
      </button>
    </>
  );
}
