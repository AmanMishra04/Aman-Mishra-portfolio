import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Campus Xplorer",
    description: "Developed a navigation solution to help users easily locate buildings and facilities within the university campus.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    link: "https://github.com/AmanMishra04/Campus_Xplorer",
  },
  {
    title: "Face Detection Using OpenCV & Python",
    description: "A system using Haar cascade classifier for face detection, performing preprocessing operations such as face alignment and normalization.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    link: "https://face-detection-using-opencv-python-0.streamlit.app/",
  },
  {
    title: "E-Commerce Dashboard Using Power BI",
    description: "Created an interactive dashboard to track and analyze online sales data of a store using Microsoft Power BI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    link: "https://github.com/AmanMishra04/E-Commerce-Dashboard-Using-Power-BI",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-6 md:py-10 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-10">
          Selected <span className="text-gray-500">Works.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative overflow-hidden rounded-3xl block",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "p-2 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              )}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-white pr-4">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/70 group-hover:text-white transition-colors"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
