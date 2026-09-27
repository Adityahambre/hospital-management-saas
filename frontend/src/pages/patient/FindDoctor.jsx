import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Star,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialty: "Cardiologist",
    hospital: "CityCare Hospital",
    location: "Pune, Maharashtra",
    experience: "12 years",
    rating: "4.9",
    availability: "Today",
    initials: "AS",
  },
  {
    id: 2,
    name: "Dr. Rahul Mehta",
    specialty: "Neurologist",
    hospital: "Apollo Medical Center",
    location: "Mumbai, Maharashtra",
    experience: "15 years",
    rating: "4.8",
    availability: "Tomorrow",
    initials: "RM",
  },
  {
    id: 3,
    name: "Dr. Priya Deshmukh",
    specialty: "Dermatologist",
    hospital: "CarePoint Hospital",
    location: "Pune, Maharashtra",
    experience: "9 years",
    rating: "4.9",
    availability: "Today",
    initials: "PD",
  },
  {
    id: 4,
    name: "Dr. Vikram Joshi",
    specialty: "Orthopedic",
    hospital: "CityCare Hospital",
    location: "Pune, Maharashtra",
    experience: "14 years",
    rating: "4.7",
    availability: "Tomorrow",
    initials: "VJ",
  },
];

function FindDoctor() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("All specialties");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const searchText = search.toLowerCase().trim();
      const locationText = location.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        doctor.name.toLowerCase().includes(searchText) ||
        doctor.specialty.toLowerCase().includes(searchText) ||
        doctor.hospital.toLowerCase().includes(searchText);

      const matchesLocation =
        !locationText ||
        doctor.location.toLowerCase().includes(locationText);

      const matchesSpecialty =
        specialty === "All specialties" ||
        doctor.specialty === specialty;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesSpecialty
      );
    });
  }, [search, location, specialty]);

  return (
    <div className="patient-dashboard">

      {/* Header */}
      <section className="patient-welcome">

        <div>
          <p className="dashboard-eyebrow">
            FIND CARE
          </p>

          <h2>
            Find a doctor
          </h2>

          <p>
            Search trusted doctors and find the right specialist for your care.
          </p>
        </div>

      </section>

      {/* Search */}
      <section className="dashboard-panel doctor-search-panel">

        <div className="doctor-search-grid">

          <div className="doctor-search-field">

            <Search size={18} />

            <input
              type="text"
              placeholder="Doctor, specialty or hospital"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

          </div>

          <div className="doctor-search-field">

            <MapPin size={18} />

            <input
              type="text"
              placeholder="City or location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />

          </div>

          <select
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
          >
            <option>All specialties</option>
            <option>Cardiologist</option>
            <option>Neurologist</option>
            <option>Dermatologist</option>
            <option>Orthopedic</option>
          </select>

        </div>

      </section>

      {/* Results */}
      <section className="doctor-results-section">

        <div className="doctor-results-header">

          <div>
            <p className="dashboard-eyebrow">
              AVAILABLE PROVIDERS
            </p>

            <h3>
              {filteredDoctors.length} doctors found
            </h3>
          </div>

        </div>

        <div className="doctor-results">

          {filteredDoctors.map((doctor) => (

            <div
              className="doctor-result-card"
              key={doctor.id}
            >

              <div className="doctor-result-top">

                <div className="doctor-large-avatar">
                  {doctor.initials}
                </div>

                <div className="doctor-result-info">

                  <h4>
                    {doctor.name}
                  </h4>

                  <p>
                    {doctor.specialty}
                  </p>

                  <span>
                    {doctor.experience} experience
                  </span>

                </div>

                <div className="doctor-rating">

                  <Star
                    size={14}
                    fill="currentColor"
                  />

                  {doctor.rating}

                </div>

              </div>

              <div className="doctor-result-details">

                <div>
                  <MapPin size={15} />
                  <span>
                    {doctor.hospital}
                  </span>
                </div>

                <div>
                  <CalendarDays size={15} />
                  <span>
                    Next available: {doctor.availability}
                  </span>
                </div>

              </div>

              <div className="doctor-result-actions">

                <button className="secondary-action">
                  View profile
                </button>

                <button className="primary-action">
                  Book appointment
                  <ArrowRight size={15} />
                </button>

              </div>

            </div>

          ))}

        </div>

        {filteredDoctors.length === 0 && (

          <div className="empty-doctor-results">

            <Search size={25} />

            <h3>
              No doctors found
            </h3>

            <p>
              Try changing your search or location.
            </p>

          </div>

        )}

      </section>

    </div>
  );
}

export default FindDoctor;