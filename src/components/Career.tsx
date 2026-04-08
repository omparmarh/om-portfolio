import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>AI Panchayat</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Architected and deployed a production-ready digital governance platform utilizing TypeScript and Supabase.
              Developed AI-powered features for community engagement and streamlined public service delivery.
              Optimized backend performance and implemented real-time data sync for a seamless user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android App Developer</h4>
                <h5>Hisab Chokho (Mera Hisab)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built a high-precision personal finance management application using Kotlin and Jetpack Compose.
              Implemented robust offline-first functionality with Room DB and automated recurring transaction logic.
              Designed a clean, intuitive UI following Material Design 3 principles for enhanced financial tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer and BDE</h4>
                <h5>HK digiverse</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Spearheaded client engagement initiatives, increasing project pipeline by 30%.
              Led development of AI-driven projects utilizing Python, enhancing operational efficiency by 25%.
              Cultivated strong stakeholder relationships and conducted market analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Assistant Developer</h4>
                <h5>Self-Practice (Friday 2.0)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered a Python-based AI assistant with wake-word detection and voice commands.
              Integrated Edge-TTS for natural voice output and Vosk for high-accuracy STT.
              Developed a user-friendly GUI using Tkinter.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Researcher</h4>
                <h5>Self-Practice (Lab)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Conducted penetration testing using Kali Linux. Employed Wireshark for traffic analysis
              and Nmap for network scanning. Implemented vulnerability scanning tools to evaluate
              security postures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;