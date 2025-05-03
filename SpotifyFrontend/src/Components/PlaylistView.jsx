import Card from "./Card";

const PlaylistView = () => {
  return (
    <div className="text-white w-full ">
      <div className="text-lg font-semibold mb-2 pt-4">
        Focus
      </div>
      <div className=" overflow-x-scroll no-scrollbar whitespace-nowrap  ">
        <div className="flex ">
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
          <Card title="jukebox" description="hello this is the best playlist ever " />
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
