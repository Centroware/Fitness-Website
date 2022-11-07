import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Pricing from "./screens/Pricing";
import Download from "./screens/Download";
import Class01 from "./screens/Class01";
import Class01Details from "./screens/Class01Details";
import Class02 from "./screens/Class02";
import Class02Details from "./screens/Class02Details";
import Lifestyle from "./screens/Lifestyle";
import Article from "./screens/Article";
import SingleArticle from "./screens/Article/SingleArticle";
import ErrorBoundary from "./components/ErrorBoundary";
import Privacy from "./screens/Privacy";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const root = document.documentElement;

    root?.style.setProperty("--lang", i18n.resolvedLanguage === "en" ? "ar" : "en");
  }, [i18n.resolvedLanguage]);

  return (
    <div style={{ direction: i18n.resolvedLanguage === "ar" ? "rtl" : "ltr" }}>
      <Router>
        {/* <ErrorBoundary> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Page>
                <Features />
              </Page>
            )}
          />
          {/* <Route
            exact
            path="/download"
            render={() => (
              <Page>
                <Download />
              </Page>
            )}
          /> */}
          <Route
            exact
            path="/lifestyle"
            render={() => (
              <Page>
                <Lifestyle />
              </Page>
            )}
          />
          <Route
            exact
            path="/article"
            render={() => (
              <Page>
                <Article />
              </Page>
            )}
          />
          <Route
            exact
            path="/article/:slug"
            render={() => (
              <Page>
                <SingleArticle />
              </Page>
            )}
          />

          <Route
            exact
            path="/pricing"
            render={() => (
              <Page>
                <Pricing />
              </Page>
            )}
          />

          <Route
            exact
            path="/privacy"
            render={() => (
              <Page>
                <Privacy />
              </Page>
            )}
          />
          {/* 
        <Route
          exact
          path="/features"
          render={() => (
            <Page>
              <Features />
            </Page>
          )}
        /> 
        
         <Route
          exact
          path="/class01"
          render={() => (
            <Page>
              <Class01 />
            </Page>
          )}
        />
        <Route
          exact
          path="/class01-details"
          render={() => (
            <Page>
              <Class01Details />
            </Page>
          )}
        />
        <Route
          exact
          path="/class02"
          render={() => (
            <Page>
              <Class02 />
            </Page>
          )}
        />
        <Route
          exact
          path="/class02-details"
          render={() => (
            <Page>
              <Class02Details />
            </Page>
          )}
        />
          */}
        </Switch>
        {/* </ErrorBoundary> */}
      </Router>
    </div>
  );
}

export default App;
