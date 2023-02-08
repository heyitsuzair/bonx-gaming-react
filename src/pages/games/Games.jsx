import React, { useCallback, useEffect, useState } from "react";
import {
  BreadcrumbTopPage,
  CardGame,
  SelectPlain,
  SpinnerLarge,
} from "../../inc/components/commons";
import { debounce } from "../../inc/utils";
import Search from "./Search";

const Games = ({ setProgress }) => {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @function onSearchChange
   *
   * Triggers after 1500ms When Someone Types In Search Input
   *
   * Filter The Query From All Results
   */
  const onSearchChange = (e) => {
    const value = e.target.value;
    if (value) {
      // filter products by category
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      // Get All Products
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  /**
   * @function onCategoryChange
   *
   * Triggers When Someone Changes Category
   *
   * Filter The Games Of Selected Category From All Results
   */
  const onCategoryChange = (e) => {
    const value = e.target.value;
    if (value) {
      // filter products by category
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      // Get All Products
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const debouncedFunction = useCallback(debounce(onSearchChange), []);

  useEffect(() => {
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  const categories = [{ value: "Action" }, { value: "Adventure" }];

  return (
    <div id="games">
      <BreadcrumbTopPage text="GAMES" />
      <section className="my-20 px-6 md:px-20">
        <div className="items-center bg-secondary-70 rounded-2xl p-6">
          <div className="grid grid-cols-12 gap-4 items-center justify-center">
            <section className="col-span-12 md:col-span-9">
              <Search debouncedFunction={debouncedFunction} />
            </section>
            <section className="col-span-12 md:col-span-3">
              <SelectPlain
                onChange={onCategoryChange}
                placeholder="Select Category"
                options={categories}
              />
            </section>
          </div>
        </div>
        <div className="mt-10">
          <div className="my-20 text-center">
            {isLoading ? (
              <SpinnerLarge />
            ) : (
              <div className="grid grid-cols-12 items-center justify-center gap-6 md:gap-8">
                <div className="col-span-12 md:col-span-6">
                  <CardGame />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <CardGame />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <CardGame />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <CardGame />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;
