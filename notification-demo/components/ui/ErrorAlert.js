import styles from "../../styles/ui/ErrorAlert.module.css";

export default function ErrorAlert(props) {
  return <div className={styles.alert}>{props.children}</div>;
}
