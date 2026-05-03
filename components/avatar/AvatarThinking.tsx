import Image from "next/image";

export function AvatarThinking({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/thinking.png"
      alt="Thinking avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
