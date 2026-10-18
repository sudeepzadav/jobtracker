import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.message);
    router.push("/login");
  };

  const input =
    "w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 outline-none focus:border-indigo-500";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-8"
      >
        <h1 className="text-2xl font-bold text-white">Create account</h1>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <input
          className={input}
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className={input}
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className={input}
          type="password"
          placeholder="Password (6+ characters)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full rounded-lg bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-400">
          Sign up
        </button>
        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-400 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
