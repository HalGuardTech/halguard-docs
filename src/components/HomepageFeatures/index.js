import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import PNG images properly
import VoiceCallImg from '../../../static/img/voice_call.png';
import AnalysisImg from '../../../static/img/analysis.png';
import CloudDeploymentImg from '../../../static/img/cloud_deployment.png';

const FeatureList = [
  {
    title: 'Real-Time Voice Clone Detection',
    Img: VoiceCallImg,
    description: (
      <>
        HalGuard VoiceShield detects AI-generated voice clones in live calls and recordings with
        <strong> sub-200ms latency</strong>, protecting your business from CEO fraud, call center impersonation, and voice-based social engineering attacks.
      </>
    ),
  },
  {
    title: 'Explainable Fraud Signals',
    Img: AnalysisImg,
    description: (
      <>
        Our detection engine provides clear, explainable risk scores with reasons like
        <strong> pitch anomalies, GAN artifacts, and jitter analysis</strong> — not just black-box decisions.
      </>
    ),
  },
  {
    title: 'API-First and Deployment-Ready',
    Img: CloudDeploymentImg,
    description: (
      <>
        Integrate HalGuard easily with your workflows using
        <strong> REST APIs, webhooks, and SDKs</strong>. Choose SaaS, on-prem, or edge deployments to meet your data residency and compliance needs.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
