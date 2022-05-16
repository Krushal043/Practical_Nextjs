import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          alt="Image"
          width={210}
          height={130}
        />
      </div>

      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h2>{evt.name}</h2>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.eventId}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
