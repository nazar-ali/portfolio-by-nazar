
const SocialIcon = ({ link, children,className }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-14 h-14 bg-black rounded-full flex items-center justify-center text-white transition hover:bg-red-600 hover:scale-110 cursor-pointer ${className}`}   
  >
    {children}
  </a>
);

export { SocialIcon };