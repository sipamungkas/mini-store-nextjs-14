"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsSection = ({ description }: { description: string }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="additional">Additional Information</TabsTrigger>
        <TabsTrigger value="reviews">Reviews (0)</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-4">
        <p>
          {description ||
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
        </p>
      </TabsContent>
      <TabsContent value="additional" className="mt-4">
        <p>
          Additional product information goes here. This could include details
          about materials, sizing, care instructions, etc.
        </p>
      </TabsContent>
      <TabsContent value="reviews" className="mt-4">
        <p>There are no reviews yet.</p>
      </TabsContent>
    </Tabs>
  );
};
