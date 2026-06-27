import Link from 'next/link';
import { Mail, MapPin, PhoneCall } from 'lucide-react';

import { contactDetails } from '@/data/contact';

const contactBlocks = [
  {
    id: 'address',
    icon: MapPin,
    content: [contactDetails.address],
    renderAsLink: false,
  },
  {
    id: 'email',
    icon: Mail,
    content: contactDetails.emails,
    renderAsLink: true,
    hrefPrefix: 'mailto:',
  },
  {
    id: 'phone',
    icon: PhoneCall,
    content: contactDetails.phones,
    renderAsLink: true,
    hrefPrefix: 'tel:',
  },
] as const;

export default function ContactInfo() {
  return (
    <aside className="rounded-[20px] border border-border-light bg-white p-6 shadow-[0_18px_50px_rgba(26,26,26,0.06)] md:p-8">
      {contactBlocks.map((block, index) => {
        const Icon = block.icon;
        const isLast = index === contactBlocks.length - 1;

        return (
          <div
            key={block.id}
            className={`flex items-start gap-4 py-6 text-left ${!isLast ? 'border-b border-border-light' : ''}`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon size={26} strokeWidth={1.8} />
            </div>

            <div className="space-y-2 pt-1">
              {block.content.map((item) =>
                block.renderAsLink ? (
                  <Link
                    key={item}
                    href={`${block.hrefPrefix}${item}`}
                    className="block text-base leading-7 text-dark transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                ) : (
                  <p key={item} className="max-w-[220px] text-base leading-7 text-dark">
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
