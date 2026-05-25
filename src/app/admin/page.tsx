"use client";
import { useState, useEffect, useCallback } from "react";
import {
  LogOut, Mail, Phone, MessageSquare, Calendar, Trash2,
  Eye, EyeOff, Users, Plus, Pencil, X,
} from "lucide-react";

type Submission = {
  id: string;
  name: string;
  email: string;
  mobile: string | null;
  message: string;
  created_at: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  full_bio: string[];
  avatar: string;
  group_name: string;
  sort_order: number;
  is_active: boolean;
  prev_exp_years: number;
  prev_exp_months: number;
  joining_date: string | null;
};

const GROUPS = [
  "Board of Advisors",
  "Leadership",
  "HR & Operations",
  "Sales & Marketing",
  "Technology",
];

const EMPTY_FORM = {
  name: "",
  role: "",
  bio: "",
  full_bio_text: "",
  avatar: "",
  group_name: "Leadership",
  sort_order: 0,
  prev_exp_years: "0",
  prev_exp_months: "0",
  joining_date: "",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  const [tab, setTab] = useState<"contacts" | "team">("contacts");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [contactsLoading, setContactsLoading] = useState(false);
  const [contactsError, setContactsError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [teamLoading, setTeamLoading] = useState(false);
  const [teamError, setTeamError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [savingTeam, setSavingTeam] = useState(false);
  const [deletingTeamId, setDeletingTeamId] = useState<string | null>(null);
  const [togglingTeamId, setTogglingTeamId] = useState<string | null>(null);

  const getPwd = () => sessionStorage.getItem("admin_pwd") || "";

  const fetchContacts = useCallback(async (pwd: string) => {
    setContactsLoading(true);
    setContactsError("");
    try {
      const res = await fetch("/api/admin/submissions", { headers: { "x-admin-password": pwd } });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch contacts.");
      setSubmissions(data.submissions);
    } catch (err: unknown) {
      setContactsError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setContactsLoading(false);
    }
  }, []);

  const fetchTeam = useCallback(async (pwd: string) => {
    setTeamLoading(true);
    setTeamError("");
    try {
      const res = await fetch("/api/admin/team", { headers: { "x-admin-password": pwd } });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch team.");
      setTeamMembers(data.members);
    } catch (err: unknown) {
      setTeamError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setTeamLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pwd");
    if (saved) {
      setAuthed(true);
      fetchContacts(saved);
      fetchTeam(saved);
    }
  }, [fetchContacts, fetchTeam]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    const res = await fetch("/api/admin/submissions", {
      headers: { "x-admin-password": password },
    });
    if (res.status === 401) { setAuthError("Incorrect password."); return; }
    sessionStorage.setItem("admin_pwd", password);
    setAuthed(true);
    fetchContacts(password);
    fetchTeam(password);
  }

  async function handleDeleteContact(id: string) {
    if (!confirm("Delete this submission?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "DELETE",
        headers: { "x-admin-password": getPwd() },
      });
      if (!res.ok) throw new Error("Failed to delete.");
      setSubmissions(prev => prev.filter(s => s.id !== id));
    } catch (err: unknown) {
      setContactsError(err instanceof Error ? err.message : "Delete failed.");
    } finally {
      setDeletingId(null);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_pwd");
    setAuthed(false);
    setSubmissions([]);
    setTeamMembers([]);
    setPassword("");
    setShowForm(false);
  }

  function openAddForm() {
    setEditingId(null);
    setFormData(EMPTY_FORM);
    setShowForm(true);
  }

  function openEditForm(member: TeamMember) {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio,
      full_bio_text: member.full_bio.join("\n\n"),
      avatar: member.avatar,
      group_name: member.group_name,
      sort_order: member.sort_order,
      prev_exp_years: String(member.prev_exp_years ?? 0),
      prev_exp_months: String(member.prev_exp_months ?? 0),
      joining_date: member.joining_date ?? "",
    });
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingId(null);
    setFormData(EMPTY_FORM);
  }

  async function handleSaveTeamMember(e: React.FormEvent) {
    e.preventDefault();
    setSavingTeam(true);
    setTeamError("");
    try {
      const payload = {
        name: formData.name,
        role: formData.role,
        bio: formData.bio,
        full_bio: formData.full_bio_text.split(/\n\n+/).map(p => p.trim()).filter(Boolean),
        avatar: formData.avatar,
        group_name: formData.group_name,
        sort_order: Number(formData.sort_order),
        prev_exp_years: Number(formData.prev_exp_years) || 0,
        prev_exp_months: Number(formData.prev_exp_months) || 0,
        joining_date: formData.joining_date || null,
      };
      const url = editingId ? `/api/admin/team/${editingId}` : "/api/admin/team";
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "x-admin-password": getPwd(), "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save.");
      if (editingId) {
        setTeamMembers(prev => prev.map(m => m.id === editingId ? data.member : m));
      } else {
        setTeamMembers(prev => [...prev, data.member]);
      }
      closeForm();
    } catch (err: unknown) {
      setTeamError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setSavingTeam(false);
    }
  }

  async function handleToggleActive(id: string, current: boolean) {
    setTogglingTeamId(id);
    try {
      const res = await fetch(`/api/admin/team/${id}`, {
        method: "PATCH",
        headers: { "x-admin-password": getPwd(), "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: !current }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update.");
      setTeamMembers(prev => prev.map(m => m.id === id ? { ...m, is_active: !current } : m));
    } catch (err: unknown) {
      setTeamError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setTogglingTeamId(null);
    }
  }

  async function handleDeleteTeamMember(id: string) {
    if (!confirm("Delete this team member?")) return;
    setDeletingTeamId(id);
    try {
      const res = await fetch(`/api/admin/team/${id}`, {
        method: "DELETE",
        headers: { "x-admin-password": getPwd() },
      });
      if (!res.ok) throw new Error("Failed to delete.");
      setTeamMembers(prev => prev.filter(m => m.id !== id));
    } catch (err: unknown) {
      setTeamError(err instanceof Error ? err.message : "Delete failed.");
    } finally {
      setDeletingTeamId(null);
    }
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <h1 className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">Admin Login</h1>
          <p className="mb-6 text-sm text-slate-500">Samiteon internal dashboard</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter admin password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pr-12 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                suppressHydrationWarning
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                suppressHydrationWarning
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {authError && <p className="text-sm text-red-600">{authError}</p>}
            <button type="submit" className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800" suppressHydrationWarning>
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
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          <LogOut size={15} /> Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex gap-1 border-b border-slate-200 dark:border-slate-700">
        {(["contacts", "team"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex items-center gap-2 -mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition ${
              tab === t
                ? "border-blue-600 text-blue-700 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {t === "contacts" ? <Mail size={15} /> : <Users size={15} />}
            {t === "contacts" ? "Contact Enquiries" : "Team Members"}
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {t === "contacts" ? submissions.length : teamMembers.length}
            </span>
          </button>
        ))}
      </div>

      {/* ── Contacts Tab ── */}
      {tab === "contacts" && (
        <>
          <div className="mb-8 grid grid-cols-2 gap-4">
            {[
              { label: "Total Enquiries", value: submissions.length },
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

          {contactsLoading && <p className="text-center text-slate-500">Loading...</p>}
          {contactsError && <p className="text-center text-red-600">{contactsError}</p>}

          <div className="space-y-4">
            {!contactsLoading && submissions.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
                <p className="text-slate-500">No contact submissions yet.</p>
              </div>
            )}
            {submissions.map((s) => (
              <div key={s.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">{s.name}</h2>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar size={12} /> {new Date(s.created_at).toLocaleString()}
                    </span>
                    <button
                      onClick={() => handleDeleteContact(s.id)}
                      disabled={deletingId === s.id}
                      className="flex items-center gap-1 rounded-lg border border-red-200 px-2.5 py-1 text-xs font-medium text-red-500 hover:bg-red-50 disabled:opacity-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
                    >
                      <Trash2 size={12} /> {deletingId === s.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
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
        </>
      )}

      {/* ── Team Tab ── */}
      {tab === "team" && (
        <>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {teamMembers.length} members across {GROUPS.length} groups
            </p>
            <button
              onClick={openAddForm}
              className="flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
            >
              <Plus size={15} /> Add Member
            </button>
          </div>

          {teamError && (
            <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              {teamError}
            </p>
          )}

          {/* Add / Edit Form */}
          {showForm && (
            <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {editingId ? "Edit Member" : "Add New Member"}
                </h3>
                <button
                  onClick={closeForm}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleSaveTeamMember} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Name *</label>
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Role / Title *</label>
                    <input
                      required
                      value={formData.role}
                      onChange={e => setFormData(f => ({ ...f, role: e.target.value }))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      placeholder="Job title or role"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
                    Short Bio * <span className="font-normal text-slate-400">(shown on the card — 1-2 sentences)</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.bio}
                    onChange={e => setFormData(f => ({ ...f, bio: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="Brief summary shown on the profile card..."
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
                    Full Bio * <span className="font-normal text-slate-400">(shown in the popup — separate paragraphs with a blank line)</span>
                  </label>
                  <textarea
                    required
                    rows={7}
                    value={formData.full_bio_text}
                    onChange={e => setFormData(f => ({ ...f, full_bio_text: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder={"First paragraph about the person...\n\nSecond paragraph with more detail...\n\nThird paragraph..."}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
                      Avatar URL *
                    </label>
                    <input
                      required
                      value={formData.avatar}
                      onChange={e => setFormData(f => ({ ...f, avatar: e.target.value }))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      placeholder="/team/photo.webp  or  https://..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Sort Order</label>
                    <input
                      type="number"
                      min={0}
                      value={formData.sort_order}
                      onChange={e => setFormData(f => ({ ...f, sort_order: Number(e.target.value) }))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                    Experience <span className="font-normal text-slate-400">(before joining Samiteon)</span>
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-xs text-slate-500">Years</label>
                      <input
                        type="number" min={0} max={50}
                        value={formData.prev_exp_years}
                        onChange={e => setFormData(f => ({ ...f, prev_exp_years: e.target.value }))}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-slate-500">Months (0–11)</label>
                      <input
                        type="number" min={0} max={11}
                        value={formData.prev_exp_months}
                        onChange={e => setFormData(f => ({ ...f, prev_exp_months: e.target.value }))}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-slate-500">Joining Date at Samiteon</label>
                      <input
                        type="date"
                        value={formData.joining_date}
                        onChange={e => setFormData(f => ({ ...f, joining_date: e.target.value }))}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>
                  {(formData.prev_exp_years || formData.prev_exp_months || formData.joining_date) && (
                    <p className="mt-2 text-xs text-slate-400">
                      {(() => {
                        const prev = Number(formData.prev_exp_years) * 12 + Number(formData.prev_exp_months);
                        let atCompany = 0;
                        if (formData.joining_date) {
                          const joined = new Date(formData.joining_date);
                          const now = new Date();
                          atCompany = (now.getFullYear() - joined.getFullYear()) * 12 + (now.getMonth() - joined.getMonth());
                        }
                        return `= ${Math.floor((prev + atCompany) / 12)}+ years shown on card`;
                      })()}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Group *</label>
                  <select
                    required
                    value={formData.group_name}
                    onChange={e => setFormData(f => ({ ...f, group_name: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  >
                    {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={savingTeam}
                    className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
                  >
                    {savingTeam ? "Saving..." : editingId ? "Save Changes" : "Add Member"}
                  </button>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {teamLoading && <p className="text-center text-slate-500">Loading team...</p>}

          {!teamLoading && (
            <div className="space-y-8">
              {teamMembers.length === 0 && !showForm && (
                <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-slate-500">No team members yet. Click &ldquo;Add Member&rdquo; to get started.</p>
                </div>
              )}
              {GROUPS.map(group => {
                const members = teamMembers
                  .filter(m => m.group_name === group)
                  .sort((a, b) => a.sort_order - b.sort_order);
                if (members.length === 0) return null;
                return (
                  <div key={group}>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-4 w-1 rounded-full bg-blue-600" />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">{group}</h3>
                      <span className="text-xs text-slate-400">({members.length})</span>
                    </div>
                    <div className="space-y-2">
                      {members.map(m => (
                        <div
                          key={m.id}
                          className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={m.avatar} alt={m.name} className="h-10 w-10 rounded-full object-cover object-top" />
                            </div>
                            <div className="min-w-0">
                              <p className="truncate font-semibold text-slate-900 dark:text-white">{m.name}</p>
                              <p className="truncate text-xs text-slate-500 dark:text-slate-400">{m.role}</p>
                            </div>
                          </div>
                          <div className="flex shrink-0 items-center gap-2">
                            <button
                              onClick={() => handleToggleActive(m.id, m.is_active)}
                              disabled={togglingTeamId === m.id}
                              className={`rounded-lg border px-3 py-1 text-xs font-semibold transition-colors disabled:opacity-50 ${
                                m.is_active
                                  ? "border-green-300 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-700 dark:bg-green-900/20 dark:text-green-400"
                                  : "border-slate-300 bg-slate-100 text-slate-500 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400"
                              }`}
                            >
                              {togglingTeamId === m.id ? "..." : m.is_active ? "Active" : "Inactive"}
                            </button>
                            <button
                              onClick={() => openEditForm(m)}
                              className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                              <Pencil size={12} /> Edit
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
