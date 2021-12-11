import React, { FC, useState } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import ProfileProps from "./types/ProfileProps";

const App: FC = () => {
  const [profiles, setProfiles] = useState<ProfileProps[]>();
  const addCard = (profile: ProfileProps) => {
    setProfiles(
      Array.of(profile)
        .concat(profiles ? profiles : [])
        .sort((left, right) => left?.name?.localeCompare(right?.name))
    );
  };

  return (
    <div>
      <div className="header">The GitHub Cards App</div>
      <Form addCardHandler={addCard} />
      <CardList profiles={profiles} />
    </div>
  );
};

export default App;
