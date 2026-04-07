import React from "react";
import CenterContent from "./CenterContent";
import EventDetails from "./EventDetails";
import Divider from "./Divider";
import InvitationLabel from "./InvintationLabel";
import WeddingCalendar from "./WeddingCalendar";
import BackgroundWrapper from "./BackgroundWrapper";
import "./WeddingInvintation.css";

export default function WeddingInvite() {
  const fields = [
    {
      name: "guestName",
      type: "text",
      placeholder: "Անուն Ազգանուն"
    },
    {
      name: "isAttending",
      type: "radio",
      options: [
        { value: "այո", label: "Մենք կգանք" },
        { value: "ոչ", label: "Ցավոք չենք կարող գալ :(" }
      ],
    },
    {
      name: "guestCount",
      type: "text",
      placeholder: "Հյուրերի թիվ"
    }
  ];

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <BackgroundWrapper>
      <section className="center-content-wrapper">
        <CenterContent />
      </section>

      <section className="intro-section">
        <div className="invitation-intro">
          Սիրով հրավիրում ենք Ձեզ մասնակից լինել Հենրիի առաջին ծննդյան տոնին։
        </div>
        <WeddingCalendar />
      </section>

      <Divider height="2px" width="150px" />

      <section className="events-section">
        <EventDetails
          subtitle="ԾՆՆԴՅԱՆ ՏՈՆ"
          time="17:30"
          title="Dvin Jrvej"
          buttonLabel="Ինչպես հասնել"
          onButtonClick={() => handleRedirect("https://yandex.com/maps/-/CPfoZ-8D")}
        />
      </section>

      <section className="confirmation-section">
        <div className="invitation-confirmation">
          <h2>Խնդրում ենք հաստատել Ձեր ներկայությունը</h2>
          <p>Սպասում ենք Ձեր պատասխանին մինչև 25.04.2026</p>
        </div>
        <InvitationLabel fields={fields} submitText="Ուղարկել" />
      </section>
    </BackgroundWrapper>
  );
}
