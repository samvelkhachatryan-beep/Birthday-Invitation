import React from "react";
import CenterContent from "./CenterContent";
import EventDetails from "./EventDetails";
import Divider from "./Divider";
import InvitationLabel from "./InvintationLabel";
import WeddingCalendar from "./WeddingCalendar";
import BackgroundWrapper from "./BackgroundWrapper";
import "./WeddingInvintation.css";

const photos = [
  { src: "/images/IMG_2627.jpg", className: "photo-1" },
  { src: "/images/IMG_2629.jpg", className: "photo-2" },
  { src: "/images/IMG_2630.jpg", className: "photo-3" },
  { src: "/images/IMG_2631.jpg", className: "photo-4" },
  { src: "/images/IMG_2632.jpg", className: "photo-5" },
  { src: "/images/IMG_2633.jpg", className: "photo-6" },
  { src: "/images/IMG_2635.jpg", className: "photo-7" },
  { src: "/images/IMG_2636.jpg", className: "photo-8" },
  { src: "/images/IMG_2637.jpg", className: "photo-9" },
];

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
        {photos.map((photo, i) => (
          <div key={i} className={`polaroid ${photo.className}`}>
            <img src={photo.src} alt={`Henry ${i + 1}`} />
          </div>
        ))}
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
