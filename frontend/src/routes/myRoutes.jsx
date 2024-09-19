import { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../components/layout/layout";

const ProtectedRoute = ({ element }) => {
    const dataLog = useSelector((state) => state.indexR);
    const userAuth = dataLog.index !== null;

    return userAuth ? element : <Navigate to="/login" />;
};

const MyRoutes = () => {
    const isLog = useSelector((state) => state.indexR);

    /* const Home = lazy(() => import("../pages/home/home")); */
    const Login = lazy(() => import("../pages/login/loginPage"));
    const CommonReg = lazy(() => import("../pages/formUserReg/formUserReg"));
    /* const Register = lazy(() => import("../pages/registerUser/register")); */
    const Pet = lazy(() => import("../pages/registerPet/pet"));
    const User = lazy(() => import("../pages/pageUser/indexUser"));
    const SearchService = lazy(() =>
        import("../pages/searchService/searchService")
    );
    const Profile = lazy(() => import("../pages/profile/profile"));
    const Service = lazy(() => import("../pages/pageServices/indexService"));
    const RegisterService = lazy(() =>
        import("../pages/registerService/registerService")
    );

    const redirect = (typeUser) => {
        if (typeUser === "normal") {
            return (
                <Route
                    path="/"
                    element={<ProtectedRoute element={<User />} />}
                />
            );
        } else {
            return (
                <Route
                    path="/"
                    element={<ProtectedRoute element={<Service />} />}
                />
            );
        }
    };

    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {isLog.index === null ? (
                            <Route path="/" element={<Login />} />
                        ) : (
                            redirect(isLog.typeUser)
                        )}
                        <Route path="/register" element={<CommonReg />} />
                        <Route path="/pet" element={<Pet />} />
                        <Route
                            path="/registerService"
                            element={<RegisterService />}
                        />
                        // privates routes
                        <Route
                            path="/profile"
                            element={<ProtectedRoute element={<Profile />} />}
                        />
                        {/* <Route
                            path="/search"
                            element={
                                <ProtectedRoute element={<SearchService />} />
                            }
                        /> */}
                        <Route
                            path="/search"
                            element={<SearchService />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default MyRoutes;
