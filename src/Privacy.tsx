import { useNavigate } from 'react-router-dom';
import Particles from './Particles.tsx';

export default function Privacy() {
  const navigate = useNavigate();

  const sectionStyle: React.CSSProperties = {
    marginBottom: '40px',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: '"Inter", "DM Sans", sans-serif',
    fontSize: '20px',
    fontWeight: 600,
    color: 'white',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  };

  const textStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '15px',
    lineHeight: 1.8,
    margin: '0 0 12px',
    letterSpacing: '-0.01em',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px 100px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div className="bg-glow-top" />
      <div className="bg-glow-bottom" />
      <div className="bg-noise" />
      <Particles />

      {/* Back arrow */}
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed', top: '28px', left: '32px',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.6)', fontSize: '22px',
          display: 'flex', alignItems: 'center', gap: '8px',
          zIndex: 10,
        }}
      >
        ← <span style={{ fontSize: '14px', letterSpacing: '0.05em' }}>Back</span>
      </button>

      {/* Content card */}
      <div style={{
        width: '100%', maxWidth: '720px',
        position: 'relative', zIndex: 1,
        marginTop: '40px',
      }}>

        {/* Title */}
        <h1 style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: 'clamp(40px, 7vw, 64px)',
          fontWeight: 400,
          textAlign: 'center',
          color: 'white',
          margin: '0 0 12px',
          lineHeight: 1.1,
        }}>
          Privacy Policy
        </h1>

        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '14px',
          margin: '0 0 60px',
          letterSpacing: '-0.01em',
        }}>
          Last updated: March 18, 2026
        </p>

        {/* Glass card */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          padding: 'clamp(28px, 5vw, 48px)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>1. Information We Collect</h2>
            <p style={textStyle}>
              We collect information that you voluntarily provide when you contact us through our website,
              including your name, email address, and message content. We may also collect technical data
              such as your IP address, browser type, and device information through standard web server logs.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>2. How We Use Your Information</h2>
            <p style={textStyle}>
              The information we collect is used solely to respond to your inquiries, provide our video
              production and editing services, and improve our website experience. We do not sell, rent,
              or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>3. Cookies &amp; Analytics</h2>
            <p style={textStyle}>
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience. These may include essential cookies required for site functionality, as well
              as analytics cookies that help us understand how visitors interact with our site. You can
              control cookie preferences through your browser settings.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>4. Data Security</h2>
            <p style={textStyle}>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>5. Third-Party Services</h2>
            <p style={textStyle}>
              Our website may contain links to third-party sites or integrate services such as hosting
              providers and analytics platforms. These third parties have their own privacy policies,
              and we are not responsible for their practices. We encourage you to review their policies
              before providing any personal information.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>6. Your Rights</h2>
            <p style={textStyle}>
              You have the right to access, correct, or delete your personal information at any time.
              You may also request that we restrict processing of your data or object to certain uses.
              To exercise these rights, please contact us using the information provided on our contact page.
            </p>
          </div>

          <div style={{ ...sectionStyle, marginBottom: 0 }}>
            <h2 style={headingStyle}>7. Contact Us</h2>
            <p style={textStyle}>
              If you have any questions about this Privacy Policy or our data practices, please reach
              out through our{' '}
              <span
                onClick={() => navigate('/contact')}
                style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', cursor: 'pointer' }}
              >
                contact page
              </span>.
              We will respond to your inquiry as promptly as possible.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
