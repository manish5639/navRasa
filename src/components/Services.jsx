import { useEffect, useRef } from "react";
import { Code2, AppWindow, Brain, Cpu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Web & SaaS Development",
        desc: "Scalable, secure platforms engineered for performance and long-term growth.",
        icon: Code2,
    },
    {
        title: "Application Development",
        desc: "High-quality mobile and desktop applications with a focus on usability and stability.",
        icon: AppWindow,
    },
    {
        title: "AI Tools Development",
        desc: "Custom AI tools that automate workflows and enhance operational intelligence.",
        icon: Brain,
    },
    {
        title: "ML Model Designing",
        desc: "Production-ready ML models optimized, validated, and deployed for real-world use.",
        icon: Cpu,
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "bottom 40%",
                        toggleActions: "play reverse play reverse",
                        invalidateOnRefresh: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#111] px-6 md:px-12 py-32"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
                {/* LEFT CONTENT */}
                <div>
                    <span className="block text-xs tracking-[0.45em] uppercase text-white/40 mb-6">
                        Services
                    </span>

                    <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
                        What we build
                    </h2>

                    <p className="text-white/55 text-sm leading-relaxed max-w-md">
                        From MVPs to production systems, we engineer web platforms, applications, and AI-driven solutions built for scale, reliability, and real-world use.
                    </p>
                </div>

                {/* RIGHT GRID */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={i}
                                ref={(el) => (cardsRef.current[i] = el)}
                                className="
                group relative
                rounded-2xl
                p-10
                bg-[#000]
                border border-white/10
                transition-all duration-400
                hover:border-white/25
                hover:translate-y-[-6px]
                hover:shadow-[0_60px_140px_rgba(0,0,0,0.85)]
              "
                            >
                                {/* subtle inner glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                {/* Icon container */}
                                <div
                                    className="
                  mb-8
                  w-12 h-12
                  rounded-xl
                  flex items-center justify-center
                  border border-white/20
                  text-white
                  transition-all duration-300
                  group-hover:scale-110
                "
                                >
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-medium text-white mb-3 tracking-tight">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-white/55 leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* bottom accent */}
                                <div className="mt-8 h-px w-12 bg-white/20" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
