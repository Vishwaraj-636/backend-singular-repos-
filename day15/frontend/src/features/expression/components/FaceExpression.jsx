import { useEffect, useRef, useState } from "react";
import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import "./exp.scss"

import { init, detect } from "../utils/utils";

export default function FaceExpression({ onClick = () => { } }) {

  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const [expression, setExpression] = useState("Click Detect");
  const streamRef = useRef(null);




  useEffect(() => {
    init({ videoRef, landmarkerRef, streamRef });

    return () => {

      landmarkerRef.current?.close();

      videoRef.current?.srcObject
        ?.getTracks()
        .forEach((track) => track.stop());
    };

  }, []);

  async function handleClick() {
    const expression = detect({ landmarkerRef, videoRef, setExpression })
    onClick({ mood: expression })
  }

  return (
    <div className="face-card">
      <h1>Moodify</h1>

      <video className="face-card video"
        ref={videoRef}
        autoPlay
        playsInline
      />

      <div className="result">
        {expression}
      </div>


      <button onClick={handleClick}>
        Detect Expression
      </button>

    </div>
  );
}