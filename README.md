<div align="center">

My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Upstash](https://upstash.com), [Contentlayer](https://www.contentlayer.dev/) and deployed to [Vercel](https://vercel.com/).

</div>

<br/>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Running Locally

Install dependencies and run the development server:
```sh-session
pnpm install
pnpm dev
```

## Deploying with a custom domain

### 1. Deploy to Vercel

- Push your repo to **GitHub**, **GitLab**, or **Bitbucket**.
- Go to [vercel.com](https://vercel.com) and sign in (or use “Import” with your git provider).
- Click **Add New → Project** and import this repository.
- Leave the default settings (Framework: Next.js, root directory: `./`). If you use **Upstash Redis** for project views, add your env vars (e.g. `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`) in **Settings → Environment Variables**.
- Click **Deploy**. You’ll get a URL like `your-project.vercel.app`.

### 2. Add your domain in Vercel

- In the project dashboard go to **Settings → Domains**.
- Enter your domain (e.g. `yourname.com` or `www.yourname.com`) and click **Add**.
- Vercel will show the DNS records you need.

### 3. Point your domain’s DNS to Vercel

Where you bought the domain (Namecheap, Google Domains, Cloudflare, etc.):

**Option A – Use Vercel nameservers (recommended)**  
- In your registrar’s DNS/nameserver settings, replace the current nameservers with the ones Vercel gives you (e.g. `ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
- Back in Vercel, add the domain; it will verify automatically once DNS propagates.

**Option B – Keep DNS at your registrar**  
- Add the record Vercel tells you:
  - **A record** for `@` (or your apex) → `76.76.21.21`
  - **CNAME** for `www` (if you use www) → `cname.vercel-dns.com`

DNS can take from a few minutes up to 24–48 hours to propagate. Vercel will issue an SSL certificate automatically once the domain is verified.