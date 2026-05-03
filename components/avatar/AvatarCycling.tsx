import Image from "next/image";

export function AvatarCycling({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/cycling.png"
      alt="Cycling avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
