export default function Footer() {
    return (
      <footer className="bg-custom-color_2 text-white py-5 md:py-8">
        <div className="container px-5 md:px-20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 mt-1">
              &copy; {new Date().getFullYear()} Pavellsan All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  