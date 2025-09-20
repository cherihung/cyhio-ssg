import GithubLogo from "/images/github.svg";
import LinkedInLogo from "/images/linkedin.svg";
import MediumLogo from "/images/medium.svg";
import ThemeToggle from "./ThemeToggle";

export default function TopBar() {
  return (
    <div className='topBar'>
      <div className='logoGroup'>
        <div className='siteMark'>
          <strong>cyh.io</strong>
        </div>
        <a
          href='https://github.com/cherihung'
          target='_blank'
          rel='noopener noreferrer'
          title='Github'
        >
          <img src={GithubLogo} width='24' />
        </a>
        <a
          href='https://linkedin.com/in/cyhung'
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
        >
          <img src={LinkedInLogo} width='24' />
        </a>
        <a
          href='https://medium.com/@cyhung'
          target='_blank'
          rel='noopener noreferrer'
          title='Medium'
        >
          <img src={MediumLogo} width='24' />
        </a>
      </div>
      <div className='choiceGroup'>
        <ThemeToggle />
      </div>
    </div>
  );
}
