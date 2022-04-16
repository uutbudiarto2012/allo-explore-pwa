import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import InstallModal from "./components/InstallModal";
import "./App.css";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

function App() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const check = reactLocalStorage.get("alloExplorePWA");
    setIsInstalled(check && true);
  }, [isInstalled]);

  return (
    <>
      <div className="main-wrapper">
        <Home />
      </div>
      <Helmet>
        <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/main.js"></script>
      </Helmet>
      {!isInstalled && <InstallModal />}
    </>
  );
}

export default App;
