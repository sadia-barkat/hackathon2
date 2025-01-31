import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { Product } from "../../../../types/product";

interface ProductPageProps {
  product: Product | null;
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      _type,
      image,
      price,
      description,
      discountPercentage,
      category,
    }`,
    { slug }
  );
}

// GetServerSideProps to fetch data
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true, // Return a 404 page if slug is not provided
    };
  }

  const slug = params.slug as string; // Ensuring the slug is a string
  const product = await getProduct(slug);

  if (!product) {
    return {
      notFound: true, // Return a 404 page if no product is found
    };
  }

  return {
    props: {
      product, // Pass product to the page
    },
  };
};

// ProductPage component
const ProductPage = ({ product }: ProductPageProps) => {
  if (!product) {
    return <div className="max-w-7xl mx-auto px-4">Product not found.</div>;
  }

  const price = typeof product.price === "number" ? product.price : parseFloat(product.price) || 0;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          ) : (
            <div className="rounded-lg shadow-md bg-gray-200 flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="font-sans text-2xl">
            <span className="font-semibold">Price: </span>${price.toFixed(2)}
          </p>
          {product.discountPercentage && (
            <p className="text-lg text-green-600">
              Discount: {product.discountPercentage}%
            </p>
          )}
          <p className="text-lg">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
