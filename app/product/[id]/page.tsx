import { notFound } from "next/navigation";
import { PhoneFrame } from "@/components/layout/PhoneFrame";
import { ProductDetail } from "@/components/food/ProductDetail";
import { getProductById } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <PhoneFrame>
      <ProductDetail product={product} />
    </PhoneFrame>
  );
}
