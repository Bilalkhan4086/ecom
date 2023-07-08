import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-yellow-200 font-extrabold text-4xl flex items-center"
    >
      E
      <span className="text-darkwhite">
        .<span className="text-green-300">com</span>
      </span>
    </Link>
  );
};

export default Logo;
