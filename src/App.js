import { useEffect, useState } from "react";
import "./sass/main.scss";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
<AnimateSharedLayout type='crossfade'>
<AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <motion.div className="transition-image final">
              <motion.img layoutId="main-image-1" src={process.env.PUBLIC_URL + `/images/image-2.jpg`}  transition={{ ease:[0.6, 0.01, 0.0, 0.95], duration: 1.6   }}/>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
</AnimateSharedLayout>
  );
}

export default App;
