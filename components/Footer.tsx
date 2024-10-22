import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li className="mt-2">
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
              <li className="mt-2">
                <Link href="/careers" className="hover:underline">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Services</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/custom-software" className="hover:underline">Custom Software</Link>
              </li>
              <li className="mt-2">
                <Link href="/products" className="hover:underline">Products</Link>
              </li>
              <li className="mt-2">
                <Link href="/support" className="hover:underline">Support</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/terms" className="hover:underline">Terms of Use</Link>
              </li>
              <li className="mt-2">
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">LinkedIn</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm font-bold mb-2">
              © 2023 TechInnovate Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;