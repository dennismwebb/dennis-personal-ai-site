import Image from "next/image";

export function AvatarWaving({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/waving.png"
      alt="Waving avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}