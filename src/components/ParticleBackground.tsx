export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Soft blobs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20 animate-blob" />
      <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/15 animate-blob [animation-delay:3s]" />
      <div className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/15 animate-blob [animation-delay:6s]" />
    </div>
  );
}
