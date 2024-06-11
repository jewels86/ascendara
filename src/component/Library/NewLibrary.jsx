import React from "react";
import { Card, CardBody, Spacer } from "@nextui-org/react";
import "./library.css";

const CardComponent = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card className="py-4 px-4">
        <CardBody className="justify-between items-center">
          <h1 className="text-2-3">Welcome to your <span className="font-bold gradient-text">Ascendara Library</span></h1>
          <Spacer y={2} />
          <h2 className="font-bold">Download any game to watch their progress here, or add a game you already have installed!</h2>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
