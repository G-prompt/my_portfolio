import type React from 'react';
import './Certifications.css';
const documents = [
  {
    number: '01',
    title: 'Mimo Certificate 125',
    detail: 'Certificate PDF',
    file: 'mimo-certificates-125.pdf',
    label: 'Open certificate PDF',
  },
  {
    number: '02',
    title: 'Mimo Certificate 194',
    detail: 'Certificate PDF',
    file: 'mimo-certificates-194.pdf',
    label: 'Open certificate PDF',
  },
  {
    number: '03',
    title: 'Mimo Certificate 225',
    detail: 'Certificate PDF',
    file: 'mimo-certificates-225.pdf',
    label: 'Open certificate PDF',
  },
  {
    number: '04',
    title: 'Mimo Certificate 228',
    detail: 'Certificate PDF',
    file: 'mimo-certificates-228.pdf',
    label: 'Open certificate PDF',
  },
  {
    number: '05',
    title: 'Mimo Certificate 243',
    detail: 'Certificate PDF',
    file: 'mimo-certificates-243.pdf',
    label: 'Open certificate PDF',
  },
  {
    number: '06',
    title: 'VLSI System-on-Chip Design',
    detail: 'Document title: Overview',
    file: '243175-VLSI_System_On_Chip_Design_-_Overview-Goodluck_Emmanuel.pdf',
    label: 'Open document',
  },
  {
    number: '07',
    title: 'certificate.pdf',
    detail: 'Certificate file',
    file: 'certificate.pdf',
    label: 'Open certificate PDF',
  },
];

const Certifications: React.FC = () => (
  <main className="certifications">
    <header className="certifications-header">
      <p className="certifications-eyebrow">Documents / learning & credentials</p>
      <h1>Work worth<br /><em>keeping.</em></h1>
      <p className="certifications-subtitle">The documents currently available to review. Titles and details are limited to what the files confirm.</p>
    </header>
    <section className="certification-list" aria-label="Available documents">
      {documents.map(document => (
        <article key={document.number} className="certification-row">
          <span className="certification-number">{document.number}</span>
          <div className="certification-copy">
            <h2>{document.title}</h2>
            <p>{document.detail}</p>
          </div>
          <span className="certification-format">PDF</span>
          <div className="certificate-preview">
            <iframe
              src={`/certificates/${document.file}#page=1&toolbar=0&navpanes=0`}
              title={`${document.title} first-page preview`}
              loading="lazy"
            />
          </div>
          <a className="credential-link" href={`/certificates/${document.file}`} target="_blank" rel="noreferrer">
            {document.label} <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </section>
  </main>
);

export default Certifications;
