import ShowForm from "./component/ShowForm/ShowForm";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import ShowPage from "./component/ShowPage/ShowPage";
import Toolbar from "./component/Toolbar/Toolbar";

function App() {

  return (
   <>
     <header>
       <Toolbar/>
     </header>
     <main className="container mt-3">
       <Routes>
         <Route path="/" element={<ShowForm/>}/>
         <Route path="/shows/:id" element={<ShowPage/>}/>
         <Route path="*" element={(<ErrorPage/>)}/>
       </Routes>
     </main></>
  )
}

export default App
