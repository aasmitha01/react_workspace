function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "5px", padding: "5px" }}>
      <p>User ID: {userId}</p>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TodoCard;
