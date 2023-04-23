import "./Guidelines-Hero.css";
import Fade from "react-reveal/Fade";

const GuidelinesHero = () => {
  return (
    <>
      <div className="guidelines-hero" id="authors-guidelines">
        <div className="container">
          <div className="row guidelines-hero-row">
            <h1>Guidelines for Authors</h1>

            <Fade bottom>
              <div className="col-md-12 guidelines-hero-1 guide-purple">
                <p>
                  <br></br>
                  We invite engineering leaders, researchers, educators,
                  innovators, entrepreneurs, and students to submit their
                  original manuscripts TEMSCON-ASPAC 2023. Contributions may
                  take the form of academic research or practice-focused papers,
                  to help advance the understanding and the state of practice
                  related to successful technology and engineering management.
                  <br></br>
                  <br></br> Acceptance of papers for presentation at
                  TEMSCON-ASPAC 2023 will be based on a descriptive paper
                  review. Accepted and presented papers will be published in the
                  conference proceedings and submitted to IEEE Xplore®.
                </p>
              </div>
            </Fade>

            {/* ---------------------------- */}

            <Fade bottom>
              <div className="col-md-12 guidelines-hero-2 guide-white">
                <p>
                  The author must follow the following guidelines for the paper
                  acceptance. <br></br>
                  <br></br>
                  <b>Paper submission guidelines</b>
                </p>

                <ul>
                  <li>All papers are required to be in English language.</li>
                  <li>
                    Papers submitted to ASPAC TEMSCON 2023 shall contain
                    original work by the author(s) that have not been published
                    or submitted for publication. The IEEE anti-plagiarism
                    policy is applicable to all submissions.
                  </li>
                  <li>
                    The authors are required to use IEEE Standard manuscript
                    template for the conference. The manuscript template can be
                    downloaded from IEEE conference template page.{" "}
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href="https://www.ieee.org/conferences/publishing/templates.html"
                    >
                      click here
                    </a>
                  </li>
                  <li>
                    Authors are required to prepare and submit the papers in
                    IEEE standard A4 size two-column conference format. The
                    paper must be a maximum of 8 pages in length including
                    diagrams, pictures and references.
                  </li>
                  <li>
                    Choose one topic related to the paper. This information will
                    be used by committee for assigning appropriate reviewers.
                  </li>
                  <li>
                    The introduction of paper shall clearly indicate the unique
                    aspect of submission
                  </li>
                  <li>The papers must be uploaded in PDF format.</li>
                  <li>
                    Changes can be made even after submission till the deadline.
                    No submissions will be accepted after the submission
                    deadline.
                  </li>
                </ul>
              </div>
            </Fade>

            {/* --------------------------------------- */}

            <Fade bottom>
              <div className="col-md-12 guidelines-hero-3 guide-purple">
                <p>
                  <b>Review and acceptance</b>
                </p>
                <ul>
                  <li>All papers will be peer reviewed.</li>
                  <li>English shall be official language.</li>
                  <li>
                    Paper must not exceed <code>8 pages</code>. Failing to do so
                    may result in rejection.
                  </li>
                  <li>
                    Acceptance is based on condition that at least one author
                    will register and present the paper at conference. IEEE
                    reserves rights to exclude a paper from distribution after
                    the conference if the paper is not presented at the
                    conference.
                  </li>
                </ul>
              </div>
            </Fade>

            {/* --------------------------------------- */}

            <Fade bottom>
              <div className="col-md-12 guidelines-hero-4 guide-white">
                <p>
                  <b>Presentation guidelines</b>
                </p>
                <ul>
                  <li>
                    The presentation should be in <code>English</code>.
                  </li>
                  <li>
                    Presentations should be made in ASPAC TEMSCON 2023 template.
                    <a href="download-presentation-template"> Click here </a> to
                    download template.
                  </li>
                  <li>Presentation discussion should be in English.</li>
                  <li>Presentation should not exceed 10 to 12 minutes.</li>
                  <li>3 to 5 minutes will be given for Q&A.</li>
                </ul>
              </div>
            </Fade>

            {/* --------------------------------------- */}

            <Fade bottom>
              <div className="col-md-12 guidelines-hero-5 guide-purple">
                <p>
                  <b>Important note to authors</b>
                </p>
                <ul>
                  <li>
                    In case of multiple authors for an accepted paper, at least
                    one author is expected to attend the meeting.
                  </li>
                  <li>
                    Registration fee must be paid within the due deadline. Late
                    payment may result in the paper not being included in the
                    conference program and any other publications that are
                    produced for distribution at conference.
                  </li>
                  <li>
                    Each paid fee covers 2 presentations and an additional
                    registration fee applies for any extra presentation.
                  </li>
                  <li>
                    Participation will be confirmed upon receipt of the online
                    registration form and fee payment.
                  </li>
                  <li>
                    Per ASPAC TEMSCON no show policy, the program chair reserves
                    the right to exclude any unpresented papers from proceeding
                    to IEEE Xplore©.
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidelinesHero;
