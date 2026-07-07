# Lauxinity Store

> **Trusted Service, Beyond Expectations.**

Website store profesional berbasis Next.js 15, TypeScript, Tailwind CSS v4, dan Supabase.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.local.example .env.local
# Edit .env.local dengan credentials Supabase Anda

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

Admin: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Setup Database

Jalankan SQL berikut di Supabase SQL Editor secara berurutan:
1. `supabase/schema.sql` — Buat semua tabel
2. `supabase/rls.sql` — Row Level Security policies
3. `supabase/storage.sql` — Setup Storage bucket

## Buat Admin Account

```sql
-- Jalankan di Supabase SQL Editor setelah membuat user di Auth
INSERT INTO admins (id, email, name, role)
VALUES ('USER_UID', 'email@example.com', 'Admin Name', 'super_admin');
```

## Aktifkan Realtime

Di Supabase → Database → Replication, aktifkan untuk tabel:
- `products`, `messages`, `settings`, `admins`

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Backend | Supabase (PostgreSQL) |
| Auth | Supabase Auth + JWT |
| Storage | Supabase Storage |
| Realtime | Supabase Realtime |
| Deploy | Vercel + Supabase |

## Lihat dokumentasi lengkap di walkthrough.md (artifact)
