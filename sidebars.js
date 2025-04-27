/**
 * HalGuard Documentation Sidebar Configuration
 */

module.exports = {
  halguardSidebar: [
    {
      type: 'category',
      label: '🚀 Welcome to HalGuard',
      collapsed: false,
      items: [
        'intro/what-is-halguard',
        'intro/halguard-dashboard',
        'intro/our-approach',
        'intro/current-focus-voiceshield',
        'intro/roadmap-overview',
      ],
    },
    {
      type: 'category',
      label: '🌐 Core Concepts & Threat Landscape',
      collapsed: false,
      items: [
        'core-concepts/generative-threats-overview',
        'core-concepts/attack-scenarios',
        'core-concepts/why-biometrics-fail',
      ],
    },
    {
      type: 'category',
      label: '🛡️ Product: HalGuard VoiceShield',
      collapsed: false,
      items: [
        'voice-shield/overview',
        'voice-shield/use-cases',
        'voice-shield/detection-pipeline',
        'voice-shield/roadmap',
      ],
    },
    {
      type: 'category',
      label: '🧩 Detection Architecture',
      collapsed: false,
      items: [
        'architecture/system-overview',
        'architecture/preprocessing',
        'architecture/feature-extraction',
        'architecture/model-ensemble',
        'architecture/explainability-layer',
        'architecture/adversarial-robustness',
      ],
    },
    /*{
      type: 'category',
      label: '📡 API Reference & Developer Guide',
      collapsed: false,
      items: [
        'api-guide/getting-started',
        'api-guide/authentication',
        'api-guide/real-time-stream-api',
        'api-guide/batch-analysis-api',
        'api-guide/webhooks-alerts',
        'api-guide/admin-monitoring',
        'api-guide/code-examples',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Deployment & Scaling',
      collapsed: false,
      items: [
        'deployment/deployment-options',
        'deployment/terraform-examples',
        'deployment/kubernetes-setup',
        'deployment/performance-optimization',
        'deployment/failure-modes',
      ],
    },
    {
      type: 'category',
      label: '🔍 Explainability & Compliance',
      collapsed: false,
      items: [
        'explainability/fraud-signal-breakdown',
        'explainability/decision-logging',
        'explainability/model-version-control',
        'explainability/compliance-readiness',
      ],
    },*/
    {
      type: 'category',
      label: '🏆 Competitive Intelligence',
      collapsed: false,
      items: [
        'competition/market-landscape',
        'competition/competitor-comparison',
        'competition/why-halguard-wins',
        'competition/strategic-positioning',
      ],
    },
    {
      type: 'category',
      label: '🔒 Security & Privacy',
      collapsed: false,
      items: [
        'security/data-handling',
        'security/gdpr-bafin-compliance',
        'security/customer-data-control',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Roadmap & Release Notes',
      collapsed: false,
      items: [
        'roadmap/product-milestones',
        'roadmap/release-changelog',
      ],
    },
    {
      type: 'category',
      label: '💎 Product Pricing',
      collapsed: false,
      items: [
        'pricing/pricing',
      ],
    },
    /*{
      type: 'category',
      label: '💬 Support & Community',
      collapsed: false,
      items: [
        'community/contact-support',
        'community/faq',
        'community/bug-reporting',
        'community/join-community',
      ],
    },*/
  ],
};
