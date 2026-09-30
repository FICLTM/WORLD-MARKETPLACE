export default function Home() {
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
          }}
        >
          <span>DISCOVER</span>
          <span>STORES</span>
          <span>DROPS</span>
          <span>ABOUT</span>
        </nav>

        <button
          style={{
            background: "#1747ff",
            color: "white",
            border: 0,
            padding: "12px 22px",
            fontWeight: 700,
          }}
        >
          SELL
        </button>
      </header>

      <section
        style={{
          minHeight: 560,
          display: "flex",
          alignItems: "flex-end",
          padding: "7%",
          background: "#171717",
          color: "white",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 12,
              letterSpacing: ".18em",
            }}
          >
            FASHION. OBJECTS. ART. PEOPLE.
          </p>

          <h1
            style={{
              fontSize: "clamp(56px, 9vw, 130px)",
              lineHeight: ".85",
              letterSpacing: "-.07em",
              maxWidth: 800,
              margin: "20px 0",
            }}
          >
            Discover
            <br />
            independent
            <br />
            worlds.
          </h1>

          <button
            style={{
              padding: "15px 25px",
              background: "white",
              color: "#111",
              border: 0,
              fontWeight: 700,
            }}
          >
            EXPLORE WORLDS →
          </button>
        </div>
      </section>

      <section style={{ padding: "70px 5%" }}>
        <p
          style={{
            fontSize: 12,
            letterSpacing: ".15em",
          }}
        >
          FEATURED
        </p>

        <h2
          style={{
            fontSize: 48,
            letterSpacing: "-.05em",
            marginTop: 10,
          }}
        >
          Worlds worth discovering.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 40,
          }}
        >
          {["FICL", "SALT VINTAGE", "NOIR STUDIOS"].map((name) => (
            <article
              key={name}
              style={{
                minHeight: 300,
                background: "#dedbd4",
                padding: 24,
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div>
                <h3 style={{ fontSize: 28, margin: 0 }}>{name}</h3>
                <p style={{ marginBottom: 0 }}>
                  Independent World →
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer
        style={{
          padding: "50px 5%",
          borderTop: "1px solid #d8d4cc",
          fontSize: 13,
        }}
      >
        WORLD — Discover independent worlds.
      </footer>
    </main>
  );
}
