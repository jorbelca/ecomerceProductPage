import React, { useState } from "react"

export default function Gallery() {
  const [img, setImg] = useState(
    `${process.env.PUBLIC_URL}/assets/images/image-product-1.jpg`
  )
  const [showModal, setShowModal] = useState(true)
  return (
    <div>
      <div className={!showModal ? "" : "modal"}>
        <div className="modal-gallery">
          <div className="close-btn" onClick={() => setShowModal(!showModal)}>
            X
          </div>
          <span className="previous-btn selector-btn">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <span className="next-btn selector-btn">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <div className="central-img">
            <img
              src={img}
              alt="product-img"
              onClick={() => setShowModal(!showModal)}
            />
          </div>
          <div className="img-thumbnails">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/image-product-1-thumbnail.jpg`}
              alt="product thumbnail"
              width={"80"}
              height={"80"}
              onClick={() =>
                setImg(
                  `${process.env.PUBLIC_URL}/assets/images/image-product-1.jpg`
                )
              }
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/image-product-2-thumbnail.jpg`}
              alt="product thumbnail"
              width={"80"}
              height={"80"}
              onClick={() =>
                setImg(
                  `${process.env.PUBLIC_URL}/assets/images/image-product-2.jpg`
                )
              }
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/image-product-3-thumbnail.jpg`}
              alt="product thumbnail"
              width={"80"}
              height={"80"}
              onClick={() =>
                setImg(
                  `${process.env.PUBLIC_URL}/assets/images/image-product-3.jpg`
                )
              }
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/image-product-4-thumbnail.jpg`}
              alt="product thumbnail"
              width={"80"}
              height={"80"}
              onClick={() =>
                setImg(
                  `${process.env.PUBLIC_URL}/assets/images/image-product-4.jpg`
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
