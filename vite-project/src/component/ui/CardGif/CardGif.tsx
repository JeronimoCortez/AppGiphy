import { FC } from "react";
import { Button, Card } from "react-bootstrap";

interface IGift {
  urlGift: string;
  title: string;
}

interface IPorpsCardGift {
  gift: IGift;
}

export const CardGif: FC<IPorpsCardGift> = ({ gift }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={gift.urlGift} />
      <Card.Body>
        <Card.Title>{gift.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
