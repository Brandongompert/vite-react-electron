import useCreateUser from "@hooks/User/useCreateUser";
import useDeleteUserById from "@hooks/User/useDeleteUserById";
import useGetUserById from "@hooks/User/useGetUserById";
import useUpdateUser from "@hooks/User/useUpdateUser";

function Home() {
  // Call the useApi hook with method set to 'delete'
  const handleDeleteClick = useDeleteUserById(1);
  const {
    data: Bob,
    loading: isBobLoading,
    error: isBobError,
  } = useGetUserById(1);

  return (
    // cool native html elements
    <>
      <button onClick={() => useCreateUser({ name: "Yolanda" })}>
        Create User
      </button>
      <button onClick={() => useUpdateUser({ id: 1, name: "Not lance" })}>
        Update User
      </button>
      <button onClick={() => console.log(Bob, isBobError, isBobLoading)}>
        Get User
      </button>
      <button onClick={() => handleDeleteClick}>Delete User</button>
      <details>
        <summary>Click to toggle content</summary>
        <p>
          This is the full content that is revealed when a user clicks on the
          summary
        </p>
      </details>
    </>
  );
}

export default Home;
