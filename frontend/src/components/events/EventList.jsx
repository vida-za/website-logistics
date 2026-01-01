import React from "react";
import EventCard from "./EventCard";
import styles from "./EventList.module.scss"

export default function EventList({ events, onEventClick }) {
  return (
    <aside className={styles.eventList}>
      <h3 className={styles.title}>События</h3>

      <div className={styles.items}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            type={event.type}
            title={event.title}
            description={event.description}
            time={event.time}
            status={event.status}
            onClick={() => onEventClick?.(event)}
          />
        ))}
      </div>
    </aside>
  );
}