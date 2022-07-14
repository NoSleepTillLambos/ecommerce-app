import React from "react";
import "../css/NavBar.css";
import { ImHome } from "react-icons/im";
import { RiProductHuntLine } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";
import Button from "@mui/material/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar() {
  return (
    <>
      <div className="nav-div">
        <Button
          variant="outlined"
          startIcon={<ImHome />}
          style={{ margin: "10px", marginLeft: "1.8%" }}
        >
          Home
        </Button>
        <Button variant="outlined" endIcon={<RiProductHuntLine />}>
          Products
        </Button>
        <Button
          variant="outlined"
          endIcon={<MdFeedback />}
          style={{ marginLeft: "10px" }}
        >
          Feedback
        </Button>
        <Button
          variant="outlined"
          endIcon={<AiOutlineShoppingCart />}
          style={{ float: "right", margin: "10px", marginRight: "1.8%" }}
          size="medium"
        ></Button>
      </div>
    </>
  );
}

export default NavBar;
