import React, { useState } from "react"

export default function ProductPage() {
  const [counter, setCounter] = useState(0)
  const [img, setImg] = useState(
    `${process.env.PUBLIC_URL}/assets/images/image-product-1.jpg`
  )
  return (
    <div className="product-page">
      <div className="product-images">
        <img src={img} alt="product-img" width={"250"} height={"250"} />
        <div className="img-thumbnails">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/image-product-1-thumbnail.jpg`}
            alt="product thumbnail"
            width={"100"}
            height={"100"}
            onClick={() =>
              setImg(
                `${process.env.PUBLIC_URL}/assets/images/image-product-1.jpg`
              )
            }
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/image-product-2-thumbnail.jpg`}
            alt="product thumbnail"
            width={"100"}
            height={"100"}
            onClick={() =>
              setImg(
                `${process.env.PUBLIC_URL}/assets/images/image-product-2.jpg`
              )
            }
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/image-product-3-thumbnail.jpg`}
            alt="product thumbnail"
            width={"100"}
            height={"100"}
            onClick={() =>
              setImg(
                `${process.env.PUBLIC_URL}/assets/images/image-product-3.jpg`
              )
            }
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/image-product-4-thumbnail.jpg`}
            alt="product thumbnail"
            width={"100"}
            height={"100"}
            onClick={() =>
              setImg(
                `${process.env.PUBLIC_URL}/assets/images/image-product-4.jpg`
              )
            }
          />
        </div>
      </div>

      <div className="product-info">
        <div className="brand">Sneaker Company</div>
        <div className="model"> Fall Limited Edition Sneakers</div>
        <div className="copy">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div className="price_discount">
          <div className="price">
            {" "}
            $125.00</div>
            <div className="discount">50%</div>
          </div>
          <div className="original-price">$250.00</div>
        
        <div className="add-to-cart">
          <div className="add-subtract">
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              onClick={() => setCounter(counter + 1)}
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
            </svg>
            <div className="counter">{counter}</div>
            <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              onClick={() => {
                counter > 0 ? setCounter(counter - 1) : setCounter(0)
              }}
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </div>
          <button>
            <div className="svg">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                  viewBox="0 0 10 15"
                />
              </svg>
            </div>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
