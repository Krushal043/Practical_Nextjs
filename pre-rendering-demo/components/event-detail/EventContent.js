import styles from '../../styles/event-detail/EventContent.module.css';

export default function EventContent(props) {
  return (
    <section className={styles.content}>
      {props.children}
    </section>
  );
}
