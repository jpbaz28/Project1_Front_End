export default function LogoutBtn() {
  function logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}
