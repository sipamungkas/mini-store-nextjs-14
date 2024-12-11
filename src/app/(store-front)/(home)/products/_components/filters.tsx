"use client";

import { Button } from "@/components/ui/button";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import { goToUrl } from "./actions";
import { CategoryData } from "../../../../../../types/response";
import { getCategories } from "@/lib/api";
import { Spinner } from "@/components/ui/spinner";
import { useSearchParams } from "next/navigation";

const defaultCategories: CategoryData[] = [
  {
    id: 0,
    name: "Select category",
    slug: "",
    createdAt: "",
    updatedAt: "",
    documentId: "",
    publishedAt: "",
  },
];

const Filters = () => {
  const params = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(params.get("search") || "");
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    params.get("category") || ""
  );
  const [priceRange, setPriceRange] = useState([
    Number(params.get("minPrice")) || 0,
    Number(params.get("maxPrice")) || 1000,
  ]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [onSaleOnly, setOnSaleOnly] = useState(
    params.get("onSaleOnly") === "true"
  );
  const getData = async () => {
    setIsLoading(true);
    const data = await getCategories();
    setCategories([...defaultCategories, ...data?.data]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const onApplyClick = async () => {
    await goToUrl(priceRange, selectedCategory, onSaleOnly);
  };

  const onResetClick = async () => {
    await goToUrl();
  };

  return (
    <div className="mb-8 md:mb-0 md:mr-8 md:w-1/4">
      <div className="space-y-6">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {isLoading && <Spinner />}
              {!isLoading &&
                categories.map((category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="price-range">Price Range</Label>

          <DualRangeSlider
            id="price-range"
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="mt-2 text-sm">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
        <div>
          <Label htmlFor="sort">Sort by Price</Label>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger id="sort">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Low to High</SelectItem>
              <SelectItem value="desc">High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="on-sale"
            checked={onSaleOnly}
            onCheckedChange={setOnSaleOnly}
          />
          <Label htmlFor="on-sale">Show only items on sale</Label>
        </div>
      </div>
      <div className="flex justify-end flex-1 pt-3 mt-3 border-t-[1px] gap-2">
        <Button variant="outline" onClick={onResetClick}>
          Reset
        </Button>
        <Button onClick={onApplyClick}>Apply</Button>
      </div>
    </div>
  );
};

export default Filters;
