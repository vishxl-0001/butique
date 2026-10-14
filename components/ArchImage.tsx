import Image from "next/image";

interface ArchImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  withGlow?: boolean;
}

export default function ArchImage({
  src,
  alt,
  className = "",
  priority = false,
  withGlow = false,
}: ArchImageProps) {
  return (
    <div
      className={`relative group inline-block ${className}`}
      data-cursor="gown"
    >
      {/* Optional warm aura glow */}
      {withGlow && (
        <div
          className="absolute -inset-1 rounded-[999px_999px_0_0] bg-gradient-to-b from-[#D8BE8F]/30 via-[#D4688A]/20 to-transparent blur-md opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Arched container with 1px gold hairline */}
      <div className="relative w-full h-full rounded-[999px_999px_0_0] overflow-hidden border border-[#D8BE8F]/30 bg-[#17121C] shadow-2xl">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-106"
          />
        </div>

        {/* Soft vignette overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0E0B12]/80 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
