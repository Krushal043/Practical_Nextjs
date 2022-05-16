import styles from "../../styles/eventDetails/EventContent.module.css";

export default function EventContent(props) {
  return <section className={styles.content}>{props.children}</section>;
}
