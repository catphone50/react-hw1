import React from "react";
import "./App.css";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import ListsComponent from "./components/ListsComponent";

const obj = [
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
  },
  { title: "Lorem ipsum dolor", text: "Lorem ipsum dolor sitores et ea" },
];

function App() {
  return (
    <div className="App">
      <ParagraphsComponent texts={obj} />
      <ListsComponent />
      <ImageComponent src="https://masterpiecer-images.s3.yandex.net/46cdf58276ff11ee8119beb332dff282:upscaled"></ImageComponent>
      <VideoComponent />
    </div>
  );
}

export default App;
