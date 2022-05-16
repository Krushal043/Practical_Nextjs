import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EvtItem.module.css";

export default function EvtItem({ evt }) {
  return (
    <div className={styles.evt}>
      <div className={styles.event}>
        <div className={styles.img}>
          <Image
            src={evt.image ? evt.image : "/images/event-default.png"}
            alt="Image"
            width={365}
            height={204}
          />
        </div>
        <div className={styles.info}>
          <span>
            <b>
              {evt.date} at {evt.time}
            </b>
          </span>
          <h2>{evt.name}</h2>
        </div>
      </div>

      <div className={styles.eventdetails}>
        <h2>Performance :</h2>
        <p>{evt.performance}</p>
        <h2>Description :</h2>
        <p>{evt.description}</p>
        <h2>Address :</h2>
        <p>{evt.address}</p>
        <h2>Venue :</h2>
        <p>{evt.venue}</p>

        <Link href='/events'>
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </div>
  );
}
