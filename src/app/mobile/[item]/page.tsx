"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ItemsData = () => {
  const searchParams = useSearchParams();
  const rawData = searchParams.get("data");
  const parsedData = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;
  console.log("parsedData", parsedData);

  return <div className="min-h-screen">items data</div>;
};

export default ItemsData;
