import defaultProfileImage from "/assets/images/avatar-placeholder.svg";

export default function Info({ title, subtitle, actionText }) {
  return (
    <div className="info tile">
      <div className="info__header">
        <h1 className="info__title">{title}</h1>
        <span className="info__subtitle">{subtitle}</span>
      </div>
      <div className="info__data">
        <label className="info__label" htmlFor="info-name">
          Name
        </label>
        <input className="info__input" placeholder="Ann Parker" id="info-name" name="name"></input>
      </div>
      <div className="info__upload">
        <div className="info__image">
          <img src={defaultProfileImage}></img>
          <div className="info__upload-desc">
            <span className="info__upload-title">Upload Image</span>
            <span className="info__upload-limits">Max 250KB, PNG or JPEG</span>
            <label className="info__upload-button button" htmlFor="image">
              Upload
            </label>
            <input type="file" className="info__input visually-hidden" id="image"></input>
          </div>
        </div>
      </div>
      <button className="button button--accent">{actionText}</button>
    </div>
  );
}
