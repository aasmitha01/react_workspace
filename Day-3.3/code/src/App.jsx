import MessageCard from "./MessageCard";

function App() {
  return (
    <>
      <MessageCard title="Welcome" message="Welcome to React learning" />
      <MessageCard title="Reminder" message="Practice React daily" />
      <MessageCard title="Tip" message="Use components to reuse UI" />
      <MessageCard title="Success" message="You completed props assignment" />
    </>
  );
}

export default App;
