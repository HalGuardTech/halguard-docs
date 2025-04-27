# Feature Extraction Layer

The feature extraction layer transforms raw audio into **spectral and temporal representations** that allow our detection models to recognize AI-generated speech patterns.

---

## 🧬 Core Features Extracted

| Feature Type               | Description                                | Why It Matters                       |
|----------------------------|--------------------------------------------|---------------------------------------|
| **Mel Spectrogram (128 bands)** | Short-Term Fourier Transform to Mel scale | GAN artifacts appear as unnatural patterns |
| **MFCC + Delta-MFCC (13+13)**  | Captures harmonic structure + changes over time | Synthetic voices exhibit smoothing here |
| **Pitch Contour (F0 Tracking)** | Measures voice frequency across time     | Clones often show stable, low variability |
| **Jitter & Shimmer Analysis**   | Vocal fold micro-instability metrics      | AI voices lack real vocal tremors    |

---

## 🎼 Feature Extraction Flow (Simplified)

```python
def extract_features(chunk):
    spectrogram = librosa.feature.melspectrogram(y=chunk, sr=16000, n_mels=128)
    mfccs = librosa.feature.mfcc(S=spectrogram, n_mfcc=13)
    delta_mfccs = librosa.feature.delta(mfccs)
    pitch, _ = pyworld.dio(chunk, 16000)
    jitter, shimmer = compute_jitter_shimmer(chunk)
    return {
        "spectrogram": spectrogram,
        "mfcc": np.concatenate([mfccs, delta_mfccs]),
        "pitch": pitch,
        "jitter": jitter,
        "shimmer": shimmer
    }
```

## 🛡️ Why These Features?
- ✅ Detect smoothness in MFCCs caused by vocoder generation.
- ✅ Identify lack of jitter/shimmer (human vocal signature).
- ✅ Spot pitch flattening in synthetic voices.