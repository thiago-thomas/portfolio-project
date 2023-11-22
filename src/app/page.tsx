import Image from "next/image";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";

import "./styles/home.scss";
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
      <Header name="Thiago Thomas" role="Front-End Developer" imgsrc="" />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns
          instagramProfile=""
          linkedinProfile="thiago-thomas"
          githubProfile="thiago-thomas"
          twitterProfile=""
        />
        <a className="btn-primary" href="mailto:teste@gmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
