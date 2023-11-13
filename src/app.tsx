function App() {
  function sendMsg() {
    window.api.sendMessage("yo yo");
    console.log("sending msg");
  }
  console.log("window - - ", window);

  return (
    <div>
      <button onClick={sendMsg}>Send Message</button>
    </div>
  );
}

export default App;
