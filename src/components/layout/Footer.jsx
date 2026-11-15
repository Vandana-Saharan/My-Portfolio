export default function Footer() {
  return (
    <footer className="bg-[#18181B] text-white py-10 border-t-4 border-black mt-20 text-center shadow-neo">
      <h2 className="text-2xl md:text-3xl font-shrikhand text-[#FDA4AF] mb-3 px-4 tracking-wide">
        Built with 💻, ☕, and Spring Boot + React
      </h2>
      <p className="font-mono text-sm text-gray-300 font-bold mb-2">
        Vandana Saharan • Full-Stack &amp; Backend Developer
      </p>
      <div className="text-xs text-gray-400 font-mono">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}
