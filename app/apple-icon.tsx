import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

// iOS applies its own rounded-square mask, so this ships as a solid square.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#14232e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 48 48" fill="none">
          <path
            d="M13.5 12 L23 34.5"
            stroke="#eceef0"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M23 34.5 L34 12"
            stroke="#cf9a4a"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
