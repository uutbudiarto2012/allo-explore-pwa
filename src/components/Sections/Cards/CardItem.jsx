import React, { useState } from "react";

const CardItem = ({ title, urlTarget, image, isBlank }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="col-6">
        <div className="card-category-wrapper">
          {urlTarget === "/#" ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={handleModal}
              className="card-item-link"
            >
              <div className="img-container">
                <img src={image} alt={title} />
              </div>
              <span>{title}</span>
            </div>
          ) : (
            <>
              {isBlank ? (
                <a
                  href={urlTarget}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-item-link"
                >
                  <div className="img-container">
                    <img src={image} alt={title} />
                  </div>
                  <span>{title}</span>
                </a>
              ) : (
                <a href={urlTarget} className="card-item-link">
                  <div className="img-container">
                    <img src={image} alt={title} />
                  </div>
                  <span>{title}</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
      {openModal && (
        <div className="modal-contruction" onClick={handleModal}>
          <div className="modal-wrapper">
            <p className="contrcution-text">
              This function is under construction. <br />
              Stay tuned!
            </p>
            <button onClick={handleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardItem;
