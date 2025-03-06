
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Use Cases", href: "/#use-cases" },
        { name: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "API", href: "/api" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">
                  ViralMuse
                </span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-xs">
                AI-powered platform that helps content creators predict micro-trends, revive old content, and generate viral hooks.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-brand-blue transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 5.8C21.2483 6.1264 20.4534 6.34687 19.64 6.45C20.4982 5.93729 21.1413 5.13263 21.45 4.19C20.6436 4.67057 19.7608 5.00156 18.84 5.17C18.2245 4.51242 17.405 4.07431 16.5098 3.92851C15.6147 3.78271 14.6945 3.93755 13.8938 4.36891C13.093 4.80026 12.4569 5.48563 12.0852 6.32149C11.7135 7.15736 11.6273 8.09768 11.84 9C10.2094 8.92397 8.61444 8.52706 7.15481 7.83216C5.69519 7.13725 4.40576 6.15915 3.37 4.96C2.99438 5.62539 2.83295 6.39063 2.911 7.14875C2.98904 7.90687 3.30257 8.61456 3.8 9.17C3.14562 9.15098 2.50756 8.96694 1.93 8.64C1.93 8.657 1.93 8.675 1.93 8.693C1.92996 9.64174 2.25813 10.5631 2.85315 11.292C3.44817 12.0209 4.27374 12.5122 5.19 12.673C4.58923 12.8402 3.95549 12.8646 3.34 12.745C3.5891 13.5725 4.07122 14.3008 4.72786 14.8357C5.3845 15.3707 6.18596 15.6874 7.02 15.747C5.61172 16.8568 3.87096 17.4569 2.08 17.447C1.72902 17.4471 1.37849 17.4276 1.03 17.389C2.84677 18.5648 4.94838 19.188 7.1 19.187C14.18 19.187 18.08 13.459 18.08 8.493C18.08 8.317 18.075 8.139 18.067 7.963C18.8662 7.38741 19.5618 6.66795 20.12 5.843L22 5.8Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-brand-blue transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.0607C22 6.504 17.5233 2 12 2C6.47667 2 2 6.504 2 12.0607C2 17.0833 5.656 21.2453 10.4373 22V15.1933H7.89867V12.06H10.4373V9.844C10.4373 7.1433 11.9307 5.7567 14.4147 5.7567C15.6107 5.7567 16.868 5.956 16.868 5.956V8.416H15.4767C14.1087 8.416 13.564 9.233 13.564 10.0693V12.0607H16.736L16.268 15.1933H13.5627V22C18.344 21.2453 22 17.0833 22 12.0607Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-brand-blue transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-brand-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor"/>
                    <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor"/>
                    <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13.5V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V13.5C19 9 13 9.5 11 12V10C11 9.44771 10.5523 9 10 9H9C8.44772 9 8 9.44772 8 10V18C8 18.5523 8.44772 19 9 19H10C10.5523 19 11 18.5523 11 18V13.5V18Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            {footerLinks.map((section) => (
              <div key={section.title} className="col-span-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {year} ViralMuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
