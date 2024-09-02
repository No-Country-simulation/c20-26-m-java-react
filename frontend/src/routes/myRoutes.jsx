import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/layout";

const MyRoutes = () => {
    const Home = lazy(() => import("../pages/home/home"));
    const Login = lazy(() => import("../pages/login/login"));

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Layout>
            </Suspense>
        </Router>
    );
};

export default MyRoutes;
