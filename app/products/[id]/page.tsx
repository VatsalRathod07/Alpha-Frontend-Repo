"use client";
import React, { useState, useMemo } from "react";

import ImageViewer from "@/components/ImageViewer";
import MainProduct from "@/components/main-product";
import { useParams } from "next/navigation";
import { newProducts } from "../../../database/updatedDB";

const ProductDetails = () => {
  const { id } = useParams();
  const productById = newProducts.find((data) => data.id.toString() === id);

  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return isImageViewerOpen ? (
    <ImageViewer onClose={() => setIsImageViewerOpen(false)} product={productById} />
  ) : (
    <MainProduct
      setIsImageViewerOpen={setIsImageViewerOpen}
      product={productById}
      id={id}
    />
  );
};

export default ProductDetails;
