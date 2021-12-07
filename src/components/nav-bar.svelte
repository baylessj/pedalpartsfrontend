<script>
  import { activeRoute } from "./pager/router.svelte";
</script>

<div class="nav-bar__container">
  <nav class="nav-bar">
    <div class="nav-bar__brand">
      <a href="/">
        <img
          class="nav-bar__logo"
          src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
          alt="Auth0 shield logo"
          width="35.98"
          height="40"
        />
      </a>
    </div>
    <div class="nav-bar__tabs">
      <a
        href="/profile"
        class="nav-bar__tab"
        class:nav-bar__tab--active={$activeRoute.path === "/profile"}
      >
        Profile
      </a>
      <a
        href="/external-api"
        class="nav-bar__tab"
        class:nav-bar__tab--active={$activeRoute.path === "/external-api"}
      >
        External API
      </a>
    </div>
  </nav>
</div>
