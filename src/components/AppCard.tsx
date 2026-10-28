import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { appUrl, heroSrc, logoSrc, type App } from "@/lib/objects";
import { money, SALE, salePrice } from "@/lib/sale";

export function AppCard({ a }: { a: App }) {
  const { price } = a;
  return (
    <a
      href={appUrl(a.slug)}
      target="_blank"
      rel="noopener"
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:border-pumpkin/70"
    >
      <div className="relative aspect-[1.8] overflow-hidden border-b border-line bg-ink">
        <Image src={heroSrc(a)} alt={`${a.name} preview`} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover" />
      </div>
      <span className="absolute right-3 top-3 rounded-md bg-ink px-2.5 py-1 text-xs font-semibold text-pumpkin-hot">
        −{SALE.percent}%
      </span>
      <div className="flex items-center gap-4 px-6 pt-6">
        <Image src={logoSrc(a.slug)} alt="" width={56} height={56} unoptimized className="rounded-xl" />
        <div>
          <h3 className="text-lg font-bold leading-tight text-foreground">{a.name}</h3>
          <p className="mt-1 text-xs text-muted">{a.category}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 px-6 text-sm leading-relaxed text-muted">{a.blurb}</p>
      <div className="mx-6 mb-6 mt-5 flex items-end justify-between border-t border-line pt-4">
        <div>
          <div className="text-xs text-muted">
            {price.free && <span className="font-semibold text-slime">Free plan · </span>}
            {price.label} <s>{money(price.amount)}</s>
          </div>
          <div className="text-2xl font-extrabold leading-none text-pumpkin-hot">
            {money(salePrice(price.amount))}
            {price.unit && <span className="font-sans text-xs font-medium text-muted">{price.unit}</span>}
          </div>
        </div>
        <span className="flex items-center gap-2 text-xs font-semibold text-white">View app <ArrowUpRight size={17} aria-hidden /></span>
      </div>
    </a>
  );
}
