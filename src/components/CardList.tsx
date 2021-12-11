import { FC } from "react";
import CardListProps from "../types/CardListProps";
import Card from "./Card";

const CardList: FC<CardListProps> = (props) => {
  return (
    <div>
      {props.profiles?.map((profileProps) => (
        <Card key={profileProps.id} {...profileProps} />
      ))}
    </div>
  );
};

export default CardList;
