import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { buildImageaArray } from './helpers'

export default function LightboxComponent({
  isOpen,
  setIsOpen,
  img,
  imgbonus,
  imgexterior,
  restaurant,
}) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = buildImageaArray(img, imgbonus, imgexterior, restaurant)

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          imageTitle={images[photoIndex].title}
          animationOnKeyInput={true}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  )
}
