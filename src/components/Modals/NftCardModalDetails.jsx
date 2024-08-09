import "./details.css";

function NftCardModalDetails({ extractedData }) {
  return (
    <div className="details">
      {extractedData.map((el, index) => (
        <div className="" key={index}>
          <h1>{el.tokenid}</h1>
          <img className="display-img" src={el.display_image_url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default NftCardModalDetails;
