import { useState, useEffect } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

interface Slide {
  id: number
  image: string
  badge: string
  title: string
  desc: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80',
    badge: 'Education For Every Child',
    title: 'Empowering Underprivileged Children Through Quality Education',
    desc: 'Shikashvik Welfare Foundation provides free schooling, books, and digital literacy to street and village children in Etah, Uttar Pradesh.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=80',
    badge: 'Healthcare & Nutrition',
    title: 'Free Health Camps & Nutritious Meals for Rural Families',
    desc: 'Dedicated to ensuring zero hunger and accessible primary healthcare through regular medical checkup drives and ration distribution.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80',
    badge: 'Women Empowerment',
    title: 'Fostering Independence With Vocational Skill Training',
    desc: 'Equipping rural women with tailoring, handicrafts, and entrepreneurship skills to build resilient self-help communities.',
  },
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [donateModal, setDonateModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [donationAmount, setDonationAmount] = useState('1000')
  const [donorName, setDonorName] = useState('')
  const [donorPhone, setDonorPhone] = useState('')
  const [donorSuccess, setDonorSuccess] = useState(false)

  // Auto slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDonorSuccess(true)
    setTimeout(() => {
      setDonorSuccess(false)
      setDonateModal(false)
      setDonorName('')
      setDonorPhone('')
    }, 2500)
  }

  return (
    <div className="app-root">
      {/* TOP HEADER */}
      <div className="top-header">
        <div className="top-container">
          <div className="contact-info">
            <a href="tel:+918445020016">☎ +91 8445020016</a>
            <span>|</span>
            <a href="mailto:shikashvik@gmail.com">✉ shikashvik@gmail.com</a>
            <span>|</span>
            <span>Date of Incorporation: October 23, 2026</span>
            <span>|</span>
            <span>📍 Etah, Uttar Pradesh</span>
          </div>
          <div className="top-actions">
            <a href="#about">Support</a>
            <button
              type="button"
              className="top-btn"
              onClick={() => setDonateModal(true)}
            >
              Donate Now
            </button>
            <button
              type="button"
              className="top-btn"
              onClick={() => setDonateModal(true)}
            >
              Become A Partner
            </button>
            <button
              type="button"
              className="login-btn"
              onClick={() => setLoginModal(true)}
            >
              Login ⌄
            </button>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="main-header">
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="Shikashvik Welfare Foundation">
            <img src={logoImg} alt="Shikashvik Welfare Foundation Logo" className="logo-img" />
            <div className="logo-text-wrap">
              <span className="logo-main">SHIKASHVIK</span>
              <small>WELFARE FOUNDATION</small>
            </div>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a
              href="#home"
              className="home-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
            <a href="#what-we-do" onClick={() => setMenuOpen(false)}>
              What We Do
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Running Projects
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>
              Blog & News
            </a>
            <a href="#certificates" onClick={() => setMenuOpen(false)}>
              Certificates
            </a>
            <a href="#partners" onClick={() => setMenuOpen(false)}>
              Partners
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section className="hero-slider" id="home">
        <div className="slider-image">
          <img
            key={slides[currentSlide].id}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
          <div className="slider-overlay">
            <div className="slider-text">
              <span className="slider-badge">{slides[currentSlide].badge}</span>
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].desc}</p>
              <button
                type="button"
                className="slider-cta-btn"
                onClick={() => setDonateModal(true)}
              >
                Join Our Mission & Donate
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="slider-arrow prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className="slider-arrow next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="slider-dots">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2>
              Shikashvik <span>Welfare Foundation</span>
            </h2>
            <div className="about-line" />
            <h4>Committed to Uplifting Communities in Etah, Uttar Pradesh & Across India</h4>
            <p>
              <strong>Shikashvik Welfare Foundation</strong> is a government-registered non-profit
              organization incorporated on <strong>October 23, 2026</strong>. With its registered
              district in <strong>Etah, Uttar Pradesh, India</strong>, our foundational mission is
              to build an equitable and thriving society through grassroots education, free medical care,
              hunger eradication, and women empowerment.
            </p>

            <div style={{ background: '#fcf8ff', borderLeft: '4px solid #4b087d', padding: '14px 18px', borderRadius: '4px', margin: '20px 0' }}>
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#333' }}>
                🏛️ <strong>Date of Incorporation:</strong> October 23, 2026
              </p>
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#333' }}>
                📍 <strong>Registered District:</strong> Etah, Uttar Pradesh, India
              </p>
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#333' }}>
                🏢 <strong>Registered Address:</strong> C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)
              </p>
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#333' }}>
                📞 <strong>Contact No:</strong> <a href="tel:+918445020016" style={{ color: '#4b087d', fontWeight: 700 }}>8445020016</a> | ✉️ <strong>Email:</strong> <a href="mailto:shikashvik@gmail.com" style={{ color: '#4b087d', fontWeight: 700 }}>shikashvik@gmail.com</a>
              </p>
            </div>

            <p>
              With grassroots volunteers and transparent community leadership, we identify vulnerable
              slums, remote hamlets, and underserved settlements to deliver direct interventions in
              primary education, nutrition supply, emergency medical care, and vocational self-reliance.
            </p>
            <button
              type="button"
              className="view-details"
              onClick={() => {
                const el = document.getElementById('projects')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Our Projects & Details →
            </button>
          </div>

          <div className="about-logo">
            <div className="about-logo-card">
              <img
                src={logoImg}
                alt="Shikashvik Welfare Foundation Official Logo"
                className="about-logo-img"
              />
              <div className="about-badge-text">SHIKASHVIK WELFARE FOUNDATION</div>
              <div className="about-badge-sub">Regd: Dhumari, Aliganj, Etah (U.P.) - 207248</div>
              <div style={{ marginTop: '8px', fontSize: '11px', color: '#d59600', fontWeight: 'bold' }}>
                Inc. Date: October 23, 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN WE DO */}
      <section className="what-we-do" id="what-we-do">
        <h2 className="section-title">
          WHAT CAN <span>WE DO</span>
        </h2>
        <div className="action-grid">
          <div className="action-card">
            <div className="action-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
              </svg>
            </div>
            <div>
              <h3>Quality Education</h3>
              <p>Providing free remedial learning, school kits, textbooks, and computer education to underprivileged children.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 10.5H15.5V7C15.5 5.62 14.38 4.5 13 4.5H11C9.62 4.5 8.5 5.62 8.5 7V10.5H5C3.62 10.5 2.5 11.62 2.5 13V15C2.5 16.38 3.62 17.5 5 17.5H8.5V21C8.5 22.38 9.62 23.5 11 23.5H13C14.38 23.5 15.5 22.38 15.5 21V17.5H19C20.38 17.5 21.5 16.38 21.5 15V13C21.5 11.62 20.38 10.5 19 10.5Z" />
              </svg>
            </div>
            <div>
              <h3>Healthcare & Camps</h3>
              <p>Organizing free health checkups, medicine distribution, eye clinics, and maternal health consultations in remote villages.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
              </svg>
            </div>
            <div>
              <h3>Women Empowerment</h3>
              <p>Conducting sewing, handicraft, and digital skill workshops to make rural women financially self-sufficient.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">
              <svg viewBox="0 0 24 24">
                <path d="M11 9H9V2H7V9H5V2H3V9C3 11.12 4.66 12.84 6.75 12.97V22H9.25V12.97C11.34 12.84 13 11.12 13 9V2H11V9M16 6V14H18.5V22H21V2C18.24 2 16 4.24 16 6Z" />
              </svg>
            </div>
            <div>
              <h3>Hunger Relief</h3>
              <p>Distributing fresh meals, dry ration kits, and clean drinking water to destitute elders, daily wage workers, and widows.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11M8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11M8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13M16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />
              </svg>
            </div>
            <div>
              <h3>Community Development</h3>
              <p>Sanitation awareness, tree plantation drives, and solar lamp installation in underserved colonies of Etah district.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M13 17H11V15H13V17M13 13H11V7H13V13Z" />
              </svg>
            </div>
            <div>
              <h3>Emergency Relief</h3>
              <p>Immediate winter clothing, blankets, and disaster relief support for vulnerable communities facing severe hardships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RUNNING PROJECTS */}
      <section className="running-projects" id="projects">
        <h2 className="section-title">
          RUNNING <span>PROJECTS</span>
        </h2>
        <div className="project-grid">
          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
              alt="Project Shiksha Setu"
            />
            <div className="project-info">
              <h3>Project Shiksha Setu</h3>
              <div className="project-country">📍 Etah District, Uttar Pradesh</div>
              <p>
                A community-centered bridge school program for children who dropped out or never had
                access to formal education. Providing learning kits, uniforms, and mentors.
              </p>
              <button
                type="button"
                className="project-read-more"
                onClick={() => setDonateModal(true)}
              >
                Support This Project →
              </button>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Project Arogya Vahini"
            />
            <div className="project-info">
              <h3>Project Arogya Vahini</h3>
              <div className="project-country">📍 Rural Blocks of Uttar Pradesh</div>
              <p>
                Mobile healthcare camps bringing certified doctors, basic diagnostics, hemoglobin tests,
                and free generic medicines straight to doorstep of villagers.
              </p>
              <button
                type="button"
                className="project-read-more"
                onClick={() => setDonateModal(true)}
              >
                Support This Project →
              </button>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Project Swavlamban"
            />
            <div className="project-info">
              <h3>Project Swavlamban</h3>
              <div className="project-country">📍 Dhumari, Aliganj & Etah Villages</div>
              <p>
                Vocational skill workshops teaching tailoring, stitching, and financial literacy to
                women and teenage girls to foster sustainable household earnings.
              </p>
              <button
                type="button"
                className="project-read-more"
                onClick={() => setDonateModal(true)}
              >
                Support This Project →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <h2 className="section-title">
          OUR <span>GALLERY</span>
        </h2>
        <div className="gallery-grid">
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
              alt="Education drive"
            />
          </a>
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80"
              alt="Community smile"
            />
          </a>
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80"
              alt="Food distribution"
            />
          </a>
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
              alt="Learning center"
            />
          </a>
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=600&q=80"
              alt="Children studying"
            />
          </a>
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
              alt="Medical camp"
            />
          </a>
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
              alt="Books distribution"
            />
          </a>
          <a href="#gallery">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80"
              alt="Rural support"
            />
          </a>
        </div>
      </section>

      {/* BLOG & STORIES */}
      <section className="blog-section" id="blog">
        <div className="blog-wrap">
          <h2 className="section-title">
            LATEST <span>NEWS & STORIES</span>
          </h2>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-media">
                <img
                  src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=600&q=80"
                  alt="School admission drive"
                />
              </div>
              <div className="blog-stats">
                <span>💬 24 Comments</span>
                <span>❤️ 158 Likes</span>
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>28</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Over 150 Children Enrolled in Free Learning Drive Across Etah</h3>
                  <button
                    type="button"
                    className="read"
                    onClick={() => alert('Full story: Our team enrolled 150+ underprivileged children with complete learning kits!')}
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-media">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                  alt="Health awareness checkup"
                />
              </div>
              <div className="blog-stats">
                <span>💬 19 Comments</span>
                <span>❤️ 124 Likes</span>
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>25</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Special Pediatric & Maternal Health Checkup Camp Organized</h3>
                  <button
                    type="button"
                    className="read"
                    onClick={() => alert('Full story: Over 320 mothers and infants received pediatric consultations and nutrition packets.')}
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-media">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
                  alt="Women sewing center"
                />
              </div>
              <div className="blog-stats">
                <span>💬 31 Comments</span>
                <span>❤️ 210 Likes</span>
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>23</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Foundation Day Celebrations: 50 Sewing Machines Awarded</h3>
                  <button
                    type="button"
                    className="read"
                    onClick={() => alert('Full story: On our Foundation Day, 50 trained women received sewing machines to launch their livelihood.')}
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="cert-section" id="certificates">
        <h2 className="section-title">
          GOVERNMENT <span>RECOGNITION & CERTIFICATION</span>
        </h2>
        <div className="cert-grid">
          <div className="cert-item">
            <div className="cert-badge-box">🏛️</div>
            <p>Certificate of Incorporation</p>
            <small>Government of India | Ministry of Corporate Affairs</small>
            <small style={{ color: '#d59600', fontWeight: 'bold' }}>Date of Incorporation: October 23, 2026</small>
            <small style={{ display: 'block', marginTop: '6px' }}>District: Etah, Uttar Pradesh, India</small>
          </div>

          <div className="cert-item">
            <div className="cert-badge-box">📜</div>
            <p>80G & 12A Compliant Non-Profit</p>
            <small>Tax Exemption for Donors under Section 80G of Income Tax Act</small>
            <small style={{ color: '#d59600', fontWeight: 'bold' }}>NITI Aayog NGO Darpan Registered</small>
            <small style={{ display: 'block', marginTop: '6px' }}>
              Address: C/o Ankit Shakya, Dhumari, Aliganj, Etah (UP) - 207248
            </small>
          </div>
        </div>
        <div className="cert-dots">
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section" id="partners">
        <h2 className="section-title">
          OUR <span>COMMUNITY PARTNERS</span>
        </h2>
        <div className="partners-banner-wrap">
          <div className="partner-logo-box">🤝 Etah District Welfare Society</div>
          <div className="partner-logo-box">🏥 Arogya Sewa Mission</div>
          <div className="partner-logo-box">🎓 Gramin Shiksha Vikas Samiti</div>
          <div className="partner-logo-box">🌱 UP Green Community Trust</div>
          <div className="partner-logo-box">🛡️ National Child Rights Alliance</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="simple-footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img src={logoImg} alt="Logo" style={{ height: '50px', borderRadius: '6px', background: '#fff', padding: '2px' }} />
              <div>
                <h4 style={{ margin: 0, color: '#d59600' }}>SHIKASHVIK</h4>
                <small style={{ color: '#fff', fontSize: '10px', letterSpacing: '1px' }}>WELFARE FOUNDATION</small>
              </div>
            </div>
            <p>
              Dedicated to creating lasting impact through education, healthcare, and economic
              self-reliance in Etah, Uttar Pradesh and across India.
            </p>
            <p>
              <strong>Date of Incorporation:</strong> October 23, 2026<br />
              <strong>Registered District:</strong> Etah, Uttar Pradesh, India<br />
              <strong>Registered Address:</strong> C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)<br />
              <strong>Contact No:</strong> <a href="tel:+918445020016" style={{ color: '#fff' }}>8445020016</a> / <a href="tel:+918445020016" style={{ color: '#fff' }}>+91-84450-20016</a><br />
              <strong>Email:</strong> <a href="mailto:shikashvik@gmail.com" style={{ color: '#fff' }}>shikashvik@gmail.com</a>
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Foundation</a></li>
              <li><a href="#what-we-do">What We Do</a></li>
              <li><a href="#projects">Running Projects</a></li>
              <li><a href="#gallery">Photo Gallery</a></li>
              <li><a href="#certificates">Legal & Tax Exemptions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Make a Difference</h4>
            <p>Your contribution directly provides textbooks, medicines, and food to families in need.</p>
            <button
              type="button"
              className="top-btn"
              onClick={() => setDonateModal(true)}
              style={{ width: '100%', padding: '12px', fontSize: '14px' }}
            >
              Donate Online Now
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Shikashvik Welfare Foundation. All rights reserved. Registered Address: C/o Ankit Shakya, Dhumari, Aliganj, Etah, Uttar Pradesh - 207248.</p>
        </div>
      </footer>

      {/* DONATE MODAL */}
      {donateModal && (
        <div className="modal-overlay" onClick={() => setDonateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setDonateModal(false)}
            >
              ✕
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img src={logoImg} alt="Logo" style={{ height: '44px' }} />
              <div>
                <h3 className="modal-title" style={{ margin: 0, fontSize: '18px' }}>Shikashvik Welfare Foundation</h3>
                <small style={{ color: '#666' }}>Regd: Etah, Uttar Pradesh (PIN: 207248)</small>
              </div>
            </div>
            <p className="modal-desc">
              Your donation directly educates children, funds rural healthcare camps, and provides
              ration to needy families. Eligible for 80G tax exemption.
            </p>

            {donorSuccess ? (
              <div style={{ textAlign: 'center', padding: '20px', color: '#27ae60' }}>
                <h3>🎉 Thank You for Your Support!</h3>
                <p style={{ marginTop: '8px', color: '#555' }}>
                  Our team will connect with you via SMS/WhatsApp with the official tax receipt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                  Select Contribution Amount:
                </label>
                <div className="donation-amounts">
                  {['500', '1000', '2500', '5000'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`amt-btn ${donationAmount === amt ? 'active' : ''}`}
                      onClick={() => setDonationAmount(amt)}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="modal-input"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                />

                <input
                  type="tel"
                  placeholder="Mobile Number (e.g. 8445020016)"
                  className="modal-input"
                  required
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                />

                <div style={{ background: '#f5f0fa', padding: '10px', borderRadius: '4px', fontSize: '12px', color: '#4b087d', marginBottom: '14px' }}>
                  <strong>UPI ID:</strong> shikashvik@upi | <strong>Help:</strong> 8445020016
                </div>

                <button type="submit" className="modal-submit">
                  Proceed to Donate ₹{donationAmount}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {loginModal && (
        <div className="modal-overlay" onClick={() => setLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setLoginModal(false)}
            >
              ✕
            </button>
            <h3 className="modal-title">Member / Volunteer Portal</h3>
            <p className="modal-desc">Login to access internal records, volunteer shifts, and field donation logs.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Login functionality will be activated with member credentials.'); setLoginModal(false); }}>
              <input type="email" placeholder="Registered Email (shikashvik@gmail.com)" className="modal-input" required />
              <input type="password" placeholder="Password" className="modal-input" required />
              <button type="submit" className="modal-submit" style={{ background: '#4b087d' }}>
                Secure Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
