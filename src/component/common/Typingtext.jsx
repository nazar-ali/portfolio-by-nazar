import React, { useEffect, useState } from "react";

const skills = [
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "AI Learner"
];

const TypingText = () => {
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = skills[skillIndex];
    
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, skillIndex]);

  return (
    <span className="text-red-600 border-r-2 border-red-600 pr-1 animate-pulse">
      {text}
    </span>
  );
};

export default TypingText;