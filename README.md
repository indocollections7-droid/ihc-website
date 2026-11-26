# IHC Trips
Run: `npm install` then `npm run dev` (http://localhost:5173). Build: `npm run build`.
- Brand text, USPs, activities: `src/data/brand.json`
- Ships (the fleet): `src/data/ships.json` — id, name, image, cabins, guests, pdf
- Trips (departures): `src/data/trips.json` — 7 fields only; details live in the itinerary PDF
- PDFs: put files in `public/pdf/` and set `pdf` (ship) / `itineraryPdf` (trip). Button labels: `cta` in `src/config.ts`
- Testimonials: `src/data/testimonials.json`
- WhatsApp number & placeholder: `src/config.ts`; message wording: `src/lib/whatsapp.ts`
- Images/videos: put files in `public/images/` and reference as `/images/name.jpg`
