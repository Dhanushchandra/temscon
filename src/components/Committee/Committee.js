import "./Committee.css";
import Fade from 'react-reveal/Fade';

const Committee = () => {
  return (
    <div className="committee" id="committee">
      <h1>Committee</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
