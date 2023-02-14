import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BreadcrumbTopPage,
  CardGame,
  SelectPlain,
  SpinnerLarge,
  TextLg,
} from "../../inc/components/commons";
import { useGames, useSearchGames } from "../../inc/hooks/games";
import { debounce } from "../../inc/utils";
import Search from "./Search";

const Games = ({ setProgress }) => {
  const [filteredData, setFilteredData] = useState(null);

  // States For Search Form And Category Dropdown
  const categoryRef = useRef();
  const queryRef = useRef();

  // Custom Hooks
  const { data, isLoading } = useGames();
  const { mutate, isLoading: isSearching } = useSearchGames();

  /**
   * @function onSearchChange
   *
   * Triggers after 1500ms When Someone Types In Search Input
   *
   * Calls Search API
   */
  const onSearchChange = () => {
    const categoryID = categoryRef.current.value;
    const query = queryRef.current.value;
    mutate([categoryID, query], {
      onSuccess: ({ data }) => setFilteredData(data),
    });
  };
  /**
   * @function onCategoryChange
   *
   * Triggers When Someone Changes Category
   *
   * Calls Search API
   */
  const onCategoryChange = () => {
    const categoryID = categoryRef.current.value;
    const query = queryRef.current.value;
    mutate([categoryID, query], {
      onSuccess: ({ data }) => setFilteredData(data),
    });
  };

  const debouncedFunction = useCallback(debounce(onSearchChange), []);

  useEffect(() => {
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  const categories = [
    { value: "1", text: "Action" },
    { value: "2", text: "Adventure" },
  ];

  /**
   * HTML That Will Show When Someone Filter Categories
   */
  const htmlCategories = () => {
    return (
      <div className="grid grid-cols-12 items-center justify-center gap-6 md:gap-8">
        {filteredData.length < 1 ? (
          <div className="col-span-12">
            <TextLg text="No Games Found" classes="font-bold" />
          </div>
        ) : (
          filteredData.map((game) => {
            return (
              <div key={game._id} className="col-span-12 md:col-span-6">
                <CardGame {...game} />
              </div>
            );
          })
        )}
      </div>
    );
  };
  /**
   * HTML That Will Show Initially (ON API CALL)
   */
  const htmlInitial = () => {
    return (
      <div className="grid grid-cols-12 items-center justify-center gap-6 md:gap-8">
        {data.data.length < 1 ? (
          <div className="col-span-12">
            <TextLg text="No Games Found" classes="font-bold" />
          </div>
        ) : (
          data.data.map((game) => {
            return (
              <div key={game._id} className="col-span-12 md:col-span-6">
                <CardGame {...game} />
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div id="games">
      <BreadcrumbTopPage text="GAMES" />
      <section className="my-20 px-6 md:px-20">
        <div className="items-center bg-secondary-70 rounded-2xl p-6">
          <div className="grid grid-cols-12 gap-4 items-center justify-center">
            <section className="col-span-12 md:col-span-9">
              <Search
                reference={queryRef}
                debouncedFunction={debouncedFunction}
              />
            </section>
            <section className="col-span-12 md:col-span-3">
              <SelectPlain
                reference={categoryRef}
                onChange={onCategoryChange}
                placeholder="Select Category"
                options={categories}
              />
            </section>
          </div>
        </div>
        <div className="mt-10">
          <div className="my-20 text-center">
            {isLoading || isSearching ? (
              <SpinnerLarge />
            ) : filteredData ? (
              htmlCategories()
            ) : (
              htmlInitial()
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;
