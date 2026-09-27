import { CalendarDays, Clock3, MapPin } from "lucide-react";

function Appointments() {
  return (
    <div className="patient-dashboard">

      <section className="patient-welcome">
        <div>
          <p className="dashboard-eyebrow">
            YOUR CARE
          </p>

          <h2>
            Appointments
          </h2>

          <p>
            Manage your upcoming and past healthcare appointments.
          </p>
        </div>

        <button className="primary-action">
          <CalendarDays size={16} />
          Book appointment
        </button>
      </section>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <p>UPCOMING</p>
            <h3>Your upcoming appointments</h3>
          </div>
        </div>

        <div className="appointment-main">

          <div className="doctor-avatar">
            AS
          </div>

          <div className="appointment-doctor">
            <h4>Dr. Ananya Sharma</h4>

            <p>
              Cardiologist
            </p>

            <span>
              <MapPin size={12} />
              CityCare Hospital
            </span>
          </div>

          <div className="appointment-time">
            <strong>Today</strong>
            <span>4:30 PM</span>
          </div>

        </div>

        <div className="appointment-actions">

          <button className="primary-action">
            Join appointment
          </button>

          <button className="secondary-action">
            Reschedule
          </button>

          <button className="secondary-action">
            Cancel
          </button>

        </div>

      </section>

      <section
        className="dashboard-panel"
        style={{ marginTop: "20px" }}
      >

        <div className="panel-header">
          <div>
            <p>APPOINTMENT HISTORY</p>
            <h3>Previous appointments</h3>
          </div>
        </div>

        <div className="activity-list">

          <div className="activity-item">

            <div className="activity-icon">
              <Clock3 size={18} />
            </div>

            <div>
              <strong>
                Dr. Rahul Mehta
              </strong>

              <span>
                Neurologist · Apollo Medical Center
              </span>
            </div>

            <small>
              12 Sep 2026
            </small>

          </div>

          <div className="activity-item">

            <div className="activity-icon">
              <Clock3 size={18} />
            </div>

            <div>
              <strong>
                Dr. Priya Deshmukh
              </strong>

              <span>
                Dermatologist · CarePoint Hospital
              </span>
            </div>

            <small>
              28 Aug 2026
            </small>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Appointments;