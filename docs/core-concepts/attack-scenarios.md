# Real-World Attack Scenarios

Synthetic media attacks are not hypothetical — they are already impacting financial institutions, governments, and enterprises globally.

---

## 🏦 Financial Fraud (Voice Clone CEO Scams)

- **Attack Pattern:**  
  Fraudsters clone the voice of a company’s CFO or CEO.  
  They call the finance team requesting "urgent" wire transfers.

- **Why It Works:**  
  The voice matches known voiceprints or passes phone-based identity checks.  
  Human operators are emotionally manipulated ("urgent business deal," "confidential transaction").

---

## 🧑‍💼 Call Center Impersonation

- **Attack Pattern:**  
  Criminals use cloned customer voices to reset passwords or bypass KYC processes.

- **Why It Works:**  
  Many voice biometrics systems are vulnerable to high-quality synthetic speech.  
  Live agents trust recognizable voice characteristics.

---

## 🎥 Video Deepfake Disinformation

- **Attack Pattern:**  
  Fake interviews, manipulated leadership videos, or investor update videos using face-swaps or lip sync fakes.

- **Why It Works:**  
  Visual verification is still manual and error-prone.  
  Social media spreads fakes faster than corrections can be issued.

---

## 📧 AI-Generated Phishing

- **Attack Pattern:**  
  LLM-generated phishing emails with contextually correct details (names, deals, timing).  
  May include voice or video attachments to increase credibility.

- **Why It Works:**  
  AI-generated content sounds natural, fluent, and bypasses keyword-based spam filters.

---

## 🔍 Summary of Vulnerable Workflows

| Workflow                     | Attack Vector              | Outcome                        |
|--------------------------------|---------------------------|---------------------------------|
| Wire Transfer Approvals       | Voice clone of CFO         | Fraudulent transfer executed  |
| Call Center Authentication    | Cloned customer voice      | Account takeover               |
| KYC / Onboarding Interviews   | Cloned applicant voice     | Fraudulent approval            |
| Executive Communication       | Deepfake video or audio    | Investor panic, brand damage   |

---

## 🛡️ How HalGuard Neutralizes These Threats

HalGuard does **not rely on identity matching** — instead, we:

- Detect **AI-specific speech patterns**.
- Identify **GAN artifacts in video frames**.
- Flag **synthetic phishing language structures**.
- Provide **fraud signal explainability** so humans can verify decisions.
