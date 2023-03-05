import "./Home-CFP.css";
import SImg from "../../assets/images/idea.svg"

const HomeCFP = () => {
  return (
    <div className="cfp-main" id="callforpaper">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12">
            <div className="row cfg-main-wrapper">
            <div className="col-md-7 cfp-main-left">
              <h2>Call For Papers</h2>
              <span className="cfp-main-text">
                <br></br>
                Dear Researcher,<br>
                </br>
                <br></br>
              On behalf of IEEE TEMSCON 2023 organising
                committee, I take responsibility to invite you to professionally
                enriching flagship technical conference of ASIA-PACIFIC region,
                ASPAC TEMSCON 2023 to be organised on December 14th to 16th
                2023. The event will cover multiple technical tracks covering
                multiple domains. Eminent international speakers from various
                countries will deliver talks and conduct various workshops and
                tutorials. The conference will provide a platform for the
                exchange of opinions among the researchers and with the experts
                as the prospective researcher will present their own work in
                form of oral presentation, apart from taking advantage of talks
                from number of international experts.<br></br> 
                 <br></br> Tutorial proposals are
                invited on topics pertaining to the theme of the conference. The
                proposal must not contain sales presentation for the presenter
                or presenter’s company and shall not contain proprietary data.<br></br>
                <br></br>
                You are requested to upload your paper to paper submission
                website. A Call-for-paper is also enclosed for your perusal. I
                assure you of an international technically enriched and vibrant
                experience at ASPAC TEMSCON 2023, and I am sure your experience
                at this conference will be rewarding and memorable one.
                <br></br>
                <br></br>
                 Name<br></br>
                <br></br>
                Designation
              </span>
            </div>
            <div className="col-md-5 cfp-main-right">
                <img src={SImg} className="shake"  alt="Science"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default HomeCFP;
