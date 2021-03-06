import { Fragment, useContext } from "react";
import Notification from "../ui/Notification";
import MainHeader from "./MainHeader";
import NotificationContext from "../../store/NotificationContext";

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}
