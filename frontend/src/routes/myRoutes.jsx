import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";

const MyRoutes = () => {
    const Home = lazy(() => import("../pages/home/home"));
    const Login = lazy(() => import("../pages/login/loginForm"));
    const Register = lazy(() => import("../pages/registerUser/register"))
    const Pet = lazy(() => import("../pages/registerPet/pet"))
    const User = lazy(() => import("../pages/pageUser/indexUser"))
    const Service = lazy(() => import("../pages/pageServices/indexService"))
    const SearchService = lazy(() => import("../pages/searchService/searchService"))
    const Profile = lazy(() => import('../pages/profile/profile'))

    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/pet" element={<Pet/>}/>
                        <Route path="/user" element={<User/>}/>
                        <Route path="/service" element={<Service/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/search" element={<SearchService/>}/>
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default MyRoutes;
