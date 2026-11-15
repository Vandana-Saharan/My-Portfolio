export default function Marquee() {
  const marqueeContent = (
    <div className="flex items-center gap-8 font-mono font-black text-lg md:text-xl uppercase tracking-wider text-black">
      <span>🚀 Full-Stack &amp; Backend Developer</span>
      <span>•</span>
      <span>🎓 MCA Postgraduate Scholar @ Kristu Jayanti College</span>
      <span>•</span>
      <span>⚡ Spring Boot, Node.js, Express, MongoDB &amp; React</span>
      <span>•</span>
      <span>💻 Scalable Architectures &amp; Clean Code</span>
      <span>•</span>
      <span>🌟 Smart Poll System &amp; Full-Stack Web Applications</span>
      <span>•</span>
      <span>✨ Open for Internships &amp; SDE Roles</span>
      <span>•</span>
      <span>📩 vandanasaharan11@gmail.com</span>
      <span>•</span>
    </div>
  );

  return (
    <div className="bg-custom-yellow border-y-4 border-black py-4 overflow-hidden relative rotate-[-1.5deg] scale-105 z-20 my-12 shadow-neo">
      <div className="animate-marquee">
        <div className="flex shrink-0 items-center gap-8 pr-8">
          {marqueeContent}
        </div>
        <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
          {marqueeContent}
        </div>
      </div>
    </div>
  );
}
