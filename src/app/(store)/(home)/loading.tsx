import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-2 gap-6">
      <Skeleton className="col-span-2 row-span-2 h-[856px]" />
      <Skeleton className="h-[856px]" />
      <Skeleton className="h-[856px]" />
    </div>
  )
}
