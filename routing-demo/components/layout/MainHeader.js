import styles from "../../styles/layout/MainHeader.module.css";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><a>Next Event</a></Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events"><a>All Event</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
