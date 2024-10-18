import Link from "next/link";

const users = [
  { id: 1, name: "erfan" },
  { id: 2, name: "ali" },
  { id: 3, name: "reza" },
  { id: 4, name: "mohammad" },
];

function Users() {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>user {user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
