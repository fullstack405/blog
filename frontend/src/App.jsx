// import React from 'react';
// import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
// import Navbar from './components/Navbar'; // Navbar 경로에 맞게 설정
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import JavaScript from "./pages/JavaScript";
// import GridButton from "./components/GridButton";
//
// const BlogLayout = () => (
//     <div>
//         <h1>Blog Layout</h1>
//         <Outlet/> {
//         /* 자식 라우트를 렌더링할 위치 */
//         <GridButton/>
//     }
//     </div>
// );
//
// const App = () => {
//     return (
//         <Router>
//             <Navbar/>
//             <Routes>
//                 <Route path="/blog" element={<BlogLayout/>}> {}
//                     <Route path="navi">
//                         <Route path="home" element={<Home/>}/>
//                         <Route path="about" element={<About/>}/>
//                         <Route path="services" element={<Services/>}/>
//                         <Route path="contact" element={<Contact/>}/>
//                     </Route>
//                     <Route path="body">
//                         <Route path="javascript" element={<JavaScript/>}/>
//                     </Route>
//                 </Route>
//             </Routes>
//         </Router>
//     );
// };
//
// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar 경로에 맞게 설정
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import JavaScript from "./pages/JavaScript";
import GridButton from "./components/GridButton";
import { Outlet } from 'react-router-dom'; // Outlet 추가

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/blog" element={<GridButton/>}/>
                    <Route path="navi">
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                    <Route path="body">
                        <Route path="javascript" element={<JavaScript />} />
                    </Route>
                {/*</Route>*/}
            </Routes>
        </Router>
    );
};

export default App;
