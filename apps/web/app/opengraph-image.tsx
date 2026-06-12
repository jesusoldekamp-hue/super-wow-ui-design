import { ImageResponse } from "next/og"

export const alt = "Awesome Modern UI"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 75% 20%, #382a83, #080d18 55%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", width: 1000, flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 28, color: "#9b8cff" }}>Awesome Modern UI</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 72, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.05 }}>
          Diseña a la velocidad de tus ideas.
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 28, color: "#aab2c4" }}>
          Starter, componentes, plantillas y 41 recursos curados.
        </div>
      </div>
    </div>,
    size
  )
}
