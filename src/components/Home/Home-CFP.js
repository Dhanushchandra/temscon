import "./Home-CFP.css";
import SImg from "../../assets/images/idea.svg";
import Fade from "react-reveal/Fade";

const HomeCFP = () => {
  return (
    <div className="cfp-main" id="callforpaper">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12">
            <div className="row cfg-main-wrapper">
              <div className="col-md-7 cfp-main-left">
                {" "}
                <Fade left>
                  <h2>Call For Papers</h2>

                  <span className="cfp-main-text">
                    <Fade bottom>
                      <br></br>
                      Dear Researcher,<br></br>
                      <br></br>
                      <p>
                        On behalf of IEEE TEMSCON 2023 organising committee, we
                        invite you to professionally enriching flagship
                        technical conference of ASIA-PACIFIC region, TEMSCON
                        ASPAC 2023 to be organised on December 14th to 16th
                        2023. The event will cover multiple technical tracks
                        covering multiple domains. Eminent international
                        speakers from various countries will deliver talks and
                        conduct various workshops and tutorials. The conference
                        will provide a platform for the exchange of opinions
                        among the researchers and with the experts as the
                        prospective researcher will present their own work in
                        form of oral presentation, apart from taking advantage
                        of talks from number of international experts.<br></br>
                        <br></br>
                        Rush your conference paper to
                        <span
                          style={{
                            color: "yellow",
                            fontStyle: "italic",
                          }}
                        >
                          &nbsp;
                          <a
                            href="https://cmt3.research.microsoft.com/TEMSCONASPAC2023"
                            style={{
                              color: "yellow",
                            }}
                            target="_blank"
                          >
                            {" "}
                            https://cmt3.research.microsoft.com/TEMSCONASPAC2023
                          </a>
                        </span>
                      </p>
                    </Fade>
                  </span>
                </Fade>
              </div>
              <div className="col-md-5 cfp-main-right">
                <img src={SImg} className="shake" alt="Science" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCFP;
