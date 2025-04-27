# Customer Data Control & Privacy Features

HalGuard gives customers **full control** over how their data is handled — from detection logs to audio storage policies.

---

## ⚙️ Bring Your Own Storage (BYOS)

Customers can configure HalGuard to:

- Store detection logs **directly in their own S3 buckets or Azure Blob Storage.**
- Retain complete control over **deletion policies, encryption keys, and access rights.**
- Separate storage for **different regions (EU, US, APAC)** for cross-border data compliance.

---

## 🛠️ Audio Retention Settings

| Setting                     | Behavior                          |
|-----------------------------|------------------------------------|
| `audio_storage: disabled`     | No audio saved (default)          |
| `audio_storage: short_term`   | Retain up to 24 hours for investigation |
| `audio_storage: extended`     | Customer-defined retention in BYOS setup |

---

## 🗂️ Data Access Control

- Role-based access control (RBAC) for your team members.
- Optional **SAML / SSO integrations** for enterprise customers.
- API key and secret management via dashboard or CLI.

---

## 🔒 Encryption & Security Policies

| Data Type            | Encryption                           |
|----------------------|----------------------------------------|
| Audio Data           | AES-256 at rest, TLS 1.2+ in transit  |
| Metadata & Logs      | AES-256 at rest, TLS 1.2+ in transit  |
| Key Management       | AWS KMS / Customer-managed keys       |

---

## 📌 Privacy and Compliance Summary

✅ No data processed outside the agreed regions.  
✅ Fully auditable data flows.  
✅ Easy to implement **data subject access requests (DSAR)**.

🔗 For compliance-specific questions, contact **info@halguard.com**.
