// IMPORTACIONES DE REACT PARA ROUTER | VISTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "../views/LoginView.js";
import { RolesRoutes } from "./RolesRoutes.js";

// ROUTER
export default function AppRouter() {
  // const activeUser = JSON.parse(sessionStorage.getItem('user'));
  // console.log('active?', activeUser);
  // console.log('revisar', activeUser?.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/*" element={<RolesRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

// {
//   {
//     activeUser?.user ? (
//       <>
//         <Route path="/" element={<LoginView />} />
//         <Route path="/*" element={<RolesRoutes />} />
//       </>
//     ) : (
//       <>
//         <Route path="/*" element={<LoginView />} />
//         <Route path="/" element={<LoginView />} />
//       </>
//     );
//   }
// }
