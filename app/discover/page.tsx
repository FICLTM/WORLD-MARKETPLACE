import Link from "next/link";

const products = [
  {
    name: "Reworked Leather Jacket",
    creator: "STUDIO 001",
    price: "£180",
    category: "REWORKED",
  },
  {
    name: "Handmade Object 01",
    creator: "OBJECTS / 02",
    price: "£95",
    category: "OBJECTS",
  },
  {
    name: "Archive Trousers",
    creator: "ARCHIVE 003",
    price: "£120",
    category: "VINTAGE",
  },
  {
    name: "Untitled No. 04",
    creator: "ARTIST 004",
    price: "£240",
    category: "ART",
  },
  {
    name: "Heavy Cotton Overshirt",
    creator: "WORLD / 005",
    price: "£110",
    category: "FASHION",
  },
  {
    name: "Handmade Ceramic",
    creator: "OBJECTS / 006",
    price: "£75",
    category: "OBJECTS",
  },
];

export default function Discover() {
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
          background: "#f4f1eb",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#111",
            textDecoration: "none",
          }}
        >
          WORLD
        </Link>

        <nav
          style={{
            display: "flex",
            gap: 28,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          <Link href="/discover" style={{ color: "#111", textDecoration: "none" }}>
            DISCOVER
          </Link>
          <Link href="/stores" style={{ color: "#777", textDecoration: "none" }}>
            STORES
          </Link>
          <Link href="/drops" style={{ color: "#777", textDecoration: "none" }}>
            DROPS
          </Link>
          <Link href="/about" style={{ color: "#777", textDecoration: "none" }}>
            ABOUT
          </Link>
        </nav>

        <button
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            padding: "11px 20px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          SELL
        </button>
      </header>

      <section
        style={{
          padding: "80px 5% 55px",
          borderBottom: "1px solid #d8d4cc",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: 22,
          }}
        >
          THE MARKETPLACE
        </p>

        <h1
          style={{
            fontSize: "clamp(54px, 9vw, 120px)",
            lineHeight: 0.86,
            letterSpacing: "-6px",
            maxWidth: 850,
            margin: 0,
          }}
        >
          Discover
          <br />
          independent
          <br />
          worlds.
        </h1>

        <p
          style={{
            maxWidth: 480,
            marginTop: 35,
            fontSize: 15,
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          A marketplace for independent fashion, vintage, reworked clothing,
          art and objects.
        </p>
      </section>

      <section style={{ padding: "25px 5%", borderBottom: "1px solid #d8d4cc" }}>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {["ALL", "FASHION", "VINTAGE", "REWORKED", "ART", "OBJECTS"].map(
            (category) => (
              <button
                key={category}
                style={{
                  background: category === "ALL" ? "#111" : "transparent",
                  color: category === "ALL" ? "#fff" : "#111",
                  border: "1px solid #111",
                  padding: "10px 17px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      <section
        style={{
          padding: "50px 5% 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 30,
        }}
      >
        {products.map((product, index) => (
          <a
            href="/product"
            key={product.name}
            style={{
              colour: "#111",
                textdecoration: "none",
        }}
        >
            <div
              style={{
                aspectRatio: "4 / 5",
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg, #1b1b1b, #777)"
                    : "linear-gradient(135deg, #d9d5cc, #777)",
                display: "flex",
                alignItems: "flex-end",
                padding: 18,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  background: "#f4f1eb",
                  padding: "7px 10px",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                {product.category}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: 15,
                    margin: "0 0 6px",
                    fontWeight: 600,
                  }}
                >
                  {product.name}
                </h2>

                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: "#777",
                    letterSpacing: "0.5px",
                  }}
                >
                  {product.creator}
                </p>
              </div>

              <strong style={{ fontSize: 13 }}>{product.price}</strong>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
