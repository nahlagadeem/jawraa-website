export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="jawraa-container flex h-[66px] items-center justify-between">
        <div className="h-[20px] w-[112px] rounded-full bg-[#eef1f5]" />
        <div className="flex items-center gap-2">
          <div className="h-8 w-12 rounded-full bg-[#eef1f5]" />
          <div className="h-[30px] w-[92px] rounded-full bg-[#eef1f5]" />
        </div>
      </div>
      <div className="jawraa-container py-24">
        <div className="h-5 w-44 rounded-full bg-[#eef1f5]" />
        <div className="mt-8 h-16 max-w-[640px] rounded-[18px] bg-[#eef1f5]" />
        <div className="mt-6 h-10 max-w-[500px] rounded-[18px] bg-[#eef1f5]" />
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-[160px] rounded-[18px] bg-[#f3f5f8]" />
          ))}
        </div>
      </div>
    </div>
  );
}
