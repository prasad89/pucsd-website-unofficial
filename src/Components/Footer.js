import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-3 w-100 bg-light text-center">
        <p className="text-info">
          Made by
          <Link href="https://github.com/tusharad">
            <a className="text-info"> Tushar </a>
          </Link>
          &
          <Link href="https://github.com/prasad89">
            <a className="text-info"> Prasad </a>
          </Link>
        </p>
        <p>
          <Link href="https://github.com/prasad89/pucsd-website">
            <a className="text-secondary">Github Respository</a>
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
