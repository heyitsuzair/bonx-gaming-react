import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BreadcrumbTopPage,
  Date,
  PlainButton,
  SpinnerLarge,
  Text3Xl,
  Text6Xl,
  TextLg,
} from "../../inc/components/commons";
import { useGame } from "../../inc/hooks/games";
import AdditionalInfo from "./AdditionalInfo";

const GameDetails = () => {
  /**
   * RRD Helpers
   */
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGame(id);

  const onGameDownload = () => {
    let link = document.createElement("a"); //create 'a' element
    // link.setAttribute("href", data?.data.game_file.filename); //replace "file" with link to file you want to download
    link.setAttribute(
      "href",
      data?.data.game_file.filename.replace("http", "https")
    ); //replace "file" with link to file you want to download
    link.setAttribute("download", "game_file");
    link.click(); //virtually click <a> element to initiate download
  };

  useEffect(() => {
    if (!id || data?.response?.status === 404) return navigate(-1);
  }, [data]);

  return (
    <div id="game-details">
      <BreadcrumbTopPage text="GAME DETAILS" />
      <section className="my-20 px-5 md:px-20">
        {isLoading ? (
          <div className="my-20 text-center">
            <SpinnerLarge />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              <Date date={data?.data?.createdAt} />
              <Text6Xl text={data?.data?.title} classes="font-bold" />
              <TextLg text={data?.data?.short_description} />
              <div className="mt-8 flex flex-col gap-12">
                <div className="content-section">
                  <Text3Xl text="Description:" classes="font-bold" />
                  <TextLg text={data?.data?.long_description} classes="mt-4" />
                </div>
                <div className="content-section">
                  <Text3Xl text="Features:" classes="font-bold" />
                  <TextLg text={data?.data?.features} classes="mt-4" />
                </div>
                {data?.data?.whats_new && (
                  <div className="content-section">
                    <Text3Xl text="What's New:" classes="font-bold" />
                    <TextLg text={data?.data?.whats_new} classes="mt-4" />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10">
              <PlainButton
                onClick={onGameDownload}
                text="Download"
                icon="fa fa-download"
                size="large"
              />
            </div>
            <div className="my-20">
              {data?.data && <AdditionalInfo {...data.data} />}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default GameDetails;
