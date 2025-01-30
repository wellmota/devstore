import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { env } from "@/env";

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import colors from "tailwindcss/colors";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const products = await response.json();

  return products;
}

// Image generation
export default async function OgImage({ slug }: { slug: string }) {
  const product = await getProduct(slug);

  const productImageURL = new URL(product.image, env.APP_URL).toString();

  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(
    join(process.cwd(), "assets/Inter-SemiBold.ttf"),
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={productImageURL} alt="" style={{ width: "100%" }} />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
