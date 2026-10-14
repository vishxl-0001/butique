import React from "react";

interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  fill?: string;
  style?: React.CSSProperties;
}

// 1. Couronne (Crown - Signature Atelier)
export function IconCouronne({
  className = "w-5 h-5",
  strokeWidth = 1.4,
  color = "currentColor",
  fill = "none",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 17L6 8L12 12L18 8L20 17H4Z" />
      <circle cx="6" cy="6.5" r="1.2" fill={color} stroke="none" />
      <circle cx="12" cy="10.5" r="1.2" fill={color} stroke="none" />
      <circle cx="18" cy="6.5" r="1.2" fill={color} stroke="none" />
      <circle cx="12" cy="5" r="1.4" fill="#D4688A" stroke="none" />
      <line x1="5" y1="19.5" x2="19" y2="19.5" />
    </svg>
  );
}

// 2. Cœur (Heart - Wishlist)
export function IconCoeur({
  className = "w-5 h-5",
  strokeWidth = 1.4,
  color = "currentColor",
  fill = "none",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

// 3. Étoile (Four-point crystal sparkle star)
export function IconEtoile({
  className = "w-4 h-4",
  strokeWidth = 1.2,
  color = "currentColor",
  fill = "currentColor",
  style,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
  );
}

// 4. Plume (Feather detail)
export function IconPlume({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  );
}

// 5. Fleur (3D Flower detail)
export function IconFleur({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.5" fill="#D4688A" stroke="none" />
      <path d="M12 2.5C13.5 5 15 8 12 9.5C9 8 10.5 5 12 2.5Z" />
      <path d="M12 21.5C13.5 19 15 16 12 14.5C9 16 10.5 19 12 21.5Z" />
      <path d="M2.5 12C5 10.5 8 9 9.5 12C8 15 5 13.5 2.5 12Z" />
      <path d="M21.5 12C19 10.5 16 9 14.5 12C16 15 19 13.5 21.5 12Z" />
    </svg>
  );
}

// 6. Aiguille (Needle)
export function IconAiguille({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21L18 6" />
      <ellipse cx="19.5" cy="4.5" rx="2.5" ry="1.2" transform="rotate(-45 19.5 4.5)" />
      <path d="M18.8 3.8L20.2 5.2" strokeWidth="0.8" />
    </svg>
  );
}

// 7. Ciseaux (Couture scissors)
export function IconCiseaux({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

// 8. Voile (Veil icon)
export function IconVoile({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3C8 6 16 6 18 3" />
      <path d="M6 3C4 9 4 17 6 21C10 20 14 20 18 21C20 17 20 9 18 3" strokeDasharray="1 1" />
      <path d="M9 7C9 14 10 18 12 20" opacity="0.6" />
      <path d="M15 7C15 14 14 18 12 20" opacity="0.6" />
    </svg>
  );
}

// 9. Pin (Map location pin)
export function IconPin({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// 10. Téléphone (Phone)
export function IconTelephone({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// 11. WhatsApp
export function IconWhatsApp({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9a1.5 1.5 0 0 0-1 1.5c.3 1.9 1.8 3.4 3.7 3.7a1.5 1.5 0 0 0 1.5-1l-.5-1.2a.8.8 0 0 0-.9-.5l-.8.4c-.4-.3-.8-.7-1.1-1.1l.4-.8a.8.8 0 0 0-.5-.9L9.5 9z" />
    </svg>
  );
}

// 12. Instagram
export function IconInstagram({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// 13. Facebook
export function IconFacebook({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// 14. Play (Video reels)
export function IconPlay({
  className = "w-5 h-5",
  strokeWidth = 1.3,
  color = "currentColor",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
