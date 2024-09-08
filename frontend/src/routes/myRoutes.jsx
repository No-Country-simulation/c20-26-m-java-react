import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Layout from "../components/layout/layout";

const MyRoutes = () => {
    const Home = lazy(() => import("../pages/home/home"));
    const Login = lazy(() => import("../pages/login/login"));
    const Register = lazy(() => import("../pages/registerUser/register"))
    const Pet = lazy(() => import("../pages/registerPet/pet"))
    const User = lazy(() => import("../pages/pageUser/indexUser"))

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/pet" element={<Pet/>}/>
                        <Route path="/user" element={<User/>}/>
                    </Routes>
            </Suspense>
        </Router>
    );
};

export default MyRoutes;
