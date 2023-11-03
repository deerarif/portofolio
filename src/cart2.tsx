import ProgressBar from "react-bootstrap/ProgressBar";
import dockerico from "./../src/assets/docker.png";
import reactico from "./../src/assets/react.svg";
import linux from "./../src/assets/linux.png";
import vbox from "./../src/assets/virtualbox.png";
import botsrtapico from "./../src/assets/bootstrap.png";
import flaskico from "./../src/assets/flask.png";
import nodeico from "./../src/assets/node.png";
import expressico from "../src/assets/express.png";
function Techno() {
  return (
    <>
      <div className="container bg-dark">
        <span className="judulcontext">Other skill</span>
        <p className="p-2">
          I'am also know other technologies like libarary app, and other things
          i also listed with bellow:
        </p>

        <div className="skillwrap p-3 bg-dark">
          <img src={dockerico} alt="" className="baricon" />
          <span>Docker</span>
          <ProgressBar animated now={53} />
          <img src={vbox} alt="" className="baricon" />
          <span>Virtualbox</span>
          <ProgressBar animated variant="info" now={70} />
          <img src={linux} alt="" className="baricon" />
          <span>Linux</span>
          <ProgressBar animated variant="warning" now={80} />
          <img src={flaskico} alt="" className="baricon" />
          <span>Python Flask</span>
          <ProgressBar animated variant="secondary" now={40} />
          <img src={nodeico} alt="" className="baricon" />
          <span>Nodejs</span>
          <ProgressBar animated variant="success" now={50} />
          <img src={expressico} alt="" className="baricon" />
          <span>Expressjs</span>
          <ProgressBar animated variant="dark" now={76} />
          <img src={reactico} alt="" className="baricon" />
          <span>Reactjs</span>
          <ProgressBar animated now={55} />
          <img src={botsrtapico} alt="" className="baricon" />
          <span>CSS Botstrap</span>
          <ProgressBar animated variant="danger" now={60} />
        </div>
      </div>
    </>
  );
}

export { Techno };
