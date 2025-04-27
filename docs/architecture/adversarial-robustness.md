# Adversarial Robustness & Model Hardening

VoiceShield is designed to withstand **active attempts to bypass detection** using adversarial manipulation, vocoder perturbation, and zero-day clone generators.

---

## 🦠 Known Attack Vectors

| Attack Type                  | Description                                  | VoiceShield Defense               |
|--------------------------------|----------------------------------------------|------------------------------------|
| **White Noise Injection**      | Add random noise to cover clone artifacts   | Spectral flatness checks          |
| **Pitch Warping / Perturbation** | Shift F0 to evade pitch analysis            | Adaptive pitch normalization + LSTM smoothing detection |
| **GAN Vocoder Variants**       | Novel vocoders like HiFi-GAN, WaveGlow      | Trained on diverse vocoder dataset including adversarial augmentation |
| **Replay / Record-and-Play**   | Use real recorded speech snippets           | Jitter, shimmer, and frame consistency analysis |

---

## 🧪 Adversarial Training Approach

- **20% of training dataset includes adversarially perturbed clones.**
- **Techniques used:**  
  - FGSM (Fast Gradient Sign Method).  
  - PGD (Projected Gradient Descent).  
  - Time-stretching and compression attacks.  
  - Reverb and packet-loss simulation.

---

## 📉 Drift Monitoring

- **Kolmogorov-Smirnov tests** on score distributions.
- **Alert system for anomaly in prediction rates.**
- **Model retraining loop** triggered on drift detection.

---

## 🛡️ Defense in Depth

- Behavioral context (VPN usage, location risk factors).  
- Model version control with rollback capability.  
- Continuous clone generator monitoring (tracking ElevenLabs, Respeecher, etc.).
