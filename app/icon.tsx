import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const dynamic = "force-static";

// Self-contained: solid navy backing baked in, so the mark stays legible in
// both light and dark browser chrome regardless of the page's own theme.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#14232e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
          <path
            d="M13.5 12 L23 34.5"
            stroke="#eceef0"
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          <path
            d="M23 34.5 L34 12"
            stroke="#cf9a4a"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
