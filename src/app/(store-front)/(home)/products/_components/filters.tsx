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

const Filters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const data = await getCategories();
    setCategories(data?.data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  //   const base_url = window.location.origin;

  const onApplyClick = async () => {
    // let url = `${base_url}/${pathname}?`;
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
              {isLoading && <Spinn}
              {!isLoading &&
                categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
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
            max={300}
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
