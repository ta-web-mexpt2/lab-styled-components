import React from "react";
import { Button, Radio } from "antd";

export default function ButtonComp({ size, messagebtn }) {
  return (
    <div>
      <>
        <Button type="primary" shape="round" size={size}>
          {messagebtn}
        </Button>
      </>
    </div>
  );
}
