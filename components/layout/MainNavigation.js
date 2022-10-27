import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tokyo Skater Hub</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Skate Events</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Skate Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
