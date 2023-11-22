import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss";

interface SocialBtnsHeader {
  instagramProfile: string;
  linkedinProfile: string;
  githubProfile: string;
  twitterProfile: string;
}

export function SocialBtns({
  instagramProfile,
  linkedinProfile,
  githubProfile,
  twitterProfile,
}: SocialBtnsHeader) {
  return (
    <div className="social">
      <a href={"https://www.instagram.com/" + instagramProfile} target="_blank">
        <InstaIcon />
      </a>
      <a
        href={"https://www.linkedin.com/in/" + linkedinProfile}
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a href={"https://www.github.com/" + githubProfile} target="_blank">
        <GitHubIcon />
      </a>
      <a href={"https://www.twitter.com/" + twitterProfile} target="_blank">
        <TwitterIcon />
      </a>
    </div>
  );
}
