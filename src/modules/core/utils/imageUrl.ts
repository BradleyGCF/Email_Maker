import axios from 'axios'
const cloudName = import.meta.env.VITE_CLOUD_NAME

const uploadImage = async (formData: FormData) => {
  const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)

  return response.data?.secure_url
}

export const getSimpleImageUrl = async (formData: FormData) => {
  try {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)

    const fileUploaded = response.data

    const imageUrl = fileUploaded.secure_url

    return imageUrl
  } catch (error) {
    console.log(error)
  }
}

export const getImageUrls = async (formDataArray: FormData[]) => {
  const imageUrls = []

  for (const formData of formDataArray) {
    const imageUrl = await uploadImage(formData)
    imageUrls.push(imageUrl)
  }

  return imageUrls
}
