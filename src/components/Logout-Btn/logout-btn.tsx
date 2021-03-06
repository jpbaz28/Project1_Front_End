import './logout-btn.css';

export default function LogoutBtn(props: { nav: Function }) {
  function logout() {
    sessionStorage.clear();
    props.nav('/');
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
