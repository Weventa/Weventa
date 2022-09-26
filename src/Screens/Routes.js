import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Header from "./Header";
// import Footer from "../Screens/Footer";

// const Redirect = function () {
//   return <Navigate replace to="/Profile?action=signin" />;
// };
const Router = () => {
  // const user = useUser();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Header />} /> */}
    </Routes>
  );
};
export default Router;
