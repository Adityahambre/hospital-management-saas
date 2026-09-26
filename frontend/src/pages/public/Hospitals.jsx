import {
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Hospitals() {
  const hospitals = [
    {
      name: "CityCare Hospital",
      location: "Pune, Maharashtra",
      departments: "32 departments",
      type: "Multi-specialty",
    },
    {
      name: "CarePoint Medical Center",
      location: "Mumbai, Maharashtra",
      departments: "24 departments",
      type: "Multi-specialty",
    },
    {
      name: "Apollo Medical Center",
      location: "Bengaluru, Karnataka",
      departments: "40 departments",
      type: "Advanced care",
    },
  ];

  return (
    <main className="directory-page">
      <section className="directory-hero hospital-hero">
        <span className="directory-label">HOSPITAL NETWORK</span>

        <h1>Healthcare facilities, all in one place.</h1>

        <p>
          Discover hospitals, departments, specialists and healthcare services
          around you.
        </p>

        <div className="hospital-search">
          <MapPin size={20} />
          <input placeholder="Search hospitals or locations" />

          <button>
            Search
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="doctor-results">
        <div className="results-heading">
          <div>
            <span>HEALTHCARE NETWORK</span>
            <h2>Hospitals and medical centers</h2>
          </div>
        </div>

        <div className="doctor-grid">
          {hospitals.map((hospital) => (
            <article className="hospital-card" key={hospital.name}>
              <div className="hospital-image">
                <Building2 size={36} />
              </div>

              <div className="hospital-content">
                <div className="hospital-type">
                  {hospital.type}
                </div>

                <h3>{hospital.name}</h3>

                <p>
                  <MapPin size={15} />
                  {hospital.location}
                </p>

                <div className="hospital-bottom">
                  <span>
                    <ShieldCheck size={15} />
                    {hospital.departments}
                  </span>

                  <button>
                    Explore
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Hospitals;