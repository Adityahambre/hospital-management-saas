import {
  FileText,
  Download,
  Eye,
  Upload,
  Activity,
  TestTube2,
  ScanLine,
  Pill,
  Stethoscope,
} from "lucide-react";

const records = [
  {
    id: 1,
    type: "Consultation",
    title: "Cardiology Consultation",
    doctor: "Dr. Ananya Sharma",
    hospital: "CityCare Hospital",
    date: "18 Sep 2026",
    icon: Stethoscope,
  },
  {
    id: 2,
    type: "Blood Test",
    title: "Complete Blood Count",
    doctor: "CityCare Diagnostics",
    hospital: "CityCare Hospital",
    date: "12 Sep 2026",
    icon: TestTube2,
  },
  {
    id: 3,
    type: "Imaging",
    title: "Chest X-Ray",
    doctor: "Dr. Rahul Mehta",
    hospital: "CityCare Hospital",
    date: "05 Sep 2026",
    icon: ScanLine,
  },
  {
    id: 4,
    type: "Prescription",
    title: "Cardiac Medication",
    doctor: "Dr. Ananya Sharma",
    hospital: "CityCare Hospital",
    date: "18 Sep 2026",
    icon: Pill,
  },
];

function HealthRecords() {
  return (
    <div className="patient-dashboard health-records-page">

      {/* Page Header */}
      <div className="records-header">
        <div>
          <span className="section-eyebrow">YOUR HEALTH</span>

          <h1>Health Records</h1>

          <p>
            Keep your medical history, reports, consultations and
            prescriptions organized in one secure place.
          </p>
        </div>

        <button className="records-upload-btn">
          <Upload size={17} />
          Upload Document
        </button>
      </div>

      {/* Health Summary */}
      <section className="records-summary">

        <div className="record-summary-card">
          <div className="record-summary-icon">
            <FileText size={21} />
          </div>

          <div>
            <span>Total Records</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="record-summary-card">
          <div className="record-summary-icon">
            <Activity size={21} />
          </div>

          <div>
            <span>Latest Update</span>
            <strong>18 Sep 2026</strong>
          </div>
        </div>

        <div className="record-summary-card">
          <div className="record-summary-icon">
            <Stethoscope size={21} />
          </div>

          <div>
            <span>Last Consultation</span>
            <strong>Cardiology</strong>
          </div>
        </div>

      </section>

      {/* Records */}
      <section className="dashboard-panel records-panel">

        <div className="panel-header">
          <div>
            <h2>Recent Records</h2>
            <p>Your latest healthcare documents</p>
          </div>

          <button className="records-filter-btn">
            All Records
          </button>
        </div>

        <div className="records-list">

          {records.map((record) => {
            const Icon = record.icon;

            return (
              <div className="health-record-item" key={record.id}>

                <div className="health-record-icon">
                  <Icon size={21} />
                </div>

                <div className="health-record-info">

                  <div className="health-record-title-row">
                    <h3>{record.title}</h3>

                    <span className="health-record-type">
                      {record.type}
                    </span>
                  </div>

                  <p>{record.doctor}</p>

                  <div className="health-record-meta">
                    <span>{record.hospital}</span>
                    <span>•</span>
                    <span>{record.date}</span>
                  </div>

                </div>

                <div className="health-record-actions">

                  <button title="View record">
                    <Eye size={17} />
                    <span>View</span>
                  </button>

                  <button title="Download record">
                    <Download size={17} />
                    <span>Download</span>
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* Medical Timeline */}
      <section className="dashboard-panel records-timeline-panel">

        <div className="panel-header">
          <div>
            <h2>Medical Timeline</h2>
            <p>A quick view of your recent healthcare journey</p>
          </div>
        </div>

        <div className="medical-timeline">

          <div className="timeline-item">
            <div className="timeline-dot" />

            <div>
              <strong>Cardiology Consultation</strong>
              <p>
                Consultation completed with Dr. Ananya Sharma.
              </p>
              <span>18 Sep 2026</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />

            <div>
              <strong>Blood Test Completed</strong>
              <p>
                Complete Blood Count report added to your records.
              </p>
              <span>12 Sep 2026</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />

            <div>
              <strong>Chest X-Ray</strong>
              <p>
                Imaging report uploaded by CityCare Hospital.
              </p>
              <span>05 Sep 2026</span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default HealthRecords;