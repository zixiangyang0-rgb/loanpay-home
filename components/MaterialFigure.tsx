import Image from "next/image";

export const HOME_FIGURE = {
  src: "/photos/home.webp",
  width: 1200,
  height: 801,
  alt: "Bright neutral living room with sofa, coffee table and large windows; no people",
  creditName: "Shixart1985, CC BY 2.0, via Wikimedia Commons",
  creditHref:
    "https://commons.wikimedia.org/wiki/File:Modern_living_room_with_stylish_furniture_and_a_view_of_the_outdoors_in_a_cozy_apartment_setting.jpg",
  licenseHref: "https://creativecommons.org/licenses/by/2.0/",
} as const;

export default function MaterialFigure() {
  return (
    <figure className="mw-figure" aria-labelledby="mw-figure-caption">
      <span className="mw-figure-eyebrow">Material specimen · lived-in interior</span>
      <span className="mw-figure-frame">
        <Image
          src={HOME_FIGURE.src}
          width={HOME_FIGURE.width}
          height={HOME_FIGURE.height}
          alt={HOME_FIGURE.alt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
          priority={false}
        />
      </span>
      <figcaption id="mw-figure-caption" className="mw-figcaption">
        Neutral living room used as a scale reference for paint, flooring, and
        storage decisions — not a project result. Photo:{" "}
        <a href={HOME_FIGURE.creditHref} target="_blank" rel="noopener noreferrer">
          {HOME_FIGURE.creditName}
        </a>{" "}
        (<a href={HOME_FIGURE.licenseHref} target="_blank" rel="noopener noreferrer">
          CC BY 2.0
        </a>
        ).
      </figcaption>
    </figure>
  );
}
