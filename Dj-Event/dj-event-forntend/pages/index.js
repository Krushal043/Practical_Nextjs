import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import EventItem from "../components/EventItem";
import ShowCase from "../components/ShowCase";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <Layout>
      <ShowCase />
      <div className={styles.btn}>
        <h1>Upcoming Events</h1>
        {
          <Link href="/events" passHref>
            <div>
              <button>
                <b>View all Events</b>
              </button>
            </div>
          </Link>
        }
      </div>

      <div className={styles.evt}>
        {events.length === 0 && <h3>No Events</h3>}
        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt}>
          </EventItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&limit=3`);
  const events = await res.json();
  return {
    props: { events:events.events },
    revalidate: 1,
  };
}
