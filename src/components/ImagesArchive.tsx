import { Image, ShieldAlert } from "lucide-react";

export default function ImagesArchive() {
  return <section className="communications-panel images-archive"><div className="comms-heading"><div><span className="section-index">PERSONNEL MEDIA / CI-041</span><h3>Image & video archive</h3></div><span className="encrypted"><Image size={13}/> PRIVATE COLLECTION</span></div><p className="images-disclaimer">A collection of Images &amp; Videos taken&nbsp; by Alexei Pols&nbsp; // Dont take any of these icly, these are just my image dumps for curious people.</p><div className="images-empty"><div className="images-icon"><Image size={24}/></div><strong>MEDIA ARCHIVE EMPTY</strong><span>AWAITING FILE ATTACHMENTS</span></div><div className="comms-notice"><ShieldAlert size={14}/> PERSONAL IMAGE DUMP — NOT FOR IN-CHARACTER USE</div></section>;
}
