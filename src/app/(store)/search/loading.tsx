"use client";

import { Skeleton } from "@/components/skeleton";

export default function SearchLoading() {
  // const searchParams = useSearchParams();
  // const query = searchParams.get("q");

  return (
    <div className="flex flex-col gap-4">
      <p>
        Result for:<span className="text-sm">...</span>
      </p>
      <div className="grid-col-3 grid gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  );
}
