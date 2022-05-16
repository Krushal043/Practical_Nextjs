import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function HomePage() {
  const featuresHandle = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuresHandle} />
    </div>
  );
}
