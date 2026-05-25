"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  fullBio: string[];
  avatar: string;
  group_name: string;
  sort_order: number;
  career_start_year: number | null;
};



function ProfileModal({ person, onClose }: { person: Person; onClose: () => void }) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl ring-4 ring-blue-100 dark:ring-blue-900">
              <Image src={person.avatar} alt={person.name} fill className="object-cover object-top" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{person.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">{person.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            aria-label="Close"
          >
            <svg className="h-4 w-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Body */}
        <div className="space-y-4 p-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {person.fullBio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonCard({ person }: { person: Person }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
        <div className="relative mx-auto h-36 w-28 overflow-hidden rounded-full ring-4 ring-blue-100 dark:ring-blue-900">
          <Image src={person.avatar} alt={person.name} fill className="object-cover object-top" />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">{person.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">{person.role}</p>
          {person.career_start_year && (
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              {new Date().getFullYear() - person.career_start_year}+ years exp.
            </p>
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">{person.bio}</p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          Read more
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {open && <ProfileModal person={person} onClose={() => setOpen(false)} />}
    </>
  );
}


const GROUP_ORDER = [
  "Board of Advisors",
  "Leadership",
  "HR & Operations",
  "Sales & Marketing",
  "Technology",
];

const GROUP_GRID: Record<string, string> = {
  "Board of Advisors": "grid-cols-2",
  "Leadership": "grid-cols-2",
  "HR & Operations": "grid-cols-3",
  "Sales & Marketing": "grid-cols-2",
  "Technology": "grid-cols-3 sm:grid-cols-5",
};

const GROUP_MAX_WIDTH: Record<string, string> = {
  "HR & Operations": "mx-auto max-w-3xl",
  "Sales & Marketing": "mx-auto max-w-xl",
};

function ManagementSection() {
  const { t } = useLanguage();
  const a = t.about;
  const [members, setMembers] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/team")
      .then(res => res.json())
      .then(data => {
        const mapped: Person[] = (data.members || []).map((m: Record<string, unknown>) => ({
          id: m.id as string,
          name: m.name as string,
          role: m.role as string,
          bio: m.bio as string,
          fullBio: m.full_bio as string[],
          avatar: m.avatar as string,
          group_name: m.group_name as string,
          sort_order: m.sort_order as number,
          career_start_year: (m.career_start_year as number) ?? null,
        }));
        setMembers(mapped);
      })
      .catch(() => setMembers([]))
      .finally(() => setLoading(false));
  }, []);

  const groupMap = new Map<string, Person[]>();
  for (const m of members) {
    if (!groupMap.has(m.group_name)) groupMap.set(m.group_name, []);
    groupMap.get(m.group_name)!.push(m);
  }
  for (const people of groupMap.values()) {
    people.sort((a, b) => a.sort_order - b.sort_order);
  }

  const orderedGroups = GROUP_ORDER.filter(g => groupMap.has(g));

  return (
    <section className="w-full border-t border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">{a.management}</h2>
        <p className="mt-2 text-base text-slate-500 dark:text-slate-400">{a.managementSub}</p>

        {loading && <div className="mt-12 text-center text-slate-400">Loading team...</div>}

        {!loading && (
          <div className="mt-12 space-y-14">
            {/* Row 1 — Board of Advisors + Leadership side by side */}
            {orderedGroups.slice(0, 2).length > 0 && (
              <div className="grid gap-10 md:grid-cols-2">
                {orderedGroups.slice(0, 2).map(groupName => {
                  const people = groupMap.get(groupName) ?? [];
                  return (
                    <div key={groupName}>
                      <div className="mb-6 flex items-center gap-3">
                        <span className="h-6 w-1 rounded-full bg-blue-600" />
                        <h3 className="text-lg font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">{groupName}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        {people.map(person => <PersonCard key={person.id} person={person} />)}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Remaining groups */}
            {orderedGroups.slice(2).map(groupName => {
              const people = groupMap.get(groupName) ?? [];
              const gridCols = GROUP_GRID[groupName] ?? "grid-cols-3";
              const maxWidth = GROUP_MAX_WIDTH[groupName] ?? "";
              return (
                <div key={groupName}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-6 w-1 rounded-full bg-blue-600" />
                    <h3 className="text-lg font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">{groupName}</h3>
                  </div>
                  <div className={`${maxWidth} grid ${gridCols} gap-5`}>
                    {people.map(person => <PersonCard key={person.id} person={person} />)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div id="about">

      {/* ── Adaptable and Growing ── */}
      <section className="w-full border-b border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">{a.label}</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl">
              {a.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">{a.desc}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">{a.adaptabilityTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.adaptabilityDesc}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">{a.growthTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.growthDesc}</p>
              </div>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Adaptable growing IT team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Salesforce Expertise ── */}
      <section className="w-full bg-slate-50 px-6 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Salesforce expertise"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">{a.crmLabel}</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl">{a.crmTitle}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">{a.crmDesc}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">{a.trustedPartnerTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.trustedPartnerDesc}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">{a.clientSuccessTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.clientSuccessDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Management ── */}
      <ManagementSection />

    </div>
  );
}
