import React from 'react';
import "./logo.scss";

import LogoPng from "../../assets/images/0xbtc-uniswap-logo-white-100px.png";

export default function Logo(props) {
  return (
    <div className="logo">
      <img src={LogoPng} />
    </div>
  );
}
