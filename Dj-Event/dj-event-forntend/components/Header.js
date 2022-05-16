import Link from "next/link";
import Image from 'next/image'
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" passHref>
        <Image className={styles.logo1}
        src="/images/logo.jpg"
        alt="DJ D@vil"
        width={50}
        height={50}
      />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul >
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
