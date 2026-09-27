import {
  Clock3,
  MapPin,
  Bell,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

function Queue() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const currentToken = 19;
  const patientToken = 24;
  const patientsAhead = patientToken - currentToken - 1;
  const estimatedWait = patientsAhead * 7;

  return (
    <div className="patient-dashboard">

      {/* Header */}
      <section className="patient-welcome">

        <div>
          <p className="dashboard-eyebrow">
            LIVE QUEUE
          </p>

          <h2>
            Your queue status
          </h2>

          <p>
            Track your position and estimated waiting time in real time.
          </p>
        </div>

        <div className="health-status">
          <span className="status-dot"></span>
          Queue is active
        </div>

      </section>

      {/* Main queue card */}
      <section className="queue-live-card">

        <div className="queue-live-header">

          <div>
            <p>YOUR APPOINTMENT</p>

            <h3>
              Dr. Ananya Sharma
            </h3>

            <span>
              <MapPin size={13} />
              CityCare Hospital · Cardiology
            </span>
          </div>

          <div className="queue-live-status">
            <span className="status-dot"></span>
            LIVE
          </div>

        </div>

        <div className="queue-live-content">

          <div className="queue-token">

            <span>Your token</span>

            <strong>
              C-{patientToken}
            </strong>

            <small>
              Current token: C-{currentToken}
            </small>

          </div>

          <div className="queue-wait">

            <div className="queue-wait-icon">
              <Clock3 size={22} />
            </div>

            <div>
              <span>Estimated waiting time</span>

              <strong>
                ~{estimatedWait} min
              </strong>
            </div>

          </div>

        </div>

        <div className="queue-visual">

          <div className="queue-visual-header">
            <span>Queue progress</span>
            <strong>
              {patientsAhead} patients ahead
            </strong>
          </div>

          <div className="queue-track">

            <div className="queue-track-fill"></div>

          </div>

          <div className="queue-markers">

            <span>
              C-{currentToken}
            </span>

            <span>
              C-{patientToken}
            </span>

          </div>

        </div>

      </section>

      {/* Queue information */}
      <section className="queue-info-grid">

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <p>WHAT HAPPENS NEXT</p>
              <h3>Your queue journey</h3>
            </div>

          </div>

          <div className="queue-steps">

            <div className="queue-step completed">

              <div className="queue-step-icon">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>Appointment confirmed</strong>
                <span>Your appointment is confirmed.</span>
              </div>

            </div>

            <div className="queue-step completed">

              <div className="queue-step-icon">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>Checked in</strong>
                <span>You have joined today's queue.</span>
              </div>

            </div>

            <div className="queue-step current">

              <div className="queue-step-icon">
                <Clock3 size={17} />
              </div>

              <div>
                <strong>Waiting</strong>
                <span>You are currently waiting for your turn.</span>
              </div>

            </div>

            <div className="queue-step">

              <div className="queue-step-icon">
                <Clock3 size={17} />
              </div>

              <div>
                <strong>Consultation</strong>
                <span>You will be notified when your turn arrives.</span>
              </div>

            </div>

          </div>

        </div>

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <p>NOTIFICATIONS</p>
              <h3>Queue alerts</h3>
            </div>

            <Bell size={19} />

          </div>

          <p className="queue-notification-text">
            Get notified when your appointment is approaching.
          </p>

          <button
            className={`notification-toggle ${
              notificationsEnabled ? "enabled" : ""
            }`}
            onClick={() =>
              setNotificationsEnabled(!notificationsEnabled)
            }
          >

            <span className="toggle-circle"></span>

            {notificationsEnabled
              ? "Notifications enabled"
              : "Notifications disabled"}

          </button>

          <button className="queue-refresh">

            <RefreshCw size={15} />

            Refresh queue

          </button>

        </div>

      </section>

    </div>
  );
}

export default Queue;