import { Link, Outlet, useLocation } from "react-router-dom";
import "./PatientLayout.css";
import {
  LayoutDashboard,
  CalendarDays,
  Search,
  Clock3,
  FileText,
  Pill,
  CreditCard,
  UserRound,
  LogOut,
  HeartPulse,
  Bell,
} from "lucide-react";

function PatientLayout() {
  const location = useLocation();

  const navigation = [
    {
      name: "Overview",
      path: "/patient",
      icon: LayoutDashboard,
    },
    {
      name: "Appointments",
      path: "/patient/appointments",
      icon: CalendarDays,
    },
    {
      name: "Find a Doctor",
      path: "/patient/find-doctor",
      icon: Search,
    },
    {
      name: "Live Queue",
      path: "/patient/queue",
      icon: Clock3,
    },
    {
      name: "Health Records",
      path: "/patient/records",
      icon: FileText,
    },
    {
      name: "Prescriptions",
      path: "/patient/prescriptions",
      icon: Pill,
    },
    {
      name: "Payments",
      path: "/patient/payments",
      icon: CreditCard,
    },
    {
      name: "Profile",
      path: "/patient/profile",
      icon: UserRound,
    },
  ];

  return (
    <div className="patient-app">

      <aside className="patient-sidebar">

        <Link to="/" className="patient-brand">
          <span className="patient-brand-mark">
            <HeartPulse size={19} />
          </span>

          <span>Carely</span>
        </Link>

        <div className="patient-sidebar-label">
          PATIENT PORTAL
        </div>

        <nav className="patient-navigation">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.path === "/patient"
                ? location.pathname === "/patient"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`patient-nav-item ${
                  isActive ? "active" : ""
                }`}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="patient-sidebar-bottom">

          <div className="patient-support-card">
            <div className="support-icon">
              <HeartPulse size={18} />
            </div>

            <div>
              <strong>Need help?</strong>
              <span>Contact Carely support</span>
            </div>
          </div>

          <Link to="/" className="patient-logout">
            <LogOut size={18} />
            <span>Sign out</span>
          </Link>

        </div>

      </aside>

      <div className="patient-main">

        <header className="patient-topbar">

          <div>
            <p className="patient-page-label">
              PATIENT PORTAL
            </p>

            <h1>My Healthcare</h1>
          </div>

          <div className="patient-topbar-actions">

            <button className="notification-button">
              <Bell size={19} />
              <span></span>
            </button>

            <div className="patient-user">

              <div className="patient-avatar">
                A
              </div>

              <div className="patient-user-info">
                <strong>Aditya</strong>
                <span>Patient</span>
              </div>

            </div>

          </div>

        </header>

        <main className="patient-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default PatientLayout;