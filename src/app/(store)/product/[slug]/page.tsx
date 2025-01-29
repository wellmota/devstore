import { ShoppingCart } from 'lucide-react'
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/images/moletom-never-stop-learning.png"
          alt="Hoodie within phrase Never Stop Learning"
          width={1000}
          height={1000}
          quality={100}
        ></Image>
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="learning-tight text-3xl font-bold">
          Never Stop Learning Hoodie
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          Fabric Hoodie 88% Cotton, 12% Polyester. Machine wash cold.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            $129
          </span>
          <span className="text-sm text-zinc-400">
            12x installments of $10.75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Size</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              S
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              XG
            </button>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold uppercase text-white"
        >
          <ShoppingCart className="w-6 h-6 mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
