import "./Home-Content.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <>
    <div className="home-content-main">
      <div className="conatiner">
        <div className="row home-content-main-row">
          <div className="col-md-12 home-content">
            <div className="row home-wrap-hero">
            
                <div className="col-md-6  home-content-text">
                <Fade bottom>
                  <p>
                    The IEEE Technology and Engineering Management Society
                    Conference – Asia Pacific 2023 (TEMSCON-ASPAC-2023) is a
                    conference focused on the challenges and practices of
                    technology and innovation management in today’s business
                    environments. Recently, emerging markets have become a main
                    attraction for their rapid economic development. Dynamic
                    growth of new ventures and start-ups in these markets has
                    brought new business competitive landscape. Existing
                    organizations have taken a new level of importance in
                    driving innovation. Nevertheless, a success of managing
                    innovation with differences in environment and organization
                    context requires careful adaptions. As such, there is a
                    strong urge to disclose both new theories and new patterns
                    in management practice so that innovation management in
                    emerging markets context can be further advanced. We invite
                    contributions from scholars, practitioners, researchers,
                    innovators, and entrepreneurs to help advance the
                    understanding and the state of practice related to
                    successful technology and engineering management.
                    Contributions may take the form of academic research or
                    practice-focused papers. The event includes an Industry
                    Forum where industry leaders speak on the directions and
                    challenges they see in industry, its use of technology and
                    how to manage it.
                  </p>  </Fade>
                </div>
            
              
                <div
                  className="col-md-5  home-content-table"
                  id="important-dates"
                ><Fade bottom>
                  <h3>Important Dates</h3>
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th>Abstraction Submission Date</th>
                          <td>31-Aug-2023</td>
                        </tr>
                        <tr>
                          <th>Full Paper Submission Date</th>
                          <td>15-Sep-2023</td>
                        </tr>
                        <tr>
                          <th>Notification of Acceptance Date</th>
                          <td>29-Sep-2023</td>
                        </tr>
                        <tr>
                          <th>Final Paper Submission Date</th>
                          <td>13-Oct-2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Link
                    to="/register"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success"
                  >
                    Register Now
                  </Link></Fade>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomeContent;
