import { useState } from "react";
import { Image, ShieldAlert, X } from "lucide-react";

const images = [
  { src: "/alexei-archive-01.png", alt: "Alexei's archived roleplay screenshot 1" },
  { src: "/alexei-archive-02.png", alt: "Alexei's archived roleplay screenshot 2" },
  { src: "/alexei-archive-03.png", alt: "Alexei's archived roleplay screenshot 3" },
  { src: "/alexei-archive-04.png", alt: "Alexei's archived roleplay screenshot 4" },
  { src: "/alexei-archive-05.png", alt: "Alexei's archived roleplay screenshot 5" },
];

export default function ImagesArchive() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  return <section className="communications-panel images-archive"><div className="comms-heading"><div><span className="section-index">PERSONNEL MEDIA / CI-041</span><h3>Image & video archive</h3></div><span className="encrypted"><Image size={13}/> {images.length.toString().padStart(2, "0")} FILES</span></div><p className="images-disclaimer">A collection of Images &amp; Videos taken&nbsp; by Alexei Pols&nbsp; // Dont take any of these icly, these are just my image dumps for curious people.</p><div className="images-grid">{images.map((item, index) => <button className="archive-image" key={item.src} onClick={() => setSelectedImage(item)}><img src={item.src} alt={item.alt}/><span><b>IMG_{String(index + 1).padStart(2, "0")}</b> // ARCHIVE FRAME</span></button>)}</div><div className="comms-notice"><ShieldAlert size={14}/> PERSONAL IMAGE DUMP — NOT FOR IN-CHARACTER USE</div>{selectedImage && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setSelectedImage(null)}><button className="lightbox-close" aria-label="Close image preview" onClick={() => setSelectedImage(null)}><X size={18}/></button><img src={selectedImage.src} alt={selectedImage.alt} onClick={(event) => event.stopPropagation()}/></div>}</section>;
}
