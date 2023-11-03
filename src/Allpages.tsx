import {
  FaLinkedin,
  FaLayerGroup,
  FaMailBulk,
  FaArrowRight,
  FaDochub,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import cvpdf from "../src/assets/CV ARIF RAHMAN HAKIM.pdf";
import dockerico from "./../src/assets/docker.png";
import reactico from "./../src/assets/react.svg";
import mongo from "./../src/assets/mongo.png";
import nodeico from "./../src/assets/node.png";
import expressico from "../src/assets/express.png";
import { BsFillPinFill } from "react-icons/bs";
import pic from "./../src/assets/porto.png";
import blogs from "./../src/assets/blogs.png";
import qurbanpng from "./../src/assets/qurbanapp.png";
import notepads from "./../src/assets/notepadsapp.png";
import potrait from "./../src/assets/potarit.jpg";

import golang from "./../src/assets/golang.png";
import postgre from "./../src/assets/postgre.png";
function Homepage() {
  return (
    <>
      <div className="judul2 d-flex flex-lg-row flex-md-row">
        <h1>
          Hi, i'am<span className="name">Arif</span> and
        </h1>
        <span className="declare">я програміст</span>
      </div>

      <p>
        Saya adalah junior developer, fresh graduate dari jurusan Teknik
        informatika, sangat pasionate tentang building apps dan solving
        technological issue.
      </p>

      <div className="container">
        <div className="row justify-content-start">
          <a
            href={cvpdf}
            download="CV Arif Rahman Hakim.pdf"
            rel="noreferrer"
            className="iconbox"
          >
            <FaLayerGroup id="icondepan" />
            CV
            <FaArrowRight id="iconback" />
          </a>
          <a href={`mailto:deerarif@protonmail.com`} className="iconbox">
            <FaMailBulk id="icondepan" />
            Email
            <FaArrowRight id="iconback" />
          </a>
        </div>
      </div>
    </>
  );
}
function Project() {
  return (
    <>
      <div className="container bg-dark p-2" id="pinned">
        <p className="p-2">
          <BsFillPinFill /> Pinned project
        </p>
        <div className="row card-wrap">
          <div className="card">
            <img src={notepads} alt="" />
            <div className="card-body">
              <h5 className="card-title">Notepad</h5>
              <p className="card-text">
                Notepads app it's my first project using mern stack, the apps
                using simple curd api, in the future i'd like to add more
                feature for this project.
              </p>
              <p className="d-flex justify-content-evenly">
                <img src={dockerico} className="cardicon" alt="" />
                <img src={mongo} className="cardicon" alt="" />
                <img src={expressico} className="cardicon" alt="" />
                <img src={reactico} className="cardicon" alt="" />
                <img src={nodeico} className="cardicon" alt="" />
              </p>
              <a href="/notepads" target="_blank" className="btn btn-primary">
                Check
              </a>
            </div>
          </div>
          <div className="card">
            <img src={qurbanpng} alt="" />
            <div className="card-body">
              <h5 className="card-title">Qurban Apps</h5>
              <p className="card-text">
                Qurban Apps it's my second project using MERN STACK, the apps
                focus on web desktop, there are new library that i learn in this
                project QR-scan whatsApp-web.api.
              </p>
              <p className="d-flex justify-content-evenly">
                <img src={dockerico} className="cardicon" alt="" />
                <img src={mongo} className="cardicon" alt="" />
                <img src={expressico} className="cardicon" alt="" />
                <img src={reactico} className="cardicon" alt="" />
                <img src={nodeico} className="cardicon" alt="" />
              </p>
              <a href="/qurb" target="_blank" className="btn btn-primary">
                Check
              </a>
            </div>
          </div>
          <div className="card">
            <img src={pic} alt="" />
            <div className="card-body">
              <h5 className="card-title">Personal Portpolio</h5>
              <p className="card-text">
                This Portpolio would be my third project, using Reactjs librarry
              </p>
              <p className="d-flex justify-content-evenly">
                <img src={reactico} className="cardicon" alt="" />
              </p>
              <a href="/" className="btn btn-primary">
                Check
              </a>
            </div>
          </div>
          <div className="card">
            <img src={blogs} alt="" />
            <div className="card-body">
              <h5 className="card-title">Personal Blogs</h5>
              <p className="card-text">
                This is my project, i'm make this to be platfrom for me to write
                some stuff, and for sharing, this stack using PostgreSQL for
                database and golang gin for backend, for frontend using Reactjs.
              </p>
              <p className="d-flex justify-content-evenly">
                <img src={golang} className="cardicon" alt="" />
                <img src={postgre} className="cardicon" alt="" />
                <img src={reactico} className="cardicon" alt="" />
              </p>
              <a href="https://deerarif.my.id" className="btn btn-primary">
                Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function About() {
  return (
    <>
      <div className="container bg-dark">
        <br />
        <span className="judulcontext">Background</span>
        <div className="aboutwrap">
          <div className="text p-2">
            <p>
              My name Arif Rahman Hakim i'am programmer and computer graduate i
              was graduate in 2023 from Universitas Muhamaadiyah Kalimatan Timur
              my past high school also from SMA 2 Kota Bangun, i have passionate
              about web development beside web development i'am also know about
              system server linux, i been using it for my daily driver since
              2020 so i familiar with shell scripting, or init system service
              like systemd or initrc my farite programming language is python
              because in every situation python always get the job done, i like
              learning new things.
            </p>
            <p>
              ALl my works can be found across al my social media github,
              dockerhub and other social media.
            </p>
            <div className="socialmedialink d-flex p-2 justify-content-evenly">
              <a href="https://github.com/deerarif" target="_blank">
                <FaGithub />
              </a>
              <a href="https://hub.docker.com/u/deerarif" target="_blank">
                <FaDochub />
              </a>
              <a href="https://www.linkedin.com/in/deerarif/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/kodebubur/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/kolamsarden" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@cinammmon" target="_blank">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="pic">
            <img src={potrait} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export { Homepage, Project, About };
