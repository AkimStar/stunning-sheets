
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageSrc, delay }) => {
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
      <div className="mb-4 relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-david-accent1 text-white text-xs px-3 py-1 rounded-full"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: delay * 0.2 + 0.3 }}
        >
          {position}
        </motion.div>
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </motion.div>
  );
};

const TeamSpotlight = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Разим Яшар",
      position: "Специалист",
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      delay: 0,
    },
    {
      name: "Елмас Яшар",
      position: "Специалист",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      delay: 1,
    },
    {
      name: "Ресен Сали",
      position: "Майстор тенекеджия",
      imageSrc: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop",
      delay: 2,
    },
    {
      name: "Ерай Сали",
      position: "Инспектор качество",
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      delay: 3,
    },
  ];

  return (
    <section id="team" className="section-padding bg-david-accent4/20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашите Майстори</h2>
          <div className="h-1 w-20 bg-david-accent1 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-david-navy/80 max-w-2xl mx-auto">
            Запознайте се с екипа, който стои зад успеха на Дейвид Груп. Експерти с дългогодишен опит и отдаденост към занаята.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              imageSrc={member.imageSrc}
              delay={member.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 text-david-navy/70"
        >
          <p className="italic">Общо над 80 години комбиниран опит в занаята.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSpotlight;
