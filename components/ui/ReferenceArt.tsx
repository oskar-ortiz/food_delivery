import Image from "next/image";

type ReferenceArtProps = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
};

export function ReferenceArt({
  src,
  alt,
  className,
  imageClassName = "object-cover",
  rounded = "rounded-full",
  priority = false,
  sizes = "400px",
}: ReferenceArtProps) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={imageClassName} />
    </div>
  );
}
