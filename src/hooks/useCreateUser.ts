import axios from "axios";

const useCreateUser = async (userData: any) => {
  const response = axios
    .post("http://localhost:3001/users", {
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    })
    .then((res) => {
      return res;
    });

  return response;
};

export default useCreateUser;
