// import GithubLogo from "../images/github.svg";
// import LinkedInLogo from "../images/linkedin.svg";
// import MediumLogo from "../images/medium.svg";
// import TwitterLogo from "../images/twitter.svg";
import ThemeToggle from "./ThemeToggle";

export default function TopBar() {
  return (
    <div className='topBar'>
      {/* <div className='logoGroup'>
        <div className='siteMark'>
          <strong>cyh.io</strong>
        </div>
        <a
          href='https://github.com/cherihung'
          target='_blank'
          rel='noopener noreferrer'
          title='Github'
        >
          <GithubLogo width='24' />
        </a>
        <a
          href='https://twitter.com/cyhung'
          target='_blank'
          rel='noopener noreferrer'
          title='Twitter'
        >
          <TwitterLogo width='24' />
        </a>
        <a
          href='https://linkedin.com/in/cyhung'
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
        >
          <LinkedInLogo width='24' />
        </a>
        <a
          href='https://medium.com/@cyhung'
          target='_blank'
          rel='noopener noreferrer'
          title='Medium'
        >
          <MediumLogo width='24' />
        </a>
      </div> */}
      <div className='choiceGroup'>
        <ThemeToggle />
      </div>
    </div>
  );
}
