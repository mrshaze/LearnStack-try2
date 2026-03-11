# 🎓 EduPlatform LearnStack - Scrum Project (3 Weeks)

Eine moderne Lernplattform für Schüler, Dozenten und Admins.

## 🚀 Quick Start
1. **Repository klonen:** `git clone ...`
2. **Environment:** `cp .env.example .env.local`
3. **Docker starten:** `docker-compose up -d` (Startet Postgres & Keycloak)
4. **Abhängigkeiten:** `bun install`
5. **Entwicklung:** `bun run dev`

## 🛠 Tech Stack
- **Frontend/Backend:** 
- **Auth:** Auth & Keycloak (inkl. 2FA)
- **Styling:** TailwindCSS
- **DB:** PostgreSQL

Vorschlag:
Framework,"Next.js (App Router, RSC)" alternativen Vue, Angular offen für Vorschläge
Styling,TailwindCSS
Authentifizierung,Keycloak (Provider) + NextAuth.js (Integration) + 2FA
Datenbank,PostgreSQL
Infrastruktur,Docker-compose (Local Dev)
Design/UI,"Figma (Design), Framer (Animationen)"
Bereitstellung,Mobile-First / Responsive Web App (PWA-ready)

## 📂 Repo-Struktur (Vorschlag)
```
├── .github/workflows/  # CI/CD (Optional)
├── docker-compose.yml  # PostgreSQL & Keycloak Setup
├── prisma/             # Datenbank-Schema (empfohlen für Postgres + Next.js)
├── public/             # Statische Assets (Icons, Fonts)
├── src/
│   ├── app/            # Next.js App Router (Pages & API Routes)
│   ├── components/     # Wiederverwendbare UI-Komponenten (Atoms, Molecules)
│   ├── hooks/          # Custom React Hooks
│   ├── lib/            # Shared Logic (Auth-Config, DB-Client)
│   ├── services/       # Business Logic (z.B. Dateiverwaltung)
│   └── types/          # TypeScript Definitionen
├── README.md
└── tailwind.config.js
```

Namenskonventionen: 
Präfix | Beschreibung | Beispiel
-- | -- | --
feat/ | Neue Funktionen oder Erweiterungen | feat/issue-ID-titel
fix/ | Fehlerbehebungen (Bugfixes) | fix/issue-ID-titel
docs/ | Dokumentationsänderungen | docs/update-readme
refactor/ | Code-Optimierung ohne neue Funktionen | refactor/cleanup-api

## 📅 Projekt-Plan
- **Woche 1:** Setup & Auth (Epic 1)
- **Woche 2:** Kurse & Permissions (Epic 2 & 4)
- **Woche 3:** Kalender & Polishing (Epic 3)
