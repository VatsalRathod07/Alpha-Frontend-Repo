import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { newProducts, categories } from "../database/updatedDB";

const MainProduct = ({ setIsImageViewerOpen, product, id }: any) => {
  const memoizedProducts = useMemo(() => {
    const getTopThreeProducts = newProducts.slice(0, 3);
    const isCurentProductAvailable = getTopThreeProducts.find(
      (data) => data.id.toString() === id
    );
    if (!!isCurentProductAvailable) {
      const newTopThreeProducts = newProducts
        .slice(0, 4)
        .filter((data) => data.id.toString() !== id);
      return newTopThreeProducts;
    } else {
      return getTopThreeProducts;
    }
  }, [id]);

  const [mainImage, setMainImage] = useState(product?.media[0]?.url);

  const handleImageChange = (newImage: React.SetStateAction<string>) => {
    setMainImage(newImage);
  };

  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenImageViewer = () => {
    setIsImageViewerOpen(true);
  };

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  };

  const getCategory = categories.find((data) => data.id === product.categoryId);

  return (
    <section className="products_detail pt-5 sm:pt-10 pb-5z sm:pb-12 px-2 sm:px-5 bg-light">
      <div className="product_content container p-5 sm:p-20 bg-white">
        <div className="products-details flex flex-col gap-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-[48%_48%] gap-[4%]">
            {isSmallDevice ? (
              <Slider {...sliderSettings}>
                {product?.media?.map((product: any) => (
                  <div key={product.id}>
                    <Image
                      src={product.url}
                      alt="Product Image"
                      className="products_images w-full h-full"
                      onClick={() => handleImageChange(product.url)}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="product-bg-img flex flex-col gap-[10px]">
                <Image
                  src={mainImage}
                  alt="Product Image"
                  className="products_images w-full h-full cursor-pointer"
                  onClick={handleOpenImageViewer}
                />

                <div className="products-small-images flex overflow-auto sm:overflow-hidden gap-2 cursor-pointer object-cover">
                  {product?.media.map((product: any, index: number) => (
                    <Image
                      key={index}
                      src={product.url}
                      alt="Product Image"
                      className="products_images w-[100px] object-contain p-1 hover:border-pale hover:border-[2px]"
                      onClick={() => handleImageChange(product.url)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-5">
              <p className="font-medium text-2xl font-signature">
                {product.name}
              </p>
              <h4 className="text-xl font-semibold text-primary">
                ₹ {product.price}
              </h4>
              {getCategory?.features.map((feature, index) => {
                return (
                  <>
                    <li
                      className="text-primary text-sm list-decimal"
                      id={index.toString()}
                    >
                      {feature}
                    </li>
                  </>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xl text-primary font-semibold">
              Product Information
            </p>

            <div className="flex flex-col gap-7 mt-5">
              <p className="text-xl sm:text-3xl text-secondary font-signature">
                {product.name}.
              </p>
              <div className="font-signature text-primary">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt totam libero quasi vitae assumenda. Ratione ducimus
                  commodi aperiam doloribus eum. Soluta impedit alias
                  praesentium, perferendis officia quasi facere adipisci commodi
                  unde nulla temporibus dolores, aspernatur iusto assumenda
                  similique veritatis omnis?
                </p>
              </div>

              <div>
                <img
                  src="https://blog-blossom.s3.appcnt.com/image/22/09/01/631073fe0a1ce/_orig/AMDU-9986_Blossom_cover_1180x504_1.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-start md:flex-row gap-4 sm:gap-0 w-full">
                <p className="text-3xl text-secondary font-signature sm:w-[50%]">
                  Product Highlight
                </p>

                <div className="flex flex-col gap-3">
                  {getCategory?.features.map((feature, index) => {
                    return (
                      <>
                        <li
                          className="text-primary text-sm pb-1 list-decimal"
                          id={index.toString()}
                        >
                          {feature}
                        </li>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-pale  border-t-[.1px] opacity-25 mt-5"></div>

        <div className="mt-12">
          <p className="text-3xl sm:text-4xl text-secondary font-signature font-medium mb-5 capitalize">
            Related products
          </p>

          <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm gap-5 justify-center">
            {memoizedProducts.map((product) => (
              <Link
                href={`/products/${product.name}`}
                key={product.name}
                className="product-link"
              >
                <div className="product-card cursor-pointer">
                  <div>
                    <Image
                      src={product?.media[0]?.url as any}
                      alt={product.name}
                      className="product-img w-full object-cover"
                    />
                  </div>
                  <div className="product-details py-1 flex flex-col gap-[2px]">
                    <div className="flex gap-[1px] text-primary text-sm">
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </div>
                    <p className="product-name font-signature text-secondary font-normal text-base">
                      {product.name}
                    </p>
                    <p className="product-price text-sm text-primary font-bold">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProduct;
