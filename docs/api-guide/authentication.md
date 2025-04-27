# API Authentication

HalGuard APIs use **API keys with client secrets** to authenticate and secure your requests.

---

## 🛡️ Required Headers

| Header Name           | Description                                 |
|------------------------|---------------------------------------------|
| `Authorization`        | `Bearer {YOUR_API_KEY}`                    |
| `X-HalGuard-Secret`    | Your client secret (shared securely)       |

---

## 💥 Authentication Example

```http
Authorization: Bearer abcd1234yourapikey
X-HalGuard-Secret: supersecrettoken
