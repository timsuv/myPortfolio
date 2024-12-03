import MyImage from "../img/image.png";

export const Home = () => {
  return (
    <div>
      <h2>About me</h2>
      <p>About me, hej hej jag är tim 24 år, pluggar jobbar lever livet</p>
      <div>
        <img
          className="object-cover h-96 w-48"
          src={MyImage}
          alt="This should be my picture, I hope you can see it"
        />
      </div>
    </div>
  );
};
