import {FaPencilAlt,FaTimes} from 'react-icons/fa';
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import EvtItem from "../../components/EvtItem";
import styles from "../../styles/EvtItem.module.css";
import Link from 'next/link';

export default function EventDetails({ evt }) {

  const deleteEvent = (evt) => {
    console.log("delete")
  }

  return (
    <Layout>
      <div className={styles.evtbtn}>
        <h1>Event Details</h1>
        {
          <Link href={`/events/edit/${evt.id}`} passHref>
            <div className={styles.edit}>
              <button>
                <b><FaPencilAlt/> Edit Event</b>
              </button>
            </div>
          </Link>
        }
        { <Link href="#" passHref>
          <div className={styles.delete}>
            <button onClick={deleteEvent}>
              <b><FaTimes /> Delete Event</b>
            </button>
          </div>
        </Link>}
      </div>

      <div className={styles.evt}>
        {evt.map((evt) => (
          <EvtItem key={evt.id} evt={evt}></EvtItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.events.map((evt) => ({
    params: { eventId: evt.eventId },
  }));
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { eventId } }) {
  const res = await fetch(`${API_URL}/api/events/${eventId}`);
  const events = await res.json();
  return {
    props: { evt: [events.evt[0]] },
    revalidate: 1,
  };
}
