<script>
  import Footer from "./components/footer.svelte";
  import NavBar from "./components/nav-bar.svelte";
  import NotFound from "./pages/not-found.svelte";
  import Route from "./components/pager/route.svelte";
  import Router from "./components/pager/router.svelte";
  import ExternalApi from "./pages/external-api.svelte";
  import Home from "./pages/home.svelte";
  import Profile from "./pages/profile.svelte";

  let page;
  let params;
</script>

<div class="page-layout">
  <NavBar />
  <div class="page-layout__content">
    <Router>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/external-api" component={ExternalApi} />
      <Route path="*" component={NotFound} />
    </Router>
  </div>
  <Footer />
</div>
