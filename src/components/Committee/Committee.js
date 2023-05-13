import "./Committee.css";
import Fade from "react-reveal/Fade";

const Committee = () => {
  return (
    <div className="committee" id="committee">
      <h1>Committee</h1>
      <Fade bottom>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="table-responsive">
              <table className="table committee-table">
                <thead>
                    <Fade bottom>
                  <tr>
                    
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Committee</th>
                    <th>Designation</th>
                    <th>Email Id</th>
                    <th>Phone Number</th>
                  </tr>
                  </Fade>
                </thead>
                <tbody>
                  <tr>
                  <Fade bottom>
                   
                    <td>Yatheendranath</td>
                    <td>Tarikere</td>
                    <td>Conference Organizing Committee</td>
                    <td>Conference Co-Chair</td>
                    <td>yathitj@yahoo.com</td>
                    <td>+91 98440 74381</td>
                    </Fade>
                  </tr>
                  <tr>
                  <Fade bottom>
                 
                    <td>Arun</td>
                    <td>Tanksali</td>
                    <td>Conference Organizing Committee</td>
                    <td>Conference Co-Chair</td>
                    <td>arun@tanksali.com</td>
                    <td></td>
                    </Fade>
                  </tr>
                  <tr>
                  <Fade bottom>
              
                    <td>Devanathan</td>
                    <td>M</td>
                    <td>Technical Program Committee</td>
                    <td>TPC Chair</td>
                    <td>devanathan.m@ieee.org</td>
                    <td></td>
                    </Fade>
                  </tr>
                  <tr>
                  <Fade bottom>
                 
                    <td>Pushpamala</td>
                    <td>S</td>
                    <td>Finance Committee</td>
                    <td>Chair</td>
                    <td>pushpasiddaraju@ieee.org</td>
                    <td></td>
                    </Fade>
                  </tr>
                  <tr>
                  <Fade bottom>
                
                    <td>Javed</td>
                    <td>Tarikere</td>
                    <td>GS</td>
                    <td>Advisory Committee</td>
                    <td></td>
                    <td></td>
                    </Fade>
                  </tr>
                  <tr>
                  <Fade bottom>
                
                    <td>Sudeendra</td>
                    <td>Koushik</td>
                    <td>Advisory Committee</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </Fade>
                  </tr>
                  <tr>
                  <Fade bottom>
                
                    <td>Ravikiran</td>
                    <td>Annagere</td>
                    <td>Advisory Committee</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </Fade>
                  </tr>
                  <tr>
                  <Fade bottom>
                  
                    <td>Andy</td>
                    <td>Chen</td>
                    <td>Advisory Committee</td> 
                    <td></td>
                    <td></td>
                    <td></td>
                     </Fade>
                  </tr>
                
                </tbody>
              </table>
            </div> */}
              <div className="table-responsive">
                <table className="table committee-table">
                  <tbody>
                    <tr className="table-head-committee">
                      <td>Conference Organizing Committee</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Fade bottom>
                        <td>
                          Yatheendranath Tarikere<br></br>
                          Conference Organizing Committee<br></br>
                          Conference Co-Chair<br></br>
                          yathitj@yahoo.com<br></br>
                          +91 98440 74381
                        </td>
                        <td>
                          Arun Tanksali<br></br>
                          Conference Organizing Committee<br></br>
                          Conference Co-Chair<br></br>
                          arun@tanksali.com
                        </td>
                        <td></td>
                        <td></td>
                      </Fade>
                    </tr>
                    <tr className="table-head-committee">
                      <td>Technical Program Committee</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Fade bottom>
                        <td>
                          Devanathan<br></br>M Technical Program Committee
                          <br></br>
                          TPC Chair<br></br>
                          devanathan.m@ieee.org
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </Fade>
                    </tr>
                    <tr className="table-head-committee">
                      <td>Finance Committee</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Fade bottom>
                        <td>
                          Pushpamala S<br></br>
                          Finance Committee<br></br>
                          Chair<br></br>
                          pushpasiddaraju@ieee.org<br></br>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </Fade>
                    </tr>
                    <tr className="table-head-committee">
                      <td>Advisory Committee</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Fade bottom>
                        <td>
                          Javed GS<br></br>
                          Advisory Committee<br></br>
                        </td>
                        <td>
                          Sudeendra Koushik<br></br>
                          Advisory Committee
                        </td>
                        <td>
                          Ravikiran Annagere<br></br>
                          Advisory Committee
                        </td>
                        <td>
                          Andy Chen<br></br>
                          Advisory Committee
                        </td>
                      </Fade>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Committee;
