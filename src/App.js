import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { 
  FaGithub, FaLinkedin, FaFacebook, FaDownload, FaUser, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes, FaCheckCircle,
  FaUniversity, FaSchool, FaExternalLinkAlt, FaArrowUp,
  FaJava, FaChartLine, FaDatabase, FaGlobe 
} from 'react-icons/fa';
import { 
  SiPython, SiC, SiDotnet, SiReact, SiMongodb, SiExpress, 
  SiNodedotjs, SiJavascript, SiPhp, SiLaravel, SiHtml5, 
  SiCss3, SiSass, SiGit 
} from 'react-icons/si';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  
  // Animation States for Counters
  const [exp, setExp] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const statsRef = useRef(null);

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Court of Appeal Sri Lanka",
      subtitle: "Case Management System/ e-filing and Web Portal",
      img: "projects/coa.png",
      desc: "A comprehensive case management system and official web portal developed for the Court of Appeal of Sri Lanka. The platform digitizes legal workflows, streamlines case tracking, and provides a secure, efficient environment for legal professionals and court administrators to manage records.",
      features: [
        "Secure Case Tracking & Document Management",
        "Role-Based Access for Legal Staff & Admins",
        "Automated Scheduling & Status Notifications",
        "Advanced Search & Reporting Capabilities"
      ],
      stack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      links: { github: "#", live: "https://courtofappeal.lk/" } 
    },
    {
      id: 2,
      title: "Voyage Sri Lanka 2025",
      subtitle: "Official Event Summit Online Ticket Booking and Web System",
      img: "projects/voyage.png",
      desc: "A comprehensive web solution for the Voyage Sri Lanka 2025 summit. This system handles participant registration, secure user data management, and real-time event updates. It features a custom CMS for administrators to manage content effortlessly.",
      features: [
        "Secure User Registration & Login",
        "Admin Dashboard for Analytics",
        "Responsive Mobile Design",
        "Real-time Email Notifications"
      ],
      stack: ["Python", "React", "FastAPI", "TensorFlow"],
      links: { github: "#", live: "#" }
    },
    {
      id: 3,
      title: "SLAITO Web & Internal Management System",
      subtitle: "Official Portal for Inbound Tour Operators",
      img: "projects/slaito.png",
      desc: "A fully functional web platform developed for the Sri Lanka Association of Inbound Tour Operators (SLAITO). It is designed to enhance user experience, streamline daily operations, and significantly boost member engagement.",
      features: [
        "Secure Admin Dashboard",
        "Dynamic Member Portal",
        "Integrated Job Board",
        "Event Showcase & Content Library"
      ],
      stack: ["PHP", "MySQL", "JavaScript", "Tailwind"],
      links: { github: "#", live: "https://testing.sltdigitalweb.lk/SLAITO/" }
    },
    {
      id: 4,
      title: "AI-Powered Sales & Ad Management System",
      subtitle: "Centralized Digital Sales Platform",
      img: "projects/ai_salesmanagementsysytem.png", 
      desc: "An automated advertisement sales system that digitizes manual processes previously handled through calls and spreadsheets. It provides a centralized platform to enter, manage, and track data, reducing errors, improving efficiency, and enabling real-time insights.",
      features: [
        "Voice to Text",
        "Automated Ad Sales Workflow",
        "Centralized Data Management",
        "Real-Time Insights & Tracking",
        "Error Reduction Protocols"
      ],
      stack: ["React", "Node.js", "Python", "MySQL"], 
      links: { github: "https://github.com/lakmewang/Automated-Advertisement-Sales-Management-System", live: "#" }
    },
    {
      id: 5,
      title: "MEDCONNECT",
      subtitle: "Online Drug Store & Management System",
      img: "projects/medconnect.jpeg",
      desc: "An innovative online drug store system that revolutionizes drug procurement with real-time availability. It enhances communication between medical professionals and pharmacists while ensuring robust security and efficient inventory management.",
      features: [
        "Real-time Drug Availability Tracking",
        "Doctor-Pharmacist Communication Portal",
        "Secure Prescription Management",
        "Automated Inventory Tracking"
      ],
      stack: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
      links: { github: "#", live: "#" }
    },
    {
  id: 6,
  title: "Smart Payroll Management System V2.0",
  subtitle: "Modern Payroll Management Solution",
  img: "projects/pyaroll-mgt-systemv2.jpg",
  desc: "A modern payroll management solution developed to simplify salary processing, employee management, statutory deductions, and payroll reporting. Built with a secure and scalable architecture, this system helps organizations efficiently manage payroll operations, employee records, overtime, leave, loans, and compliance-related reports from a centralized dashboard.",
  features: [
    "Salary Processing",
    "Employee Record Management",
    "Statutory Deductions",
    "Leave & Overtime Tracking",
    "Loan Management & Compliance Reporting"
  ],
  stack: ["Next.js", "React", "TypeScript", "Firebase"],
  links: { github: "#", live: "#" }
}
  ];

  // Skills Data
  const skillsRow1 = [
    { icon: <FaJava size={40} color="#007396"/>, name: "Java" },
    { icon: <SiPython size={40} color="#3776AB"/>, name: "Python" },
    { icon: <SiC size={40} color="#00599C"/>, name: "C" },
    { icon: <SiDotnet size={40} color="#512BD4"/>, name: "C#" },
    { icon: <SiReact size={40} color="#61DAFB"/>, name: "ReactJS" },
    { icon: <SiMongodb size={40} color="#47A248"/>, name: "MongoDB" },
    { icon: <SiExpress size={40} color="#eeeeee"/>, name: "ExpressJS" }, 
    { icon: <SiNodedotjs size={40} color="#339933"/>, name: "NodeJS" },
    { icon: <SiJavascript size={40} color="#F7DF1E"/>, name: "JavaScript" },
    { icon: <SiPhp size={40} color="#777BB4"/>, name: "PHP" },
    { icon: <FaDatabase size={40} color="#f29111"/>, name: "SQL" },
    { icon: <SiLaravel size={40} color="#FF2D20"/>, name: "Laravel" },
    { icon: <SiHtml5 size={40} color="#E34F26"/>, name: "HTML5" },
    { icon: <SiCss3 size={40} color="#1572B6"/>, name: "CSS3" },
    { icon: <SiSass size={40} color="#CC6699"/>, name: "SCSS" },
    { icon: <FaChartLine size={40} color="#FF6F00"/>, name: "Data Analysis" },
    { icon: <SiGit size={40} color="#F05032"/>, name: "Git" },
  ];

  const skillsRow2 = [
    { name: "Problem-solving" },
    { name: "Teamwork" },
    { name: "Communication" },
    { name: "Time management" },
    { name: "Adaptability" },
    // I duplicated a few to ensure your infinite slider track doesn't have empty gaps!
    { name: "Problem-solving" },
    { name: "Teamwork" },
    { name: "Communication" },
  ];

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll Animations and Scroll-to-Top Toggle
  useEffect(() => {
    const handleScroll = () => {
      // 1. Reveal Logic
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }

      // 2. Scroll to Top Button Logic
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Number Counter Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000; // 2 seconds animation
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth stop
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

          setExp(+(easeProgress * 4.5).toFixed(1));
          setProjectsCount(Math.round(easeProgress * 12));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Ensure exact values at the end
            setExp(4.5);
            setProjectsCount(12);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect(); // Run only once when it comes into view
      }
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      
      {/* --- Classy Full Width Header (CENTERED FIXED) --- */}
      <nav>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Replace 'images/logo.png' with the actual path to your logo */}
          <img 
            src="LG logo.png" 
            alt="Lakmewan G Logo" 
            style={{ height: '40px', width: 'auto' }} 
          />
          {/* <span>LAKMEWAN G.</span> */}
        </div>
        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#education">EDUCATION</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="hero-content-wrapper">
          <div className="hero-text fade-in-up">
            <h3 style={{ fontSize: '2.5rem', fontWeight: '400', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Hello,
            </h3>
            {/* Kept name on a single line as previously requested */}
            <h1>This is <span className="pink-text">LAKMEWAN GAYANTHA</span></h1>
            <h2>Building Robust <span className="green-text">Digital Ecosystems.</span></h2>
            
            <div className="social-icons" style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
              <a href="https://github.com/lakmewang" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" size={35} />
              </a>
              <a href="https://lk.linkedin.com/in/lakmewan-gayantha-413365250" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" size={35} />
              </a>
              <a href="https://www.facebook.com/people/Lakmewan-Gayantha/100011020021151" target="_blank" rel="noreferrer">
                <FaFacebook className="social-icon" size={35} />
              </a>
              {/* Highlighted & Blinking Personal Website Link */}
              <a href="https://blazevex.com/" target="_blank" rel="noreferrer">
                <FaGlobe 
                  className="social-icon blinking-globe" 
                  size={35} 
                  style={{ 
                    color: '#ff0073', 
                    filter: 'drop-shadow(0px 0px 8px rgba(255, 0, 0, 0.8))' 
                  }} 
                />
              </a>
            </div>

            <div className="btn-group">
              <a href="#contact" className="btn btn-outline">CONTACT ME <FaUser style={{marginLeft:8, fontSize:'0.8rem'}}/></a>
              <a href="https://drive.google.com/file/d/180qyTdEfeCEgiRMidHo2y_RJhq5msPZJ/view?usp=sharing" className="btn btn-fill">GET RESUME <FaDownload style={{marginLeft:8, fontSize:'0.8rem'}}/></a>
            </div>
          </div>

          <div className="code-window fade-in-up">
            <div className="window-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="editor-area">
              <div className="line-numbers">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20<br/>21
              </div>
              <div className="code-content">
                <span className="k">const</span> <span className="v">coder</span> = &#123;<br/>
                &nbsp;&nbsp;<span className="v">name</span>: <span className="s">'LAKMEWAN GAYANTHA'</span>,<br/>
                &nbsp;&nbsp;<span className="v">skills</span>: [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">'Java'</span>, <span className="s">'Python'</span>, <span className="s">'C'</span>, <span className="s">'C#'</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">'ReactJS'</span>, <span className="s">'MongoDB'</span>, <span className="s">'ExpressJS'</span>, <span className="s">'NodeJS'</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">'JavaScript'</span>, <span className="s">'PHP'</span>, <span className="s">'SQL'</span>, <span className="s">'Laravel'</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">'HTML5'</span>, <span className="s">'CSS3'</span>, <span className="s">'SCSS'</span>, <span className="s">'Data Analysis'</span>, <span className="s">'Git'</span><br/>
                &nbsp;&nbsp;],<br/>
                &nbsp;&nbsp;<span className="v">problemSolving</span>: <span className="n">true</span>,<br/>
                &nbsp;&nbsp;<span className="v">teamwork</span>: <span className="n">true</span>,<br/>
                &nbsp;&nbsp;<span className="v">communication</span>: <span className="n">true</span>,<br/>
                &nbsp;&nbsp;<span className="v">timeManagement</span>: <span className="n">true</span>,<br/>
                &nbsp;&nbsp;<span className="f">hireable</span>: <span className="k">function</span>() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="k">return</span> (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">this</span>.problemSolving &&<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">this</span>.teamwork &&<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">this</span>.communication &&<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">this</span>.timeManagement &&<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;;<span className="cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        
        {/* --- About Section --- */}
        <section id="about" className="reveal">
          <div className="watermark watermark-left">ABOUT</div>
          <div className="about-container">
            <div className="about-text">
               <div className="date-badge" style={{marginBottom: '10px'}}>My Story</div>
               <h2 className="green-text" style={{fontSize: '2.5rem', marginBottom: '25px'}}>Developing with <br/>Passion & Purpose</h2>
               <p style={{lineHeight: '1.9', color: '#a0a0c0', fontSize: '1.05rem'}}>
                 My name is Lakmewan Gayantha. I am a professional and enthusiastic programmer...
               </p>
               
               {/* --- BLAZEVEX Technologies Block --- */}
               <div style={{ 
                 marginTop: '30px', 
                 padding: '20px', 
                 background: 'rgba(255, 255, 255, 0.03)', 
                 borderRadius: '8px', 
                 borderLeft: '4px solid #4ade80' /* Adjust color to match your green theme */
               }}>
                 <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '12px' }}>
                   Co-founder of <span className="pink-text">BLAZEVEX Technologies</span>
                 </h3>
                 <p style={{ lineHeight: '1.7', color: '#a0a0c0', fontSize: '0.95rem', marginBottom: '20px' }}>
  At Blazevex, our passionate team blends creativity with cutting-edge technology to deliver innovative, user-centric software solutions. From web applications to custom development, we simplify the complex to empower businesses and bring your ideas to life with a focus on quality, transparency, and client satisfaction.
</p>
                 <a href="https://blazevex.com/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                   VISIT WEBSITE <FaGlobe style={{marginLeft:8, fontSize:'0.8rem'}}/>
                 </a>
               </div>
               
               {/* Updated Stat Counters */}
               <div style={{display:'flex', gap:'40px', marginTop:'40px'}} ref={statsRef}>
                  <div>
                    <h4 className="pink-text" style={{fontSize: '1.8rem'}}>{exp}+</h4>
                    <p style={{fontSize: '0.8rem', color: '#666'}}>YEARS EXP.</p>
                  </div>
                  <div>
                    <h4 className="pink-text" style={{fontSize: '1.8rem'}}>{projectsCount}+</h4>
                    <p style={{fontSize: '0.8rem', color: '#666'}}>PROJECTS</p>
                  </div>
               </div>
               
            </div>
            <div className="about-image">
               <div className="about-img-box">
                  <img src="images/profile.png" alt="Profile" />
               </div>
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="reveal">
          <div className="watermark watermark-right">WORK</div>
          <h2 className="section-title">Experiences</h2>
          
          <div className="timeline">
            {/* --- New BLAZEVEX Entry --- */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="date-badge">March 2025 - Present</span>
                <h3>CO-FOUNDER & FULL-STACK DEVELOPER</h3>
                <p style={{color: '#888'}}>BLAZEVEX Technologies (Pvt) Ltd.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="date-badge">June 2025 - Present</span>
                <h3>DEVELOPER</h3>
                <p style={{color: '#888'}}>SLT Digital Services</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="date-badge">Feb 2025 - May 2025</span>
                <h3>TRAINEE DEVELOPER</h3>
                <p style={{color: '#888'}}>SLT Digital Services</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="date-badge">Oct 2023 - Present</span>
                <h3>FREELANCE WEB DEVELOPER</h3>
                <p style={{color: '#888'}}>NEXON Marketing</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="reveal">
          <div className="watermark watermark-center" style={{opacity: 0.03, top:'60%'}}>SKILLS</div>
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-slider" style={{ marginBottom: '30px' }}>
            <div className="slide-track">
              {skillsRow1.map((skill, index) => (
                <div className="skill-card" key={`1a-${index}`}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
              {skillsRow1.map((skill, index) => (
                <div className="skill-card" key={`1b-${index}`}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-slider">
            <div className="slide-track slide-track-reverse">
              {skillsRow2.map((skill, index) => (
                <div 
                  className="skill-card" 
                  key={`2a-${index}`} 
                  style={{ width: '180px', minWidth: '180px', height: '80px', justifyContent: 'center' }}
                >
                  <span style={{ marginTop: '0', fontSize: '1.1rem', fontWeight: '500' }}>{skill.name}</span>
                </div>
              ))}
              {skillsRow2.map((skill, index) => (
                <div 
                  className="skill-card" 
                  key={`2b-${index}`} 
                  style={{ width: '180px', minWidth: '180px', height: '80px', justifyContent: 'center' }}
                >
                  <span style={{ marginTop: '0', fontSize: '1.1rem', fontWeight: '500' }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Projects Section (Clickable) --- */}
        <section id="projects" className="reveal">
          <div className="watermark watermark-left" style={{top:'-10%'}}>BUILD</div>
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id} onClick={() => setSelectedProject(project)}>
                <div className="project-img-wrapper">
                  <img className="project-img" src={project.img} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc.substring(0, 80)}...</p>
                  <div className="tech-stack">
                    {project.stack.map((tech, i) => (
                      <span className="tech-tag" key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links-wrapper">
                    <span className="project-link"><FaExternalLinkAlt /> View Details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Education Section --- */}
        <section id="education" className="reveal">
          <div className="watermark watermark-right" style={{top:'10%'}}>LEARN</div>
          <h2 className="section-title">Education Journey</h2>
          
          <div className="education-grid">
            <div className="edu-card">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <span className="edu-year-badge" style={{background:'rgba(0,148,198,0.1)', padding:'5px 10px', borderRadius:'10px', color:'var(--ocean-light)', fontSize:'0.8rem'}}>2021 - 2024</span>
                <FaUniversity style={{fontSize:'2.5rem', color:'rgba(255,255,255,0.05)'}} />
              </div>
              <h3 className="edu-title" style={{marginTop:'10px'}}>BSC (HONS) SOFTWARE ENGINEERING</h3>
              <p className="edu-place">University of Plymouth, UK</p>
              <p style={{color:'#8892b0', marginTop:'15px', fontSize:'0.9rem'}}>
                Specialized in full-stack development. Graduated with First Class Honours.
              </p>
            </div>

            <div className="edu-card">
               <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <span className="edu-year-badge" style={{background:'rgba(0,148,198,0.1)', padding:'5px 10px', borderRadius:'10px', color:'var(--ocean-light)', fontSize:'0.8rem'}}>2020</span>
                <FaSchool style={{fontSize:'2.5rem', color:'rgba(255,255,255,0.05)'}} />
              </div>
              <h3 className="edu-title" style={{marginTop:'10px'}}>G.C.E ADVANCED LEVEL</h3>
              <p className="edu-place">Maliyadeva Model College, Kurunegala</p>
              <p style={{color:'#8892b0', marginTop:'15px', fontSize:'0.9rem'}}>
                Physical Science Stream. Achieved District Rank within top 100.
              </p>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="reveal">
          <div className="contact-wrapper">
            <div className="contact-form-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                Interested in <span className="green-text" style={{color: 'var(--ocean-light)'}}>Collaboration?</span>
              </h3>
              <p style={{ marginBottom: '35px', color: '#a0a0c0', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '90%' }}>
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="btn-group">
                <a href="mailto:lakmewang@gmail.com" className="btn btn-fill">
                  SAY HELLO <FaEnvelope style={{ marginLeft: '10px' }}/>
                </a>
                <a href="https://drive.google.com/file/d/180qyTdEfeCEgiRMidHo2y_RJhq5msPZJ/view?usp=sharing" className="btn btn-outline">
                  VIEW RESUME <FaDownload style={{ marginLeft: '10px' }}/>
                </a>
              </div>
            </div>

            <div className="contact-info-box">
               <div className="vertical-text">CONNECT</div>
               <div className="info-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center', width: '100%' }}>
                 <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                   <div className="s-icon"><FaEnvelope /></div>
                   <span style={{ fontWeight: '500', fontSize:'1.1rem' }}>lakmewang@gmail.com</span>
                 </div>
                 <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                   <div className="s-icon"><FaPhone /></div>
                   <span style={{ fontWeight: '500', fontSize:'1.1rem' }}>+94 76 8411 372</span>
                 </div>
                 <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                   <div className="s-icon"><FaMapMarkerAlt /></div>
                   <span style={{ fontWeight: '500', fontSize:'1.1rem' }}>Rajagiriya, Sri Lanka</span>
                 </div>
                 <div className="social-row" style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
                   <a href="https://github.com/lakmewang" target="_blank" rel="noreferrer" className="s-icon">
                     <FaGithub style={{fontSize:'1.2rem'}}/>
                   </a>
                   <a href="https://lk.linkedin.com/in/lakmewan-gayantha-413365250" target="_blank" rel="noreferrer" className="s-icon">
                     <FaLinkedin style={{fontSize:'1.2rem'}}/>
                   </a>
                   <a href="https://www.facebook.com/people/Lakmewan-Gayantha/100011020021151" target="_blank" rel="noreferrer" className="s-icon">
                     <FaFacebook style={{fontSize:'1.2rem'}}/>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <footer style={{
          borderTop: '1px solid #1f1f35', padding: '30px 0', marginTop: '50px', 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
          color: '#666', fontSize: '0.9rem'
        }}>
          <span>© 2026 Lakmewan G</span>
        </footer>

        {/* --- SCROLL TO TOP BUTTON --- */}
        <button 
          className={`scroll-to-top-btn ${showScrollBtn ? 'visible' : ''}`} 
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>

      </div>

      {/* --- PROJECT DETAILS POPUP (MODAL) --- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            
            <div className="modal-body">
              <div className="modal-img-container">
                <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
              </div>
              <div className="modal-text">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <h4 className="modal-subtitle">{selectedProject.subtitle}</h4>
                <p className="modal-desc">{selectedProject.desc}</p>
                
                <div className="modal-features">
                  {selectedProject.features.map((feature, index) => (
                    <div className="modal-feature-item" key={index}>
                      <FaCheckCircle color="var(--ocean-main)" /> {feature}
                    </div>
                  ))}
                </div>

                <div className="tech-stack" style={{marginBottom:'30px'}}>
                  {selectedProject.stack.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.links.github} className="btn btn-outline" target="_blank" rel="noreferrer">
                    <FaGithub style={{marginRight: '8px'}}/> GitHub
                  </a>
                  <a href={selectedProject.links.live} className="btn btn-fill" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt style={{marginRight: '8px'}}/> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;