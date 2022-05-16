import Link from 'next/link'
import styles from '../styles/Footer.module.css';
 
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>CopyRight &copy; D@vil Dj</p>
            <a><Link href='/about'>About D@vil DJ</Link></a>
        </footer>
    )
}
