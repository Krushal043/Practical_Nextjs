import EventItem from "./EventItem";
import styles from "../../styles/events/EventList.module.css";

export default function EventList(props) {
  const { items } = props;
  return (
    <div className={styles.list}>
      <ul>
        {items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            address={event.address}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    </div>
  );
}
