import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../../components/AnimtaionLoading";
import useGetUserData from "../../hooks/useGetUserData";
import useIsAdmin from "../../hooks/useIsAdmin";

const Index = () => {
  const { replace } = useRouter();
  const { data: userData } = useGetUserData();
  const isAdmin = useIsAdmin(userData);

  useEffect(() => {
    if (userData && !isAdmin) {
      window.alert("권한이 없습니다.");
      replace("/", undefined, { shallow: true });
    }
  }, [isAdmin, replace, userData]);

  return (
    <div className="page-container">
      <Head>
        <title>RAEBEF │ ADMIN</title>
      </Head>
      {isAdmin ? "어드민" : <Loading />}
    </div>
  );
};

export default Index;
