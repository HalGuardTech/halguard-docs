# Preprocessing Pipeline

Preprocessing is the first critical step in VoiceShield’s detection pipeline. It **normalizes input quality** and **enhances signal clarity** to ensure high detection accuracy, even in noisy environments like VoIP streams.

---

## 🗜️ Preprocessing Steps

| Step                    | Purpose                                | Technology Used                |
|--------------------------|----------------------------------------|---------------------------------|
| Noise Suppression        | Remove background hiss, crosstalk      | RNNoise / Spectral Subtraction |
| Voice Activity Detection (VAD) | Trim silence, optimize compute usage | Silero VAD                     |
| Resampling               | Normalize all audio to 16kHz           | FFmpeg / Librosa               |
| Packet Loss Concealment (PLC) | Smooth over VoIP artifacts          | Custom PLC module              |

---

## 🎯 Why Preprocessing Matters

- **VoIP distortions** can mask GAN artifacts if not cleaned.
- **Silence trimming** speeds up processing without losing data integrity.
- **Uniform sample rate** ensures consistent feature extraction across devices.

---

## 📡 Stream Handling Logic (Pseudocode)

```python
def preprocess_audio(stream_chunk):
    denoised = rnnoise.process(stream_chunk)
    active_segments = silero_vad(denoised)
    resampled = librosa.resample(active_segments, orig_sr=8000, target_sr=16000)
    final_chunks = segment_audio(resampled, frame_length=500ms)
    return final_chunks
```