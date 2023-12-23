import useCreateUser from "@hooks/useCreateUser";

function Home() {
  return (
    // cool native html elements
    <>
      <button onClick={() => useCreateUser({ name: "Billy" })}>
        Create User
      </button>
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
