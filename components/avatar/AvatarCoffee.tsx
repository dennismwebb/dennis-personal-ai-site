import Image from "next/image";

export function AvatarCoffee({ size = 200 }: { size?: number }) {
  return (
    <Image
      src="/avatars/coffee.png"
      alt="Coffee avatar"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
