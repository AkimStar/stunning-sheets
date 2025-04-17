
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  year: string;
  title: string;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="flex relative"
    >
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center mr-4">
        <div className="rounded-full h-6 w-6 bg-david-accent1 flex items-center justify-center">
          <div className="rounded-full h-2 w-2 bg-white"></div>
        </div>
        <div className="h-full w-px bg-david-accent1/50 mt-2"></div>
      </div>

      {/* Content */}
      <div className="pb-12">
        <span className="text-sm font-medium text-david-accent1 mb-1 block">{year}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      year: "1990",
      title: "Основан от майстори в Силистра",
      delay: 0,
    },
    {
      year: "2000",
      title: "Разширяване на дейността",
      delay: 1,
    },
    {
      year: "2020",
      title: "Въвеждане на нови технологии и ново оборудване",
      delay: 2,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Зад Бранда</h2>
            <div className="h-1 w-20 bg-david-accent1 mb-6 rounded-full"></div>
            <p className="text-lg text-david-navy/80">
              Дейвид Груп е водеща фирма за тенекеджийски изделия и индустриални решения в България. Доверен партньор за над 500 клиента.
            </p>
            <p className="text-lg text-david-navy/80">
              С повече от 30 години опит, ние предлагаме висококачествени услуги в областта на металообработката, покривните конструкции и аспирационните системи. Нашият екип от опитни професионалисти гарантира изключителен резултат при всеки проект.
            </p>
          </motion.div>

          {/* Right side - Timeline */}
          <div className="pl-0 md:pl-12">
            <div className="relative">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  delay={item.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
