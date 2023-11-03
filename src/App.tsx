import { Homepage, Project, About } from "./Allpages";
import { ChartSkill } from "./Chart";
import { Techno } from "./cart2";
import potrait from "./../src/assets/potarit.jpg";

function App() {
  function schroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="container text-white" id="container1">
        <div className="row">
          <div className="col-3" id="profilewrap">
            <img src={potrait} className="profile" alt="" />
          </div>
          <div className="col">
            <div className="header">
              <h3>Arif Rahman Hakim</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="line1"></div>
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <ul
              className="d-flex flex-lg-column flex-md-row justify-content-between"
              id="nav"
            >
              <li>
                <a target="_blank" onClick={() => schroll("section1")}>
                  Project
                </a>
              </li>
              <li>
                <a target="_blank" onClick={() => schroll("section2")}>
                  Myskills
                </a>
              </li>
              <li>
                <a target="_blank" onClick={() => schroll("section3")}>
                  About Me
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-md-12">
            <div id="content">
              <Homepage />
              <div id="section1">
                <Project />
              </div>
              <div id="section2">
                <ChartSkill />
                <Techno />
              </div>
              <div id="section3">
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
