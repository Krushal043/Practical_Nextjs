import styles from "../../styles/eventDetails/EventSummary.module.css";

export default function EventSummary(props) {
  const { title } = props;

  return (
    <section className={styles.summary}>
      <h2>{title}</h2>
    </section>
  );
}
