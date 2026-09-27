import {
  CalendarDays,
  FileText,
  Pill,
} from "lucide-react";

function PatientDashboard() {
  return (
    <div className="patient-dashboard">

      <section className="patient-welcome">

        <div>
          <p className="dashboard-eyebrow">
            YOUR HEALTH, SIMPLIFIED
          </p>

          <h2>
            Good morning, Aditya.
          </h2>

          <p>
            Here's what's happening with your healthcare today.
          </p>
        </div>

        <div className="health-status">
          <span className="status-dot"></span>
          All systems normal
        </div>

      </section>

      <section className="patient-stats">

        <div className="patient-stat-card">
          <span>Upcoming appointments</span>
          <strong>2</strong>
          <small>Next: Today at 4:30 PM</small>
        </div>

        <div className="patient-stat-card">
          <span>Active prescriptions</span>
          <strong>3</strong>
          <small>1 refill due this week</small>
        </div>

        <div className="patient-stat-card">
          <span>Health records</span>
          <strong>12</strong>
          <small>Last updated 2 days ago</small>
        </div>

        <div className="patient-stat-card">
          <span>Current queue</span>
          <strong>C-24</strong>
          <small>4 patients ahead</small>
        </div>

      </section>

      <section className="patient-dashboard-grid">

        <div className="dashboard-panel appointment-panel">

          <div className="panel-header">
            <div>
              <p>UPCOMING</p>
              <h3>Next appointment</h3>
            </div>

            <button>View all</button>
          </div>

          <div className="appointment-main">

            <div className="doctor-avatar">
              AS
            </div>

            <div className="appointment-doctor">
              <h4>Dr. Ananya Sharma</h4>
              <p>Cardiologist</p>
              <span>CityCare Hospital</span>
            </div>

            <div className="appointment-time">
              <strong>4:30 PM</strong>
              <span>Today</span>
            </div>

          </div>

          <div className="appointment-actions">
            <button className="primary-action">
              Join appointment
            </button>

            <button className="secondary-action">
              View details
            </button>
          </div>

        </div>

        <div className="dashboard-panel queue-panel">

          <div className="panel-header">
            <div>
              <p>LIVE QUEUE</p>
              <h3>Your queue status</h3>
            </div>

            <span className="live-badge">
              LIVE
            </span>
          </div>

          <div className="queue-number">
            <span>Your token</span>
            <strong>C-24</strong>
          </div>

          <div className="queue-progress">
            <div className="queue-progress-top">
              <span>4 patients ahead</span>
              <strong>~30 min</strong>
            </div>

            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
          </div>

          <p className="queue-note">
            We'll notify you when your turn is approaching.
          </p>

        </div>

      </section>

      <section className="dashboard-panel activity-panel">

        <div className="panel-header">

          <div>
            <p>RECENT ACTIVITY</p>
            <h3>Healthcare activity</h3>
          </div>

          <button>View history</button>

        </div>

        <div className="activity-list">

          <div className="activity-item">
            <div className="activity-icon">
              <CalendarDays size={18} />
            </div>

            <div>
              <strong>Appointment confirmed</strong>
              <span>Dr. Ananya Sharma · Today at 4:30 PM</span>
            </div>

            <small>Today</small>
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <FileText size={18} />
            </div>

            <div>
              <strong>New health record added</strong>
              <span>Blood test report · CityCare Hospital</span>
            </div>

            <small>2 days ago</small>
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <Pill size={18} />
            </div>

            <div>
              <strong>Prescription updated</strong>
              <span>Prescription from Dr. Ananya Sharma</span>
            </div>

            <small>5 days ago</small>
          </div>

        </div>

      </section>

    </div>
  );
}

export default PatientDashboard;