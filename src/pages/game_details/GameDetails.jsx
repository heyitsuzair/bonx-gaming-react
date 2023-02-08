import React from "react";
import {
  BreadcrumbTopPage,
  Date,
  PlainButton,
  Text3Xl,
  Text6Xl,
  TextLg,
} from "../../inc/components/commons";
import AdditionalInfo from "./AdditionalInfo";

const GameDetails = () => {
  const onGameDownload = () => {
    let link = document.createElement("a"); //create 'a' element
    link.setAttribute(
      "href",
      "/public/img/body-bg-75163e67f04c506397c3885b6dcce035.webp"
    ); //replace "file" with link to file you want to download
    link.setAttribute("download", "game_name"); // replace "file" here too
    link.click(); //virtually click <a> element to initiate download
  };

  return (
    <div id="contact">
      <BreadcrumbTopPage text="GAME DETAILS" />
      <section className="my-20 px-5 md:px-20">
        <div className="flex flex-col gap-5">
          <Date date="2023-02-02T21:29:40.265+00:00" />
          <Text6Xl text="Alien Space Five Star" classes="font-bold" />
          <TextLg
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          />
          <div className="mt-8 flex flex-col gap-12">
            <div className="content-section">
              <Text3Xl text="Description:" classes="font-bold" />
              <TextLg
                text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                classes="mt-4"
              />
            </div>
            <div className="content-section">
              <Text3Xl text="Features:" classes="font-bold" />
              <TextLg
                text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                classes="mt-4"
              />
            </div>
            <div className="content-section">
              <Text3Xl text="What's New:" classes="font-bold" />
              <TextLg
                text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                classes="mt-4"
              />
            </div>
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
          <AdditionalInfo />
        </div>
      </section>
    </div>
  );
};

export default GameDetails;
