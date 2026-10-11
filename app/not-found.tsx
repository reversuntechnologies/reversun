import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#FAF9F6",
      }}
    >
      <div
        style={{
          maxWidth: "540px",
          backgroundColor: "#FFFFFF",
          padding: "48px 36px",
          borderRadius: "24px",
          border: "1px solid #ECEEEF",
          boxShadow: "0 8px 30px rgba(11, 19, 43, 0.05)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "12px",
            fontWeight: 800,
            color: "#FF5A2B",
            letterSpacing: "1px",
            textTransform: "uppercase",
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 90, 43, 0.1)",
            marginBottom: "16px",
          }}
        >
          HTTP 404 • Not Found
        </span>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#0B132B",
            margin: "0 0 12px 0",
            letterSpacing: "-0.5px",
          }}
        >
          Page Not Located
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#565D79",
            lineHeight: 1.6,
            margin: "0 0 28px 0",
          }}
        >
          The resource or architecture blueprint you requested does not exist on reversun.com or has migrated to a canonical endpoint.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 22px",
              borderRadius: "9999px",
              backgroundColor: "#0B132B",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Home size={15} />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 22px",
              borderRadius: "9999px",
              backgroundColor: "#F2F4F5",
              color: "#0B132B",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Compass size={15} />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
