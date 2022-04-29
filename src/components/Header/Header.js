import React from "react";
import Menuicon from "../Menuicon";
const Header = ({ setcategory }) => {
  return (
    <div>
      <div className="inshorts-header" style={{
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  // flexGrow
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  padding: '0 30px',}}>
        <div className="icon">
          <Menuicon setcategory={setcategory}></Menuicon>
        </div>
        <img
          style={{ cursor: "pointer", paddingTop: "0.5rem" }}
          src="https://lh3.googleusercontent.com/IhYabo3dk0TFgk-Pu0K1jX21gX2rEgj1ytdRmhFh_UkkxyvuoFyq923m_mL5qw7QHq2PmLp9CTdHX1Me-IB3kgQHQ9RkcR6v7zNPBUb_9NN6hFhhEuiWIk5H5epcIQD4aWPoPiyKYiIqlh0xU0Lny2OAq8vBvZJ2ul05yEYDndOGduzRNzYoLi3ww0Lu8_0HeY5LS45oWV5grJx4W3dW4TY3i7W0FO0GSBRK_CAFme8p0lKx21rX1djccR-Yo0rcnouBtT7Li4rpC-5nHAj0V6NAbcKFTTxlNZ0fQtMrOX791U9HyRwi_HmHAHa52F2twdgmUvj1MQLSWMjzIRsDT2eoGjiI5Qjj1xXRzTIDaZlDb4u-3eBEKOw53PA7iiFQGYmMgFGK5gdDssQ5QjxlBqZtLj1pTtJlSFepFmW9b_UtVCbB4i0ev0qnY0WGdqjNwDerHsPAK1ScrzokZrii63bj5L4z_An8GmBp7Zzd1CorrmbOGVL4oY6i6aM71tzsohsfcZW5ugenYEXkJ1vRKUsdWLwO3n56HSNs69deq5Mu2Pv3R6iiMl2vkDeaM3Z4JBuLyrzICtO3ZWyYeyx1qCT0jm02waL5uL1UuwNHheyST_2G7RwKlUPzG81Ar8mIWoz3neyOTwvXR_fLYiLTC7aFP7G9ZG48MCWpEALrmtuOnzMkJpQQyz9HPPaek1xVlyhDWNgX14oSylXvB8Wga9DUW_SA4HZpAosvzkuut26O5AgBAOQN4YfEyrzblA=w371-h238-no?authuser=0"
          height="80%"
          alt=""
        />
        
        {/* <a
          className="github-icon"
          href="https://github.com/krishnagupta100"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "10px",
              height: "2rem",
              width: "2rem",
              padding: "3px",
              marginTop: "1.3rem",
              background: "wheat",
              cursor: "pointer",
            }}
            src="https://img.icons8.com/material-sharp/30/000000/github.png"
            alt="github-icon"
          />
        </a>
        */}
         {/* <IconButton  aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
      </div>
     
    </div>
  );
};

export default Header;
