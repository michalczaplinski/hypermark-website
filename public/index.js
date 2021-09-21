import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from "preact-iso";
import Home from "./pages/home/index.js";
import NotFound from "./pages/_404.js";

import { h } from "preact";
import { prefix } from "goober/prefixer";
import { extractCss, setup } from "goober";

// const About = lazy(() => import('./pages/about/index.js'));

setup(h, prefix);

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
          {/* <Route path="/about" component={About} /> */}
          <Route default component={NotFound} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const res = await ssr(<App {...data} />);
  const css = extractCss();

  res.html = `<style id="_goober"> ${css}</style>${res.html}`;

  return res;
}
