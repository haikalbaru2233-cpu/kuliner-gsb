# Getting Started with Kuliner GSB

## Prerequisites

- Node.js 18.x atau lebih tinggi
- npm atau yarn
- Supabase account (gratis)
- Cloudinary account (gratis)

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/haikalbaru2233-cpu/kuliner-gsb.git
cd kuliner-gsb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get credentials:
   - Project URL
   - Anon Key
   - Service Role Key

### 4. Create Cloudinary Account

1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up (free tier)
3. Get credentials:
   - Cloud Name
   - API Key
   - API Secret

### 5. Setup Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=generate_a_random_secret_key_here
```

### 6. Setup Database

```bash
npm run db:push
npm run seed
```

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Test Accounts

### Admin
- Email: `admin@kuliner-gsb.com`
- Password: (check seed data)

### Seller
- Email: `toko@example.com`
- Password: (check seed data)

### Buyer
- Email: `buyer@example.com`
- Password: (check seed data)

## Troubleshooting

### Port 3000 sudah digunakan

```bash
npm run dev -- -p 3001
```

### Database connection error

- Verifikasi credentials di `.env.local`
- Pastikan Supabase project aktif
- Check firewall settings

### Module not found error

```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

- Read [README.md](../README.md) untuk overview
- Check [CONTRIBUTING.md](../CONTRIBUTING.md) untuk development
- Review [docs/API.md](../docs/API.md) untuk API documentation
- Check [ROADMAP.md](../ROADMAP.md) untuk planned features

## Support

- GitHub Issues: [Create issue](https://github.com/haikalbaru2233-cpu/kuliner-gsb/issues)
- Documentation: [docs/](../docs/)
- Contributing: [CONTRIBUTING.md](../CONTRIBUTING.md)
