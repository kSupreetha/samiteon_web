"use client";
import { useState, useEffect, useCallback } from "react";
import { LogOut, RefreshCw, Mail, Phone, MessageSquare, Calendar } from "lucide-react";

type Submission = {
  id: string;
  name: string;
  email: string;
  mobile: string | null;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAll = useCallback(async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/submissions", { headers: { "x-admin-password": pwd } });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch contacts.");
      setSubmissions(data.submissions);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pwd");
    if (saved) { setAuthed(true); fetchAll(saved); }
  }, [fetchAll]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    const res = await fetch("/api/admin/submissions", {
      headers: { "x-admin-password": password },
    });
    if (res.status === 401) { setAuthError("Incorrect password."); return; }
    sessionStorage.setItem("admin_pwd", password);
    setAuthed(true);
    fetchAll(password);
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_pwd");
    setAuthed(false);
    setSubmissions([]);
    setPassword("");
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <h1 className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">Admin Login</h1>
          <p className="mb-6 text-sm text-slate-500">Samiteon internal dashboard</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
            {authError && <p className="text-sm text-red-600">{authError}</p>}
            <button type="submit" className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const thisMonth = (date: string) => {
    const d = new Date(date), now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Samiteon Admin</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Internal dashboard</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => fetchAll(sessionStorage.getItem("admin_pwd") || "")}
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            <RefreshCw size={15} /> Refresh
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            <LogOut size={15} /> Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-2">
        {[
          { label: "Total Enquiries",   value: submissions.length },
          { label: "Enquiries (Month)", value: submissions.filter(s => thisMonth(s.created_at)).length },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
        <Mail size={18} /> Contact Enquiries ({submissions.length})
      </h2>

      {loading && <p className="text-center text-slate-500">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="space-y-4">
        {!loading && submissions.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-slate-500">No contact submissions yet.</p>
          </div>
        )}
        {submissions.map((s) => (
          <div key={s.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{s.name}</h2>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar size={12} /> {new Date(s.created_at).toLocaleString()}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Mail size={14} />
                <a href={`mailto:${s.email}`} className="hover:text-blue-700 hover:underline">{s.email}</a>
              </span>
              {s.mobile && <span className="flex items-center gap-1"><Phone size={14} /> {s.mobile}</span>}
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <MessageSquare size={15} className="mt-0.5 shrink-0 text-slate-400" />
              <p className="text-sm text-slate-700 dark:text-slate-300">{s.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
