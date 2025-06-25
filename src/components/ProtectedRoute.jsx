import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../app/features/auth/authSlice";
import { Loader } from "./Progress";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && status === "idle") {
      dispatch(fetchUserData({ navigate }));
    }
  }, [dispatch, user, status, navigate]);

  if (status === "loading") {
    return <Loader/>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
