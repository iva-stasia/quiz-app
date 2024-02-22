import { useNavigate } from "react-router-dom";

const useNavigateWithDelay = () => {
  const navigate = useNavigate();

  const navigateWithDelay = (path, delay) =>
    setTimeout(() => {
      navigate(path);
    }, delay);

  return navigateWithDelay;
};

export default useNavigateWithDelay;
