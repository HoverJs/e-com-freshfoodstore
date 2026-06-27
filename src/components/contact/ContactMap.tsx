import { contactDetails } from '@/data/contact';

export default function ContactMap() {
  return (
    <section className="w-full overflow-hidden border-y border-border-light bg-white">
      <div className="h-[300px] w-full md:h-[380px] lg:h-[420px]">
        <iframe
          title="Bản đồ FreshFoodStore"
          src={contactDetails.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
