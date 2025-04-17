
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix = "", label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="flex flex-col items-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {inView ? (
          <CountUp end={value} duration={2.5} suffix={suffix} />
        ) : (
          "0"
        )}
      </div>
      <p className="text-white/80 text-lg">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 1000, suffix: "+", label: "Завършени проекта", delay: 0 },
    { value: 7, label: "Експерти", delay: 1 },
    { value: 30, suffix: "+", label: "Години опит", delay: 2 },
  ];

  return (
    <section id="stats" className="py-24 relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-david-navy/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=1935&auto=format&fit=crop"
          alt="Industrial background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-12 md:p-16 rounded-2xl max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
