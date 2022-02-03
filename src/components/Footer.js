function Footer() {
  return (
    <div className="flex flex-col">
      <footer class="w-full min-h-50 left-0 bottom-0 text-gray-600 body-font">
        <div class="container p-5 mx-auto flex items-center sm:flex-row flex-col">
          <p class="text-sm text-gray-500 ml-3 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            © IQ Curi - 2022
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://github.com/JhormaMalave/hackaton-caracas-api"
              class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
            >
              Backend
            </a>

            <a
              href="https://github.com/ricardoiso/health-service"
              class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mr-5"
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
