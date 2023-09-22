import { useRouter } from "next/router";
import { useEffect } from "react";


const Redirect = ({ route }) => {
  const router = useRouter();
  useEffect(() => {
    router.replace(route);
  }, [route, router]);
  return null;
};

export default Redirect;
