import Image from "next/image";

export function AvatarPointing({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/pointing.png"
      alt="Pointing avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
