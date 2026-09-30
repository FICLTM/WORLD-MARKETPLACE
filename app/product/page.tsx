export default function ProductPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f1eb",
        color: "#111",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          borderBottom: "1px solid #d8d4cc",
        }}
      >
        <strong
          style={{
            fontSize: 28,
            letterSpacing: "-0.06em",
          }}
        >
          WORLD
        </strong>

        <nav
          style={{
            display: "flex",
            gap: 28,
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          <a href="/discover" style={{ color: "#111", textDecoration: "none" }}>
            DISCOVER
          </a>
          <a href="/stores" style={{ color: "#111", textDecoration: "none" }}>
            STORES
          </a>
          <a href="/drops" style={{ color: "#111", textDecoration: "none" }}>
            DROPS
          </a>
          <a href="/about" style={{ color: "#111", textDecoration: "none" }}>
            ABOUT
          </a>
        </nav>

        <a
          href="/sell"
          style={{
            color: "#111",
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          SELL
        </a>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          minHeight: "calc(100vh - 72px)",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, #171717 0%, #444 45%, #b7b2a8 100%)",
            minHeight: 650,
          }}
        />

        <div
          style={{
            padding: "10% 9%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".12em",
              marginBottom: 18,
            }}
          >
            FICL
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 5vw, 72px)",
              lineHeight: ".9",
              letterSpacing: "-.06em",
              margin: 0,
            }}
          >
            Reworked
            <br />
            Denim Jacket
          </h1>

          <p
            style={{
              fontSize: 22,
              marginTop: 28,
            }}
          >
            £120
          </p>

          <p
            style={{
              maxWidth: 480,
              lineHeight: 1.6,
              color: "#555",
              marginTop: 10,
            }}
          >
            One-of-one reworked denim jacket. Each piece is individually
            altered and finished by hand.
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 30,
            }}
          >
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                style={{
                  width: 52,
                  height: 48,
                  background: "transparent",
                  border: "1px solid #111",
                  fontWeight: 700,
                }}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            style={{
              marginTop: 20,
              padding: "18px 24px",
              background: "#111",
              color: "white",
              border: 0,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            ADD TO BAG
          </button>

          <p
            style={{
              marginTop: 18,
              fontSize: 12,
              color: "#777",
            }}
          >
            One available · Ships from Leeds
          </p>
        </div>
      </section>
    </main>
  );
}
