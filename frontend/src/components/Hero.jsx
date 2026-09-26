import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-icon">
              <Sparkles size={14} />
            </span>
            <span>THE NEXT GENERATION OF HEALTHCARE</span>
          </div>

          <h1>
            Healthcare,
            <br />
            <span>connected around you.</span>
          </h1>

          <p className="hero-description">
            Discover trusted doctors, find the right hospital, book
            appointments, and stay connected to your care — all from one
            intelligent healthcare platform.
          </p>

          <div className="hero-actions">
            <a href="#doctors" className="hero-primary-button">
              Find a doctor
              <ArrowRight size={18} />
            </a>

            <a href="#hospitals" className="hero-secondary-button">
              Explore hospitals
              <ChevronRight size={17} />
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-check">
              <Check size={14} />
            </div>

            <span>Built for patients, doctors and hospitals</span>
          </div>
        </div>

        {/* Right Product Preview */}
        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="product-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="window-title">Carely Health</span>

              <div className="window-status">
                <span></span>
                Live
              </div>
            </div>

            <div className="product-body">
              <div className="product-welcome">
                <div>
                  <span className="small-label">YOUR HEALTHCARE</span>
                  <h3>Good morning 👋</h3>
                </div>

                <div className="avatar">
                  A
                </div>
              </div>

              <div className="search-box">
                <Search size={18} />
                <span>Search doctors, specialties or hospitals</span>
              </div>

              <div className="quick-actions">
                <div className="quick-card active">
                  <div className="quick-icon">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <strong>Appointments</strong>
                    <span>Manage your care</span>
                  </div>
                </div>

                <div className="quick-card">
                  <div className="quick-icon">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <strong>Live Queue</strong>
                    <span>Track your wait</span>
                  </div>
                </div>
              </div>

              <div className="appointment-card">
                <div className="appointment-top">
                  <div>
                    <span className="small-label">UPCOMING APPOINTMENT</span>
                    <h4>Dr. Ananya Sharma</h4>
                  </div>

                  <span className="appointment-badge">Today</span>
                </div>

                <div className="doctor-info">
                  <div className="doctor-avatar">AS</div>

                  <div className="doctor-details">
                    <strong>Cardiology</strong>
                    <span>10:30 AM · CityCare Hospital</span>
                  </div>
                </div>

                <div className="appointment-footer">
                  <span>
                    <ShieldCheck size={15} />
                    Verified provider
                  </span>

                  <button>
                    View appointment
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Queue Card */}
          <div className="floating-card queue-floating">
            <div className="floating-icon">
              <Clock3 size={18} />
            </div>

            <div>
              <span>LIVE QUEUE</span>
              <strong>Token C-24</strong>
              <small>4 patients ahead</small>
            </div>
          </div>

          {/* Floating Security Card */}
          <div className="floating-card security-floating">
            <div className="security-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>Your data is protected</strong>
              <span>Secure healthcare platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="hero-stats">
        <div className="stat-item">
          <strong>01</strong>
          <span>Discover care</span>
        </div>

        <div className="stat-line"></div>

        <div className="stat-item">
          <strong>02</strong>
          <span>Book instantly</span>
        </div>

        <div className="stat-line"></div>

        <div className="stat-item">
          <strong>03</strong>
          <span>Stay connected</span>
        </div>

        <div className="stat-line"></div>

        <div className="stat-item">
          <strong>04</strong>
          <span>Manage your health</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;