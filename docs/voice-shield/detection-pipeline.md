# VoiceShield Detection Pipeline

VoiceShield's detection pipeline is designed for **real-time fraud defense with sub-200ms latency**. It analyzes incoming audio streams for synthetic generation artifacts using a robust, multi-layered architecture.

---

## 📡 Step 1: Audio Ingestion

- Supports **WebRTC, SIP, Twilio Flex, Amazon Connect, Genesys**.
- Accepts **8kHz–16kHz mono audio** (telecom-grade).
- Handles **packet loss and jitter buffering**.

---

## 🔊 Step 2: Preprocessing

| Step              | Purpose                       |
|-------------------|-------------------------------|
| Noise Reduction   | RNNoise / Spectral Subtraction |
| Voice Activity Detection (VAD) | Remove silence, save compute |
| Resampling        | Normalize all audio to 16kHz  |
| PLC (Packet Loss Concealment) | Smooth VoIP artifacts      |

---

## 🧠 Step 3: Feature Extraction

| Feature Type                   | Why It Matters                 |
|----------------------------------|---------------------------------|
| Mel Spectrogram (128 bands)      | Exposes GAN vocoder patterns   |
| MFCC + Delta-MFCC                | Captures harmonic structures   |
| Pitch Contour (F0) Variability   | Synthetic voices have stable, over-regularized pitch |
| Jitter & Shimmer Metrics         | Measures vocal fold micro-instabilities absent in AI clones |

---

## 🧩 Step 4: Detection Engine (Ensemble Model)

| Model Type             | Purpose                               |
|------------------------|----------------------------------------|
| CNN (ResNet-18)         | Spectrogram anomaly detection         |
| BiLSTM                  | Temporal sequence analysis (pitch, MFCC time series) |
| Rule Engine             | Contextual fraud signal amplification (geo-risk, caller ID, metadata) |

---

## 📝 Step 5: Explainability Layer

- Output includes:
  - **Risk Score (0.0–1.0)**  
  - **Reasons for Detection (e.g., "pitch anomaly," "GAN harmonics")**  
  - **Confidence levels per feature**  
  - **Metadata context (geo, caller ID, device fingerprint)**

```json
{
  "risk_score": 0.87,
  "reasons": [
    {"feature": "pitch", "anomaly": "low_variability", "confidence": 0.92},
    {"feature": "spectrogram", "anomaly": "GAN_artifacts", "confidence": 0.85}
  ],
  "metadata": {
    "caller_id": "+441234567890",
    "geolocation": "Nigeria (VPN detected)"
  }
}
