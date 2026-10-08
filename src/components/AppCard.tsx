import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { appUrl, logoSrc, type App } from "@/lib/objects";
import { money, SALE, salePrice } from "@/lib/sale";

export function AppCard({ a }: { a: App }) {
  const { price } = a;
  return (
    <a
      href={appUrl(a.slug)}
      target="_blank"
      rel="noopener"
      className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-pumpkin/60 hover:shadow-[0_12px_40px_-12px_rgb(255_122_26/0.45)]"
    >
      <span className="absolute right-4 top-4 rounded-full bg-pumpkin px-2.5 py-1 text-xs font-bold text-ink">
        −{SALE.percent}%
      </span>
      <div className="flex items-center gap-4 pr-12">
        <Image src={logoSrc(a.slug)} alt="" width={56} height={56} unoptimized className="rounded-xl" />
        <div>
          <h3 className="text-lg font-bold leading-tight text-foreground">{a.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">{a.category}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{a.blurb}</p>
      <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
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
        <ArrowUpRight size={20} className="text-muted transition group-hover:text-pumpkin" aria-hidden />
      </div>
    </a>
  );
}
