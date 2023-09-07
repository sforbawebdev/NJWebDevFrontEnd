const importFactory = importFunction => lazy(importFunction);
const requireViews = require.context(
  "./scripts/views",
  true,
  /^(.*\.(js$))[^.]*$/im,
  "lazy"
);
const viewPaths = requireViews.keys();
const views = {};
viewPaths.forEach(path => {
  const str = path.replace(/\.\//, "");
  const componentName = str.replace(/\.js/, "");
  views[componentName] = importFactory(() =>
    import(/* webpackChunkName: "[request]" */ `./scripts/views/${componentName}`)
  );
});

const BuildRoutes = () =>{
  const ROUTE_QUERY = queries.ROUTE_QUERY();
  const { loading, error, data } = useQuery(ROUTE_QUERY);
  if(loading) {
    return null;
  }
  if(error) {
    return error;
  }

  const pages = data && data.pages && data.pages.nodes;


  const routes = pages.map((page, index)=> {
    const Component =  views[`${page.title.toLowerCase()}`] || views["default"];
    return (<Route 
      exact
      key={index}
      path={page.uri}
      render={(props)=>(
        <LazyBoundary fallback={<div />}>
          <Component page={page} {...props} />
      </LazyBoundary>
      )}
    />)
  });

  const home_route = (   
    <Route exact key={0} path="/">
      <Home />
    </Route>
  );

  const redirectAllElse = (
    <Route
      path="/"
      key="redirectAllElse"
      render={() => {
        return <Redirect to="/" />;
      }}
    />
  );

  return [...routes, home_route, redirectAllElse];
};