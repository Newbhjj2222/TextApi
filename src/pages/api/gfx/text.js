import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) return res.status(401).json({ error: "No key" });

  const snap = await getDoc(doc(db, "api_keys", apiKey));
  if (!snap.exists()) return res.status(401).json({ error: "Invalid key" });

  res.json({
    html: `<span class="gfx-text">Marketing Text 🔥</span>`,
    css: `
      .gfx-text {
        font-size: 42px;
        font-weight: 900;
        background: linear-gradient(90deg, cyan, magenta);
        -webkit-background-clip: text;
        color: transparent;
        animation: fade 1s ease;
      }
      @keyframes fade {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; }
      }
    `,
  });
}
