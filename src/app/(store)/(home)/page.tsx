import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/images/moletom-ai-side.png"
          alt="moletom ai side"
          width={920}
          height={920}
          quality={100}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/80 p-1 pl-5">
          <span className="truncate text-sm">AI hoodie side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/images/moletom-java.png"
          alt="moletom ai side"
          width={920}
          height={920}
          quality={100}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-10 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/80 p-1 pl-5">
          <span className="truncate text-sm">AI hoodie side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/images/moletom-never-stop-learning.png"
          alt="moletom ai side"
          width={920}
          height={920}
          quality={100}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-10 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/80 p-1 pl-5">
          <span className="truncate text-sm">AI hoodie side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $129
          </span>
        </div>
      </Link>
    </div>
  );
}
