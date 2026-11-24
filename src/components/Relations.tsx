import "../relation-colors.css";
import { ShieldAlert, UsersRound } from "lucide-react";

const relation = {
  name: 'Don "Carlos"',
  tone: "negative",
  note: "Relationship classified as negative. Further details are withheld.",
};

export function Relations() {
  return <section className="communications-panel relations-view"><div className="comms-heading"><div><span className="section-index">CLIENT NETWORK / CONFIDENTIAL</span><h3>Relations &amp; affiliations</h3></div><span className="encrypted"><UsersRound size={13}/> 01 FILE</span></div><div className="relation-layout"><nav className="relation-tabs" aria-label="Relationship files"><button className="relation-tab negative active" aria-current="true"><span className="relation-tab-index">01</span>{relation.name}</button></nav><article className="relation-note"><div className="relation-note-head"><div><span className="section-index">RELATION FILE&nbsp; / &nbsp;01</span><h4 className={`relation-name ${relation.tone}`}>{relation.name}</h4></div><span className="encrypted"><UsersRound size={13}/> PERSONAL RECORD</span></div><p>{relation.note}</p><div className="relation-note-footer"><span><ShieldAlert size={13}/> INTERNAL PERSONNEL NOTE</span><span>LAST CONTACT / WITHHELD</span></div></article></div><div className="comms-notice"><ShieldAlert size={14}/> RELATIONSHIP NOTES ARE PERSONAL ARCHIVE ENTRIES — RESTRICTED DISTRIBUTION</div></section>;
}

export default Relations;
