import { Search, MapPin, Star, ArrowRight } from "lucide-react";

function FindDoctors() {
  const doctors = [
    {
      name: "Dr. Ananya Sharma",
      specialty: "Cardiologist",
      hospital: "CityCare Hospital",
      experience: "12 years",
      rating: "4.9",
    },
    {
      name: "Dr. Rahul Mehta",
      specialty: "Neurologist",
      hospital: "Apollo Medical Center",
      experience: "15 years",
      rating: "4.8",
    },
    {
      name: "Dr. Priya Deshmukh",
      specialty: "Dermatologist",
      hospital: "CarePoint Hospital",
      experience: "9 years",
      rating: "4.9",
    },
  ];

  return (
    <main className="directory-page">
      <section className="directory-hero">
        <span className="directory-label">HEALTHCARE DISCOVERY</span>

        <h1>Find the right doctor for you.</h1>

        <p>
          Search verified healthcare professionals by specialty, hospital,
          location, and availability.
        </p>

        <div className="doctor-search">
          <div>
            <Search size={20} />
            <input placeholder="Doctor, specialty or condition" />
          </div>

          <div>
            <MapPin size={20} />
            <input placeholder="City or location" />
          </div>

          <button>
            Search
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="doctor-results">
        <div className="results-heading">
          <div>
            <span>AVAILABLE PROFESSIONALS</span>
            <h2>Doctors you can trust</h2>
          </div>

          <span>3 doctors available</span>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-card-top">
                <div className="large-doctor-avatar">
                  {doctor.name
                    .split(" ")
                    .slice(1, 3)
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div className="verified">
                  ✓ Verified
                </div>
              </div>

              <h3>{doctor.name}</h3>

              <p className="specialty">{doctor.specialty}</p>

              <p className="hospital">{doctor.hospital}</p>

              <div className="doctor-meta">
                <span>{doctor.experience}</span>

                <span className="rating">
                  <Star size={14} fill="currentColor" />
                  {doctor.rating}
                </span>
              </div>

              <button className="doctor-button">
                View profile
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FindDoctors;