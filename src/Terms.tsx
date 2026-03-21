import { useNavigate } from 'react-router-dom';

export default function Terms() {
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
      background: 'rgb(0,0,0)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px 100px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <div className="bg-blob bg-blob-4" />
      <div className="bg-noise" />

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
          Terms of Service
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
            <h2 style={headingStyle}>1. Agreement to Terms</h2>
            <p style={textStyle}>
              By accessing or using our website and services, you agree to be bound by these Terms of
              Service. If you do not agree to any part of these terms, you may not access the website
              or use our services.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>2. Services</h2>
            <p style={textStyle}>
              We provide professional video production, editing, and related creative services including
              but not limited to video editing, music video production, social media marketing videos,
              podcast editing, and drone videography. The scope, timeline, and deliverables for each
              project will be agreed upon in writing before work commences.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>3. Intellectual Property</h2>
            <p style={textStyle}>
              All content on this website, including text, graphics, logos, images, and software, is our
              property or the property of our licensors and is protected by intellectual property laws.
              Upon full payment, clients receive a license to use the final deliverables for their
              intended purpose. Raw footage and project files remain our property unless otherwise agreed.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>4. Client Responsibilities</h2>
            <p style={textStyle}>
              Clients are responsible for providing accurate project briefs, necessary assets, and timely
              feedback. Delays caused by late provision of materials or feedback may affect project
              timelines. Clients warrant that all materials provided to us do not infringe upon any
              third-party rights.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>5. Payment Terms</h2>
            <p style={textStyle}>
              Payment terms will be outlined in the project agreement. A deposit may be required before
              work begins. Final deliverables will be released upon receipt of full payment. Late
              payments may incur additional fees as outlined in the project agreement.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>6. Revisions &amp; Cancellations</h2>
            <p style={textStyle}>
              Each project includes a specified number of revision rounds as agreed in the project scope.
              Additional revisions beyond the agreed amount may incur extra charges. Cancellation policies
              and refund terms will be specified in the individual project agreement.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>7. Limitation of Liability</h2>
            <p style={textStyle}>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from the use of our services or website.
              Our total liability shall not exceed the amount paid by the client for the specific service
              giving rise to the claim.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>8. Modifications</h2>
            <p style={textStyle}>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting to the website. Your continued use of our services after any
              modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          <div style={{ ...sectionStyle, marginBottom: 0 }}>
            <h2 style={headingStyle}>9. Contact</h2>
            <p style={textStyle}>
              If you have questions about these Terms of Service, please reach out through our{' '}
              <span
                onClick={() => navigate('/contact')}
                style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', cursor: 'pointer' }}
              >
                contact page
              </span>.
              We're happy to clarify any aspect of these terms.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
