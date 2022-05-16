import { useRef, useContext } from "react";
import NotificationContext from "../../store/NotificationContext";

import styles from "../../styles/input/NewsletterRegistration.module.css";

export default function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: "Sign Up...!",
      message: "Plz Registering .....!!!",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "something went worng");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success...!",
          message: "Successfully Registering .....!!!",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "error...!",
          message: error.message || "Something went worng .....!!!",
          status: "error",
        });
      });
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}
