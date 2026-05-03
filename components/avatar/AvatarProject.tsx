import Image from "next/image";

export function AvatarProject({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/project.png"
      alt="Project avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
