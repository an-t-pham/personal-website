<div align="center">

My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Upstash](https://upstash.comm), [Contentlayer](https://www.contentlayer.dev/) and deployed to [Vercel](https://vercel.com/).

</div>

<br/>


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/upstash/clone?demo-title=Next.js%20Portfolio%20with%20Pageview%20Counter&demo-description=Portfolio%20site%20with%20pageview%20counter%2C%20built%20with%20Next.js%2013%20App%20Router%2C%20Contentlayer%2C%20and%20Upstash%20Redis.&demo-url=https%3A%2F%2Fchronark.com%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1DA8n5a6WaP9p1FXf9LmUY%2Fc6264fa2732355787bf657df92dda8a1%2FCleanShot_2023-04-17_at_14.17.37.png&project-name=Next.js%20Portfolio%20with%20Pageview%20Counter&repository-name=nextjs-portfolio-pageview-counter&repository-url=https%3A%2F%2Fgithub.com%2Fchronark%2Fchronark.com&from=templates&integration-ids=oac_V3R1GIpkoJorr6fqyiwdhl17)

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