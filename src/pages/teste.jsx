import { useEffect } from "react";

export default function Test() {
  function startVideoFromCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoElement.srcObject = stream;
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    startVideoFromCamera;
  }, []);

  return (
    <>
      <video id="video" autoPlay></video>
    </>
  );
}
