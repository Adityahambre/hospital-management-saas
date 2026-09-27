import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Pencil,
  Lock,
} from "lucide-react";

function Profile() {
  return (
    <div className="patient-dashboard profile-page">

      {/* Header */}
      <div className="profile-header">
        <div>
          <span className="section-eyebrow">ACCOUNT</span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and account preferences.
          </p>
        </div>

        <button className="profile-edit-btn">
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>

      {/* Profile overview */}
      <section className="profile-overview dashboard-panel">

        <div className="profile-avatar">
          A
        </div>

        <div className="profile-overview-info">
          <h2>Aditya Hambre</h2>

          <p>Patient ID: PT-2026-00124</p>

          <span className="profile-active-badge">
            Active Patient
          </span>
        </div>

      </section>

      {/* Personal Information */}
      <section className="dashboard-panel profile-section">

        <div className="panel-header">
          <div>
            <h2>Personal Information</h2>
            <p>Your basic personal details</p>
          </div>
        </div>

        <div className="profile-fields">

          <div className="profile-field">
            <div className="profile-field-icon">
              <User size={18} />
            </div>

            <div>
              <span>Full Name</span>
              <strong>Aditya Hambre</strong>
            </div>
          </div>

          <div className="profile-field">
            <div className="profile-field-icon">
              <Mail size={18} />
            </div>

            <div>
              <span>Email Address</span>
              <strong>aditya@example.com</strong>
            </div>
          </div>

          <div className="profile-field">
            <div className="profile-field-icon">
              <Phone size={18} />
            </div>

            <div>
              <span>Phone Number</span>
              <strong>+91 98765 43210</strong>
            </div>
          </div>

          <div className="profile-field">
            <div className="profile-field-icon">
              <CalendarDays size={18} />
            </div>

            <div>
              <span>Date of Birth</span>
              <strong>15 August 2003</strong>
            </div>
          </div>

          <div className="profile-field">
            <div className="profile-field-icon">
              <MapPin size={18} />
            </div>

            <div>
              <span>Location</span>
              <strong>Pune, Maharashtra</strong>
            </div>
          </div>

        </div>

      </section>

      {/* Account Security */}
      <section className="dashboard-panel profile-section">

        <div className="panel-header">
          <div>
            <h2>Account Security</h2>
            <p>Manage your account security settings</p>
          </div>
        </div>

        <div className="security-option">

          <div className="security-option-icon">
            <Lock size={19} />
          </div>

          <div className="security-option-info">
            <strong>Password</strong>
            <span>Last changed recently</span>
          </div>

          <button className="security-action">
            Change Password
          </button>

        </div>

        <div className="security-option">

          <div className="security-option-icon">
            <ShieldCheck size={19} />
          </div>

          <div className="security-option-info">
            <strong>Two-factor authentication</strong>
            <span>
              Add an additional layer of security to your account.
            </span>
          </div>

          <button className="security-action">
            Set Up
          </button>

        </div>

      </section>

      {/* Emergency Information */}
      <section className="dashboard-panel profile-section">

        <div className="panel-header">
          <div>
            <h2>Emergency Contact</h2>
            <p>Someone we can contact during an emergency</p>
          </div>
        </div>

        <div className="emergency-contact">

          <div>
            <span>Contact Name</span>
            <strong>Family Member</strong>
          </div>

          <div>
            <span>Relationship</span>
            <strong>Parent</strong>
          </div>

          <div>
            <span>Phone Number</span>
            <strong>+91 98765 12345</strong>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Profile;