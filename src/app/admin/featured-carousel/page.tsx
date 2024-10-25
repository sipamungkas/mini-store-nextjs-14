import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FeaturedCarouselPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Featured Carousel</CardTitle>
        <CardDescription>
          Add or remove items from the featured carousel on the homepage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter featured item name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" placeholder="Enter image URL" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="link">Link</Label>
              <Input id="link" placeholder="Enter link URL" />
            </div>
            <Button>Add to Carousel</Button>
          </div>
        </form>
        <div className="mt-6">
          <h4 className="mb-4 text-lg font-semibold">Current Featured Items</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Summer Collection</TableCell>
                <TableCell>summer-collection.jpg</TableCell>
                <TableCell>/summer-collection</TableCell>
                <TableCell>
                  <Button variant="destructive" size="sm">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>New Arrivals</TableCell>
                <TableCell>new-arrivals.jpg</TableCell>
                <TableCell>/new-arrivals</TableCell>
                <TableCell>
                  <Button variant="destructive" size="sm">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
