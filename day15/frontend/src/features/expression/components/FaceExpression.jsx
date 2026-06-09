import { useEffect, useRef, useState } from "react";
import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";

import { init, detect } from "../utils/utils";

export default function FaceExpression() {

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


  return (
    <div style={{ textAlign: "center" }}>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "400px",
          borderRadius: "12px",
        }}
      />

      <h2>{expression}</h2>

      <button onClick={()=>{detect({ landmarkerRef, videoRef, setExpression })}}>
        Detect Expression
      </button>

    </div>
  );
}