import React, { useState } from "react"

export default function Gallery() {
  const [img, setImg] = useState(
    `${process.env.PUBLIC_URL}/assets/images/image-product-1.jpg`
  )
  const showModal = () => {
    document.querySelector(".modal").style = { display: "" }
  }
  let width = 400
  let height = 400
  return (
    <div>
      <img
        src={img}
        alt="product-img"
        width={width}
        height={height}
        onClick={() => showModal()}
      />
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
  )
}
