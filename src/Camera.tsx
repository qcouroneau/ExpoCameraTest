import React from "react"
import { Camera, useCameraDevices } from "react-native-vision-camera"

const newCameraPermission = await Camera.requestCameraPermission()

function App() {
    const devices = useCameraDevices()
    const device = devices.back
  
    if (device == null) return <App />
    return (
      <Camera
        device={device}
        isActive={true}
      />
    )
  }