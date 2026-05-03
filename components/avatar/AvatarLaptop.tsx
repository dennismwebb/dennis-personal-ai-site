import Image from "next/image";

export function AvatarLaptop({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/laptop.png"
      alt="Laptop avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
