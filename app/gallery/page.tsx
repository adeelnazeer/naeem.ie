import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos and moments from community work and events.',
};

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  colSpan: string;
  aspect: string;
  sizes: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: 'https://naeem.ie/gallery/Pic.JPG?ts=1728317740',
    alt: 'Community campaign portrait: Naeem Iqbal with colleagues against a rural backdrop.',
    caption: 'Campaign & colleagues',
    colSpan: 'lg:col-span-12',
    aspect: 'aspect-21/9 max-sm:aspect-video',
    sizes: '100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/54b30429e041d79e0c6f0c0989ab143f_600x601.88087774295_fill.jpg',
    alt: 'Two professional men in suits shaking hands in front of a blue Delivering for Ireland event banner.',
    caption: 'Public engagement',
    colSpan: 'lg:col-span-5',
    aspect: 'aspect-square',
    sizes: '(min-width: 1024px) 40vw, 100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/1d42b705107a3200f31fb451361adfad_711x474_fill.jpg',
    alt: 'A group of five men in formal and traditional attire at a community event in a banquet hall.',
    caption: 'Community gatherings',
    colSpan: 'lg:col-span-7',
    aspect: 'h-full',
    sizes: '(min-width: 1024px) 56vw, 100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/7a4496ba2a37d83c516cef11888a34d2_866.66666666667x390_fill.jpg',
    alt: 'A group posing in front of an Islamic Relief banner at a community venue with wood panelling.',
    caption: 'Charity & community partnership',
    colSpan: 'lg:col-span-12',
    aspect: 'aspect-866/390 max-sm:aspect-video',
    sizes: '100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/d87b32741a0da55bc0a253aceb5e137c_669.33333333333x502_fill.jpg',
    alt: 'Two men in business attire smiling at a conference or networking event with warm lighting.',
    caption: 'Events & networking',
    colSpan: 'lg:col-span-4',
    aspect: 'aspect-4/3',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/6b39fa05807c2df89e7dedc23b7ba0a1_669.33333333333x502_fill.jpg',
    alt: 'Three men on stage holding a framed Manchester United jersey with a tribute to Cristiano Ronaldo on screen behind them.',
    caption: 'Charity auction & gala',
    colSpan: 'lg:col-span-4',
    aspect: 'aspect-4/3',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/2aa61f72d6565e586f242bf10333d836_669.33333333333x502_fill.jpg',
    alt: 'A large group of men at a formal dinner holding a framed Manchester United jersey; welcome screen for an annual dinner in the background.',
    caption: 'Annual dinner & community',
    colSpan: 'lg:col-span-4',
    aspect: 'aspect-4/3',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/4fd7580f6e37faba6417ef48e60a1fe0_835.94186046512x402_fill.jpg',
    alt: 'A large diverse group at an outdoor multicultural community festival with tents and a civic official in a chain of office.',
    caption: 'Multicultural community day',
    colSpan: 'lg:col-span-12',
    aspect: 'aspect-835/402 max-sm:aspect-video',
    sizes: '100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/4c8d571d05c8a548336f0ac826ccdb38_520x693.33333333333_fill.jpg',
    alt: 'Two men smiling on a green cricket pitch; one holds a cricket bat under a bright blue sky.',
    caption: 'Cricket & sport',
    colSpan: 'lg:col-span-4',
    aspect: 'aspect-520/693',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/101d231e5a134e97bf2a247cc5fae0b4_669.33333333333x502_fill.jpg',
    alt: 'A large group of men and children posing on a cricket field on a sunny day, some holding cricket bats.',
    caption: 'Club & teammates',
    colSpan: 'lg:col-span-4',
    aspect: 'h-full',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: 'https://naeem.ie/gallery_gen/f53593d893503334f8cfe2edd33777e3_520x693.33333333333_fill.jpg',
    alt: 'A man and a woman smiling together outdoors in front of a modern building with brick and glass.',
    caption: 'Community connections',
    colSpan: 'lg:col-span-4',
    aspect: 'aspect-520/693',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-[60vh] bg-[#fafbfc]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Gallery
        </p>
        <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Community in pictures
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600 leading-relaxed">
          Moments from local initiatives, events, and partnerships across Portlaoise and beyond.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-7">
          {galleryItems.map((item, i) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-4xl bg-slate-200 shadow-xl shadow-primary/10 ring-1 ring-slate-900/10 ${item.colSpan}`}
            >
              <div className={`relative ${item.aspect}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  sizes={item.sizes}
                  priority={i === 0}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/85 via-slate-900/30 to-transparent p-5 pt-14 sm:pt-16"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-display text-sm font-semibold text-white">{item.caption}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-14 text-center lg:text-left">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:gap-3 hover:text-accent-hover"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
