import Image from "next/image";

export function AvatarResume({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/resume.png"
      alt="Resume avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
