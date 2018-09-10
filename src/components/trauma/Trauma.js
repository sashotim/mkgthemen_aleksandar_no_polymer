import React from 'react';

function Trauma(props) {
  return (
<div>
        <div id="allgemeines" className="chapters">
          <div className="chapterTitle">
            <h3>Allgemeines</h3>
            <hr />
          </div>
          <div className="content-block"><p>Die Ursachen für Frakturen im Gesichtsschädelbereich sind in der Regel:</p>
            <ul>
              <li>Rohheitsdelikte</li>
              <li>Verkehrsunfälle</li>
              <li>Sportunfälle</li>
              <li>Pferdetritte</li>
            </ul>
            <p>Ziele der Therapie von Frakturen im Gesichtsschädel sollten immer folgende sein:</p>
            <ul>
              <li>Rekonstruktion der anatomischen Form</li>
              <li>Wiederherstellung der Funktionen (knöchern, dental, Weichteile, Nerven)</li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Diagnostik</span></p>
            <p>Bei jedem Trauma sollten im Rahmen der Diagnostik:</p>
            <ul>
              <li>der Unfallhergang erfragt werden</li>
              <li>eine klinische Untersuchung stattfinden</li>
              <li>bei ausgedehnten Traumen sollte eine Bildgebung gemacht werden<br />
                <ul>
                  <li>bei primär MKG-chirugischen Traumen stellt sich die Frage nach einer Indikation für ein CCT <br />
                    <ul>
                      <li>Es gibt 5 "high risk"-Kriterien bei denen immer ein CCT laufen sollte:<br />
                        <ul>
                          <li>Innerhalb von 2h wird GCS von 15 nicht erreicht</li>
                          <li>Verdacht auf eine offene Schädel-Hirn-Verletzungen</li>
                          <li>Zeichen einer Schädelbasisverletzung</li>
                          <li>Zwei- oder mehrmaliges Erbrechen</li>
                          <li>Alter über 65 Jahre</li>
                        </ul>
                      </li>
                      <li>Es gibt 2 "low risk"-Kriterien bei denen die Indikation zu hinterfragen ist:<br />
                        <ul>
                          <li>Amnesie über 30 Minuten</li>
                          <li>Gefährlicher Verletzungsmechanismus</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Die Glascow coma scale dient der Abschätzung der Bewusstseinslage:</li>
            </ul>
            <table className="table table-bordered table-striped" style={{fontWeight: 'bold', height: 147}} width={481}>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>Funktion</td>
                  <td>GCS-Wert</td>
                </tr>
                <tr>
                  <td>Augen öffnen</td>
                  <td>
                    <p>-spontan</p>
                    <p>-Auf Ansprechen</p>
                    <p>-Auf Schmerzreiz</p>
                    <p>-Keine Reaktion</p>
                  </td>
                  <td>
                    <p>4</p>
                    <p>3</p>
                    <p>2</p>
                    <p>1</p>
                  </td>
                </tr>
                <tr>
                  <td>Verbale Reaktion</td>
                  <td>
                    <p>- Konversationsfähig, koordiniertes Gespräch</p>
                    <p>- unkoordiniertes Gespräch</p>
                    <p>- Einzelworte</p>
                    <p>- Sinnlose Laute</p>
                    <p>- Keine Reaktion</p>
                  </td>
                  <td>
                    <p>4</p>
                    <p>3</p>
                    <p>2</p>
                    <p>1</p>
                  </td>
                </tr>
                <tr>
                  <td>Motorische Reaktion</td>
                  <td>
                    <p>- Bei Aufforderung</p>
                    <p>- gezielte Bewegung bei Schmerzreiz</p>
                    <p>- ungezielte Bewegung bei Schmerzreiz</p>
                    <p>-Beugesynergismen</p>
                    <p>-Strecksynergismen</p>
                    <p>-Keine Reaktion</p>
                  </td>
                  <td>
                    <p>6</p>
                    <p>5</p>
                    <p>4</p>
                    <p>3</p>
                    <p>2</p>
                    <p>1</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><span style={{textDecoration: 'underline'}}>Allgemeine Frakturlehre</span>:</p>
            <p>Eine Fraktur wird definiert als eine Unterbrechung der knöchernen Kontinuität mit Bildung von zwei
              Fragmenten, die durch den Bruchspalt voneinander getrennt sind. Sie entsteht durch eine direkte an Stelle
              der Gewalteinwirkung oder eine indirekte Gewalteinwirkung. Indirekte Gewalteinwirkungen sind Kräfte wie
              Biegung, Scherung und Torsion, wobei der Kraftansatzm von der Bruchstelle entfernt liegt.</p>
            <p>Eine Fissur liegt vor, wenn die Kontinuität des Knochens teilweise noch erhalten ist und die Bruchlinie nur
              unvollständig durch den Knochen zieht.</p>
            <p>Als "komplizierte" Brüche werden offene Frakturen mit Verletzung der bedeckenden Weichteile bezeichnet.</p>
            <p>Eine Dislokation der Fragmente liegt vor, wenn sich die Knochenfragmente gegeneinander verschieben. Dies kann
              direkt in Folge einer Gewalteinwirkung oder indirekt durch Schwerewirkung, Lagerung oder Muskelzug
              entstehen.</p>
            <p>Eine gängige Klassifikation der Frakturen ist:</p>
            <ul>
              <li>direkte - indirekte Fraktur</li>
              <li>geschlossene - offene Fraktur</li>
            </ul>
            <p>Die Frakturtypen werden wie folgt unterschieden:</p>
            <ul>
              <li>Quer-,</li>
              <li>Schräg-, Längs-,</li>
              <li>Mehrfragmente-,</li>
              <li>Trümmer-,</li>
              <li>Defektfrakturen</li>
              <li>Mit oder ohne Gelenkbeschwerden</li>
            </ul>
            <p>Die Dislokationsformen sind:</p>
            <ul>
              <li>Ad latum</li>
              <li>Ad axim</li>
              <li>ad peripheriam</li>
              <li>ad longitudinem com contractione</li>
              <li>ad longitudinem com distractione</li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/allgemeines_images.png" alt=""/>
            </div>
            <div className="startGallery imageContainer" data-gallery-item={1}>&nbsp;</div>
            <p>Es werden unsichere von sicheren Frakturzeichen unterschieden:</p>
            <ul>
              <li>Unsichere
                <ul>
                  <li>Schwellung/Hämatom</li>
                  <li>Bewegungseinschränkung und Funktionsstörung (z.B. Kieferklemme, Kiefersperre oder Abweichung bei
                    der Kieferöffnung)
                  </li>
                  <li>Sensibilitätsstörung</li>
                  <li>Stauchungs-, Bewegungs- oder Druckschmerz</li>
                  <li>Okklusionsstörung</li>
                  <li>Gelockerte Zähne</li>
                  <li>Gingivaeinrisse</li>
                  <li>Konturabweichungen</li>
                </ul>
              </li>
              <li>Sichere
                <ul>
                  <li>Tastbare Stufenbidung/Dislokation</li>
                  <li>Sichtbare Frakturenden bei offener Fraktur</li>
                  <li>Krepitation</li>
                  <li>Abnorme Beweglichkeit</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/a.png" alt=""/>
              <div className="media-link-title">Dislokationsformen</div>
              <div className="media-link-description">Dislokation ad axim</div>
            </div>
            <div data-media-id={2} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/b.png" alt=""/>
              <div className="media-link-title">Dislokationsformen</div>
              <div className="media-link-description">Dislocatio ad latum</div>
            </div>
            <div data-media-id={3} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/c.png" alt=""/>
              <div className="media-link-title">Dislokationsformen</div>
              <div className="media-link-description">Dislocatio ad longitudinem com contractione</div>
            </div>
            <div data-media-id={4} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/d.png" alt=""/>
              <div className="media-link-title">Dislokationsformen</div>
              <div className="media-link-description">Dislocatio ad longitudinem com distractione</div>
            </div>
            <div data-media-id={5} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/e.png" alt=""/>
              <div className="media-link-title">Dislokationsformen</div>
              <div className="media-link-description">Dislocatio ad peripheriam</div>
            </div>
          </div>
        </div>
        <div id="weichteilverletzungen" className="chapters">
          <div className="chapterTitle">
            <h3>Weichteilverletzungen</h3>
            <hr />
          </div>
          <div className="content-block"><p><span style={{textDecoration: 'underline'}}>Allgemeines</span></p>
            <p>Weichgewebsverletzungen sind gewaltsame Gewebedurchtrennungen oder umschriebene Schädigungen der
              Haut/Schleimhaut und können auch tiefe Gewebeschichten mit einschließen.</p>
            <p>Die Klassifikation von Weichteilverletzungen (AO) nach Müller et al.</p>
            <table className="table table-bordered table-striped" style={{fontWeight: 'bold'}}>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>Hautverletzung</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Muskel- oder Sehnenverletzungen</td>
                  <td>&nbsp;</td>
                  <td>Neurovaskuläre Verletzungen</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>geschlossen</td>
                  <td>&nbsp;</td>
                  <td>offen</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>IC1</td>
                  <td>Keine Hautverletzung</td>
                  <td>IO1</td>
                  <td>Hautdurchspießung von innen nach außen</td>
                  <td>MT1</td>
                  <td>Keine Verletzung</td>
                  <td>NV1</td>
                  <td>Keine Verletzung</td>
                </tr>
                <tr>
                  <td>IC2</td>
                  <td>Kontusion ohne Hauteröffnung</td>
                  <td>IO2</td>
                  <td>Hautdurchspießung von außen &lt;5cm mit kontusionierten Rändern</td>
                  <td>MT2</td>
                  <td>Umschriebene Muskelverletzung (auf eine Muskelgruppe beschränkt)</td>
                  <td>NV2</td>
                  <td>Isolierte Nervläsion</td>
                </tr>
                <tr>
                  <td>IC3</td>
                  <td>Umschriebenes Decollement</td>
                  <td>IO3</td>
                  <td>Hautläsion &gt;5cm, umschriebenes Decollement mit Randkontusion</td>
                  <td>MT3</td>
                  <td>Ausgedehnte Muskelbeteiligung (in 2 oder mehr muskelgruppen)</td>
                  <td>NV3</td>
                  <td>Umschriebene Gefäßverletzung</td>
                </tr>
                <tr>
                  <td>IC4</td>
                  <td>Ausgedehntes Decollement</td>
                  <td>IO4</td>
                  <td>Hautverlust, tiefe Kontusion, Schürfung</td>
                  <td>MT4</td>
                  <td>Ausriß oder Verlust ganzer Muskelgruppen, Sehnendurchtrennungen</td>
                  <td>NV4</td>
                  <td>Kombinierte neurovaskuläre Verletzung</td>
                </tr>
                <tr>
                  <td>IC5</td>
                  <td>Nekrose aufgrund einer tiefer Kontusion</td>
                  <td>IO5</td>
                  <td>Ausgedehntes Decollement</td>
                  <td>MT5</td>
                  <td>Logen- oder Crushsyndrom</td>
                  <td>NV5</td>
                  <td>Subtotal-/Totalamputation</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>Versorgung:
                <ul>
                  <li>Auch nach 24 Stunden, unter günstigen Wundverhältnissen sogar noch nach 48 Stunden, ist eine
                    primäre Wundnaht im Gesicht möglich.
                  </li>
                  <li>Die definitive Versorgung sollte immer zum frühest möglichen Zeitpunkt erfolgen.</li>
                  <li>Die Versorgung erfolgt immer von "innen nach außen" -&gt; erst Knochen, dann Weichteile</li>
                  <li>Zusätzlich sollte immer eine Tetanus- und ggf. Antibiotikaprophylaxe stattfinden.</li>
                  <li>Bei der Versorgung müssen immer die RST-Linien beachtet werden.</li>
                </ul>
              </li>
              <li>Eine Fremdkörperinokulation muss immer ausgeschlossen werden, ggf. mittels CT
                (Schuss-/Stich-/Pfählungsverletzungen).
              </li>
              <li>Diagnostik:
                <ul>
                  <li>Betroffene Strukturen müssen identifiziert werden (v.a. bei Nervkonstruktion).</li>
                  <li>Eine Traumaanamnese muss stattfinden.</li>
                </ul>
              </li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Bisswunden</span></p>
            <ul>
              <li>8.500 Tierbiss/Jahr in Deutschland</li>
              <li>92% der Bissverletzungen werden durch Hunde verursacht.</li>
              <li>Die Einteilung der Gesichtsverletzungen durch Hundebisse erfolgt nach Lackmann:</li>
            </ul>
            <table className="table table-bordered table-striped" style={{fontWeight: 'bold'}}>
              <tbody>
                <tr>
                  <td>Grad I</td>
                  <td>Oberflächliche Verletzung ohne Muskelbeteiligung</td>
                </tr>
                <tr>
                  <td>Grad II</td>
                  <td>Tiefe Verletzung mit Muskelbeteiligung</td>
                </tr>
                <tr>
                  <td>Grad III</td>
                  <td>Tiefe Verletzung mit Muskelbeteiligung und Gewebedefekt</td>
                </tr>
                <tr>
                  <td>Grad IVa</td>
                  <td>Grad II kombiniert mit Gefäß- oder Nervenbeteiligung</td>
                </tr>
                <tr>
                  <td>Grad IVb</td>
                  <td>Grad III in Kombination mit knöchernem Defekt oder Organbeteiligung</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>Therapie:
                <ul>
                  <li>Spülung mit H²O² und NaCl-Lösung</li>
                  <li>Primärer Wundverschluss (Ausnahme: manifeste Wundinfektion)</li>
                  <li>Antiobiotikaprophylaxe ab Lackmann II, bei Kindern und Risikopatienten mit Wunden die älter als
                    6h sind generell Prophylaxe
                  </li>
                  <li>Amoxicillin-Clavulansäure 875/125 3x täglich für 7 Tage Mittel der Wahl, 2.Wahl Azithromycin
                  </li>
                  <li>Antibiotikagabe bei allen humanen (Parodontalkeime!), Katzen- und Pferdebissen (V.a. Pasteurella
                    mutocida)
                  </li>
                  <li>Überprüfen des Tetanus- und Tollwut-Impfstatus</li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/weichteileverletzungen_images.png" alt=""/></div>
            <div className="startGallery imageContainer" data-gallery-item={1}>&nbsp;</div>
            <p><span style={{textDecoration: 'underline'}}>Brandverletzungen</span></p>
            <ul>
              <li>In Deutschland gibt es ca. 2.500 stationäre Versorgungen von Verbrennungen pro Jahr. Ca. 1/3 dieser
                Verbennungen betreffen das Gesicht. Nach der Neunerregel entspricht das Gesicht 18% der Körperoberfläche
                bei Kleinkindern und 9% bei Erwachsenen.
              </li>
              <li>Die Einteilung der Verbrennungsgrade erfolgt in Abhängigkeit der Tiefe der Verbrennung:</li>
            </ul>
            <table className="table table-bordered table-striped" style={{fontWeight: 'bold'}}>
              <tbody>
                <tr>
                  <td>Grad I</td>
                  <td>Oberste Epidermis (Sonnenbrand)</td>
                  <td>Rötung, Schwellung, Schmerz</td>
                  <td>Restitutio ad integrum</td>
                </tr>
                <tr>
                  <td>Grad IIa</td>
                  <td>Epidermis und obere Dermisw (erhalt des Stratum basale)</td>
                  <td>Blasenbildung, roter Untergrund, Hypalgesie</td>
                  <td>Restitutio ad integrum</td>
                </tr>
                <tr>
                  <td>Grad IIb</td>
                  <td>Epidermis und Dermis mit erhalt der Haarfolikel und Drüsenanhängsel</td>
                  <td>Blasenbildung, weißer Untergrund, Hypalgesie</td>
                  <td>Narbe</td>
                </tr>
                <tr>
                  <td>Grad III</td>
                  <td>Zerstörung der Epidermis und Dermis</td>
                  <td>Weißer Untergrund, Analgesie</td>
                  <td>Keine endogene Epithelbildung</td>
                </tr>
                <tr>
                  <td>Grad IV</td>
                  <td>Zerstörung der Epidermis und Dermis und subkutanes Weichgewebe, evtl. tieferliegende Strukturen</td>
                  <td>Verkohlung, Lyse</td>
                  <td>keine endogene Epithelbildung</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>Therapie:
                <ul>
                  <li>Sofort Kühlung mit Wasser und Abdeckung mit Sterilverband.</li>
                  <li>Bei höhergradigen Verbrennungen sollte immer eine Antibiose verabreicht und Flüssigkeit
                    substituiert werden.
                  </li>
                  <li>Grad I und IIa: Abdeckung mit antimikrobieller Salbe, Abpunktion der Blasen</li>
                  <li>Grad IIb: tangentiale Nekrektomie, evtl. Spalthaut oder biosynthetische Folie/Biomembran</li>
                  <li>Grad III: epifasziale Nekrektomie, Transplantation autologer Spalthaut oder Dermisäquivalent
                    (Kunsthaut, Leichenhaut, Schweinehaut), auch zweizeitige Verfahren bei ausgedehnten Wundflächen
                  </li>
                  <li>Grad IV: ausgedehnte Nekrektomie</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/2a.png" alt=""/>
              <div className="media-link-title">Bisswunde</div>
              <div className="media-link-description">Bisswunde der Unterlippe, bei der 1/3 der Lippe verloren gegangen ist.
              </div>
            </div>
            <div data-media-id={2} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/2b.png" alt=""/>
              <div className="media-link-title">Bisswunde</div>
              <div className="media-link-description">Eingezeichnete Schnittführung zur Deckung des Lippendefekts.</div>
            </div>
            <div data-media-id={3} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/2c.png" alt=""/>
              <div className="media-link-title">Bisswunde</div>
              <div className="media-link-description">Angefrischte Wundränder in geometrischer Form als Vorbereitung für den
                Wundverschluss.
              </div>
            </div>
            <div data-media-id={4} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/2d.png" alt=""/>
              <div className="media-link-title">Bisswunde</div>
              <div className="media-link-description">Resektion überschüssiger Haut in Form von Dreiecken.</div>
            </div>
            <div data-media-id={5} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/2f.png" alt=""/>
              <div className="media-link-title">Bisswunde</div>
              <div className="media-link-description">Narbe im Bereich der Lippe und des Kinns einige Wochen nach der
                Defektdeckung.
              </div>
            </div>
          </div>
        </div>
        <div id="luxationDesKiefergelenks" className="chapters">
          <div className="chapterTitle">
            <h3>Luxation des Kiefergelenks</h3>
            <hr />
          </div>
          <div className="content-block"><p>Die häufigste Form der Kieferluxation ist <strong>nach ventral</strong>. Sie kann ein-
              oder beidseitig auftreten. Dabei kann der Gelenkkopf vor dem Tuberculum oder vor dem Discus articularis liegen
              (Mensikokondyläre oder temporokondyläre Luxation).</p>
            <ul>
              <li>Symptome
                <ul>
                  <li>Einseitig temporokonyläre Luxation:
                    <ul>
                      <li>Gelenkpfanne ist leer, druckschmerzhaft und erscheint äußerlich eingedellt</li>
                      <li>Unterkiefer ist zur gesunden Seite hin verlagert</li>
                      <li>Kieferklemme und -sperre</li>
                    </ul>
                  </li>
                  <li>Doppelseitige Luxation
                    <ul>
                      <li>Prognather Uunterkiefer ohne Seitenabweichung</li>
                      <li>Gleichzeitige Kieferklemme und -sperre</li>
                      <li>Unterkiefer ist federnd fixiert</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>Die Luxation <strong>nach dorsal</strong> tritt selten auf. Dabei ist der Gelenkkopf hinter dem Discus
              articularis fixiert (Meniskokondyläre Luxation).</p>
            <ul>
              <li>Symptome:
                <ul>
                  <li>Kieferöffnung behindert</li>
                  <li>UK weicht geringfügig zur kranken Seite ab</li>
                  <li>Beidseitig: offnere Biss</li>
                </ul>
              </li>
            </ul>
            <p>Die Luxationen <strong>nach medial und lateral</strong> sind in Kombination mit Gelenkfrakturen möglich. Die
              Luxation <strong>nach kranial</strong> wird auch als eine zentrale Luxation bezeichnet und tritt in der
              Regel in Kombination mit Fraktur des Pfannendachs auf.</p>
            <ul>
              <li>Therapie:
                <ul>
                  <li>Sofortige Reposition mit lokaler Betäubung</li>
                  <li>Liegt eine Luxation mehrere Tage zurück ist meist eine Narkose erforderlich</li>
                  <li>Anschließende Immobilisation über einen dentalen Schienenverband mit mandibulomaxillären
                    Gummizügen um eine Reluxation zu verhindern
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Komplikationen
                <ul>
                  <li>Reluxationen</li>
                  <li>Habituelle Luxationen
                    <ul>
                      <li>kann durch operative Verfahren wie Verriegelungsoperation, Abtragung des Tuberculums
                        oder Kapselstraffung beseitigt werden
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/6.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/6.png" alt=""/>
              <div className="media-link-title">Luxation</div>
              <div className="media-link-description">Nach dorsal luxierter Unterkiefer.</div>
            </div>
          </div>
        </div>
        <div id="dentaleFrakturen" className="chapters">
          <div className="chapterTitle">
            <h3>Dentale Frakturen</h3>
            <hr />
          </div>
          <div className="content-block"><p>Dentale Frakturen werden anatomisch-topographisch in intra- und extraalveoläre
              Frakturen eingeteilt:</p>
            <ul>
              <li>Infraktur der Krone
                <ul>
                  <li>Riss/Sprung der Krone ohne Substanzverlust und ohne mobile Fragmente</li>
                  <li>Therapie:
                    <ul>
                      <li>bei erhaltener Sensibilität keine weitere Behandlung empfohlen</li>
                      <li>bei nicht erhaltener Sensibilität ggf. geringfügige Einschleifmaßnahmen oder Anfertigung
                        einer Tiefziehschiene
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Unkomplizierte Kronenfraktur
                <ul>
                  <li>Betrifft Schmelz oder Schmelz + Dentin</li>
                  <li>Substanzverlust oder mobile Segmente ohne Eröffnung der Pulpa</li>
                  <li>Therapie:
                    <ul>
                      <li>Fraktur des Schmelzes: Glätten oder Aufbau mittels Komposit und Adhäsivtechnik</li>
                      <li>Fraktur des Schmelzes + Dentin:
                        <ul>
                          <li>Dentinadhäsive um Dentin vollständig zu isolieren</li>
                          <li>nach 3-6 Wochen Sensibilitäts- und Röntgenkontrolle</li>
                          <li>Bei fehlender Vitalität sofort Wurzelkanalbehandlung</li>
                          <li>bei Vitalität kann definitive Versorgung, mit Kompositfüllung, Veneer oder Krone
                            erfolgen
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Komplizierte Kronenfraktur
                <ul>
                  <li>Fraktur des Schmelzes, des Dentins und Eröffnung der Pulpa</li>
                  <li>Therapie:
                    <ul>
                      <li>Sensibilitätsprobe</li>
                      <li>Erhaltung der Pulpa durch Überkappung und Abdeckung mit Calciumhydroxidpräparaten</li>
                      <li>Vitalexstirpation (bei permanenten Zähnen mit abgeschlossenen Wurzelwachstum) oder
                        Vitalamputation (bei bleibenden Zähne mit offenem Foramen apicale oder Milchzähnen)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Unkomplizierte Kronen-Wurzel-Fraktur
                <ul>
                  <li>Fraktur von Schmelz, Dentin und Zement ohne Eröffnung der Pulpa</li>
                  <li>Häufig mobile Fragmente, die am Zahnfleischsaum gestielt sind, selten Substanzverlust</li>
                  <li>Therapie:
                    <ul>
                      <li>Fraktur von Schmelz, Dentin und Zement ohne Eröffnung der Pulpa</li>
                      <li>Häufig mobile Fragmente, die am Zahnfleischsaum gestielt sind, selten Substanzverlust
                      </li>
                      <li>Therapie:
                        <ul>
                          <li>Entfernung mobiler Fragmente</li>
                          <li>Abdeckung der Dentinwunde</li>
                          <li>bei weit nach apikal auslaufendem Frakturspalt Extraktion sinnvoll</li>
                          <li>Schienung und Ruhigstellung für 2-3 Monate</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Komplizierte Kronen-Wurzel-Fraktur
                <ul>
                  <li>Fraktur von Schmelz, Dentin, Zement und Eröffnung der Pulpa</li>
                  <li>Meist Schräg- oder Längsfraktur</li>
                  <li>Therapie:
                    <ul>
                      <li>Abhängig von Verlauf der Bruchlinie und Ausmaß der Pulpenbeteiligung</li>
                      <li>Wurzelkanalbehandlung bei breiter Pulpeneröffnung und extraalveolärem/gering
                        intraalveolärem Frakturverlauf
                      </li>
                      <li>bei Milchzähnen meist Extraktion</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Wurzelfraktur
                <ul>
                  <li>Eröffnete Pulpa sowie Zement- und Dentin-Beteiligung</li>
                  <li>Für Therapieplanung Unterscheidung in: Quer-, Längs- und Schrägfrakturen im oberen, mittleren
                    und unteren Wurzeldrittel
                  </li>
                  <li>Therapie:
                    <ul>
                      <li>bei positiver Sensibilitätsprobe: Anbau kalzifierender Hartsubstanz, bindegewebige
                        Überbrückung, Durchbauung mit Knochen, ggf. Schienung bei Lockerung
                      </li>
                      <li>bei negativer Sensibilitätsprobe: Therapie abhängig von Frakturverlauf
                        <ul>
                          <li>Wurzelspitzenresektion bei Querfrakturen im apikalen Drittel</li>
                          <li>Krone bei Querfrakturen mit extraalveolären Frakturverlauf</li>
                          <li>Intradentale Schienung durch Metall- oder Keramikstift bei tieferen
                            Querfrakturen im oberen oder mittleren Wurzeldrittel
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/13.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/13.png" alt=""/>
              <div className="media-link-title">Dentale Fraktur</div>
              <div className="media-link-description">Unkomplizierte Fraktur des Frontzahns 21.</div>
            </div>
          </div>
        </div>
        <div id="alveolarfortsatzfrakturen" className="chapters">
          <div className="chapterTitle">
            <h3>Alveolarfortsatzfrakturen</h3>
            <hr />
          </div>
          <div className="content-block"><p>Eine Alveolarfortsatzfraktur ist eine umschriebene Aussprenung zumeist zahntragender
              Kieferabschnitte. Die Ursache ist meist eine stumpfe Gewalteinwirkung mit hoher Energie.</p>
            <p>Alveolarfortsatzfrakturen treten in der Regel isoliert oder in Kombination mit Unterkiefer- oder
              Mittelgesichtsfrakturen auf. Etwa 8-12 % aller Gesichtsschädelfrakturen sind Alveolarfortsatzfrakturen. Sie
              können mit Zahnluxationen und Zahnfrakturen kombiniert sein.</p>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Klinik</span></p>
            <p>Klinisch zeigt sich typischerweise:</p>
            <ul>
              <li>Meist starke Blutung aus der Gingiva, Schleimhaut und Knochen</li>
              <li>gesteuerte Okklusion</li>
              <li>Abnorme Beweglichkeit und Dislokation</li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Therapie</span></p>
            <p>Das Ziel der Therapie ist die Erhaltung der Knochenfragmente, um spätere Defektbildung zu verhindern. Bei der
              Versorgung sollten folgende Aspekte berücksichtigt werden:</p>
            <ul>
              <li>das Fragment muss reponiert und anschließend fixiert werden<br />
                <ul>
                  <li>die Reposition kann manuell und geschlossen erfolgen</li>
                  <li>Falls Fragmente verkeilt sind, dann operative Versorgung</li>
                  <li>bei Osteosynthese Verwendung von Mikroplatten und -schrauben</li>
                </ul>
              </li>
              <li>Versorgung so früh wie möglich</li>
              <li>Zähne, auch geschädigte, werden zunächst belassen um eine weitere Traumatisierung des Knochens bei
                Zahnentfernung zu verhindern
              </li>
              <li>Regelmäßige Sensibilitätskontrolle der Zähne müssen im Anschluss erfolgen</li>
              <li>Wurzelbehandlung erst wenn die Bruchheilung abgeschlossen ist, außer es liegt eine Entzündung vor</li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Komplikationen</span></p>
            <p>Komplikationen die bei oder nach einer Alveolarfortsatzfraktur auftreten können sind:</p>
            <ul>
              <li>Sequestration des Fragments</li>
              <li>Sensibilitätsstörungen</li>
              <li>Pulpennekrose oder Resorptionen betroffener Zähne</li>
              <li>Progrediente Parodontopathie an einzelnen Zähnen, durch ein direktes Trauma oder eine vorübergehende
                Mangeldurchblutung
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/alveolarfortsatzfrakturen_images.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/17b.png" alt=""/>
              <div className="media-link-title">Alveolarfortsatzfraktur</div>
              <div className="media-link-description">Fraktur des Alveolarfortsatzes von regio 12 bis 21.</div>
            </div>
            <div data-media-id={2} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/17d.png" alt=""/>
              <div className="media-link-title">Alveolarfortsatzfraktur</div>
              <div className="media-link-description">Repositioniertes Fragment der Alveolarfortsatzfraktur.</div>
            </div>
            <div data-media-id={3} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/17f.png" alt=""/>
              <div className="media-link-title">Alveolarfortsatzfraktur</div>
              <div className="media-link-description">Repositionierte und geschiente Fraktur des Alveolarfortsatzes.</div>
            </div>
          </div>
        </div>
        <div id="unterkieferfrakturen" className="chapters">
          <div className="chapterTitle">
            <h3>Unterkieferfrakturen</h3>
            <hr />
          </div>
          <div className="content-block"><p><span style={{textDecoration: 'underline'}}>Epidemiologie</span></p>
            <p>Das Vorkommen von Unterkieferfrakturen unterliegt enormen Schwankungen in Abhängigkeit von der Region und der
              sozialen Lage. Männer sind in der Regel 3-mal so häufig betroffen wie Frauen. Der Unterkiefer ist bei
              traumatischen Ereignissen, im Vergleich zu anderen Regionen des Gesichts, besonders häufig betroffen.Die
              Prädilektionsstellen für die Unterkieferbrüche sind an typischen Schwachstellen. Diese sind grazile
              Knochenstrukturen, retinierte Zähne und lange Wurzeln.</p>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Diagnostik</span></p>
            <ul>
              <li>Systematische Untersuchung nach sicheren und unsicheren Frakturzeichen</li>
              <li>Bildgebung:
                <ul>
                  <li>Orthopantomogramm (OPT)</li>
                  <li>Schädelübersichts okzipitofrontal bei geöffnetem Mund (Clementschtisch)</li>
                  <li>DVT</li>
                  <li>CT</li>
                </ul>
              </li>
              <li>Typische Kombinationsbrüche:
                <ul>
                  <li>Kinnregion und Gelenkfortsätze</li>
                  <li>Doppelseitiger Kinnbruch</li>
                  <li>Eckzahnregion und Kieferwinkelbereich der Gegenseite</li>
                  <li>Beide Gelenkfortsätze</li>
                </ul>
              </li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Klassifikation</span></p>
            <p>Die Einteilung der Unterkieferfrakturen erfolgt in der Regel nach der anatomischen Lage der Fraktur. Man
              unterscheidet folgende:</p>
            <p>a) Median</p>
            <p>b) Paramedian</p>
            <ul>
              <li>Locus minoris resistentiae: Foramen mentale, Eckzahn</li>
              <li>Klinik: Par-/Hyp-/Anästhesie der Unterlippe, Stauchungsschmerz bei Druck auf das Kinn, schmerzhafte
                Mundöffnung
              </li>
              <li>Bildgebung: OPT + Clementschtisch, CT, häufig Kombinationsfrakturen!</li>
              <li>Klinisches Bild: Gingivaeinriss, Okklusionsstörung</li>
              <li>Therapie: Drahtligatur als Erstmaßnahme, Schuchardt-Schienung und MMF als vorbereitende intraoperative
                Maßnahme der Osteosynthese, Reposition und Osteosynthese mit Miniplatten
              </li>
            </ul>
            <p>c) Kieferwinkel</p>
            <ul>
              <li>Locus minoris resistentiae: retinierte Weisheitszähne</li>
              <li>Klinik: oft diskret, Schwellung über Kieferwinkelregion, Stauchungsschmerz in der Frakturregion bei
                Druck auf das Kinn
              </li>
              <li>Bildgebung: OPT + Clementschtisch</li>
            </ul>
            <p>d) Collum - Gelenkhals vs. Gelnkwalze/Gelenkkopf (Capitulum)</p>
            <ul>
              <li>Bildgebung: OPT + Clementschtisch, oft CT zur Beurteilung der Dislokation notwendig</li>
              <li>Klinik: wird bestimmt durch Höhe der Fraktur (Ansatz M. pterygoideus lat.) und intrakapsulärem Hämatom
              </li>
              <li>Diese Frakturen werden nach Spiessl und Schroll eingeteilt:</li>
            </ul>
            <table className="table table-bordered table-striped" style={{fontWeight: 'bold', height: 306}} width={582}>
              <tbody>
                <tr>
                  <td>Typ I</td>
                  <td>Collumfraktur ohne wesentliche Dislokation</td>
                </tr>
                <tr>
                  <td>Typ II</td>
                  <td>Tiefe Collumfraktur mit Dislokation</td>
                </tr>
                <tr>
                  <td>Typ III</td>
                  <td>Hohe Collumfraktur mit Dislokation</td>
                </tr>
                <tr>
                  <td>Typ IV</td>
                  <td>Tiefe Collumfraktur mit Luxation</td>
                </tr>
                <tr>
                  <td>Typ V</td>
                  <td>Hohe Collumfraktur mit Luxation</td>
                </tr>
                <tr>
                  <td>Typ VI</td>
                  <td>Capitulumfraktur</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>Weitere Einteilungen von Gelenkfortsatzfrakturen sind:
                <ul>
                  <li>Einteilung nach Loukota
                    <ul>
                      <li>3 Typen</li>
                      <li>Kriterium: Frakturlinie in Bezug zur A Linie</li>
                      <li>Linie A ist das Lot zur Tangente des aufsteigenden UK-Astes, welches durch die Incisura
                        semilunaris läuft
                      </li>
                      <li>Klassifikation nach Loukota
                        <ol>
                          <li>Diacapitularfraktur -&gt; Frakturlinie beginnt in der Gelenkfläche und kann
                            außerhalb der Kapsel enden
                          </li>
                          <li>Kondylenhals -&gt; Frakturlinie beginnt über A Linie und mehr als die Hälfte
                            verläuft weiterhin über der A Linie nach lateral
                          </li>
                          <li>Kondylenhals -&gt; Frakturlinie verläuft hinter dem Foramen mandibulare und in
                            mehr als der Hälfte der Fälle unter der A Linie
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>Einteilung von Capitulumfrakturen nach Neff:
                    <ul>
                      <li>A: Abscherfraktur medialer Walzenanteile unter Erhalt des lateralen Anteils und der
                        Vertikaldimension
                      </li>
                      <li>B: subtotale Abscherfraktur der medialen Walzenanteile unter Einbeziehung lateraler
                        Anteile und des Lig. laterale
                      </li>
                      <li>C: Totale Abscherfraktur der Gelenkwalze</li>
                      <li>Therapie: PDS-Pin oder konservativ</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>e) Processus coronoideus</p>
            <ul>
              <li>Bildgebung: OPT + Clementschtisch, ggf. CT</li>
              <li>Klinik: Trismus, vergesellschaftet mit Jochbeinfrakturen, teilweise eingeschränkte UK-Mobilität, kein
                operativer Therapiebedarf
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/unterkieferfrakturen_images.png" alt=""/></div>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Erstversorgung</span></p>
            <p>Im Rahmen der Erstversorgung sollte immer eine Ruhigstellung von mobilen zur Mundhöhle hin offenen Frakturen
              erfolgen. Diese Ruhigstellung kann durch verschiedene Schienungsmaßnahmen erreicht werden:</p>
            <ul>
              <li>Fortlaufende Achterligatur (müssen mindestens 2 Zähne proximal und ditsal der Fraktur erfassen) -&gt;
                eignet sich nur bei Brüchen mit geringer Dislokationstendenz, danur geringe Stabilität erreicht wird
              </li>
              <li>Drahtbogenschiene -&gt; sollten nur kurzfristig befestigt sein, da parodontale Schäden gesetzt werden
                könne
              </li>
              <li>Schuchardt-Schiene bei längerer Behandlungsdauer, kann bei Teilbezahnung auch zur Drahtprothesenschiene
                erweitert werden
              </li>
              <li>Unterkieferprothese im zahnlosen UK, nach Reposition der Fragmente einsetzten und durch perimandibuläre
                Drahtligaturen fixieren
              </li>
              <li>Mandibulomaxilläre Fixation: nur wenn OK intakt, erlaubt auch Ruhigstellung von Frakturen außerhalb der
                Zahnreihe, bei ausreichender Bezahnung Ernst-Häkchen zur Fixation, sonst Kopf-Kinn-Kappe
              </li>
            </ul>
            <p>Durch diese Notschienung können Schmerzen durch Fragmentbewegungen, Blutungen, Infektionsgefahr und
              Ödembildung verhindert bzw. verringert werden.</p>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Definitive Kieferbruchversorgung</span></p>
            <p>Das Ziel der Kieferbruchversorgung sollte die Wiederherstellung anatomischer Originalstrukturen und der
              ursprünglichen Funktion sein. Dies sollte in kürzester Zeit geschehen und mit dem geringsten Risiko
              verbunden sein. Bisher gibt es für Unterkieferfrakturen kein allgemeingültiges Behandlungsschema. Die
              Versorgung ist immer abhängig von Lokalisation, Typ, Begleitverletzungen, Zusatnd des Gebisses und
              Allgemeinzustand des Patienten.</p>
            <p>Die Behandlungsschritte der Versorgung sind:</p>
            <ol>
              <li>Reposition
                <ul>
                  <li>Okklusale Reposition muss exakt sein</li>
                  <li>Skelettale Reposition erlaubt geringen Spielraum</li>
                </ul>
              </li>
              <li>Retention
                <ul>
                  <li>Maßnahme zur Vermeidung der Redislokation</li>
                  <li>Innere Techniken (=Osteosynthese, die funktionsstabil ist), z.B. Drahtnaht, Drahtumschlingung,
                    Knochenschrauben
                  </li>
                  <li>äußere Techniken, z.B. Schienenverbände</li>
                  <li>Für funktionsbelastete Knochen immer Kombination der beiden Techniken für eine ausreichende
                    Stabilität des Heilungsprozesses
                  </li>
                </ul>
              </li>
              <li>Fixation
                <ul>
                  <li>Ziel: interfragmentäre Ruhe</li>
                  <li>äußere Fixation (z.B. MMF, Kappenschiene) dient zur Sicherung des Fragments am intakten, nicht
                    beweglichen Knochen
                  </li>
                  <li>Innere Fixation (= Osteosynthese die übungs- und funktionsstabil ist, z.B. Drähte, Schrauben,
                    Platten) dient der direkten Ruhigstellung des Knochens:
                    <ul>
                      <li>Interfragmentäre Adaptation</li>
                      <li>Interfragmentäre statische Kompression</li>
                      <li>Interfragmentäre dynamische Kompression</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Mobilisation
                <ul>
                  <li>Abgestufte Funktionsübungen für:
                    <ul>
                      <li>Funktionelle Frühbehandlung von begleitenden Gelenkverletzungen</li>
                      <li>Muskel-Bänder-Kapsel-Verletzungen um Kontrakturen und Bewegungseinschränkungen zu
                        vermeiden
                      </li>
                      <li>Zur Verbesserung der oropharyngealen Passage bei pulmonalen Komplikationen und Blockaden
                        der nasalen Atemwege
                      </li>
                      <li>zur schnelleren psychosozialen Erholung</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <div className="startGallery" data-gallery-item={5}><img className="galleryPoster" src="thumbs/video5.png" alt=""/>
              <p className="gallerieThumbDescription">Kollumfraktur</p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail">
                <img src="thumbs/1.png" alt=""/></div>
              <img src="images/4b.png" alt=""/>
              <div className="media-link-title">Unterkieferfraktur</div>
              <div className="media-link-description">Fraktur des Unterkiefers paramedian links und im Bereich des
                Kieferwinkels rechts.
              </div>
            </div>
            <div data-media-id={2} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/4a.png" alt=""/>
              <div className="media-link-title">Unterkieferfraktur</div>
              <div className="media-link-description">Repositionierte und durch Osteosynthese versorgte Fraktur des
                Unterkiefers paramedian und Bereich des Kieferwinkels.
              </div>
            </div>
            <div data-media-id={3} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/5b.png" alt=""/>
              <div className="media-link-title">Unterkieferfraktur</div>
              <div className="media-link-description">Fraktur des Unterkiefers paramedian links und im Bereich des
                aufsteigenden Unterkieferastes rechts.
              </div>
            </div>
            <div data-media-id={4} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/5a.png" alt=""/>
              <div className="media-link-title">Unterkieferfraktur</div>
              <div className="media-link-description">Osteosynthetisch versorgte Fraktur des Unterkiefers paramedian links und
                am Collum mandibulae rechts. Außerdem sind in beiden Kiefern jeweils 3 Schrauben eingebracht für die
                mandibulomaxilläre Fixation.
              </div>
            </div>
            <div data-media-id={5} data-media-type="video">
              <div className="media-link-video-id">5</div>
              <div className="media-link-title">Kollumfraktur</div>
              <div className="media-link-description">Operative Versorgung einer Kollumfraktur</div>
            </div>
          </div>
        </div>
        <div id="mittelgesichtsfrakturen" className="chapters">
          <div className="chapterTitle">
            <h3>Mittelgesichtsfrakturen</h3>
            <hr />
          </div>
          <div className="content-block"><p><span style={{textDecoration: 'underline'}}>Allgemeines</span></p>
            <p>Das Mittelgesicht umfasst das gesamte Viszerokranium, abgesehen vom Unterkiefer. Es beinhaltet ein
              kompliziertes Hohlraumsystem, welches von Knochenpfeilern (nasomaxillärer, zygomaticomaxillärer,
              pterygomaxillärer Pfeiler) und dünnen Knochenlamellen umgeben ist. Demenstprechend gibt es typische
              Bruchverläufe.</p>
            <p>Mittelgesichtsfrakturen werden nach ihrer Lokalisation eingeteilt:</p>
            <ul>
              <li>Zentrale Mittelgesichtsfrakturen
                <ul>
                  <li>Basale Absprengung des Oberkiefers (LeFort-I)</li>
                  <li>Pyramidale Absprengung des Oberkiefers (LeFort-II)</li>
                  <li>Nasoorbitoethmoidale Fraktur</li>
                  <li>Nasenskelettfraktur</li>
                  <li>Sagitalfraktur der Maxilla</li>
                </ul>
              </li>
              <li>Zentrolaterale Mittelgesichtsfrakturen
                <ul>
                  <li>Hohe Absprengung des Mittelgesichts (LeFort-III)</li>
                </ul>
              </li>
              <li>Laterale Mittelgesichtsfrakturen
                <ul>
                  <li>Fraktur des zygomaticoorbitalen Komplexes</li>
                  <li>Fraktur des Jochbogens</li>
                  <li>Isolierte Orbitawandfrakturen</li>
                </ul>
              </li>
              <li>Nicht klassifizierbare Frakturen
                <ul>
                  <li>Trümmerfrakturen</li>
                  <li>Defektfrakturen</li>
                  <li>Alveolarfortsatzfrakturen (dentoalveolärer Komplex)</li>
                </ul>
              </li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Röntgen-Diagnostik</span></p>
            <p>Es gibt verschiedene radiologische Aufnahmen, die in der Diagnostik einer Mittelgesichtsfraktur eingesetzt
              werden können:</p>
            <ul>
              <li>Schädelübersicht okzipitomental</li>
              <li>kranial-exzentrisch (erweiterte Nasennebenhöhlenaufnahme)</li>
              <li>Schädelübersicht axial (Henkeltopfaufnahme)</li>
              <li>in der Regel aber DVT oder CT</li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Erstversorgung</span></p>
            <p>Im Rahmen der Erstversorgung sollte auch hier eine Fixierung der Fragmente stattfinden, um Schmerzen und eine
              Ödembildung zu minimieren. Es gibt 3 verschiedene Möglichkeiten:</p>
            <ul>
              <li>Kraniomandibuläre Fixation -&gt; Cave: Gefahr der Aspiration bei blockierter Mundöffnung</li>
              <li>Kraniomaxilläre Fixation durch Holzspatelverband oder Oberkiefer-Abdrucklöffel</li>
              <li>Stirnbeinaufhängung im Notfall beim intubierten Patienten</li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Einteilung <br /></span></p>
            <p>Die Einteilung von Mittelgesichtsfrakturen erfolgt nach Le Fort und Wassmund:</p>
            <ul>
              <li>Le-Fort-I
                <ul>
                  <li>=Guerin-Fraktur</li>
                  <li>Ursache hierfür sind meist stumpfe Traumata</li>
                  <li>Bruchlinie:
                    <ul>
                      <li>Apertura piriformis über faziale Kieferhöhlenwand zur Crista zygomatico alveolaris</li>
                      <li>von dort zur Hinterfläche der Kieferhöhle</li>
                      <li>trennt kaudale Spitze des Flügelfortsatzes ab</li>
                      <li>biegt nach vorn zur Nasenhöhle um</li>
                      <li>durchzieht laterale Nasenwand in ihrem basalen Anteil</li>
                      <li>dort wieder zur Apertura piriformis</li>
                      <li>zusätzlich bricht Vomer
                        <ul>
                          <li>Fragment wird nach dorsolateral verlagert oder rotiert um die vertikale Achse
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Klinik:
                    <ul>
                      <li>Epistaxis</li>
                      <li>Offener Biss</li>
                      <li>Pseudoprogenie</li>
                      <li>OK-Rückfall durch Zug der Flügelmuskulatur</li>
                      <li>Schachtelton bei Perkussion der Maxilla</li>
                      <li>Hämatome Wange, Oberlippe</li>
                      <li>Bildgebung: CT</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={4}><img src="thumbs/mittelgesichtsfrakturen_1_images.png" alt=""/></div>
            <ul>
              <li>Le-Fort-II
                <ul>
                  <li>Ursache sind hier stumpfe Schläge in horizontaler Richtung oder von vorne unten nach hinten
                    oben
                  </li>
                  <li>Bruchverlauf:
                    <ul>
                      <li>durchtrennt Nasenwurzel an oder weniger Millimeter unterhalb der frontonasalen bzw.
                        frontomaxillären Sutur
                      </li>
                      <li>über Tränenbein zum anteromedialen Anteil des Orbitabodens</li>
                      <li>zum mittleren Anteil des Infraorbitalrandes</li>
                      <li>von dort über faziale Kieferhöhlenwand zur Crista zygomatico alveolaris</li>
                      <li>zur Hinterwand der Kieferhöhle</li>
                      <li>durchtrennt Flügelfortsatz in mittlerer Höhe und erhält via Flügelgaumengrube und
                        Fissura orbitalis inferior wieder Anschluss an Bruchlinie am Orbitaboden
                      </li>
                      <li>zusätzlich bricht knöcherne Nasenscheidewand (Vomer + Lamina perpendicularis des
                        Siebbeins)
                        <ul>
                          <li>Fragment nach dorsal (durch Schlag) und im hinteren Anteil nach kaudal (durch
                            Flügelmuskulatur und Schlundschnürer)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Klinik:
                    <ul>
                      <li>Epistaxis</li>
                      <li>Offener Biss</li>
                      <li>Pseudoprogenie</li>
                      <li>Hämatome Nase, orbita</li>
                      <li>An-/Parästhesie infraorbital</li>
                      <li>Dorsal- und kaudalverlagerung des MG-Komplexes "dishface"</li>
                      <li>Liquoraustritt bei Fraktur kranial der Nase (Lam. cibrosa)</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={7}><img src="thumbs/mittelgesichtsfrakturen_2_images.png" alt=""/></div>
            <ul>
              <li>Le-Fort-III
                <ul>
                  <li>Diese Fraktur entspricht einem Abriss des Mittelgesichts von der Schädelbasis.</li>
                  <li>Bruchverlauf:
                    <ul>
                      <li>durch frontonasale und frontomaxilläre Sutur</li>
                      <li>über das Tränenbein und mediale Orbitawand unter Umgehung des Canalis opticus zum
                        hinteren Anteil der Orbitafissur
                      </li>
                      <li>ab dort zwei Bruchlinien:</li>
                      <li>eine zieht durch Flügelgaumengrube zur Basis des Flügelfortsatzes</li>
                      <li>die andere zeiht vom vorderen Ender der unteren Orbitafissur entlang der Sutura
                        zygomatico sphenoidalis nach kranial, um in Höhe der Sutura zygomatico frontalis den
                        Orbitarand zu durchtrennen
                      </li>
                      <li>zusätzlich Fraktur des Jochbogens und des knöchernen Nasenseptums
                        <ul>
                          <li>bei intakter Fascia temporalis meist geringe Dislokation</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Klinik:
                    <ul>
                      <li>Mitbeteiligung der Lamina cibrosa mit Möglichkeit von Fila-Olfactoria-Abriss</li>
                      <li>möglicher Liquoraustritt</li>
                      <li>mögliche retrobulbäre Blutung</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={10}><img src="thumbs/mittelgesichtsfrakturen_3_images.png" alt=""/></div>
            <ul>
              <li>Laterale Mittelgesichtsfraktur
                <ul>
                  <li>Sie ist die häufigste Fraktur des Gesichtsschädels.</li>
                  <li>Klinik:
                    <ul>
                      <li>Monokelhämatom</li>
                      <li>tastbare Stufe infra- und lateroorbital</li>
                      <li>Par-/Anästhesie des N. infraorbitalis</li>
                      <li>Diplopie</li>
                      <li>Bulbusschiefstand</li>
                      <li>Abflachung der lateralen Gesichtskontur</li>
                    </ul>
                  </li>
                  <li>Bildgebung:
                    <ul>
                      <li>Okzipitomentale Schädelaufnahme</li>
                      <li>axiale Schädelaufnahme = "Henkeltopfaufnahme"</li>
                      <li>CT
                        <ul>
                          <li>Hämatosinus</li>
                          <li>klassiche Tripodfraktur</li>
                          <li>evtl. Mundöffnungsbehinderung wegen Jochbogenimpression auf Proc. coronoideus
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p style={{paddingLeft: 30}}>1. Jochbeinfraktur</p>
            <ul>
              <li>Die Einteilung der Jochbeinfrakturen erfolgt nach Knight und North:
                <ul>
                  <li>Typ I: isolierte Jochbogenfraktur</li>
                  <li>Typ II: nicht dislozierte Jochbeinfraktur</li>
                  <li>Typ III: dislozierte Jochbeinfraktur ohne Diastase am lateralen Orbitarand
                    <ul>
                      <li>mit Medialrotation</li>
                      <li>mit Lateralrotation</li>
                    </ul>
                  </li>
                  <li>Typ IV: dislozierte Jochbeinfraktur mit Diastase am lateralen Orbitarand
                    <ul>
                      <li>Mit Medialrotation</li>
                      <li>Mit Lateralrotation</li>
                      <li>Mit dorsokaudaler Abscherung</li>
                    </ul>
                  </li>
                  <li>Typ V: Jochbeintrümmerfraktur</li>
                  <li>Typ VI: Frakturen vom Typ II-V mit Einbruch des Orbitabodens</li>
                </ul>
              </li>
              <li>Therapie:
                <ul>
                  <li>Die Operation sollten entweder unmittelbar nach dem Unfallereignis oder 3-5 Tage später (nach
                    Rückbildung der Weichteilschwellung) erfolgen.
                  </li>
                  <li>In der Regel ist eine offene Frakturversorgung mit Osteosynthese indiziert.</li>
                  <li>Zugänge zum lateralen Orbitarand: lateraler Augenbrauenschnitt, Oberliedschnitt, laterale
                    Kanthotomie
                  </li>
                  <li>Zugänge zum Infraorbitalrand: Transkonjunktivaler, tief subziliärer und infraorbitaler Zugang
                    (hochsubziliärer Zugang wegen Ektropiumgefahr eher vermeiden)
                  </li>
                  <li>Bei einer ausgedehnten Dislokation ist ein zusätzlicher Zugang zur Crista zygomatico alveolaris
                    notwendig.
                  </li>
                  <li>Meist wird eine perkutane Frakturversorgung bei Jochbogenfrakturen, dem Hakenzug mittels
                    Stromeyer-Haken oder "Gillies temporal approach", angestrebt. Selten wird der Jochbogen offene
                    mittels Osteosynthese Versorgung, da eine Verletzungsgefahr des Stirnastes (N.facialis) besteht.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="startGallery" data-gallery-item={13}><img className="galleryPoster" src="thumbs/video6.png" alt=""/>
              <p className="gallerieThumbDescription">Jochbeinfraktur</p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" alt=""/></div>
          <span className="startGallery" data-gallery-item={2}><img src="thumbs/mittelgesichtsfrakturen_4_images.png" alt=""/></span>
            <p style={{paddingLeft: 30}}>2. Orbitawandfraktur (meist Orbitabodenfraktur)</p>
            <ul>
              <li>Die Ursache für eine Orbitawandfraktur ist eine plötzliche infraorbitale Drucksteigerung. Im Rahmen des
                Geschehens kommt es zu einer direkten Transmission einer von außen einwirkenden Kraft auf den Knochen.
              </li>
              <li>Meistens ist die Orbitawandfraktur mit Jochbein- oder Mittelgesichtsfrakturen kombiniert.</li>
              <li>Wenn die Orbitabodenfraktur isoliert auftritt und Orbitarand intakt bezeichnet man sie auch als
                "Blow-out-fracture".
              </li>
              <li>Klinik:
                <ul>
                  <li>Lidödem</li>
                  <li>Monokelhämatom</li>
                  <li>Orbitaemphysem</li>
                  <li>Diplopie</li>
                  <li>Bulbusschiefstand</li>
                  <li>Bulbusmotilitätsstörung</li>
                  <li>Sensibilitätsstörungen</li>
                  <li>Hyposphagma (Unterblutung der Konjunktiva)</li>
                  <li>Enopthalmus mit Pseudoptosis oder Exophthalmus bei retrobulbärer Blutung -&gt; dann brettharter
                    Bulbus
                  </li>
                  <li>Nasenbluten</li>
                </ul>
              </li>
              <li>Cave: Visusverlust!</li>
              <li>Diagnostik: im CT "Hängender Tropfen" oder "trapdoor", d.h. Dislokation des Orbitabodens gleich einer
                Falltür
              </li>
              <li>Therapie:
                <ul>
                  <li>Transkonjunktivaler oder subziliärer Zugang</li>
                  <li>subperiostale Präparation und Reposition der Bruchstücke</li>
                  <li>stufenweises Vorgehen, je nach Ausmaß des frakturierten bzw. dislozierten Fragmentes mit
                    Ethisorb-Patch, PDS-Folie oder Titan-Mesh
                  </li>
                  <li>eine Navigation als Unterstützung der Mesh-Positionierung ist möglich</li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/mittelgesichtsfrakturen_5_images.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/10.png" alt=""/>
              <div className="media-link-title">Orbitabodenfraktur</div>
              <div className="media-link-description">Fraktur des linken Orbitabodens und Hämatosinus links.</div>
            </div>
            <div data-media-id={2} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/11.png" alt=""/>
              <div className="media-link-title">Jochbeinfraktur</div>
              <div className="media-link-description">Kombinierte Jochbein- und Orbitabodenfraktur auf der rechten Seite.
              </div>
            </div>
            <div data-media-id={3} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/7.png" alt=""/>
              <div className="media-link-title">Jochbeinfraktur</div>
              <div className="media-link-description">Fraktur des rechten Jochbeins und Jochbogens in Kombination mit einer
                Orbitabodenfraktur.
              </div>
            </div>
            <div data-media-id={4} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort1.png" alt=""/>
              <div className="media-link-title">LeFort I</div>
              <div className="media-link-description">Verlauf des Bruchs bei einer LeFort-I Fraktur von frontal.</div>
            </div>
            <div data-media-id={5} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort1%2Cb.png" alt=""/>
              <div className="media-link-title">LeFort I</div>
              <div className="media-link-description">Verlaufs des Bruchs bei einer LeFort I Fraktur von lateral.</div>
            </div>
            <div data-media-id={6} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort1c.png" alt=""/>
              <div className="media-link-title">LeFort I</div>
              <div className="media-link-description">Verlauf des Bruch bei einer LeFort I Fraktur von kaudal.</div>
            </div>
            <div data-media-id={7} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort2a.png" alt=""/>
              <div className="media-link-title">LeFort II</div>
              <div className="media-link-description">Verlauf des Bruchs einer LeFort II Fraktur von frontal.</div>
            </div>
            <div data-media-id={8} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort2b.png" alt=""/>
              <div className="media-link-title">LeFort II</div>
              <div className="media-link-description">Verlauf des Bruchs bei einer Le Fort II Fraktur von lateral.</div>
            </div>
            <div data-media-id={9} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort2c.png" alt=""/>
              <div className="media-link-title">LeFort II</div>
              <div className="media-link-description">Verlauf des Bruchs bei einer LeFort II Fraktur von kaudal.</div>
            </div>
            <div data-media-id={10} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort3a.png" alt=""/>
              <div className="media-link-title">LeFort III</div>
              <div className="media-link-description">Verlauf des Bruchs bei einer LeFort III Fraktur von frontal.</div>
            </div>
            <div data-media-id={11} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort3b.png" alt=""/>
              <div className="media-link-title">LeFort III</div>
              <div className="media-link-description">Verlauf des Bruchs bei einer LeFort III Fraktur von lateral.</div>
            </div>
            <div data-media-id={12} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/lefort3c.png" alt=""/>
              <div className="media-link-title">LeFort III</div>
              <div className="media-link-description">Verlauf des Bruchs bei einer LeFort III Fraktur von kaudal.</div>
            </div>
            <div data-media-id={13} data-media-type="video">
              <div className="media-link-video-id">6</div>
              <div className="media-link-title">Jochbeinfraktur</div>
              <div className="media-link-description">Operative Versorgung einer Jochbeinfraktur</div>
            </div>
          </div>
        </div>
        <div id="nasoorbitoethmoidaleFrakturen" className="chapters">
          <div className="chapterTitle">
            <h3>Nasoorbitoethmoidale Frakturen</h3>
            <hr />
          </div>
          <div className="content-block"><p>Nasoorbitoethmoidale Frakturen sind Brüche des interorbitalen Knochengerüsts. Das
              bedeutet, dass ein stabiler vorderer Anteil (Nasenbein, Stirnfortsatz der Maxilla) und ein labiler hinterer
              Anteil (Tränenbein, Siebbein) vorliegt.</p>
            <p>NOE-Frakturen werden nach Markowitz et al. 1991 eingeteilt:</p>
            <ul>
              <li>Typ I: ein zentrales Fragment mit angeheftetem medialen Lidband</li>
              <li>Typ II: gesplittertes zentrales Fragment mit angehefteten medialen Lidband</li>
              <li>Typ III: gesplittertes zentrales Fragment mit abgerissenem medialen Lidband</li>
            </ul>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Symptome</span></p>
            <p>Die typischen Symptome bei solchen Frakturen sind:</p>
            <ul>
              <li>eingesunkene Nasenwurzel</li>
              <li>Telekanthus (Interkanthaler Abstand ist vergrößert, Cave: Hypertelorismus wäre vergrößerter
                interpupillärer Abstand)
              </li>
              <li>geschwollene Augenlider und Brillenhämatom</li>
              <li>Hyposphagma</li>
              <li>Fraktur des Nasenseptums mit Zerreissung der Nasenschleimhaut</li>
              <li>Epiphora (=Tränenträufeln) ödembedingt oder durch Tränenwegsschaden
                <ul>
                  <li>Monitoring durch Fluoreszeintest mit Einträufeln in Bindehautsack und abschneuzen</li>
                </ul>
              </li>
              <li>Epistaxis aus Ethmoidalgefäßen</li>
              <li>Exopthalmus (durch Hämatom) oder Enopthalmus (durch Verlagerung des intraorbitalen Fettgewebes in
                Richtung der eröffneten Siebbeinzellen)
              </li>
              <li>Motilitätsstörungen der Augen</li>
              <li>Liquorrhoe möglich</li>
            </ul>
            <p>Als bildgebendes Verfahren steht die digitale Volumentomographie und die Computertomographie im Vordergrund.
              Nasennebenhöhlenprojektionen und Röntgenaufnahmen im seitlichen Strahlengang werden nur noch bedingt
              durchgeführt.</p>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Therapie</span></p>
            <p>Da in Rahmen solcher Frakturen meist noch weitere Körperpartien betroffen sind, steht ein interdisziplinäres
              Vorgehen im Vordergrund. Von Seiten der Mund-, Kiefer- und Gesichtschirurgie steht die anatomische
              Wiederherstellung im Vordergrund:</p>
            <ul>
              <li>Reposition der Fragmente mittels Drähten und Platten, meist über einen bikoronaren Zugang</li>
              <li>bei vollständiger Zertrümmerung können freie Knochen- bzw. Knorpeltransplantate zur Rekonstruktion
                verwendet werden
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/18.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/18.png" alt=""/>
              <div className="media-link-title">NOE Fraktur</div>
              <div className="media-link-description">Repositionierte und osteosynthetisch versorgte Fraktur des
                nasoorbitoethoidalen Komplexes.
              </div>
            </div>
          </div>
        </div>
        <div id="panfazialeFrakturen" className="chapters">
          <div className="chapterTitle">
            <h3>Panfaziale Frakturen</h3>
            <hr />
          </div>
          <div className="content-block"><p>Panfaziale Frakturen werden definiert als ein Frakturgeschehen, welches mindestens 2
              Etagen des Gesichts umfasst.</p>
            <p>Die Klinik entspricht der Klinik von NOE Frakturen.</p>
            <p>&nbsp;</p>
            <p><span style={{textDecoration: 'underline'}}>Therapie</span></p>
            <p>Die Therapie entspricht in der Regel den bereits genannten Therapieverfahren. Bei einer Beteiligung des
              kraniofazialen Übergangs</p>
            <ul>
              <li style={{paddingLeft: 30}}>erfolgt zunächst die Versorgung des Schädelbasistraumas
                <ul>
                  <li style={{paddingLeft: 30}}>über einen Koronarschnitt, welcher die Versorgung von
                    Nasoethmoidalregion, Stirnpfeiler, lateralen Orbitawandungen und Jochbögen ermöglicht
                  </li>
                </ul>
              </li>
              <li style={{paddingLeft: 30}}>dann wird geschient und anschließend die Okklusion eingestellt</li>
              <li style={{paddingLeft: 30}}>zuletzt die Osteosynthese des Unterkiefers durchgeführt</li>
            </ul>
            <p>Die Einhaltung dieser Reihenfolge vermeidet eine Vebreiterung des Gesichts.</p>
          <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/panfaziale_frakturen_images.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/panfazial.png" alt=""/>
              <div className="media-link-title">Panfaziale Fraktur</div>
              <div className="media-link-description">Multiple Frakturen des Gesichts nach einem Verkehrsunfall.</div>
            </div>
            <div data-media-id={2} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/panfazial2.png" alt=""/>
              <div className="media-link-title">Panfaziale Fraktur</div>
              <div className="media-link-description">Multiple Frakturen des Gesichts und des Schädels nach einem
                Verkehrsunfall.
              </div>
            </div>
          </div>
        </div>
        <div id="praevention" className="chapters">
          <div className="chapterTitle">
            <h3>Prävention</h3>
            <hr />
          </div>
          <div className="content-block"><p>Gesichtsprotektionsmasken kommen vor allem bei Hochleistungssportlern zum Einsatz, da
              so eine deutlich kürzere Ausfallzeit erreicht werden kann. Als Material kann hierfür Carbon oder Plexiglas
              verwendet werden.</p>
            <p>Das Vorgehen ist wie folgt:</p>
            <ul>
              <li>A. Abformung des Gesichts</li>
              <li>B. Herstellung ohne Gesichtsabformung
                <ul>
                  <li>Oberflächenscan mit Laser</li>
                  <li>mit Datensatz Herstellung eines Modells</li>
                  <li>Herstellung der Maske und Anpassung</li>
                </ul>
              </li>
            </ul>
            <div className="startGallery imageContainer" data-gallery-item={1}><img src="thumbs/gesichtsprotektion.png" alt=""/></div>
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail"><img src="thumbs/1.png" alt=""/></div>
            <img src="images/gesichtsprotektion.png" alt=""/>
              <div className="media-link-title">Gesichtsprotektionsmaske</div>
              <div className="media-link-description">Individuell angefertigte Maske zur Protektion des Gesichts für einen
                Hochleistungssportler.
              </div>
            </div>
          </div>
        </div>
      </div>

    );
    }

export default Trauma;
