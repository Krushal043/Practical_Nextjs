import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./ShowCase";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, keywords, description, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
        <Header />
      <div className={styles.container}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Big Devil DJ",
  description: "Find DJ Night and Events parties and Dj parties",
  keywords: "DJ,Events,emd,parties,music",
};
