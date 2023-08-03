"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";

import ImageViewer from '@/components/ImageViewer';
import MainProduct from "@/components/main-product";




const ProductDetails = () => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  
  return (
   isImageViewerOpen ? <ImageViewer onClose={() => setIsImageViewerOpen(false)} /> : <MainProduct setIsImageViewerOpen = {setIsImageViewerOpen} />
  );
};

export default ProductDetails;
