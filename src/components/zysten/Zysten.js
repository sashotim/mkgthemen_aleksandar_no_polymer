import React from 'react';

function Zysten(props) {
  return (
    <div>
    <div id="definition" className="chapters">
      <div className="chapterTitle">
        <h3>Definition</h3>
        <hr />
      </div>
      <div className="content-block">
        <ul style={{ listStyleType: "disc" }}>
          <li>Zysten = mit Epithel ausgekleidete Hohlräume</li>
          <li>
            Pseudozysten = Hohlräume ohne Epithelauskleidung (allein aus Bindegewebe
            aufgebaut)
          </li>
          <li>
            Beide sind einkammrige oder mehrkammrige Hohlräume mit
            flüssigem/breiigem Inhalt
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
      <div className="links" />
    </div>;
    <div id="allgemein" className="chapters">
      <div className="chapterTitle">
        <h3>Allgemein</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Zysten sind im MKG-Bereich mit die häufigsten pathologischen Prozesse die
          Patienten aufweisen. Ein gehäuftes Auftreten wird vor allem zwischen dem
          20. und 50. Lebensjahr beobachtet. Männer sind mit 58% etwas häufiger
          betroffen als Frauen mit 42%.{" "}
        </p>
        <p>Fakten: </p>
        <ul>
          <li>Alle Zysten sind primär gutartig.</li>
          <li>
            Maligne Transformation werden in der Literatur mit einer Inzidenz von
            0,2-0,5% beschrieben.
          </li>
          <li>
            Zysten weisen ein expansives, nicht infiltratives Wachstum auf.
            <ul>
              <li>
                {" "}
                Jede Zyste muss operiert werden, da sonst zu Frakturen oder einer
                Verdrängung von Zähnen und N. alveolaris inferiorn kommen kann.
              </li>
            </ul>
          </li>
          <li>Sie können im Knochen, in Weichteilen und Organen auftreten.</li>
          <li>Zysten sind durch eine Kapsel in sich abgeschlossen.</li>
        </ul>
      </div>
      <div className="links" />
    </div>;
    <div id="pathogenese" className="chapters">
      <div className="chapterTitle">
        <h3>Ätiologie/Pathogenese</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Zysten entstehen vorwiegend in gewebereichen Regionen, in denen während
          der <strong>Embryonalentwicklung</strong>
          Zellreste verblieben sind. Diese sind bevorzugt:
        </p>
        <ul>
          <li>Malassez-Epithelentwicklung im Parodontalgewebe</li>
          <li>Vereinigungsstellen der Kieferfortsätze und Kiemenfurchen</li>
        </ul>
        <p>
          Alternativ können Zysten von epithelialen Gewebe ausgehen, welches im
          Rahmen von <strong>traumatischen Ereignissen</strong> in tiefere
          Gewebeschichten versprengt wurden.
        </p>
        <p>
          Um die ersten Zerfallsprodukten der Zellen gruppieren sich neu entstehende
          Zellhaufen und setzten die Zystenentstehung in Gang. Zur Entstehung von
          Zysten gibt es aktuell 2 Hypothesen:
        </p>
        <ol>
          <li>
            Eine Zyste entsteht aufgrund eines initialen Reizes mit anschließender
            Proliferation (Bsp.: nekrotische Veränderung der Zahnpulpa)&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - dieser
            Reiz kann entzündlich oder traumatisch bedingt sein
          </li>
          <li>
            Eine Zyste entsteht aufgrund einer autonome Proliferation der liegen
            gebliebenen Zellreste.
          </li>
        </ol>
        <p>
          Durch die semipermeable Membran der Zystenkapsel kommt es zu einer
          Verschiebung von Gewebeflüssigkeit ins Zystenlumen. Durch diesen
          osmotischen Vorgang kommt es zu einer Volumenzunahme des Zysteninhaltes
          und somit zu einer Größenzunahme. Dieses Größenwachstum lässt sich durch
          Eröffnen des Zystenlumens stoppen und umkehren.
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="links" />
    </div>;
    <div id="who" className="chapters">
      <div className="chapterTitle">
        <h3>WHO-Einteilung</h3>
        <hr />
      </div>
      <div className="content-block">
        <table
          className="table table-bordered table-striped"
          style={{ fontWeight: "bold", height: 615 }}
          width={614}
        >
          <tbody>
            <tr>
              <td>Epitheliale Kieferzysten</td>
              <td>Bedingt durch Entwicklungsstörungen</td>
              <td>
                <ul>
                  <li>
                    Keratozyste/KZOT (keratozystische odontogene Tumor wird seit der
                    WHO-Klassifikation der Kopf-Hals-Tumoren von 2005 zur Gruppe der
                    benignen odontogenen Tumoren gerechnet)
                  </li>
                  <li>Gingivale Zyste des Kindes- und Erwachsenenalters</li>
                  <li>Eruptionszyste</li>
                  <li>Laterale Parodontalzyste</li>
                  <li>Follikuläre Zyste</li>
                  <li>Boytroide odontogene Zyste</li>
                  <li>Glanduläre odontogene Zyste</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Bedingt durch Entzündungen</td>
              <td>
                <ul>
                  <li>Radikuläre Zyste</li>
                  <li>Paradentale Zyste</li>
                  <li>Radikuläre Residualzyste</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Nicht-odontogene Zysten</td>
              <td>
                <ul>
                  <li>Ductus nasopalatinus Zyste</li>
                  <li>Globulomaxilläre Zyste</li>
                  <li>Nasolabiale Zyste</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Nicht-epitheliale Kieferzyste</td>
              <td colSpan={2}>
                <ul>
                  <li>
                    Solitäre Knochenzyste (Traumatisch, einfach, hämorrhagisch)
                  </li>
                  <li>Aneurysmatische Knochenzyste</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Zysten der Kieferhöhlenschleimhaut</td>
              <td colSpan={2}>
                <ul>
                  <li>Gutartige Schleimhautzysten der Kieferhöhle</li>
                  <li>Postoperative Kieferhöhlenzyste</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Zysten der Weichteile</td>
              <td colSpan={2}>
                <ul>
                  <li>Dermoide und epidermoide Zyste</li>
                  <li>
                    Lymphoepitheliale Zyste (Kiemenbogen-, laterale Halszyste)
                  </li>
                  <li>Ductus thyroglossus Zyste</li>
                  <li>Zystisches Lymphangiom</li>
                  <li>Nasopharyngeale Zyste</li>
                  <li>
                    Zyste der Speicheldrüsen (Extravasationszyste, Retentionszyste,
                    Ranula)
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p />
        <div className="startGallery imageContainer" data-gallery-item={1}>
          <img src="thumbs/who_images.png" />
        </div>
        {/*<div class="imageContainer"><img src="thumbs/who_images.png"></div>*/}
        <p />
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/10a.png" />
          <div className="media-link-title">Kongenitale Ranula</div>
          <div className="media-link-description">
            Kongenitale Ranula im Bereich des vorderen Mundbodens bei einem Kind.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/10b.png" />
          <div className="media-link-title">Kongenitale Ranula</div>
          <div className="media-link-description">
            Kongenitale Ranula im bereich des vorderen Mundbodens bei einem Kind.
            Die Pinzette hält hier den Zystensack.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/10c.png" />
          <div className="media-link-title">Kongenitale Ranula</div>
          <div className="media-link-description">
            Die Ranula hat einen Durchmesser von ca. 6 mm.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/10d.png" />
          <div className="media-link-title">Kongenitale Ranula</div>
          <div className="media-link-description">
            Vorderer Mundboden nach Entfernung der Ranula.
          </div>
        </div>
        <div data-media-id={5} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/10e.png" />
          <div className="media-link-title">Kongenitale Ranula</div>
          <div className="media-link-description">
            Mit resorbierbaren Nahtmaterial verschlossener Mundboden nach Entfernung
            der Ranula.
          </div>
        </div>
      </div>
    </div>;
    <div id="haeufigkeiten" className="chapters">
      <div className="chapterTitle">
        <h3>Häufigkeiten von Zysten</h3>
        <hr />
      </div>
      <div className="content-block">
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Bezeichnung</th>
              <th>Häufigkeit (in %)</th>
            </tr>
            <tr>
              <td>Radikuläre/residuale Zyste</td>
              <td>52,3%</td>
            </tr>
            <tr>
              <td>Follikuläre Zyste</td>
              <td>16,6%</td>
            </tr>
            <tr>
              <td>KZOT/Keratozyste</td>
              <td>11,2%</td>
            </tr>
            <tr>
              <td>Nasopalatinale Zyste</td>
              <td>11%</td>
            </tr>
            <tr>
              <td>Paradentalzyste</td>
              <td>2,5%</td>
            </tr>
            <tr>
              <td>Übrige</td>
              <td>6,4%</td>
            </tr>
          </tbody>
        </table>
        <div>
          <img src="thumbs/haeufigkeiten.png" />
        </div>
      </div>
      <div className="links" />
    </div>;
    <div id="klinik" className="chapters">
      <div className="chapterTitle">
        <h3>Klinik</h3>
        <hr />
      </div>
      <div className="content-block">
        <ul>
          <li>
            Wachstum:
            <ul>
              <li>Langsam verdrängend</li>
              <li>Kontinuierlich oder schubweise&nbsp;</li>
              <li>Symptomlos</li>
              <li>
                Häufig erst entdeckt, wenn beachtliche Größe mit{" "}
                <strong>Knochenauftreibung</strong> erreicht ist
              </li>
              <li>Dann häufig Gesichtsasymmetrien</li>
              <li>
                Sekundäre Infektion führt zur akuten Schmerz- und
                Entzündungssymptomatik
              </li>
            </ul>
          </li>
          <li>
            Palpatorisch:
            <ul>
              <li>
                Durch Tasten können Frakturen entstehen,{" "}
                <strong>„Pergamentknistern“</strong>
              </li>
              <li>
                Bei fehlendem Knochen <strong>prallelastische Fluktuation</strong>
              </li>
            </ul>
          </li>
          <li>
            Sensibilitätstestung der Zähne essentiell, da radikuläre Zyste von
            pulpentoten Zahn entstehen
          </li>
          <li>
            <strong>Zahnkippungen</strong>
          </li>
          <li>
            <strong>Entzündungszeichen</strong> bei infizierten Zysten
          </li>
        </ul>
        <div className="startGallery imageContainer">
          <img src="thumbs/klinik_images.png" />
        </div>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/6.png" />
          <div className="media-link-title">Asymmetrie des Gesichts</div>
          <div className="media-link-description">
            Asymmetrie des Gesichts bedingt durch eine Zyste im Unterkiefer.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/1c.png" />
          <div className="media-link-title">Knochenauftreibung</div>
          <div className="media-link-description">
            Knochenauftreibung des Unterkiefers, welche durch eine Zyste bedingt
            ist.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/4a.png" />
          <div className="media-link-title">Knochenauftreibung</div>
          <div className="media-link-description">
            Knochenauftreibung im Bereich der Unterkieferfrontzähne, welche durch
            eine Zyste bedingt ist.
          </div>
        </div>
      </div>
    </div>;
    <div id="diagnostik" className="chapters">
      <div className="chapterTitle">
        <h3>Diagnostik</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Für die Bildgebung von Zysten eignen sich mehrere radiologische Verfahren:
        </p>
        <ul>
          <li>Einzelaufnahme</li>
          <li>OPT</li>
          <li>Nasennebenhöhlenaufnahme</li>
          <li>p-a Schädelaufnahme</li>
          <li>CT</li>
          <li>Sinuskopie</li>
          <li>MRT</li>
        </ul>
        <p>&nbsp;</p>
        <p>Radiologisch stellen sich Zysten im Kiefer wie folgt dar:</p>
        <ul>
          <ul>
            <li>scharf begrenz</li>
            <li>rundlich bis oval</li>
            <li>Aufhellung</li>
            <li>Verdrängung benachbarter Zähne</li>
            <li>Einengung der Kieferhöhle</li>
            <li>Verdrängung des Mandibularkanals</li>
            <li>Einbruch in umgebende Weichteile</li>
          </ul>
        </ul>
        <p>&nbsp;</p>
        <p>
          Die beiden häufigsten Zysten lassen sich radiologisch gut von einander
          abgrenzen:
        </p>
        <ul>
          <li>
            Follikuläre Zyste Krone eines retinierten Zahnes ragt ins Zystenlumen
          </li>
          <li>Radikuläre Zyste Zystenlumen befindet sich um den Apex des Zahnes</li>
        </ul>
        <div className="startGallery imageContainer">
          <img src="thumbs/diagnostik_images.png" />
        </div>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/12d.png" />
          <div className="media-link-title">OPT</div>
          <div className="media-link-description">Follikuläre Zyste regio 37</div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/13.png" />
          <div className="media-link-title">OPT</div>
          <div className="media-link-description">Radikuläre Zyste regio 35-42</div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/1c.png" />
          <div className="media-link-title">Knochenauftreibung</div>
          <div className="media-link-description">
            Knochenauftreibung des Unterkiefers, welche durch eine Zyste bedingt
            ist. Die Zyste ist hier bereits eröffnet.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/4a.png" />
          <div className="media-link-title">Knochenauftreibung</div>
          <div className="media-link-description">
            Aufgetriebener Knochen im Bereich der Unterkieferfront, welcher durch
            eine Zyste bedingt ist.
          </div>
        </div>
        <div data-media-id={5} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/6.png" />
          <div className="media-link-title">Asymmetrie des Gesichts</div>
          <div className="media-link-description">
            Durch eine Zyste bedingte Asymmetrie des Gesichts.
          </div>
        </div>
      </div>
    </div>;
    <div id="differential" className="chapters">
      <div className="chapterTitle">
        <h3>Differentialdiagnose einer Zyste</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Differentialdiagnostisch sollte vor allem an folgende Osteolytische
          Tumoren gedacht werden:
        </p>
        <ul>
          <li>Ameloblastom</li>
          <li>Zentrales Riesenzellgranulom</li>
          <li>Zentrales Fibrom</li>
          <li>Myxom</li>
          <li>Eosinophiles Granulom</li>
          <li>Metastasen</li>
        </ul>
        <p>
          Auf dem OPT ist die Abgrenzung einer radikulären Zyste von dem Rezessus
          der Kieferhöhle oft schwierig. Zur Differenzierung kann hierbei helfen,
          dass die radikuläre Zyste nach kranial konvex und der Recessus nach kaudal
          konvex begrenzt ist.
        </p>
        <p className="imageContainer startGallery">
          <img src="thumbs/differentialdiagnose_images.png" />
        </p>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/14.png" />
          <div className="media-link-title">Zentrales Riesenzellgranulom</div>
          <div className="media-link-description">
            Zentrales Riesenzellgranulom, welches bis in die linke Kieferhöhle
            hinein ragt.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/15a.png" />
          <div className="media-link-title">Odontogenes Myxom</div>
          <div className="media-link-description">
            Odontogenes Myxom im Bereich des Oberkiefers.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/15b.png" />
          <div className="media-link-title">Odontogenes Myxom</div>
          <div className="media-link-description">
            Odontogenes Myxom im Bereich des Oberkiefers.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/15c.png" />
          <div className="media-link-title">Odontogenes Myxom</div>
          <div className="media-link-description">
            Odontogenes Myxom im Bereich des Oberkiefers.
          </div>
        </div>
        <div data-media-id={5} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/16.png" />
          <div className="media-link-title">Ameloblastom</div>
          <div className="media-link-description">Ameloblastom regio 34-36.</div>
        </div>
      </div>
    </div>;
    <div id="therapie" className="chapters">
      <div className="chapterTitle">
        <h3>Therapie</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Jede Zyste muss grundsätzlich operativ behandelt und histologisch
          untersucht werden. Eine konservative Therapie macht eine Diagnosesicherung
          unmöglich und ist im Vorgehen unsicher.
        </p>
        <p>
          <strong>
            <span style={{ textDecoration: "underline" }}>Operative Methoden:</span>
          </strong>
        </p>
        <p>1. Zystostomie (Partsch I)</p>
        <ul style={{ listStyleType: "disc" }}>
          <li>1892 zur Eröffnung von Zysten und nachfolgend offener Behandlung</li>
          <li>
            Fenestrierung erfolgt zumeist zum Vestibulum oris und muss offen
            gehalten werden (Obturatortherapie)
          </li>
          <li>
            Idealerweise Fenestrierung im Bereich des Zystenäquators mit großzügiger
            Anlage
          </li>
          <li>
            Oft schwer möglich bei großen Zysten im Bereich des aufsteigenden
            Kieferastes
          </li>
          <li>Teilweise entferntes Gewebe immer ad histo</li>
          <li>
            Verbliebenes Gewebe des Zystenbalgs metaplasiert zur
            Mundhöhlenschleimhaut
          </li>
          <li>Offenhalten der Zystenhöhle mittels Obturator, sonst Rezidiv</li>
        </ul>
        <table
          className="table table-striped table-bordered"
          style={{ height: 166 }}
          border={1}
          width={726}
        >
          <tbody>
            <tr>
              <td width={323}>
                <strong>Vorteile</strong>
              </td>
              <td width={311}>
                <strong>Nachteile</strong>
              </td>
            </tr>
            <tr>
              <td>Schonung von Nachbarstrukturen wie Zähnen und Nerven</td>
              <td>lange Behandlungsdauer</td>
            </tr>
            <tr>
              <td>geringerer operativer Aufwand als bei einer Zystektomie</td>
              <td>
                höhere Rezidivgefahr bzw. unsichere Regeneration aufgrund der langen
                Behandlungsdauer
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>im Unterkiefer bei großen Defekten Frakturgefahr</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p>
                  keine komplette histologische Aufarbeitung des Zystenbalges
                  möglich
                </p>
                <p>CAVE: Tumor!</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>2. Zystektomie (Partsch II)</p>
        <ul>
          <li>
            Radikale Entfernung des Zystenbalges mit nachfolgendem Wundverschluss
          </li>
          <li>Verbleibende Knochenhöhle wird durch Blutkoagel gefüllt</li>
          <li>
            Heilung erfolgt über bindegewebige und folgend knöcherne Organisation
            des Hohlraumes
          </li>
          <li>
            Bei primärer Wundheilung ist Behandlung des Patienten nach 8 Tagen
            beendet
          </li>
          <li>
            Schuldiger Zahn muss wurzelgefüllt, reseziert bzw. extrahiert werden
          </li>
          <li>Knöcherne Regeneration nach 6-12 Monaten abgeschlossen</li>
          <li>Regelmäßige Nachuntersuchung</li>
        </ul>
        <table
          className="table table-striped table-bordered"
          style={{ height: 143 }}
          border={1}
          width={618}
        >
          <tbody>
            <tr>
              <td width={323}>
                <strong>Vorteile</strong>
              </td>
              <td width={311}>
                <strong>Nachteile</strong>
              </td>
            </tr>
            <tr>
              <td>kurze Behandlungszeit</td>
              <td>Nachbarstrukturen bei großen Zysten gefährdet</td>
            </tr>
            <tr>
              <td>
                Kaum Rezidivgefahr, da vollständige Entfernung des Zystengewebes
              </td>
              <td>
                Primäre Wundheilung bei großen Zystenvolumina (&gt;2cm) schwierig,
                da durch Kontraktion Blutkoagel und Retraktion sekundäre
                Wundinfektion möglich ist (Gegenmaßnahme: Modifikation des
                Verfahrens)
              </td>
            </tr>
            <tr>
              <td>
                vollständige Entnahme erlaubt eine komplette histologische
                Aufarbeitung
              </td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p>3. Modifizierte Zystektomie</p>
        <ul>
          <li>
            Einlage von Knochenersatzmaterialen:
            <ul>
              <li>Beckenkammspongiosaplastik</li>
              <li>Eigenblut</li>
              <li>Alloplastische Tricalciumphosphat und Hydroxylapatit</li>
              <li>Allogener Knochen, Fibrinkleber</li>
              <li>
                Lyophilisierter (Verfahren zur Gefriertrocknung hochwertiger
                Produkte), homologer Knorpel
              </li>
            </ul>
          </li>
          <li>
            Nachkontrolle: Antibiose, Rauchverbot, flüssige Kost für 3 Wochen,
            weiche Kost für 2 Wochen
          </li>
        </ul>
        <p>4. Zystantrostomie</p>
        <ul>
          <li>Nur bei Oberkieferzysten in der Kieferhöhle</li>
          <li>Fensterung der Zyste zur Kieferhöhle</li>
        </ul>
        <div className="startGallery" data-gallery-item={4}>
          <img className="galleryPoster" src="thumbs/video9.png" />
          <p className="gallerieThumbDescription">aneurysmatische Zyste</p>
          <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
        </div>
        <div className="startGallery" data-gallery-item={5}>
          <img className="galleryPoster" src="thumbs/video10.png" />
          <p className="gallerieThumbDescription">Follikuläre Zyste</p>
          <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
        </div>
        <div className="startGallery" data-gallery-item={6}>
          <img className="galleryPoster" src="thumbs/video11.png" />
          <p className="gallerieThumbDescription">Zystektomie</p>
          <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
        </div>
        <p>
          <span className="startGallery imageContainer">
            <img src="thumbs/therapie_images.png" />
          </span>
        </p>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/6c.png" />
          <div className="media-link-title">Oberkieferzyste regio 13-23</div>
          <div className="media-link-description">
            In diesem Bild ist der Operationssitus mit der eröffneten Zyste
            dargestellt. Der Zystenbalg ist hier bereits vollständig entfernt.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/6d.png" />
          <div className="media-link-title">
            Zyste mit kortikospngiösen Material
          </div>
          <div className="media-link-description">
            Nach vollständiger Darstellung der Zyste wurde sie mit dem, vom Becken
            entnommenen, kortikospngiösen Knochen aufgefüllt.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/6a.png" />
          <div className="media-link-title">CT</div>
          <div className="media-link-description">
            In der Computertomographie ist das Zystenlumen und das verdrängende
            Wachstum deutlich zu erkennen.
          </div>
        </div>
        <div data-media-id={4} data-media-type="video">
          <div className="media-link-video-id">9</div>
          <div className="media-link-title">Zyste</div>
          <div className="media-link-description">
            Operative Versorgung einer Zyste
          </div>
        </div>
        <div data-media-id={5} data-media-type="video">
          <div className="media-link-video-id">10</div>
          <div className="media-link-title">Follikuläre Zyste</div>
          <div className="media-link-description">Follikuläre Zyste</div>
        </div>
        <div data-media-id={6} data-media-type="video">
          <div className="media-link-video-id">11</div>
          <div className="media-link-title">Zystektomie</div>
          <div className="media-link-description">Zystektomie</div>
        </div>
      </div>
    </div>;
    <div id="transplantat" className="chapters">
      <div className="chapterTitle">
        <h3>Kortikospongiöses Transplantat</h3>
        <hr />
      </div>
      <div className="content-block">
        <div className="startGallery imageContainer" style={{ textAlign: "left" }}>
          Zum Befüllen der Defekte, die durch Zysten entstanden sind, kann an
          verschiedenen Stellen im Körper Knochen entnommen werden. Gängige
          Entnahmestellen für kortikospongiöse Transplantate sind:
        </div>
        <ul>
          <li>Beckenkamm</li>
          <li>Tibia</li>
          <li>Ramus ascendens der Mandibula</li>
        </ul>
        <div className="startGallery imageContainer">
          <img src="thumbs/kortiko_images.png" />
        </div>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/1.png" />
          <div className="media-link-title">
            Kortikospongiöses Transplantat Tibia
          </div>
          <div className="media-link-description">
            Zu sehen ist der obere Teil des Unterschenkels mit den markierten
            Landmarken und der eingezeichneten Schnittführung.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/2.png" />
          <div className="media-link-title">
            Kortikospongiöses Transplantat Tibia
          </div>
          <div className="media-link-description">
            Durchtrennung der Haut entlang der Schnittführung.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/6e_1.png" />
          <div className="media-link-title">Kortikospongiöses Material Becken</div>
          <div className="media-link-description">
            Dargestellt ist hier das entnommene kortikospongiöse Material vom
            Beckenkamm bevor es im Bereich der Zyste transplantiert wird.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/3.png" />
          <div className="media-link-title">
            Kortikospongiöses Transplantat Tibia
          </div>
          <div className="media-link-description">
            Entnahme der fettreichen Spongiosa mit einem scharfen Löffel.
          </div>
        </div>
        <div data-media-id={5} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/4.png" />
          <div className="media-link-title">
            Kortikospongiöses Transplantat Tibia
          </div>
          <div className="media-link-description">
            Tibia nach Entfernung der Spongiosa.
          </div>
        </div>
        <div data-media-id={6} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/6_1.png" />
          <div className="media-link-title">
            Kortikospongiöses Transplantat Tibia
          </div>
          <div className="media-link-description">
            Mehrschichtichter Verschluss der Haut über der Knochenentnahmestelle.
          </div>
        </div>
        <div data-media-id={7} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/7.png" />
          <div className="media-link-title">
            Kortikospongiöses Transplantat Tibia
          </div>
          <div className="media-link-description">
            Verbleibende Narbe einige Monate nach der Operation.
          </div>
        </div>
      </div>
    </div>;
    <div id="keratozyste" className="chapters">
      <div className="chapterTitle">
        <h3>Keratozyste</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Die Keratozyste wird auch als <strong>Primordialzyste</strong> bezeichnet.
          Sie entsteht aus versprengtem Epithel der Zahnleiste. Außen ist die Zyste
          durch eine dünne, fibröse Kapsel begrenzt und innen ist sie mit
          verhornendem, mehrschichtigem Plattenepithel ausgekleidet. Der
          Zysteninhalt ist typischerweise eine "vanillepuddingartige" Masse.
        </p>
        <p>Die Lokalisation befindet sich vor allem:</p>
        <ul>
          <li>in der Kieferwinkel- und Molarenregion</li>
          <li>eher im Unterkiefer als im Oberkiefer (3:1)</li>
          <li>uni- und multilokulär</li>
        </ul>
        <p>
          Typisch für die Keratozyste ist das aggressive Wachstum und die hohe
          Rezidivrate von 2-63%. Die Rezidive sind durch Tochterzyten am Rand und
          postoperativ verbleibende Epithelreste bedingt. Um dem entgegen zu wirken,
          sollte der verbleibende Knochen ausgefräst werden und regelmäßige
          Nachkontrollen bei den Patienten stattfinden.
        </p>
        <p>
          Des weiteren ist die Keratozyste mit dem Gorlin-Goltz-Syndrom (Basaliome,
          multiple Keratozysten im Kieferbereich mit Hauteffloeszenz, skelettalen
          Anomalien und Verkalkung der Falx cerebri) assoziiert.
        </p>
        <div className="startGallery imageContainer">
          <img src="thumbs/keratozyste_images.png" />
        </div>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/11.png" />
          <div className="media-link-title">Keratozyste OPT</div>
          <div className="media-link-description">
            Keratozystischer Tumor regio 48.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.jpg" />
          </div>
          <img src="images/12.png" />
          <div className="media-link-title">Keratozyste DVT</div>
          <div className="media-link-description">
            Keratozystischer Tumor regio 48.
          </div>
        </div>
      </div>
    </div>;
  </div>

);
}

export default Zysten;
