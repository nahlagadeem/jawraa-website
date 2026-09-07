import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white/35 text-white backdrop-blur-[10px]"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="jawraa-loading-mark" aria-hidden="true">
        <Image
          src="/assets/logos/jawraa-logo.svg"
          alt=""
          width={236}
          height={48}
          priority
          className="jawraa-loading-logo-image h-auto w-[236px] max-w-[58vw]"
        />
        <span className="jawraa-loading-triangle jawraa-loading-triangle-1" />
        <span className="jawraa-loading-triangle jawraa-loading-triangle-2" />
        <span className="jawraa-loading-triangle jawraa-loading-triangle-3" />
        <span className="jawraa-loading-triangle jawraa-loading-triangle-4" />
      </div>
    </div>
  );
}
