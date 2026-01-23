import { AudioPlayer } from '@/app/components/AudioPlayer';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function App() {
  // Replace this URL with your actual mix/set audio file
  const audioSrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  const venues = [
    { name: 'Mission NYC', instagram: 'https://instagram.com/missionnyc' },
    { name: 'Slate', instagram: 'https://instagram.com/slateny' },
    { name: 'Aura57', instagram: 'https://instagram.com/aura57' },
    { name: 'Output BK', instagram: 'https://instagram.com/outputbk' },
    { name: 'Good Room', instagram: 'https://instagram.com/goodroombk' },
    { name: 'Elsewhere', instagram: 'https://instagram.com/elsewhere.brooklyn' }
  ];

  const cities = ['NYC', 'London', 'Taipei', 'Chiang Mai'];

  const quickFacts = [
    { label: 'Genres', value: 'Bass House, Hip Hop, EDM' },
    { label: 'Set Lengths', value: '1–4 hrs' },
    { label: 'Based In', value: 'NYC (traveling)' },
    { label: 'Equipment', value: 'CDJs, Controller' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto">
        {/* Section 1: Audio-First Hero - Takes up 2/3 of screen */}
        <div className="px-6 pt-12 pb-6 min-h-[66vh] flex flex-col justify-center">
          <div className="space-y-6">
            {/* DJ Photo and Name */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://images.unsplash.com/photo-1599839575729-0009ea68e319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzY5MTQ5MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="MUUFU"
                className="w-24 h-24 rounded-full object-cover border-2 border-neutral-800"
              />
              <div className="space-y-2 text-center">
                <h1 className="text-5xl tracking-tight">MUUFU</h1>
                <p className="text-neutral-400 text-sm">
                  High-energy sets for any room
                </p>
              </div>
            </div>
            
            <AudioPlayer src={audioSrc} djName="MUUFU" />
            
            {/* Status Bar (moved here) */}
            <div className="text-center py-2 text-xs text-neutral-400">
              NYC-based DJ · Club / Corporate / Pop-ups
            </div>
          </div>
        </div>

        {/* Section 2: Credibility Strip */}
        <div className="px-6 py-8 border-t border-neutral-800 space-y-6">
          {/* Venues */}
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Venues</h3>
            <div className="flex flex-wrap gap-2">
              {venues.map((venue, index) => (
                <a
                  key={index}
                  href={venue.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300 hover:bg-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  {venue.name}
                </a>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Cities</h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Quick Facts */}
        <div className="px-6 py-8 border-t border-neutral-800">
          <div className="grid grid-cols-1 gap-4">
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex justify-between items-start py-2">
                <span className="text-sm text-neutral-400 w-32 shrink-0">
                  {fact.label}
                </span>
                <span className="text-sm text-white text-right">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Contact */}
        <div className="px-6 py-8 border-t border-neutral-800 space-y-3">
          <a
            href="mailto:booking@djapex.com"
            className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-full hover:bg-neutral-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">booking@djapex.com</span>
          </a>
          
          <a
            href="tel:+15551234567"
            className="flex items-center justify-center gap-3 w-full py-4 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">+1 (555) 123-4567</span>
          </a>
          
          <a
            href="https://instagram.com/djapex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@djapex</span>
          </a>
        </div>

        {/* Minimal Footer Space */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
