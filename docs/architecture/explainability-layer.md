# Explainability & Decision Layer

The Explainability Layer provides **human-understandable reasoning** behind every detection decision — helping compliance teams, security analysts, and investigators trust the model outputs.

---

## 📌 Fraud Signal Output Format

```json
{
  "risk_score": 0.92,
  "is_synthetic": true,
  "reasons": [
    {"feature": "pitch", "anomaly": "low variability", "confidence": 0.91},
    {"feature": "spectrogram", "anomaly": "GAN artifacts detected", "confidence": 0.87}
  ],
  "metadata": {
    "caller_id": "+1234567890",
    "geolocation": "Nigeria (VPN detected)"
  },
  "recommended_action": "block"
}
```

## 💡 How We Generate Reason Codes

|Feature	          | Detection Focus	                | Sample Reason Code    |
|---------------------|---------------------------------|-----------------------|
|Pitch Variability    |	Over-regularized F0 pattern     | low_variability       |
|Spectrogram Artifacts|	GAN noise fingerprints          | GAN_artifacts_detected|
|MFCC Smoothing       |	Harmonic structure anomalies    | unnatural_harmonics   |
|Behavioral Context   |	Geo-IP, caller ID, VPN, metadata| high_risk_region      |

## 🎯 Why Explainability Matters
- ✅ Required for regulatory audits (FINRA, SEC, BaFin).
- ✅ Builds trust with fraud teams.
- ✅ Enables manual review and override logic when needed.

## 📊 Model Versioning in Reports
All detections are version-tagged:

```json
"model_version": "voiceshield-v3.2.0",
"training_date": "2024-03-10"
```
This ensures full traceability for compliance and model drift monitoring