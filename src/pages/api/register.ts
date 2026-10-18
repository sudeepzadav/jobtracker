import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 6) {
    return res.status(400).json({ message: "Name, email, and a password of 6+ characters are required" });
  }

  await connectDB();

  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: "Email already registered" });

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed });

  res.status(201).json({ message: "Account created" });
}