import Image from "next/image";

import styles from "../../styles/homepage/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/Kushal.png"
          alt="An image showing Kushal"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kushal</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
