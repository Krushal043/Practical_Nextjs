import styles from "../../styles/ui/ErrorAlert.module.css";

function ErrorAlert(props) {
  return <div className={styles.alert}>{props.children}</div>;
}

export default ErrorAlert;
