const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Sfiha's</h3>
            <p className="text-gray-300 mb-4">
              Authentic Brazilian flavors in Orlando, Florida.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sfihasusa" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram text-xl text-secondary-foreground"></i>
              </a>
              <a 
                href="https://www.facebook.com/share/1Ba4QMaH3S/?mibextid=wwXIfr" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <i className="bx bxl-facebook text-xl text-secondary-foreground"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-secondary-foreground transition-colors">
                Home
              </a>
              <a href="/menu" className="block text-gray-300 hover:text-secondary-foreground transition-colors">
                Menu
              </a>
              <a href="#locations" className="block text-gray-300 hover:text-secondary-foreground transition-colors">
                Locations
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-secondary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <i className="bx bxs-phone"></i>
                    <a 
                      href="tel:(321) 800-6765"
                      className="block text-gray-300 hover:text-secondary-foreground transition-colors"
                    >
                      (321) 800-6765
                    </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="bx bxs-phone"></i>
                    <a 
                      href="tel:(407) 237-0717"
                      className="block text-gray-300 hover:text-secondary-foreground transition-colors"
                    >
                      (407) 237-0717
                    </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="bx bxs-envelope"></i>
              <a 
                href="mailto:contact@sfihasdelivery.com"
                className="block text-gray-300 hover:text-secondary-foreground transition-colors"
              >
                contact@sfihasdelivery.com
              </a>
              </p>
              <p className="flex items-start gap-2">
                <i className="bx bxs-map mt-1"></i>
                <span className="block text-gray-300 hover:text-secondary-foreground transition-colors">
                  Orlando, FL<br />
                  <a href="https://maps.app.goo.gl/QyGFDgvQdk3nUFfU8" className="block text-gray-300 hover:text-secondary-foreground transition-colors">
                    <b>6601 Old Winter Garden Rd</b>
                  </a>
                  <p></p>
                  <a href="https://maps.app.goo.gl/KC1mPau1Pi4t1Dcg9" className="block text-gray-300 hover:text-secondary-foreground transition-colors">
                    <b>5640 International Drive</b>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Sfiha's Delivery LLC - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;