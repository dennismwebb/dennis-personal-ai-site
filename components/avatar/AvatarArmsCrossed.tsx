import Image from "next/image";

export function AvatarArmsCrossed({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/arms-crossed.png"
      alt="Arms crossed avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
