import React from "react";
import { SpinnerSmall } from "../index";
import InfiniteScroll from "react-infinite-scroll-component";
import CardProduct from "../cards/Card.game";

function endMessage() {
  return (
    <h1 className="text-center text-2xl font-semibold mt-20">
      <i
        className="fa fa-check cursor-pointer text-xl border-2 mb-5 text-indigo-500 border-indigo-500 py-2 px-3 rounded-full"
        aria-hidden="true"
      ></i>{" "}
      You{`'`}re All Caught Up
    </h1>
  );
}

function loader() {
  return (
    <div className="text-center mt-20">
      <SpinnerSmall />
    </div>
  );
}

const ProductsInfinite = ({ productsData, fetchNextData, meta }) => {
  const hasMore = meta.pagination.page !== meta.pagination.pageCount;
  return (
    <InfiniteScroll
      dataLength={productsData.length} //This is important field to render the next data
      next={fetchNextData}
      hasMore={hasMore}
      style={{ overflow: "hidden" }}
      loader={loader()}
      scrollThreshold={0.6}
      endMessage={endMessage()}
    >
      <div className="products grid grid-cols-12 items-center justify-center gap-8">
        {productsData.map((product) => {
          return (
            <div
              key={product.id}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <CardProduct {...product.attributes} id={product.id} />
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default ProductsInfinite;
