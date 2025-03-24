function Footer() {
    return (
      <footer className="bg-gradient-to-t from-blue-200 to-white footer sm:footer-horizontal footer-center  text-slate-600 p-4">
        <hr className="mt-1 w-full border-t-2 border-slate-300 rounded-sm opacity-100" />
        <aside>
          <p className="text-center mt-4">
            Copyright © {new Date().getFullYear()} - All right reserved by QIAN Inc.
          </p>
        </aside>
      </footer>
    );
  }
  
  export default Footer;