# GDPR & BaFin Compliance Overview

HalGuard is designed to help customers meet **EU General Data Protection Regulation (GDPR)** and **German BaFin (Federal Financial Supervisory Authority)** requirements, especially around **data privacy, retention, auditability, and explainability**.

---

## ✅ GDPR Key Principles Supported

| Principle                      | HalGuard Implementation                        |
|----------------------------------|------------------------------------------------|
| Data Minimization               | Only required data (audio segments + metadata) is processed |
| Purpose Limitation              | Voice data is processed exclusively for fraud detection |
| Right to Deletion               | Customers may delete detection logs and associated metadata |
| Right to Access                 | All data linked to an individual is retrievable upon request |
| Security of Processing          | Encryption at rest & transit, strict access control policies |

---

## 🇩🇪 BaFin (Germany) Requirements

| BaFin Focus Area            | HalGuard Approach                         |
|-----------------------------|--------------------------------------------|
| Data Residency               | Optional on-prem or EU-hosted infrastructure |
| Auditability & Explainability| Model versioning, detection logs, fraud signal reasons |
| Retention Policies           | Configurable retention periods, customer-controlled storage |
| Risk Management              | Drift monitoring, adversarial training to prevent detection failures |

---

## 🟢 Data Residency & Deployment

| Customer Location            | Recommended Deployment Model              |
|------------------------------|--------------------------------------------|
| Germany / EU                  | On-premises or EU region cloud instance   |
| USA / North America           | HalGuard SaaS (multi-region) or BYOS (Bring Your Own Storage) |
| Global / Mixed Regions        | Hybrid architecture (BYOS + HalGuard-managed APIs) |

✅ Learn more about [Customer Data Control](./customer-data-control.md).
