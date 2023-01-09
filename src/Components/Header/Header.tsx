import React from "react";
import "./Header.scss";
import headerLogo from "../../assets/headerlogo.png";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { headerValuesExport } from "../../Backend/Header";

const Header = (): JSX.Element => {
  const [list, setList]: any = useState();

  useEffect(() => {
    let head = headerValuesExport();
    setList(head);
  });

  return (
    <>
      <div className="header">
        <div className="firstBlock">
          <img src={headerLogo} alt="text" className="Manages" />
        </div>
        <div className="secondBlock">
          <div className="ManageInputDiv">
            <input
              placeholder="Search Everything from Here"
              type="text"
              className="ManageInput"
            />
            <FaSearch className="iconColor" />
          </div>
        </div>
        <div className="thirdBlock">
          {list?.map((val: string) => {
            return (
              <ul>
                <li>{val}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="fourthBlock">
        <div className="wrapper">
        <div className="ManageInputDiv">
          <input
            placeholder="Search Everything from Here"
            type="text"
            className="ManageInput"
          />
          <FaSearch className="iconColor" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;
