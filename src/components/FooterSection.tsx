import { Grid } from "@mui/material";
import "./FooterSection.scss";
import { Link } from "react-router-dom";
import { Link as RSLink } from "react-scroll";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

function FooterSection() {
  return (
    <div className="Footer">
      <div className="Container">
        <Grid container direction="row" style={{ marginTop: "15%" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={12} md={2}>
            <img
              style={{ width: "70%", marginTop: "15%" }}
              className="hacknight"
              src="/hacknight.png"
              alt="Hack To Night Logo"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <h2 className="footercont">
              HACKTO-NIGHT IS AN OVERNIGHT HACKATHON ORGANIZED BY THE FOSS
              COMMUNITY OF NSBM TO BE HELD ON THE 14TH AND 15TH OF OCTOBER 2022.
              THIS HACKATHON IS ONLY OPEN FOR NSBM UNDERGRADUATES, AND WE EXPECT
              THE PARTICIPATION OF AROUND 100 COMPETITORS.
            </h2>
          </Grid>
          <Grid xs={12} md={2} style={{ marginTop: "0.5%" }}>
            <div className="footerNav">
              <span>
                <Link to="/">HOME</Link>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="IntroSection">
                  ABOUT
                </RSLink>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="PrizesSection">
                  LEADER BOARD
                </RSLink>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="SponsorSection">
                  SPONSORS
                </RSLink>
              </span>
            </div>
          </Grid>

          {/* TODO: center this*/}
          <Grid xs={12} md={4}>
            <h4 className="foot">Organized by</h4>
            <img className="FOSS" src={"/logoset.png"} alt="FOSS Logo" />
          </Grid>

          {/* TODO: center this*/}
          <Grid
            item
            xs={12}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div className="socials">
              <a href="https://www.facebook.com/foss.nsbm/">
                <FaFacebook size={18} color={"#fff"} />
              </a>
              <a href="https://twitter.com/fossnsbm">
                <FaTwitter size={18} color={"#fff"} />
              </a>
              <a href="https://www.instagram.com/fossnsbm/">
                <FaInstagram size={18} color={"#fff"} />
              </a>
              <a href="https://www.linkedin.com/company/fossnsbm">
                <FaLinkedin size={18} color={"#fff"} />
              </a>
            </div>
          </Grid>
        </Grid>

        <Grid container direction="row" className="endbr">
          <Grid item xs={12} md={6} className="endbar">
            <p className="endbrtxt">© 2022 FOSS Community of NSBM</p>
          </Grid>
          <Grid item xs={12} md={6} className="endbar">
            <p className="endbrtxttwo">
              &lt;/&gt; with
              <FaHeart className="heart" size={18} color={"#fff"} /> by the FOSS
              Community of NSBM
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default FooterSection;

