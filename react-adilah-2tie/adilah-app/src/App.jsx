import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Visitor = React.lazy(() => import("./pages/Visitor"));
const Guest = React.lazy(() => import("./pages/Guest"));


import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";




export default function App() {
  return (
    <Suspense fallback={<Loading />}>
       <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="customers" element={<Customers />} />
            </Route>

<Route path="/visitor" element={<Visitor />} />
<Route path="/guest" element={<Guest />} />

            <Route path="*" element={<NotFound />} />

            <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}


