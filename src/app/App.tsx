import { useRef, useState } from "react";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

export default function App() {
  /** ---------------- AUDIO ---------------- */
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  /** ---------------- DATA ---------------- */
  const venues = [
    { name: "Mission NYC", instagram: "https://instagram.com/mission.ny" },
    { name: "Elsewhere", instagram: "https://instagram.com/elsewherespace" },
    { name: "23 Music Room", instagram: "https://instagram.com/23_music_room" },
    { name: "Barc", instagram: "https://instagram.com/barc.cnx" },
    { name: "Honeys", instagram: "https://instagram.com/honeysbrooklyn" },
    { name: "00:00", instagram: "https://instagram.com/0000.nyc" },
  ];

  const cities = ["NYC", "London", "Taipei", "Chiang Mai"];

  const quickFacts = [
    {
      label: "Genres",
      value: "Tech House, Baile Funk, Jersey Club, Hip Hop, Big Room",
    },
    { label: "Set Lengths", value: "1–4 hrs" },
    { label: "Based In", value: "Travelling – Bali & San Francisco" },
    { label: "Equipment", value: "CDJs, Controller" },
  ];

  /** ---------------- RENDER ---------------- */
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto">

        {/* ---------- HERO ---------- */}
        <div className="px-6 pt-12 pb-8 min-h-[65vh] flex flex-col justify-center space-y-8">

          {/* Profile (NO IMAGE) */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <h1 className="text-5xl tracking-tight">MUUFU</h1>
              <p className="text-neutral-400 text-sm mt-1">
                Electric sets for any room
              </p>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3">
            <button
              onClick={togglePlay}
              className="w-full py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-100 transition"
            >
              {isPlaying ? "Pause" : "Listen"}
            </button>

            {/* Time bar */}
            <div className="flex items-center text-xs text-neutral-400 gap-2">
              <span>{formatTime(currentTime)}</span>
              <div className="flex-1 h-1 bg-neutral-700 rounded overflow-hidden">
                <div
                  className="h-full bg-white"
                  style={{
                    width: duration
                      ? `${(currentTime / duration) * 100}%`
                      : "0%",
                  }}
                />
              </div>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Hidden audio element */}
            <audio
              ref={audioRef}
              src="/audio/ice-cream-v2.mp3"
              onTimeUpdate={() =>
                audioRef.current &&
                setCurrentTime(audioRef.current.currentTime)
              }
              onLoadedMetadata={() =>
                audioRef.current &&
                setDuration(audioRef.current.duration)
              }
              onEnded={() => setIsPlaying(false)}
            />
          </div>

          <div className="text-center text-xs text-neutral-500">
            NYC DJ · Clubs / Bars / Pop-ups
          </div>
        </div>

        {/* ---------- CREDIBILITY ---------- */}
        <div className="px-6 py-8 border-t border-neutral-800 space-y-6">

          {/* Venues */}
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-3">
              Venues
            </h3>
            <div className="flex flex-wrap gap-2">
              {venues.map((venue) => (
                <a
                  key={venue.name}
                  href={venue.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300 hover:bg-neutral-800 transition flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  {venue.name}
                </a>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-3">
              Cities
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <div
                  key={city}
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- QUICK FACTS ---------- */}
        <div className="px-6 py-8 border-t border-neutral-800 space-y-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex justify-between text-sm">
              <span className="text-neutral-400">{fact.label}</span>
              <span className="text-white text-right">{fact.value}</span>
            </div>
          ))}
        </div>

        {/* ---------- CONTACT ---------- */}
        <div className="px-6 py-8 border-t border-neutral-800 space-y-3">
          <a
            href="mailto:contact.muufu@gmail.com"
            className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-full"
          >
            <Mail className="w-5 h-5" />
            contact.muufu@gmail.com
          </a>

          <a
            href="tel:+15103580938"
            className="flex items-center justify-center gap-3 w-full py-4 bg-neutral-900 border border-neutral-800 rounded-full"
          >
            <Phone className="w-5 h-5" />
            +1 (510) 358-0938
          </a>

          <a
            href="https://instagram.com/marissa_fu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-neutral-900 border border-neutral-800 rounded-full"
          >
            <Instagram className="w-5 h-5" />
            @marissa_fu
          </a>
        </div>

        <div className="h-10" />
      </div>
    </div>
  );
}
