import Image from "next/image";

export function AvatarEnergetic({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/energetic.png"
      alt="Energetic avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
