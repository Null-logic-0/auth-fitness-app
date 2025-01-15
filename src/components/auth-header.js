import { logout } from "@/actions/auth-actions";

function Header() {
  return (
    <header id="auth-header">
      <h3>Welcome back</h3>

      <form action={logout}>
        <button>Log-out</button>
      </form>
    </header>
  );
}

export default Header;
