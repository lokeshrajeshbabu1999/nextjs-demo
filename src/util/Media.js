export function courseImage(image) {
  const IMAGE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_MEDIA_URL_PROD
      : process.env.NEXT_PUBLIC_MEDIA_URL_DEV;
  // const IMAGE_URL = "https://d2d2rv85ws7181.cloudfront.net"

  const imageUrl ="https://fastly.picsum.photos/id/1015/536/354.jpg?hmac=x7KEhPoOftwPXIgnQoTQzNtVUqaPYwndK8n1x_9rWuM"
  return imageUrl;
}

export function courseVideo(video) {
  const VIDEO_URL = "https://d2gcvgooupsz8b.cloudfront.net";
  const videoUrl = VIDEO_URL + "/" + video;
  return videoUrl;
}
