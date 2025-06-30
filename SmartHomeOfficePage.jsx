import React from 'react';
import FloatingButtons from '../sections/enterprise/floatingbutton';

function SmartHomeOfficePage() {
  const headerStyle = {
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#1F77EE',
    marginBottom: '30px',
    marginTop: '30px',
  };

  const paragraphStyle = {
    textAlign: 'center',
    marginBottom: '15px',
    marginTop: '15px',
    color: '#000000',
    fontSize: '22px',
  };

  const listStyle = {
    color: '#000000',
    fontSize: '19px',
    marginLeft: '20px',
    marginBottom: '10px',
    textAlign: 'center',
  };

  return (
    <>
      <FloatingButtons />
      <div className="container my-5" style={{ maxWidth: '70%', margin: '0 auto' }}>
        <h1 className="text-center" style={headerStyle}>Smart Home / Smart Office</h1>
        <p style={paragraphStyle}>A smart home uses Internet of Things (IoT) devices and wireless connectivity to allow remote or automated control of various home systems.</p>
        <h2 className="text-center" style={headerStyle}>Benefits of Smart Home Solutions</h2>
        <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
          <li style={listStyle}>Convenience – Control everything from mobile app or with voice</li>
          <li style={listStyle}>Security – Real-time alerts, remote locks, smart surveillance</li>
          <li style={listStyle}>Energy Savings – Lights and devices only when needed</li>
          <li style={listStyle}>Remote Access – Monitor and control from anywhere</li>
          <li style={listStyle}>Accessibility – Great for elderly or differently-abled users</li>
        </ul>
        <h2 className="text-center" style={headerStyle}>Why Choose BSNL Smart Office Solutions?</h2>
        <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
          <li style={listStyle}>Nationwide Network — PAN-India fiber and 4G/5G coverage</li>
          <li style={listStyle}>Robust Infrastructure — Tier-III Data Centers & Cloud Hosting</li>
          <li style={listStyle}>Scalable Solutions — From 5 to 5,000 users</li>
          <li style={listStyle}>Trusted Government Entity — Secure and reliable</li>
        </ul>
      </div>
    </>
  );
}

export default SmartHomeOfficePage;
