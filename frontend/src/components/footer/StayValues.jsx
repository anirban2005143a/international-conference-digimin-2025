import { Mail, Phone, MapPin, Globe } from "lucide-react";

const venues = [
    {
        name: "EDC, IIT (ISM) Dhanbad",
        phone: "+91-326-223-5001",
        email: "edcsah@iitism.ac.in",
        map: "https://maps.app.goo.gl/3Kcnp5JfvbkDyhLE7",
        website: "https://people.iitism.ac.in/~download/form-emp/EDC-Form.pdf",
    },
    {
        name: "Grand Mirage Dhanbad, a member of Radisson Individuals",
        phone: "03263509100",
        map: "https://maps.app.goo.gl/rS4vWRwvrCbPVzRKA",
        website: "https://www.google.com/search?hl=en-IN&cs=0&sxsrf=AE3TifMSTw9ONA46hqJWqBPRoyDk8JELDg:1749271973535&kgmid=/g/11vbv32b4b&q=Grand+Mirage+Dhanbad,+a+member+of+Radisson+Individuals&shndl=30&shem=lcuae,uaasie&kgs=04e9f93388c29253",
    },
    {
        name: "Cocoon",
        phone: "+91-98765-43210",
        email: "reservations@hotelsushantinternational.com",
        map: "https://maps.app.goo.gl/1ahGDmjmQ3eDMhvr9",
        website: "https://www.cocoonhotel.in/",
    }
];

function VenueCard({ venue }) {
    return (
        <div className="border-b border-gray-700 pb-4 mb-4 last:border-none last:mb-0 last:pb-0">
            <h3 className="text-white font-semibold text-lg mb-2">{venue.name}</h3>
            <div className="text-sm text-gray-300 space-y-1">
                {venue.email && <div className="flex items-center gap-2">
                    <Mail className=" w-4 h-4" />
                    <a href={`mailto:${venue.email}`} className="hover:text-white overflow-visible w-[90%]">
                        {venue.email}
                    </a>
                </div>}
                {venue.phone && <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <a href={`tel:${venue.phone}`} className="hover:text-white">
                        {venue.phone}
                    </a>
                </div>}
                {venue.website && <div className="flex items-center gap-2">
                    <Globe size={14} />
                    <a href={venue.website} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        Website
                    </a>
                </div>}
                <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <a href={venue.map} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        View on Map
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function StayVenues() {
    return (
        <div className="bg-gray-900 text-gray-200 rounded-xl max-w-4xl mx-auto">
            {venues.map((venue, index) => (
                <VenueCard key={index} venue={venue} />
            ))}
        </div>
    );
}
