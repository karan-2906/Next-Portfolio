import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const roles = [
  {
    title: "Associate Software Engineer",
    period: "August 2025 - Present",
    points: [
      "Build the visual editing layer of a headless CMS, where editors change content by clicking directly on their own live website. It ships as a React and TypeScript micro-frontend loaded into a much larger application at runtime.",
      "Own the cross-origin messaging between that editor and a JavaScript SDK embedded in customer production sites, so two separately deployed codebases agree on which field was clicked and what is allowed to happen to it.",
      "Built content personalization, publishing with dependency resolution across environments and locales, and permission-aware screens that render differently for roughly a dozen role types.",
      "Author and maintainer of the end-to-end suite (203 of 227 Playwright specs), and split a long sequential CI pipeline into parallel jobs so feedback arrives sooner.",
    ],
  },
  {
    title: "Associate Software Engineer Intern",
    period: "January 2025 - July 2025",
    points: [
      "Joined the visual editing team on interface fixes across navigation, form field rendering and the asset picker, then moved into feature work spanning both the editor and the larger host application it loads into.",
      "Contributed to the shared form-rendering libraries that build content entry forms from schema definitions, used across the product rather than in one screen.",
      "Started the end-to-end test coverage for editing and publishing flows, which grew into the suite I now maintain.",
    ],
  },
];

const Contentstack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full flex flex-col gap-10"
    >
      {roles.map((role, index) => (
        <div key={role.title}>
          <h3 className="flex flex-wrap gap-1 font-medium text-xl font-titlefont">
            {role.title}
            {index === 0 && (
              <a
                href="https://www.contentstack.com/"
                target="_blank"
                className="text-textGreen tracking-wide"
              >
                @Contentstack
              </a>
            )}
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            {role.period}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {role.points.map((point) => (
              <li key={point} className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                  <TiArrowForward />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default Contentstack;
