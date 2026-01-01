import React from "react";
import EventList from "../../components/events/EventList";
import "./HomePage.scss";

export default function HomePage() {
  const events = [
    {
      id: 1,
      type: "delay",
      title: "Задержка доставки",
      description: "Заказ #12345, склад СПБ",
      time: "14:32",
      status: "В обработке",
    },
    {
      id: 2,
      type: "delivery",
      title: "Доставка завершена",
      description: "Заказ #12346, Москва",
      time: "13:10",
      status: "Завершено",
    },
    {
      id: 3,
      type: "incident",
      title: "Инцидент на маршруте",
      description: "Фура №21, М-11",
      time: "12:05",
      status: "Требует внимания",
    },
  ];

  return (
    <div className="home-page">
      <main className="home-page__content">
        <h1>Главная страница</h1>
        <p>Здесь позже будет карта / основное содержимое</p>
      </main>

      <EventList
        events={events}
        onEventClick={(event) => console.log("event click", event)}
      />
    </div>
  );
}