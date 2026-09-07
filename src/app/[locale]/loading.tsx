export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#111419]/92 text-white backdrop-blur-[2px]"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center">
        <div className="jawraa-loading-logo" aria-hidden="true">
          <div className="jawraa-loading-logo-base" />
          <div className="jawraa-loading-logo-fill" />
        </div>
        <div className="mt-7 h-px w-[172px] overflow-hidden rounded-full bg-white/12">
          <div className="jawraa-loading-line h-full w-full rounded-full bg-[#f6be15]" />
        </div>
      </div>
    </div>
  );
}
