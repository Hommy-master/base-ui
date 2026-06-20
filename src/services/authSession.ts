import { AUTH_TOKEN_KEY } from '~/context/AuthContext';
import { navigateTo } from '~/utils/navigation';

const redirectToLogin = (() => {
  let redirectId: ReturnType<typeof setTimeout> | null = null;

  function redirect() {
    if (redirectId) {
      clearTimeout(redirectId);
    }

    redirectId = setTimeout(() => {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      if (window.location.pathname !== '/login') {
        navigateTo('/login', { from: { pathname: window.location.pathname } });
      }
      redirectId = null;
    }, 1000);
  }

  return redirect;
})();

export function clearAuthSession() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function requireLoginRedirect() {
  redirectToLogin();
}
