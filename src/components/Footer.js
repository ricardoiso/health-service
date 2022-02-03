function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="w-full min-h-50 left-0 bottom-0 text-gray-600 body-font">
        <div className="container p-5 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            © IQ Curi - 2022
          </p>
          <span className="inline-flex space-x-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://github.com/JhormaMalave/hackaton-caracas-api"
              className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0"
            >
              Backend
            </a>

            <a
              href="https://github.com/ricardoiso/health-service"
              className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0"
            >
              Frontend
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
