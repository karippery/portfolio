// pages/about.tsx
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translation/translations';
import { motion } from 'framer-motion';
import React from 'react';

const TimelineItem = ({ 
  title, 
  period, 
  subtitle, 
  description, 
  color, 
  isList = false 
}: {
  title: string;
  period: string;
  subtitle: string;
  description: string | string[];
  color: string;
  isList?: boolean;
}) => {
  const dotColor = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600'
  }[color];

  const textColor = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600'
  }[color];

  return (
    <div className="relative pl-8">
      <div className="relative pb-10 last:pb-0">
        <div className={`absolute w-3 h-3 ${dotColor} rounded-full -left-[7px] top-1.5`} />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h4 className="text-xl font-bold">{title}</h4>
            <span className={`${textColor} font-medium`}>{period}</span>
          </div>
          <h5 className="text-lg text-gray-700 mb-2">{subtitle}</h5>
          {isList ? (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {(description as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <motion.h3 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-2xl font-bold text-gray-800 border-b pb-2 mb-8"
  >
    {title}
  </motion.h3>
);

const HighlightCard = ({ 
  title, 
  items,
  bgColor = 'bg-blue-50'
}: {
  title: string;
  items: string[];
  bgColor?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`${bgColor} p-8 rounded-xl space-y-4`}
  >
    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const experiences = [
    {
      title: t.experience.currentTitle,
      period: t.experience.currentPeriod,
      subtitle: t.experience.currentSubtitle,
      description: t.experience.currentDescription,
      color: 'blue'
    },
    {
      title: t.experience.previousTitle,
      period: t.experience.previousPeriod,
      subtitle: t.experience.previousSubtitle,
      description: t.experience.previousDescription,
      color: 'blue'
    }
  ];

  const educations = [
    {
      title: t.education.masterTitle,
      period: t.education.masterPeriod,
      subtitle: t.education.masterSubtitle,
      description: t.education.masterDescription,
      color: 'green'
    },
    {
      title: t.education.bachelorTitle,
      period: t.education.bachelorPeriod,
      subtitle: t.education.bachelorSubtitle,
      description: t.education.bachelorDescription,
      color: 'green'
    }
  ];

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16">
      {/* Introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2 group relative inline-block">
          <span className="relative">
            {t.name}
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>
        <h2 className="text-2xl text-gray-600">{t.title}</h2>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {t.navLinks.map((link, i) => (
          <motion.a
            key={i}
            href={`#${link.id}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition"
          >
            {link.text}
          </motion.a>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="space-y-16">
        {/* Experience Timeline */}
        <div id="experience" className="space-y-8">
          <SectionHeader title={t.experience.title} />
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              title={exp.title}
              period={exp.period}
              subtitle={exp.subtitle}
              description={exp.description}
              color={exp.color}
              isList={true}
            />
          ))}
        </div>

        {/* Education Timeline */}
        <div id="education" className="space-y-8">
          <SectionHeader title={t.education.title} />
          {educations.map((edu, i) => (
            <TimelineItem
              key={i}
              title={edu.title}
              period={edu.period}
              subtitle={edu.subtitle}
              description={edu.description}
              color={edu.color}
            />
          ))}
        </div>

        {/* My Dream Section */}
        <div id="dream">
          <HighlightCard 
            title={t.dream.title} 
            items={t.dream.items} 
            bgColor="bg-blue-50" 
          />
        </div>

        {/* Future Plans */}
        <div id="future">
          <HighlightCard 
            title={t.future.title} 
            items={t.future.items} 
            bgColor="bg-gray-50" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;