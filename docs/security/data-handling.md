# Data Handling & Retention Policy

HalGuard VoiceShield is built with **security and privacy by design**. We understand that our customers operate in regulated industries like **banking, fintech, telecom, and identity verification**, where sensitive personal data is involved.

---

## 📂 What Data HalGuard Processes

| Data Type                | Description                                 | Usage                      |
|--------------------------|---------------------------------------------|---------------------------|
| Audio Streams / Files     | Voice samples for fraud detection           | Processed for clone analysis (not stored by default) |
| Metadata (caller ID, geo-IP) | Optional context for fraud scoring        | Used for contextual fraud signals |
| Detection Logs           | Risk scores, detection reasons, model version | Stored for auditability, compliance, and analytics |

---

## 🛡️ Data Retention Defaults

| Data Category              | Retention Period       | Configurable?      |
|----------------------------|-----------------------|-------------------|
| Detection Logs             | 180 days               | ✅ Yes (per customer policy) |
| Audio Snippets (if enabled) | 24 hours (default)     | ✅ Yes            |
| Model Training Data        | Retained indefinitely (non-customer-specific synthetic datasets) | ❌ No (publicly sourced data) |

---

## 🚫 Audio Storage Policy

- **By default, HalGuard does not store raw audio streams.**
- Customers can opt-in for **short-term audio snippet retention** for investigation or audit purposes.
- Audio data is encrypted **in transit and at rest** when stored.

---

## 🔒 Data Anonymization Support

- Metadata fields like caller ID can be **hashed or redacted** upon request.
- Supports **pseudonymization** for detection logs.
- Compliant with **GDPR right to be forgotten (RTBF)** requests.

✅ Continue to [GDPR & BaFin Compliance](./gdpr-bafin-compliance.md).
