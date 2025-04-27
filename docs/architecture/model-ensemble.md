# Detection Engine: Model Ensemble

VoiceShield uses an **ensemble of neural networks** combined with a rule-based contextual engine to achieve high detection accuracy while maintaining explainability.

---

## 🏗️ Model Components

| Model           | Input                         | Purpose                                |
|-----------------|------------------------------|-----------------------------------------|
| **CNN (ResNet-18)**    | Spectrogram images           | Detect GAN vocoder artifacts            |
| **BiLSTM**              | MFCC + pitch time series     | Temporal consistency analysis          |
| **Rule Engine**         | Call metadata, geo, caller ID | Risk signal amplification (e.g., high-risk region overrides) |

---

## 🧠 Model Architecture Diagram

```mermaid
graph TD;
    A[Spectrogram] --> B[CNN (ResNet-18)];
    A2[MFCC + Pitch Time Series] --> C[BiLSTM];
    B & C --> D[Risk Aggregation + Rule Engine];
    D --> E[Risk Score + Explainability Report];
```

## ⚖️ Loss Function and Training Strategy
- Weighted Binary Cross-Entropy to prioritize low false negatives.

- Adversarial augmentation:

    - Vocoder perturbations.

    - Additive noise.

    - Time-warped clones.

- Zero-day generalization through continuous dataset updates from clone providers like ElevenLabs, Respeecher, Tortoise-TTS.

```python
def loss_function(y_true, y_pred):
    return tf.keras.losses.binary_crossentropy(y_true, y_pred, pos_weight=10.0)
```

## 🛡️ Why Ensemble Works Better
- GAN artifacts might be missed by time-series alone.

- Pitch anomalies might be invisible in single spectrogram frames.

- Contextual signals (geo, metadata) enhance decision-making.