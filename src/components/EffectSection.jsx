import Button from "./Button/Button";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput();

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal} style={{ marginBottom: "1rem" }}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          et ex, veniam laborum assumenda similique voluptatum mollitia delectus
          debitis sapiente perferendis quas fugiat non impedit ipsam deleniti
          earum dicta maiores?
        </p>
        <Button
          onClick={() => {
            setModal(false);
          }}
        >
          Close modal
        </Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
