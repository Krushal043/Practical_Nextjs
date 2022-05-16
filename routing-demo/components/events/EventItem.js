import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Button from "../ui/button";
import styles from "../../styles/events/EventItem.module.css";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const handleReadableDate = new Date(date).toLocaleString("ev-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressFormate = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt="{title}" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <DateIcon />
          <time>{handleReadableDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{addressFormate}</address>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Expoler Event</span>
            <span className={styles.icon}><ArrowRightIcon/></span>
          </Button>
        </div>
      </div>
    </li>
  );
}
