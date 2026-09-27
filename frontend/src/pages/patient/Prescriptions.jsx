import {
  Pill,
  Clock3,
  CalendarDays,
  Download,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const prescriptions = [
  {
    id: 1,
    medicine: "Atorvastatin 20 mg",
    type: "Tablet",
    dosage: "1 tablet",
    frequency: "Once daily",
    timing: "After dinner",
    duration: "30 days",
    remaining: "18 days remaining",
    doctor: "Dr. Ananya Sharma",
    date: "18 Sep 2026",
    status: "Active",
  },
  {
    id: 2,
    medicine: "Aspirin 75 mg",
    type: "Tablet",
    dosage: "1 tablet",
    frequency: "Once daily",
    timing: "After breakfast",
    duration: "30 days",
    remaining: "18 days remaining",
    doctor: "Dr. Ananya Sharma",
    date: "18 Sep 2026",
    status: "Active",
  },
  {
    id: 3,
    medicine: "Pantoprazole 40 mg",
    type: "Tablet",
    dosage: "1 tablet",
    frequency: "Once daily",
    timing: "Before breakfast",
    duration: "14 days",
    remaining: "Completed",
    doctor: "Dr. Rahul Mehta",
    date: "01 Sep 2026",
    status: "Completed",
  },
];

function Prescriptions() {
  const activePrescriptions = prescriptions.filter(
    (prescription) => prescription.status === "Active"
  );

  return (
    <div className="patient-dashboard prescriptions-page">

      {/* Header */}
      <div className="prescriptions-header">
        <div>
          <span className="section-eyebrow">MEDICATIONS</span>

          <h1>Prescriptions</h1>

          <p>
            View your current medications, dosage instructions and
            prescription history.
          </p>
        </div>

        <button className="prescription-download-btn">
          <Download size={17} />
          Download Summary
        </button>
      </div>

      {/* Summary */}
      <section className="prescription-summary">

        <div className="prescription-summary-card">
          <div className="prescription-summary-icon">
            <Pill size={21} />
          </div>

          <div>
            <span>Active Medicines</span>
            <strong>{activePrescriptions.length}</strong>
          </div>
        </div>

        <div className="prescription-summary-card">
          <div className="prescription-summary-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Next Dose</span>
            <strong>After breakfast</strong>
          </div>
        </div>

        <div className="prescription-summary-card">
          <div className="prescription-summary-icon">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>Last Prescribed</span>
            <strong>18 Sep 2026</strong>
          </div>
        </div>

      </section>

      {/* Active medication */}
      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h2>Current Medications</h2>
            <p>Medicines currently prescribed to you</p>
          </div>

          <span className="active-prescription-label">
            {activePrescriptions.length} Active
          </span>
        </div>

        <div className="prescription-list">

          {activePrescriptions.map((prescription) => (
            <div
              className="prescription-item"
              key={prescription.id}
            >

              <div className="prescription-icon">
                <Pill size={21} />
              </div>

              <div className="prescription-main">

                <div className="prescription-title-row">
                  <h3>{prescription.medicine}</h3>

                  <span className="prescription-status">
                    <CheckCircle2 size={13} />
                    Active
                  </span>
                </div>

                <p className="prescription-doctor">
                  Prescribed by {prescription.doctor}
                </p>

                <div className="prescription-details">

                  <div>
                    <span>Dosage</span>
                    <strong>{prescription.dosage}</strong>
                  </div>

                  <div>
                    <span>Frequency</span>
                    <strong>{prescription.frequency}</strong>
                  </div>

                  <div>
                    <span>Timing</span>
                    <strong>{prescription.timing}</strong>
                  </div>

                  <div>
                    <span>Duration</span>
                    <strong>{prescription.duration}</strong>
                  </div>

                </div>

                <div className="prescription-footer">
                  <span>{prescription.remaining}</span>
                  <span>Prescribed {prescription.date}</span>
                </div>

              </div>

              <button className="prescription-view-btn">
                View
                <ChevronRight size={16} />
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* Medication schedule */}
      <section className="dashboard-panel medication-schedule">

        <div className="panel-header">
          <div>
            <h2>Today's Medication Schedule</h2>
            <p>Follow your prescribed medication timings</p>
          </div>
        </div>

        <div className="medication-timeline">

          <div className="medication-time-item">
            <div className="medication-time">
              <span>08:00</span>
              <small>AM</small>
            </div>

            <div className="medication-time-content">
              <strong>Before breakfast</strong>
              <p>Pantoprazole 40 mg</p>
            </div>

            <span className="dose-completed">
              Completed
            </span>
          </div>

          <div className="medication-time-item">
            <div className="medication-time">
              <span>09:00</span>
              <small>AM</small>
            </div>

            <div className="medication-time-content">
              <strong>After breakfast</strong>
              <p>Aspirin 75 mg</p>
            </div>

            <span className="dose-upcoming">
              Upcoming
            </span>
          </div>

          <div className="medication-time-item">
            <div className="medication-time">
              <span>09:00</span>
              <small>PM</small>
            </div>

            <div className="medication-time-content">
              <strong>After dinner</strong>
              <p>Atorvastatin 20 mg</p>
            </div>

            <span className="dose-upcoming">
              Upcoming
            </span>
          </div>

        </div>

      </section>

      {/* History */}
      <section className="dashboard-panel prescription-history">

        <div className="panel-header">
          <div>
            <h2>Prescription History</h2>
            <p>Previously prescribed medications</p>
          </div>
        </div>

        <div className="prescription-history-row">

          <div className="history-icon">
            <Pill size={19} />
          </div>

          <div className="history-info">
            <strong>Pantoprazole 40 mg</strong>
            <span>
              Dr. Rahul Mehta · 01 Sep 2026
            </span>
          </div>

          <span className="history-completed">
            Completed
          </span>

        </div>

      </section>

    </div>
  );
}

export default Prescriptions;