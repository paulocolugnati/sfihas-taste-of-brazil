import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message (you could use a toast here)
    alert('Message sent successfully! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have any questions or suggestions? Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-accent w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-card rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <i className="bx bxs-phone text-2xl text-primary"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Phone - MetroWest</h4>
                    <a 
                      href="tel:(321) 800-6765"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      (321) 800-6765
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="bx bxs-phone text-2xl text-primary"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Phone - International Drive</h4>
                    <a 
                      href="tel:(407) 237-0717"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      (407) 237-0717
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="bx bxs-envelope text-2xl text-primary"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:contact@sfihasdelivery.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      contact@sfihasdelivery.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="bx bxs-map text-2xl text-primary"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Addresses</h4>
                    <p className="text-foreground mb-2">
                      <a className="text-foreground hover:text-primary transition-colors" href="https://maps.app.goo.gl/QyGFDgvQdk3nUFfU8">
                        6601 Old Winter Garden Rd<br />
                        Orlando, FL 32835
                      </a>
                    </p>
                    <p className="text-foreground">
                      <a className="text-foreground hover:text-primary transition-colors" href="https://maps.app.goo.gl/KC1mPau1Pi4t1Dcg9">
                      5640 International Drive<br />
                      Orlando, FL 32819
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="bx bxs-time text-2xl text-primary"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Sfiha´s - MetroWest</h4>
                    <p className="text-foreground">
                      Monday to Thursday: 5 PM - 10 PM<br/>
                      Friday and Saturday: 5 PM - 12 AM (midnight)<br/>
                      Sunday: 5 PM - 11 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="bx bxs-time text-2xl text-primary"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Sfiha´s - International Drive</h4>
                    <p className="text-foreground">
                      Monday to Thursday: 5 PM - 11 PM<br/>
                      Friday: 5 PM - 12 AM (midnight)<br/>
                      Saturday: 12 PM - 12 AM (midnight)<br/>
                      Sunday: 12 PM - 11 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Us on Social Media</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/sfihasusa" 
                    target='_blank'
                    className="p-3 bg-card rounded-lg hover:bg-muted transition-colors"
                    aria-label="Instagram"
                  >
                    <i className="bx bxl-instagram text-xl text-foreground"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1Ba4QMaH3S/?mibextid=wwXIfr" 
                    target='_blank'
                    className="p-3 bg-card rounded-lg hover:bg-muted transition-colors"
                    aria-label="Facebook"
                  >
                    <i className="bx bxl-facebook text-xl text-foreground"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;