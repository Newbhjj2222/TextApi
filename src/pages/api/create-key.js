import { db } from "@/lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { generateApiKey } from "@/lib/gfx/generateApiKey";

export default async function handler(req, res) {
  const { uid } = req.body;
  if (!uid) return res.status(401).json({ error: "No user" });

  const apiKey = generateApiKey();

  await setDoc(doc(collection(db, "api_keys"), apiKey), {
    uid,
    active: true,
    styles: ["neon", "luxury"],
    createdAt: Date.now(),
  });

  res.json({ apiKey });
}
