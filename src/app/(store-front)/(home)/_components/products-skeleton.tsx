import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
