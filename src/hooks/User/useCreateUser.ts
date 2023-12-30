import useApi from "@hooks/useApi";

const useCreateUser = async (userData: any) => {
  return useApi({
    method: "post",
    url: `http://localhost:3001/users/${userData.id}`,
    headers: {
      "Content-Type": "application/json",
    },
    cache: userData,
    body: userData,
  });
};

export default useCreateUser;
