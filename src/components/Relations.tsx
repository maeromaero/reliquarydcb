import { useState } from "react";
import "../relation-colors.css";
import { ShieldAlert, UsersRound } from "lucide-react";

const relations = [
  { name: 'Don "Carlos"', tone: "negative", note: "An asshole. He ruined my life. All over one singular deal." },
  { name: "Varg", tone: "positive", note: "A valued contact. A positive relationship is on record." },
];

export function Relations() {
  const [selected, setSelected] = useState(0);
  const relation = relations[selected];

  return <section className="communications-panel relations-view"><div className="comms-heading"><div><span className="section-index">CLIENT NETWORK / CONFIDENTIAL</span><h3>Relations &amp; affiliations</h3></div><span className="encrypted"><UsersRound size={13}/> {String(relations.length).padStart(2, "0")} FILES</span></div><div className="relation-layout"><nav className="relation-tabs" aria-label="Relationship files">{relations.map((entry, index) => <button key={entry.name} className={`relation-tab ${entry.tone} ${selected === index ? "active" : ""}`} aria-current={selected === index ? "true" : undefined} onClick={() => setSelected(index)}><span className="relation-tab-index">{String(index + 1).padStart(2, "0")}</span>{entry.name}</button>)}</nav><article className="relation-note"><div className="relation-note-head"><div><span className="section-index">RELATION FILE&nbsp; / &nbsp;{String(selected + 1).padStart(2, "0")}</span><h4 className={`relation-name ${relation.tone}`}>{relation.name}</h4></div><span className="encrypted"><UsersRound size={13}/> PERSONAL RECORD</span></div><p>{relation.note}</p><div className="relation-note-footer"><span><ShieldAlert size={13}/> INTERNAL PERSONNEL NOTE</span><span>LAST CONTACT / WITHHELD</span></div></article></div><div className="comms-notice"><ShieldAlert size={14}/> RELATIONSHIP NOTES ARE PERSONAL ARCHIVE ENTRIES — RESTRICTED DISTRIBUTION</div></section>;
}

export default Relations;
