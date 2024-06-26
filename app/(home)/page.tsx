import Link from "next/link";
import RecentDramas from '@/components/recent'
import PopularDramas from "@/components/popular";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[900px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          type="link"
          href={siteConfig.links.alluminet}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Alluminet
        </Link>
        <Link
          type="link"
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex justify-center mb-4 mt-8">
        <h1 className="text-3xl font-mono leading-tight tracking-tighter md:text-4xl">
          Popular Dramas
        </h1>
      </div>
      <PopularDramas />

      <div className="flex justify-center mb-4 mt-8">
        <h1 className="text-3xl font-mono leading-tight tracking-tighter md:text-4xl">
          Recent Dramas
        </h1>
      </div>
      <RecentDramas />
    </section>
  );
}
