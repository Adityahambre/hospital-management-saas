import {
  CalendarDays,
  Clock3,
  FileText,
  CreditCard,
  Bell,
  ShieldCheck,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: CalendarDays,
      title: "Appointments",
      description:
        "Discover available doctors and book appointments without unnecessary calls.",
    },
    {
      icon: Clock3,
      title: "Live Queue",
      description:
        "Know your queue position and estimated waiting time before you arrive.",
    },
    {
      icon: FileText,
      title: "Health Records",
      description:
        "Keep your prescriptions, consultations and important health information organized.",
    },
    {
      icon: CreditCard,
      title: "Healthcare Payments",
      description:
        "Manage bills and payments through one connected healthcare experience.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Receive appointment reminders and important healthcare updates.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Your healthcare information is handled with security and privacy in mind.",
    },
  ];

  return (
    <main className="services-page">
      <section className="services-intro">
        <span className="directory-label">ONE CONNECTED PLATFORM</span>

        <h1>Everything you need to manage your healthcare.</h1>

        <p>
          From discovering a doctor to following your treatment journey, Carely
          brings the healthcare experience together.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <Icon size={22} />
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <span className="service-link">
                Learn more →
              </span>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Services;