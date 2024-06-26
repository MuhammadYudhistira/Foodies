'use client'
import React, { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

const ImagePicker = ({ label, name }) => {

    const [pickedImage, setPickedImage] = useState()

    const imageInput = useRef()

    const handlePickClick = () => {
        imageInput.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if (!file) {
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = () => { setPickedImage(fileReader.result) }
        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Picked Yet</p>}
                    {pickedImage && <Image src={pickedImage} alt='Selected Image' fill />}
                </div>
                <input className={classes.input} type="file" id={name} name={name}
                    accept='image/png, image/jpeg'
                    ref={imageInput}
                    onChange={handleImageChange}
                    required />
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker