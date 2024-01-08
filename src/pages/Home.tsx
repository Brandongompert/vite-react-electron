import useCreateUser from "@hooks/User/useCreateUser";
import useDeleteUserById from "@hooks/User/useDeleteUserById";
import useListUsers from "@hooks/User/useListUsers";
import useUpdateUser from "@hooks/User/useUpdateUser";
import { Button, Stack } from "@mui/material";

function Home() {
  const {
    data: users,
    isError: isUsersError,
    isLoading: isUsersLoading,
  } = useListUsers();

  const data = {
    name: "BOB BURGER",
  };
  const updateUserMutation = useUpdateUser();
  const createUserMutation = useCreateUser();
  const deleteUserMutation = useDeleteUserById();

  function handleUpdateUser() {
    return updateUserMutation.mutate(data);
  }
  function handleCreateUser() {
    return createUserMutation.mutate(data);
  }
  function handleDeleteUser(userId: number) {
    return deleteUserMutation.mutate(userId);
  }

  console.log("users - - - -", users);

  return (
    <>
      <h1>Home</h1>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleUpdateUser}>
          Update User
        </Button>
        <Button variant="contained" onClick={handleCreateUser}>
          Create User
        </Button>
        <Button variant="contained" onClick={() => handleDeleteUser(40)}>
          Delete User
        </Button>
      </Stack>
      {users &&
        users.map((user: any) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
    </>
  );
}

export default Home;
