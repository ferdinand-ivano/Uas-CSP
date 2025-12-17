import Link from "next/link";
export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>404 | Halaman Tidak Ditemukan</h1>
      <p>Kami mohon maaf, kami tidak dapat menemukan halaman yang Anda cari.</p>
      {/* Tombol kembali ke halaman utama */}
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4f46e5",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
