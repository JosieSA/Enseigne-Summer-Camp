interface LogoProps {
  className?: string;
  onDark?: boolean;
}

export default function Logo({ className = "", onDark = false }: LogoProps) {
  return (
    <div id="enseigne-vector-logo" className={`flex items-center gap-1.5 select-none font-sans ${className}`}>
      {/* Icon block: e inside black square + purple horizontal strip underneath */}
      <div className="flex flex-col items-stretch shrink-0 scale-90 sm:scale-100 origin-left">
        {/* Solid black square box with negative-space white lowercase "e" */}
        <div className={`bg-black text-white ${onDark ? "border border-white/20" : ""} w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-sans font-bold text-xl sm:text-2xl lowercase leading-none rounded-none aspect-square`}>
          e
        </div>
        {/* Purple bar */}
        <div className="bg-[#800080] h-1 w-full mt-[1px]" />
      </div>

      {/* "nseigne" in purple (or white on dark backdrops), lowercase, matching the design layout */}
      <span className={`text-2xl sm:text-[26px] font-sans font-extrabold tracking-tight ${onDark ? "text-white" : "text-[#800080]"} lowercase leading-none pb-[3px]`}>
        nseigne
      </span>
    </div>
  );
}
