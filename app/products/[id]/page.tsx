"use client";
import React, { useState } from "react";

import ImageViewer from "@/components/ImageViewer";
import MainProduct from "@/components/main-product";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return isImageViewerOpen ? (
    <ImageViewer onClose={() => setIsImageViewerOpen(false)} />
  ) : (
    <MainProduct setIsImageViewerOpen={setIsImageViewerOpen} />
  );
};

export default ProductDetails;
