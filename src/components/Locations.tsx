const locations = [
  {
    id: 1,
    name: 'Sfiha´s - MetroWest',
    address: '6601 Old Winter Garden Rd',
    city: 'Orlando, FL 32835',
    phone: '(321) 800-6765',
    hours: {
      weekdays: 'Monday to Thursday: 5 PM - 10 PM',
      weekend: 'Friday and Saturday: 5 PM - 12 AM (midnight)',
      sunday: 'Sunday: 5 PM - 11 PM'
    },
    mapLink: 'https://maps.app.goo.gl/QyGFDgvQdk3nUFfU8'
  },
  {
    id: 2,
    name: 'Sfiha´s - International Drive',
    address: '5640 International Drive',
    city: 'Orlando, FL 32819',
    phone: '(407) 237-0717',
    hours: {
      weekdays: 'Monday to Thursday: 5 PM - 11 PM',
      friday: 'Friday: 5 PM - 12 AM (midnight)',
      saturday: 'Saturday: 12 PM - 12 AM (midnight)',
      sunday: 'Sunday: 12 PM - 11 PM'
    },
    mapLink: 'https://maps.app.goo.gl/KC1mPau1Pi4t1Dcg9'
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit one of our locations in Orlando and experience the authentic taste of Brazil
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="card-sfiha">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <i className="bx bxs-map text-3xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-primary">
                    {location.name}
                  </h3>
                  <p className="text-foreground mb-1">
                    {location.address}
                  </p>
                  <p className="text-foreground mb-4">
                    {location.city}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <i className="bx bxs-phone text-xl text-primary"></i>
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <i className="bx bxs-time text-xl text-primary"></i>
                  <div>
                    <p className="text-foreground">{location.hours.weekdays}</p>
                    <p className="text-foreground">{location.hours.weekend}</p>
                    <p className="text-foreground">{location.hours.friday}</p>
                    <p className="text-foreground">{location.hours.saturday}</p>
                    <p className="text-foreground">{location.hours.sunday}</p>
                  </div>
                </div>

                {/* Map Link */}
                <div className="pt-4">
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <i className="bx bxs-map-pin"></i>
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 p-8 bg-card rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-primary">CALL US TO CHECK THE DELIVERY AREA</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <i className="bx bxs-phone text-xl text-primary"></i>
              <a 
                href="tel:(321) 800-6765"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                TEL: (321) 800-6765
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="bx bxs-phone text-xl text-primary"></i>
              <a 
                href="tel:(407) 237-0717"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                TEL: (407) 237-0717
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="bx bxs-envelope text-xl text-primary"></i>
              <a 
                href="mailto:contact@sfihasdelivery.com"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                contact@sfihasdelivery.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;