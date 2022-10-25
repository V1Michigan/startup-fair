const Logo = ({ src, href, alt, size }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img
      // Yep, this size calculation for smaller screens is hacky
      className={`w-${Math.max(
        size - 24,
        24
      )} md:w-${size} hover:opacity-75 md:mx-3 md:my-1`}
      src={src}
      alt={alt}
    />
  </a>
);

export default Logo;