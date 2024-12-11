"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { goToUrl } from "./actions";

export const Pagination = ({
  pageCount,
  currentPage,
}: {
  pageCount: number;
  currentPage: number;
}) => {
  const params = useSearchParams();

  const paginate = (page: number) => {
    goToUrl(
      [
        Number(params.get("minPrice")) || 0,
        Number(params.get("maxPrice")) || 0,
      ],
      params.get("category") || "",
      params.get("onSaleOnly") === "true",
      page
    );
  };

  return (
    <div className="mt-8 flex justify-center space-x-2">
      <Button
        variant="outline"
        onClick={() => paginate(Number(params.get("page")) - 1)}
        disabled={Number(params.get("page")) === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      {Array.from({
        length: pageCount,
      }).map((_, index) => (
        <Button
          key={index}
          variant={currentPage === index + 1 ? "default" : "outline"}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        onClick={() => paginate(Number(params.get("page")) + 1)}
        disabled={Number(params.get("page")) === pageCount}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
