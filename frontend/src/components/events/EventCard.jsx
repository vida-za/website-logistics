import React from "react";
import styles from "./EventCard.module.scss";

/**
 * EventCard — карточка события
 *
 * props:
 *  - type: string ("delay" | "delivery" | "incident")
 *  - title: string
 *  - description?: string
 *  - time: string
 *  - status: string
 *  - onClick?: () => void
 */
const EventCard = ({
  type,
  title,
  description,
  time,
  status,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={styles.time}>{time}</span>
      </div>

      {description && (
        <div className={styles.description}>{description}</div>
      )}

      <div className={styles.footer}>
        <span className={styles.type}>{getTypeLabel(type)}</span>
        <span className={styles.status}>{status}</span>
      </div>
    </div>
  );
};

function getTypeLabel(type) {
  switch (type) {
    case "delay":
      return "⚠ Задержка";
    case "delivery":
      return "🚚 Доставка";
    case "incident":
      return "🛠 Инцидент";
    default:
      return "📌 Событие";
  }
}

export default EventCard;