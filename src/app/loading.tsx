export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-700 [animation-delay:0ms]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-700 [animation-delay:150ms]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-700 [animation-delay:300ms]" />
      </div>
    </div>
  );
}
