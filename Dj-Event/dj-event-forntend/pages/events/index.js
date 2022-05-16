import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import EventItem from "../../components/EventItem";
import styles from "../../styles/Layout.module.css";

export default function EventsPage({ events }) {
  return (
    <div>
      <Layout>
        <h1>Events</h1>
        <div className={styles.evt}>
          {events.length === 0 && <h3>No Events</h3>}
          {events.events.map((evt) => (
            <EventItem key={evt.id} evt={evt} />
          ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
