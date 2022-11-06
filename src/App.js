// import { Fragment, lazy, Suspense } from "react";
// import Banner from "./components/banner/Banner";
// import "swiper/scss";
// // import { NavLink } from "react-router-dom";

// // import HomePage from "./pages/HomePage";
// import { Route, Routes } from "react-router-dom";
// import Main from "./components/layout/Main";
// // import MoviePage from "./pages/MoviePage";
// // import MovieDetailsPage from "./pages/MovieDetailsPage";
// //dinamic import
// //advaned react pattern
// const HomePage = lazy(() => import("./pages/HomePage"));
// const MoviePage = lazy(() => import("./pages/MoviePage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
// function App() {
//   return (
//     <Fragment>
//       <Suspense fallback={<></>}>
//         <Routes>
//           <Route element={<Main></Main>}>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Banner></Banner>
//                   <HomePage></HomePage>
//                 </>
//               }
//             ></Route>
//             <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
//             <Route path="/movie/:movieId" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
//           </Route>
//         </Routes>
//       </Suspense>
//       {/* <Header></Header>
//       <Banner></Banner>
//       <HomePage></HomePage> */}
//     </Fragment>
//   );
// }

// export default App;
import React from "react";
import FetchingData from "./components/advanced-react/hoc/FetchingData";
import HandeValue from "./components/advanced-react/hoc/render-props/HandeValue";
import Title from "./components/advanced-react/hoc/render-props/Title";
import Accordion from "./components/advanced-react/react-compostion/Accordion";
import Editable from "./components/advanced-react/react-compostion/Editable";

const data = [1, 2, 3];
//HOC = Hight order component patter
const App = () => {
  return (
    <div>
      {/* <FetchingData data={data}></FetchingData> */}
      {/* <Title>{() => <h1>hello from render props </h1>}</Title> */}
      {/* <HandeValue></HandeValue> */}
      <Accordion header="Can I change My plan larter">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas corporis est non quaerat quidem esse
          aspernatur officiis, possimus aliquid illum eum necessitatibus, molestiae architecto eaque eveniet ratione
          soluta quibusdam.
        </div>
      </Accordion>
      <Accordion header="Can I change My plan larter">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas corporis est non quaerat quidem esse
          aspernatur officiis, possimus aliquid illum eum necessitatibus, molestiae architecto eaque eveniet ratione
          soluta quibusdam.
        </div>
      </Accordion>
      <Accordion header="Can I change My plan larter">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas corporis est non quaerat quidem esse
          aspernatur officiis, possimus aliquid illum eum necessitatibus, molestiae architecto eaque eveniet ratione
          soluta quibusdam.
        </div>
      </Accordion>
      <Accordion header="Can I change My plan larter">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas corporis est non quaerat quidem esse
          aspernatur officiis, possimus aliquid illum eum necessitatibus, molestiae architecto eaque eveniet ratione
          soluta quibusdam.
        </div>
      </Accordion>
      {/* <Editable></Editable> */}
    </div>
  );
};

export default App;
