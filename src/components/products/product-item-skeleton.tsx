import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const ProductItemSkeleton = () => {
  return (
    <Card>
      <CardContent className="p-2 md:p-4 flex flex-col h-full">
        <Skeleton className="w-full object-cover mb-4 rounded-md aspect-square" />
        <Skeleton className="w-full h-6 mb-2" />
        <Skeleton className="w-1/2 h-6 mb-2" />
        <div className="w-full flex justify-between gap-4 items-center">
          <Skeleton className="w-1/3 h-6" />
          <Skeleton className="w-1/2 h-8" />
        </div>
      </CardContent>
    </Card>
  );
};
