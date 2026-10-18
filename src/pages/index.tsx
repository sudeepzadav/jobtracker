import Link from "next/link";

const features = [
  {
    title: "Track every application",
    desc: "Keep company, role, date, and notes in one place.",
  },
  {
    title: "Status columns",
    desc: "Move jobs through Wishlist, Applied, Interview, Offer, and Rejected.",
  },
  {
    title: "Dashboard insights",
    desc: "See how many applications you sent and where they stand.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="mx-auto flex items-center justify-between px-6 py-10">
        <span className="text-2xl font-bold text-indigo-400 underline">JobTracker</span>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-slate-300 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <main className="mx-auto px-6 pb-10 pt-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Organize your{" "}
          <span className="bg-linear-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            job search
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
          Add applications, track their status, and see your progress on one
          simple dashboard.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            I already have an account
          </Link>
        </div>

        <div className="mt-20 grid gap-6 text-left sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-indigo-500/50 hover:scale-105 cursor-pointer"
            >
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
