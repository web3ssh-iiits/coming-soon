import iiitsLogo from "/iiits.png";
import web3sshLogo from "/web3ssh.png";
import Social from "./components/Social";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={web3sshLogo} className="logo" alt="web3ssh logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={iiitsLogo} className="logo react" alt="iiits logo" />
        </a>
      </div>
      <h1>web3ssh</h1>
      <h2>Web 3.0 Summer School & Hackathon</h2>
      <div className="card">
        <a href="/flyer.png">
          <button className="btn-white">Download Flyer</button>
        </a>

        <p>29th July to 4th August 2024</p>
      </div>
      <p className="read-the-docs">Website Coming Soon!</p>
      <p>
        <Social
          name={"github"}
          handle={"https://github.com/web3ssh-iiits"}
        ></Social>
        <Social
          name={"instagram"}
          handle={"https://instagram.com/web3ssh"}
        ></Social>
        <Social
          name={"twitter"}
          handle={"https://twitter.com/web3ssh"}
        ></Social>
        <Social
          name={"linkedin"}
          handle={"https://linkedin.com/company/web3ssh"}
        ></Social>
        <Social
          name={"telegram"}
          handle={"https://telegram.me/web3ssh"}
        ></Social>
      </p>
    </>
  );
}

export default App;
