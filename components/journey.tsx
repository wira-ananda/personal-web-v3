import { contentWidth, EmptySection } from "./HomePage";
import { Timeline } from "@/components/ui/timeline";

const dataJourney = [
  {
    id: 0,
    title: "Universitas Dipa Makassar",
    subtitle: "Teknik Informatika",
    year: "2022 - 2026",
    iconLink:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/LogoUndipa.png",
    description:
      "Menempuh pendidikan di bidang Teknik Informatika dengan fokus pada pengembangan perangkat lunak, dan pendalaman algoritma. Memperdalam kemampuan coding, pemodelan data, dan desain UI/UX melalui proyek praktikum dan kegiatan kampus, sehingga membangun dasar kuat untuk karier sebagai Software Developer.",
  },
  {
    id: 1,
    title: "Metrotech Digital Asia",
    subtitle: "Front-End Engineer",
    year: "Early 2025",
    iconLink:
      "https://media.licdn.com/dms/image/v2/D560BAQEFulCNZO5M9w/company-logo_200_200/company-logo_200_200/0/1726042455183/metrotech_digital_asia_logo?e=1784764800&v=beta&t=isd2n8qaITz671Ndv-UFs0zG2F6_UfPOkuRzGK1Hyyo",
    description:
      "Mengembangkan UI responsif dan reusable components pada Metro Try Out System, mengoptimalkan autentikasi OAuth/JWT, sehingga sistem ujian berjalan stabil, efisien, dan pengalaman pengguna konsisten.",
  },
  {
    id: 2,
    title: "Winnicode Garuda Technology",
    subtitle: "Full-Stack Developer",
    year: "Early 2025",
    iconLink: "https://winnicode.com/mazer/images/logo.png",
    description:
      "Mengembangkan Task Manager System end-to-end menggunakan Laravel, Inertia.js, dan React, mengimplementasikan role-based access, pengaturan tugas, dan pelacakan progres, sehingga sistem manajemen tugas berjalan terstruktur, efisien, dan meminimalkan human error.",
  },
  {
    id: 3,
    title: "Coding Camp by Dicoding x DBS",
    subtitle: "Frontend & Backend Path Learning",
    year: "Middle 2025",
    iconLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZBvca3vpFfUDfG-P4NIhLyGQ8lsr--PNFzxcTRiKVG-epVJZxVpoDknJ&s=10",
    description:
      "Beasiswa Bootcamp; Mempelajari full-stack development dengan fokus integrasi front-end dan back-end, membangun aplikasi dengan autentikasi, API handling, dan manajemen state, sehingga kemampuan end-to-end development meningkat dan best practices diterapkan.",
  },
  {
    id: 4,
    title: "SinergiMP Technology",
    subtitle: "Front-End Developer",
    year: "Middle 2025",
    iconLink: "./img/pt-sinergimp.jpeg",
    description:
      "Mengelola antarmuka frontend, manajemen state, dan integrasi API pada Human Resource System, sehingga efisiensi pengembangan fitur meningkat, UI konsisten, dan produktivitas tim terjaga.",
  },
  {
    id: 4,
    title: "Dunia Teknologi Nusantara",
    subtitle: "Junior Software Engineer",
    year: "Early 2026 - Now (Remote)",
    iconLink: "https://avatars.githubusercontent.com/u/124908725?s=280&v=4",
    description:
      "Berfokus pada pengembangan Company Management System secara end-to-end, mencakup fitur employees, department, position, RBAC, dan loan. Terlibat dalam perancangan flow fitur, implementasi front-end dan back-end, integrasi data, testing, maintenance, serta penyempurnaan fitur agar sistem internal perusahaan lebih terstruktur dan mudah digunakan.",
  },
  {
    id: 5,
    title: "Makongsi Capital Indonesia",
    subtitle: "Full-Stack Developer",
    year: "Early 2026 - Now (Onsite)",
    iconLink: "./img/kspps-ski.jpg",
    description:
      "Berfokus pada pengembangan website company profile secara full-stack, termasuk proyek Safar dan Rumsy. Mengerjakan implementasi tampilan berdasarkan kebutuhan bisnis, pengelolaan struktur halaman, integrasi data, optimasi UI, serta penyesuaian fitur agar website tampil profesional, responsif, dan mudah dikelola.",
  },
];

export default function Journey({ id }: { id: string }) {
  // transform dataJourney ke format Timeline
  const timelineData = dataJourney.map((item) => ({
    title: item.year,
    content: (
      <div className="w-full items-center">
        <div className="flex gap-4 items-center">
          <img
            src={item.iconLink}
            alt={`Logo ${item.title}`}
            width={50}
            height={50}
            className="rounded-md object-cover"
            aria-label={`Logo untuk ${item.title}`} // Menambahkan deskripsi untuk pembaca layar
          />

          <div className="flex flex-col text-left">
            <h3 className="font-light text-sm">{item.title}</h3>
            <h4 className="text-xs text-muted-foreground">{item.subtitle}</h4>
          </div>
        </div>
        <p className="text-md text-muted-foreground pt-3">{item.description}</p>
      </div>
    ),
  }));

  return (
    <section id={id}>
      <div className={`${contentWidth} mx-auto border-x`}>
        <div className="">
          <h2
            className="text-2xl font-semibold mb-2 px-4 border-b py-1"
            id="journey-title"
            aria-labelledby="journey-title"
          >
            Journey
          </h2>
          <p className="text-muted-foreground mb-6 text-sm px-4">
            Steps I’ve taken, lessons I’ve learned, and milestones along the
            way.
          </p>

          <div className="relative w-full overflow-clip md:top-4">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
      <EmptySection />
    </section>
  );
}
