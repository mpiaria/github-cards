import axios from "axios";
import { FC, FormEvent, useState } from "react";
import AddCardProps from "../types/AddCardProps";

const Form: FC<AddCardProps> = (props) => {
  const [userName, setUserName] = useState<string>();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.addCardHandler({
      avatar_url: resp.data.avatar_url,
      company: resp.data.company,
      name: resp.data.name,
      id: resp.data.id,
    });
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName ? userName : ""}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  );
};

export default Form;
