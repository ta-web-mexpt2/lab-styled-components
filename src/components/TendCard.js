import React from "react";
import { Card } from "antd";

export default function TendCard({ p1, p2, p3 }) {
  return (
    <div>
      <Card style={{ width: 600 }}>
        <div id="content-text-div-two">
          <p>{p1}</p>
          <p id="p-bold">{p2}</p>
          <p>{p3}</p>
        </div>
      </Card>
    </div>
  );
}
