import React from 'react';

function Spezifische_infektionen(props) {
  return (
  <div>
    <div id="grundlagen" className="chapters">
      <div className="chapterTitle">
        <h3>Grundlagen</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Gibt es für ein Krankheitsbild nur{" "}
          <strong>einen verantwortlichen Erreger</strong>, so spricht man von einer{" "}
          <strong>"spezifischen Infektion"</strong>.
        </p>
        <p>
          <strong>Granulomatöse Entzündungen</strong> werden auch als "<strong>
            Spezifische Entzündungen
          </strong>" bezeichnet. Dieser Begriff ist historisch und geht auf die
          damalige Auffassung zurück, man könne aus dem histologischen Bild auf die
          Ursache der Entzündung schließen. Heute weiß man, dass Granulome nur
          eingeschränkt Rückschlüsse auf die Ursache der Entzündung erlauben und zur
          Bestimmung der Ätiologie weitere Untersuchungen erforderlich sind.
        </p>
        <p>
          Granulomatöse Entzündungen sind eine spezielle Form der chronischen
          Abwehrreaktion. Charakteristisch für diese Form der Entzündung sind kleine{" "}
          <strong>Granulome</strong>, welche{" "}
          <strong>knötchenförmige Ansammlungen von Entzündungszellen</strong> sind.
          Auch die Ausbildung einer zentralen Nekrose innerhalb der Granulome ist
          möglich bei Erkrankungen wie der Tuberkulose.
        </p>
        <p>
          In den folgenden Kapiteln werden einige spezifische Infektionen
          besprochen.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="links" />
    </div>;
    <div id="aktinomykose" className="chapters">
      <div className="chapterTitle">
        <h3>Aktinomykose</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Die Aktinomykose wird durch eine Infektion mit dem Erreger{" "}
          <strong>Actinomyces israelii</strong> verursacht. Es handelt sich hierbei
          um anaerobe wachsende, fadenbildende Bakterien. Trotz des Synonyms "<strong
          >
            Strahlenpilz
          </strong>" ist der Erreger <strong>nicht den Pilzen zuzuordnen</strong>.
          Der Erreger ist normaler Bestandteil der Mundflora und unter bestimmten
          Umständen kann es zu einer endogenen Infektion kommen.
        </p>
        <p>Im Falle einer Erkrankung zeigen sich klinisch folgende Symptome:</p>
        <ul>
          <li>
            Meist Wundheilungsstörung nach intraoralen, chirurgischen Maßnahmen
            (Saprophyt!)
          </li>
          <li>
            Bildet im Gewebe Kolonien, die sich klinisch als granulomatöse Knoten
            zeigen
          </li>
          <li>
            <strong>Brettharte Schwellung</strong> der befallenen Hautregion
          </li>
          <li>
            <strong> blau-livide Verfärbung</strong>
          </li>
          <li>subkutane Abszesse</li>
          <li>Fistelungen</li>
          <li>im Eiter gelbliche bis rötlich-braune Drusen erkennbar</li>
          <li>akuter oder primär chronischer Verlauf</li>
          <li>
            meist <strong>zervikofaziale Infektionen</strong>, aber auch in anderen
            Regionen Infektionen möglich
          </li>
        </ul>
        <p>
          <span className="startGallery" data-gallery-item={2}>
            <img src="thumbs/aktinomykose_images.png" alt="Aktinomykose"/>
          </span>
        </p>
        <p>
          Zur Diagnosesicherung ist zum einen die <strong>Klinik</strong> und zum
          anderen der <strong>Erregernachweis</strong> entscheidend. Mikroskopisch
          zeigen sich rundliche Kolonien mit radiärer, strahlenartiger Anordnung (=<strong
          >
            Drusen
          </strong>). Oft handelt es sich um Mischinfektionen mit anderen
          gramnegativen Erregern. Bei der Einsendung von Präparaten muss auf die
          Verdachtsdiagnose hingewiesen werden, da ein besonderes anaerobes
          Kulturverfahren zum Erregernachweis angewandt werden muss.
        </p>
        <p>
          <span className="startGallery" data-gallery-item={1}>
            <img src="thumbs/strahlenpilz.png" alt="Strahlenpilz"/>
          </span>
        </p>
        <p>
          Mögliche Komplikationen bei einer Aktinomykose sind Rezidive oder eine
          Osteomyelitis.
        </p>
        <p>
          Die Therapie der Wahl ist ist die Gabe von<strong>
            {" "}
            Amoxicillin und Clavulansäure
          </strong>{" "}
          in hoher Dosis über mindestens 2 Wochen und eine{" "}
          <strong>chirurgische Sanierung</strong> des Herdes. Da eine Neigung zu
          Rezidiven besteht, kann nach erfolgreicher Therapie eine Rezidivprophylaxe
          mit Penicillin über 6-12 Monaten sinnvoll sein.
        </p>
        <p>&nbsp;</p>
        <p>Quelle: www.rki.de</p>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/strahlenpilz.png" alt=""/>
          <div className="media-link-title">Strahlenpilz</div>
          <div className="media-link-description">
            Mikroskopische Darstellung des Strahlenpilzes.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/aktinomykose.png" alt=""/>
          <div className="media-link-title">Aktinomykose</div>
          <div className="media-link-description">
            Läsion der Schleimhaut mit putriden Flüssigkeitsaustritt.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/aktinomykose2.png" alt=""/>
          <div className="media-link-title">Aktinomykose</div>
          <div className="media-link-description">
            Läsion der Haut, welche blau-livide verfärbt ist.
          </div>
        </div>
      </div>
    </div>;
    <div id="tuberkolose" className="chapters">
      <div className="chapterTitle">
        <h3>Tuberkulose</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Die Tuberkulose wird durch eine Infektion mit dem{" "}
          <strong>Mykobakterium tuberculosis</strong> ausgelöst. Es handelt sich um
          aerobe, unbewegliche Stäbchenbakterien, die säurefest und sehr
          widerstandsfähig sind. Der Mensch ist sein einziges Reservoir. Weitere
          mögliche Erreger, die selten eine Tuberkulose verursachen können sind
          Mykobakterium bovis, africanum und microti. Die{" "}
          <strong>Inkubationszeit</strong>, d.h. die Zeit zwischen Infektion und
          messbarer Immunantwort, beträgt <strong>6-8 Wochen</strong>.
        </p>
        <p>
          Menschen mit geschwächtem zellulären Immunsystem zählen zur Risikogruppe
          zeitnah an einer aktiven Tuberkulose zu erkranken. Ursachen für das
          geschwächte Immunsystem können sein:
        </p>
        <ul>
          <li>HIV-Infektion</li>
          <li>Immunsuppressive Therapie</li>
          <li>Maligne Lymphome</li>
          <li>Angeborene Immundefekte</li>
        </ul>
        <p>Weitere Risikofaktoren sind:</p>
        <ul>
          <li>Allgemeinerkrankungen (Diabetes mellitus, Masern, Keuchhusten)</li>
          <li>Mangelernährung</li>
          <li>Drogen- und Alkoholabusus</li>
          <li>hohes Lebensalter</li>
          <li>Flüchtlinge aus Hochprävalenzgebieten</li>
          <li>Berufliche Kontakte mit Tuberkelbakterien</li>
        </ul>
        <p>&nbsp;</p>
        <p>
          Eine latenten tuberkulöse Infektion verläuft in der Regel asymptomatisch.
          Die Erkrankung der Tuberkulose manifestiert sich in <strong>80%</strong>{" "}
          der Fälle als <strong>Lungentuberkulose</strong>, sie kann aber
          prinzipiell jedes Organ befallen.
        </p>
        <ul>
          <li>
            Primärtuberkulose
            <ul>
              <li>Primärkomplex = Primärherd + regionäre Lymphknoten</li>
              <li>
                Primärherd befindet sich meist subpleural im Oberlappen mit
                zentraler käsigen Nekrose
              </li>
              <li>Tuberkulom = mehrere konfluierende Granulome</li>
              <li>Meist keine Klinik</li>
            </ul>
          </li>
          <li>
            Postprimäre Tuberkulose
            <ul>
              <li>
                Meist Endogene Reaktivierung alter Organherde bei unzureichender
                Immunität
              </li>
              <li>Selten exogene Reinfektion</li>
              <li>80% Lungentuberkulose, 20% extrapulmonal</li>
            </ul>
          </li>
          <li>
            Postprimäre Tuberkulose im MKG-Bereich:
            <ul>
              <li>
                <strong>Tuberculosis ulcerosa</strong>
                <ul>
                  <li>
                    Ulzeröse Schleimhauttuberkulose = Stomatitis tuberculosa
                    ulcerosa
                  </li>
                  <li>
                    Entsteht im fortgeschrittenen Stadium einer Lungentuberkulose,
                    durch intrakanalikuläre Ausbreitung
                  </li>
                  <li>
                    Oberflächliche Ulzerationen mit gezackten unterminierten
                    Rändern, gelbgrauem Geschwürsgrund und Knötchen in der Umgebung
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tuberculosis colliquativa (scrofuloderm)</strong>
                <ul>
                  <li>Hauttuberkulose</li>
                  <li>Besonders im Halsbereich</li>
                  <li>Von den Lymphknoten ausgehend</li>
                  <li>
                    Einzelne schmerzlose subkutane Knoten, die miteinander
                    konfluieren, erweichen und nach außen durchbrechen, wobei
                    Ulzerationen mit weichen unterminierten Rändern und Fisteln
                    entstehen
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tuberculosis cutis luposa = Lupus vulgaris</strong>
                <ul>
                  <li>
                    Chronische produktiv-proliferierende knötchenbildende Haut- und
                    Schleimhauttuberkulose
                  </li>
                  <li>
                    Bevorzugter Befall der Gesichtshaut und der Nasenschleimhaut,
                    sowie Extremitäten
                  </li>
                  <li>
                    Subepitheliale stecknadelkopfgroße weiche, rotbraune, manchmal
                    schuppende Knötchen
                  </li>
                  <li>
                    Einzelne Tuberkel, die aus tuberkulösem Granulationsgewebe mit
                    zentraler Verkäsung bestehen
                  </li>
                  <li>Lupusflecken durch Zusammenfluss einzelner Knötchen</li>
                  <li>
                    Papeln ulzerieren und heilen anschließend narbig aus
                    (Präkanzerose!)
                  </li>
                  <li>
                    Nach Abheilung häufig Narben- und Keloidbildungen, in denen
                    wieder neue Lupusflecken auftreten
                  </li>
                  <li>
                    Narbige Verengung der Mundöffnung (Mikrostomie) und
                    Narbenschrumpfung im Bereich der Nase und der Ohrmuschel möglich
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <span className="startGallery" data-gallery-item={1}>
            <img
              src="thumbs/tuberculosis_ulcerosa.png"
              alt="Tuberculosis Ulcerosa"
            />
          </span>
        </p>
        <p>
          <span className="startGallery" data-gallery-item={2}>
            <img
              src="thumbs/tuberculosis_colliquativa.png"
              alt="Tuberculosis Colliquativa"
            />
          </span>
        </p>
        <p>
          Zum Nachweis einer latenten tuberkulösen Infektion stehen derzeit die{" "}
          <strong>Tuberkulin-Hauttests</strong> sowie Interferon-Gamma-Tests zur
          Verfügung. Zur Diagnosesicherung erfolgt in der Regel ein{" "}
          <strong>mikrobiologischer Direktnachweis (Kultur)</strong> aus Sputum oder
          anderen Körperflüssigkeiten. Mittels einer{" "}
          <strong>Ziehl-Neelsen-Färbung</strong> können die säurefesten Bakterien im
          mikroskopischen Präparat nachgewiesen werden.
        </p>
        <p>
          <span className="startGallery" data-gallery-item={3}>
            <img
              src="thumbs/zellkultur.png"
              alt="Mikrobiologische Zellkultur der Tuberkulose."
            />
          </span>
        </p>
        <p>
          <span className="startGallery" data-gallery-item={4}>
            <img
              src="thumbs/mikroskopie_tbc_1.png"
              alt="Mikroskopisches Präparat einer Tuberkulose mit einer Ziehl-Neelsen-Färbung."
            />
          </span>
        </p>
        <p>
          Die Therapie der Wahl bei einer Primärtuberkulose ist die
          tuberkulostatische 4-fach Chemotherapie mit{" "}
          <strong>Ethambutol, Pyrazinamid, Isoniazid und Rifampicin</strong>.
          Streptomycin wird wegen Ototoxizität nur noch bei resistenten
          Mycobakterienstämmen eingesetzt. Die Therapie der Postprimärtuberkulose
          ist in der Regel auch medikamentös mit Antibiotika und zusätzlich erfolgt
          eine <strong>chirurgische Resektion</strong> befallener Regionen.
        </p>
        <p>&nbsp;</p>
        <p>Quelle: www.rki.de</p>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/tuberculosis_ulcerosa.png" alt=""/>
          <div className="media-link-title">Tuberculosis ulcerosa</div>
          <div className="media-link-description">
            Ulzerierende Tuberkulose am Zungenrand rechts und Mundwinkel links.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/tuberculosis_colliquativa.png" alt=""/>
          <div className="media-link-title">Tuberculosis colliquativa</div>
          <div className="media-link-description">
            Hauttuberkulose mit einzelne schmerzlosen, subkutanen Knoten, die
            miteinander konfluieren, erweichen und nach außen durchbrechen. Dabei
            entstehen Ulzerationen mit weichen unterminierten Rändern und Fisteln.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/zellkultur.png" alt=""/>
          <div className="media-link-title">Tuberkulose</div>
          <div className="media-link-description">
            Mikrobiologische Zellkultur der Tuberkulose.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/mikroskopie_tbc_1.png" alt=""/>
          <div className="media-link-title">Tuberkulose</div>
          <div className="media-link-description">
            Mikroskopisches Präparat einer Tuberkulose mit einer
            Ziehl-Neelsen-Färbung.
          </div>
        </div>
      </div>
    </div>;
    <div id="lues" className="chapters">
      <div className="chapterTitle">
        <h3>Lues</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Der Erreger <strong>Treponema pallidum</strong> verursacht die Erkrankung
          Syphilis. Es handelt sich um ein gramnegatives, bewegliches,
          spiralförmiges Bakterium. Es wird im Primärstadium und frühen
          Sekundärstadium durch <strong>Sexualkontakte</strong> übertragen. Im
          Tertiärstadium kann es auch über Blut und diaplazentar übertragen werden.
          Die<strong> Inkubationszeit</strong> beträgt <strong>2-3 Wochen</strong>.
        </p>
        <p>
          <span className="startGallery" data-gallery-item={1}>
            <img
              src="thumbs/elektronenmikroskopie_lues.png"
              alt="Elektronenmikroskopische Aufnnahme des Erregers Treponema pallidum"
            />
          </span>
        </p>
        <p>&nbsp;</p>
        <p>Stadien:</p>
        <table
          className="table table-bordered table-striped"
          style={{ fontWeight: "bold", height: 1609 }}
          width={936}
        >
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>Dauer</td>
              <td>Symptome</td>
            </tr>
            <tr>
              <td>Primärstadium</td>
              <td>1-5 Wochen post infectionem</td>
              <td>
                <p>Syphilitischer Primärkomplex:</p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ulcus durum an der
                  Eintrittsstelle und vergrößerte regionale Lymphknoten
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In 60-70% spontane Abheilung
                  in 2-6 Wochen
                </p>
              </td>
            </tr>
            <tr>
              <td>Sekundärstadium</td>
              <td>
                2-3 Monate post infectionem (ca. 30-40% der unbehandelten Patienten)
              </td>
              <td>
                <p>Hämatogene und lymphogene Streuung:</p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fieber, Abgeschlagenheit,
                  Kopf- und Gliederschmerzen
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Generalisierte
                  Lymphadenopathie
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Schuppend-papulöse
                  Veränderungen an Palmae und Plantae ohne Pruritus
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Generalisierte makulöse,
                  nicht juckende Exantheme
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hypo- und Hyperpigmentierung
                  der Haut („Halsband der Venus“)
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Condylomalata(nässende,
                  hochkontagiöse Papeln der Intertrigenes, v.a. anogential)
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Plaques muqueses der
                  Mundschleimhautdie sich durch Hyperkeratose weißlich färben
                  (Plaques opalines) oder ulzerös zerfallen (Plaques erosives) =
                  infektiös
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Angina specifica
                  (ödematöse-entzündliche Tonsillitis)
                </p>
                <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Haarausfall</p>
              </td>
            </tr>
            <tr>
              <td>Latenzstadium</td>
              <td>Jahrelang</td>
              <td>
                <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Häufig asymptomatisch</p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gelegentlich leichte
                  Rückfälle in das Sekundärstadium
                </p>
              </td>
            </tr>
            <tr>
              <td>Tertiärstadium</td>
              <td>
                Jahrzehnte&nbsp;post infectionem (ca. 1/3 der unbehandelten
                Patienten)
              </td>
              <td>
                <p>Nekrotischer befall der betroffenen Gewebe:</p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kutanes tertiäres Syphilid
                  (braunrote, derbe Hautknoten im Ulzerationen)
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Subkutane und viszerale
                  Gummen (gummiartige Granulome der Haut, Knochen, Muskeln, Gefäße,
                  Lunge, Gehirn, Leber, Gastrointestinaltrakt)
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gummen können erweichen,
                  ulzerieren oder Leukoplakie(Verhornung) aufweisen
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Am Gaumen kann nach
                  Abheilung der gummösen Entzündung eine Perforation zur Nase
                  zurückbleiben
                </p>
              </td>
            </tr>
            <tr>
              <td>Quartärstadium</td>
              <td>
                Jahrzehnte&nbsp;post infectionem (ca. 10% der unbehandelten
                Patienten)
              </td>
              <td>
                <p>Neurosyphilis:</p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gummöse Neurosyphilis:
                  Verdrängung des Hirngewebes durch Gummen
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Menigovaskuläre
                  Neurosyphilis: Meningitis, Kopfschmerzen,
                  Persönlichkeitsveränderungen, Schwindel, Apoplex
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tabes dorsalis:
                  Demyelinisierung der Hinterstränge mit brennenden, lanzinierenden
                  (einschießenden) Schmerzen in Beinen und Bauch, Pallhypästhesie
                  und Ataxie, Hirnnervenparesen, Inkontinenz
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Progressive Paralyse:
                  Parenchymdegeneration des Frontalhirns, psychische Veränderungen,
                  Demenz, Krampfanfälle
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <span className="startGallery" data-gallery-item={2}>
            <img src="thumbs/lupus_vulgaris.png" alt="Lupus Vulgaris"/>
          </span>
        </p>
        <p>
          Zur Diagnosesicherung erfolgt in der Regel der{" "}
          <strong>Direktnachweis</strong> in der Dunkelfeldmikroskopie und ein{" "}
          <strong>serologischer Nachweis</strong> von treponemenspezifische
          IgG-Antikörpern.
        </p>
        <p>
          Die Therapie der Wahl, bei allen Stadien, ist die Gabe von{" "}
          <strong>Penicillin</strong>. Wichtig ist, dass die Sexualpartner
          mitbehandelt werden.
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ textDecoration: "underline" }}>Lues connata</span>
        </p>
        <p>
          Die <strong>transplazentare Infektion</strong> des Föten kann in jedem
          Schwangerschaftsstadium und jedem unbehandeltem oder unzureichend
          behandeltem Luesstadium übertragen werden. Je kürzer die vergangene
          Zeitspanne seit der Infektion der Mutter, um so höher ist die
          Übertragungsrate. Fast 100% der Feten sind betroffen, wenn sich die Mutter
          während der Schwangerschaft infiziert. Die intrauterine Infektion führt
          bei ausbleibender Therapie in etwa <strong>30-40%</strong> der Fälle zu{" "}
          <strong>
            Abort, Totgeburt, Exitus letalis kurz nach der Geburt oder Frühgeburt
          </strong>. Ein wesentlicher Anteil der Kinder ist bei der Geburt
          unauffällig, die meisten erkranken aber innerhalb der ersten 8 Monate.
        </p>
        <p>Bei der Lues connata werden zwei verschieden Phasen unterschieden:</p>
        <ul>
          <li>
            <strong>Lues connata praecox</strong>
            <ul>
              <li>
                Symptome <span style={{ textDecoration: "underline" }}>vor</span>{" "}
                dem 2. Lebensjahr
              </li>
              <li>
                Makulopapulöses Exanthem an den Handinnenflächen und Fußsohlen
              </li>
              <li>Petechien</li>
              <li>Hepatoslpenomegalie</li>
              <li>Lymphknotenschwellungen</li>
              <li>Hyperbilirubinämie und Anämie bis zum Hydrops fetalis</li>
              <li>
                Schmerzhafter Knochenbefall (Osteomyelitis, Periostitis, metaphysäre
                Osteochondritis syphilitica) mit Pseudoparalyse
              </li>
              <li>teils blutiger Schnupfen = Choryzasyphilitica</li>
              <li>
                Papulo-erosive Veränderungen mit radiären Einrissen an den Lippen,
                aus denen Lippennarben (Parrotsche Furchen) werden
              </li>
            </ul>
          </li>
          <li>
            <strong>Lues connata tarda</strong>
            <ul>
              <li>
                Symptome <span style={{ textDecoration: "underline" }}>nach</span>{" "}
                dem 2. Lebensjahr
              </li>
              <li>
                im Kleinkind- oder späteren Kindesalter können unbehandelt klinische
                Symptome an verschiedenen Organen auftreten
              </li>
              <li>
                Gesichtsdysmorphien, wie Sattelnase, kurze Maxilla, prominente
                Mandibula, Rhagaden mit narbiger Abheilung
              </li>
              <li>Interstitielle Keratitis</li>
              <li>Säbelscheidentibia</li>
              <li>
                Verdickung des medialen Schlüsselbeins (Highoumenakis-Zeichen)
              </li>
              <li>
                Mit <strong>Hutchinsonsche Trias:</strong>
                <ul>
                  <li>
                    <strong>Hornhauttrübung</strong>
                  </li>
                  <li>
                    <strong>Labyrinthtaubheit</strong>
                  </li>
                  <li>
                    <strong>Zahnfehlbildungen:</strong> Kronen der mittleren oberen
                    Schneidezähne sind <strong>tonnenförmig</strong> konfiguriert
                    und haben <strong>halbmondförmige Einziehungen</strong> der
                    Schneidekante, Krone der oberen Sechsjahresmolaren verjüngt sich{" "}
                    <strong>knospenförmig zur Kaufläche</strong> und sind durch
                    Schmelzhypoplasien missgestaltet
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            ZNS-Symptome, wie Meningitis, Hirnnervenausfälle, Hydrozephalus und
            Krampfanfälle, können bei beiden Verlaufsformen auftreten
          </li>
        </ul>
        <p>
          <span className="startGallery" data-gallery-item={3}>
            <img
              src="thumbs/choryza_syphilitica.png"
              alt="Choryza syphilitica bei Lues connata praecox"
            />
          </span>
        </p>
        <p>
          <span className="startGallery" data-gallery-item={5}>
            <img src="thumbs/t%C3%B6nnchenz%C3%A4hne.png" alt="Tönnchenzähne"/>
          </span>
        </p>
        <p>
          <span className="startGallery" data-gallery-item={4}>
            <img src="thumbs/hornhauttr%C3%BCbung.png" alt="Hornhauttrübung"/>
          </span>
        </p>
        <p>Quelle: www.rki.de</p>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/elektronenmikroskopie_lues.png" alt=""/>
          <div className="media-link-title">Lues</div>
          <div className="media-link-description">
            Elektronenmikroskopische Aufnnahme des Erregers Treponema pallidum.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/lupus_vulgaris.png" alt=""/>
          <div className="media-link-title">Lupus vulgaris</div>
          <div className="media-link-description">
            Manifestation an der Haut einer chronischen, schwer progredienten Form
            der Reinfektionstuberkulose.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/choryza_syphilitica.png" alt=""/>
          <div className="media-link-title">Choryza syphilitica</div>
          <div className="media-link-description">
            Teils blutiger Schnupfen bei einem Neugeborenen.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/hornhauttr%C3%BCbung.png" alt=""/>
          <div className="media-link-title">Hornhauttrübung</div>
          <div className="media-link-description">
            Im Rahmen der Hutchinson'schen Trias Trübung der Hornhaut.
          </div>
        </div>
        <div data-media-id={5} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/t%C3%B6nnchenz%C3%A4hne.png" alt=""/>
          <div className="media-link-title">Tönnchenzähne</div>
          <div className="media-link-description">
            Im Rahmen der Hutchinson'schen Trias halbmondförmige Einziehungen an den
            Oberkieferfrontzähnen und tonnenförmige Konfiguration.
          </div>
        </div>
      </div>
    </div>;
    <div id="tetanus" className="chapters">
      <div className="chapterTitle">
        <h3>Tetanus</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>
          Tetanus wird durch den Erreger <strong>Clostridium tetani</strong>{" "}
          verursacht. Dies ist ein ubiquitär vorkommender, gram positiver,
          sporenbildener Keim. Die Sporen sind äußerst widerstandsfähig und können
          unter anaeroben Bedingungen Exotoxine, wie <strong>Tetanospasmin</strong>{" "}
          und <strong>Tetanolysin</strong>, bilden. Die Erkankung kann auch
          als&nbsp; <strong>Wundstarrkrampf</strong> bezeichnet werden.
        </p>
        <p>Abb.: Lichtmikroskopischer Nachweis von Clostridium tetani</p>
        <p>
          Die Infektion entsteht durch das Eindringen der ubiquitär vorkommenden
          Sporen über <strong>kontaminierte Wunden</strong>. Diese Wunden können
          Bissverletzungen, Verbrennungen oder Bagatellverletzungen durch Dornen
          sein.
        </p>
        <p>
          Nach Eindringen der Sporen in die Wunde, vermehrt sich Clostridium tetani
          und bildet Exotoxine. Die Inkubationszeit beträgt 3-14 Tage. Die typische
          klinische Symptomatik wird durch das ExotoxinTetanospasmin verursacht. Man
          unterscheidet 3 Schweregrade der klinischen Symptomatik:
        </p>
        <ul>
          <li>
            Schweregrad I
            <ul>
              <li>
                Krämpfe der Fazialismuskulatur (<strong>Risus sardonicus</strong>)
                und der Kaumuskulatur mit Kieferklemme (<strong>Trismus</strong>)
              </li>
              <li>
                Opisthotonus durch Dorsalflexion des Kopfes mit Lordose der
                Wirbelsäule
              </li>
              <li>
                Tonische Muskelstarre (<strong>Rigor</strong>) der Nacken-, Rücken-,
                Bauch- und Extremitätenmuskulatur
              </li>
            </ul>
          </li>
          <li>
            Schweregrad II
            <ul>
              <li>
                Symptome von I und{" "}
                <strong>generalisierte klonische Krampfanfälle</strong>
              </li>
            </ul>
          </li>
          <li>
            Schweregrad III
            <ul>
              <li>
                Symptome von II und schwere{" "}
                <strong>
                  Bronchial- und Zwerchfellkrämpfe mit Erstickungsanfällen
                </strong>
              </li>
              <li>Patient erlebt Erkrankung bis zuletzt bei vollem Bewusstsein</li>
              <li>Keine Immunität nach Erkrankung</li>
            </ul>
          </li>
        </ul>
        <p>
          <span className="startGallery" data-gallery-item={1}>
            <img
              src="thumbs/clostridium_tetani_images.png"
              alt="Clostridium Tetani"
            />
          </span>
        </p>
        <p>
          Bei der Diagnostik der Erkrankung steht das{" "}
          <strong>klinische Bild</strong> und die <strong>Impfanamnese</strong> im
          Vordergrund.
        </p>
        <p>&nbsp;</p>
        <p>
          Um eine Tetanuserkrankung zu vermeiden, sollte nach dem Impfschema eine{" "}
          <strong>aktive Immunisierung</strong> bei Säuglingen stattfinden. Hierzu
          sollte innerhalb eines Abstandes von 2-6 Wochen 2x 0,5ml Tetanustoxoid
          i.m. geimpft werden. Eine dritte Injektion von 0,5ml findet nach 6-12
          Monaten statt. Anschließend sollten im Abstand von 10 Jahren
          Auffrischimpfungen stattfinden.
        </p>
        <p>
          Liegt eine Verletzung und ein unklarer Impfstatus vor, sollte eine{" "}
          <strong>Simultanimpfung</strong> stattfinden. Hierzu werden 0,5ml
          Tetanustoxoid + 250 IE Hyperimmunglobulin (Tetagam) i.m. an
          kontralateralen Körperstellen injiziert. Wie bei der aktiven Immunisierung
          folgen auch hier zwei Wiederholungsimpfungen mit Tetanustoxoid in den oben
          genannten Zeitabständen.
        </p>
        <p>
          Tritt bei einem Erkrankten die oben beschrieben Symptomatik auf, so muss
          dieser Patient<strong> intensivmedizinisch überwacht</strong> werden.
          Außerdem muss eine <strong>chirurgische Wundrevision</strong> mit Exzision
          verschmutzer Wundabschnitte erfolgen und ein <strong>Antibiotikum</strong>{" "}
          in hoher Dosierung verabreicht werden, um die toxinproduzierende
          Infektionsquelle abzuschalten. Zur Unterdrückung der Krampfanfälle kann
          eine <strong>Intubationsnarkose</strong> mit Dauerbeatmung und
          Muskelrelaxantien nötig sein.
        </p>
        <p>Quelle: www.rki.de</p>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/clostridium_tetani.png" alt=""/>
          <div className="media-link-title">Clostridium tetani</div>
          <div className="media-link-description">
            Lichtmikroskopischer Nachweis von Clostridium tetani.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/risus_sardonicus2.png" alt=""/>
          <div className="media-link-title">Risus sardonicus</div>
          <div className="media-link-description">
            Krämpfe der Fazialismuskulatur im Rahmen einer Tetanusinfektion werden
            als Risus sardonicus bezeichnet.Quelle:
            http://fce-study.netdna-ssl.com/2/images/upload-flashcards/85/13/94/4851394_m.png
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/risus_sardonicus.png" alt=""/>
          <div className="media-link-title">Trimus</div>
          <div className="media-link-description">
            Verkrampfung der Kaumuskulatur mit Kieferklemme werden bei einer
            Tetanusinfektion als Trismus
            bezeichnet.Quelle:&nbsp;http://jamanetwork.com/journals/jamaneurology/fullarticle/802647
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/opistotonus.png" alt=""/>
          <div className="media-link-title">Opisthotonus</div>
          <div className="media-link-description">
            Dorsalflexion des Kopfes mit Lordose der Wirbelsäule bei der
            Tetanusinfektion werden als Opsthotonus bezeichnet. Quelle:
            hhttp://bestpractice.bmj.com/best-practice/monograph/220/resources/image/bp/3.html
          </div>
        </div>
      </div>
    </div>;
    <div id="mykosen" className="chapters">
      <div className="chapterTitle">
        <h3>Mykosen</h3>
        <hr />
      </div>
      <div className="content-block">
        <div>
          <p>
            <span style={{ textDecoration: "underline" }}>Candidiasis</span>
          </p>
          <p>
            Die Candidiasis, oder auch <strong>Soor</strong> genannt, wird durch{" "}
            <strong>Candida albicans</strong> verursacht. Dies ist ein ubiquitär
            vorkommender Pilz der in Hefe oder der virulenten Hyphenform wächst.
            Candida albicans ist ein normaler Kommensale der Mundhöhle, des
            Gastrointestinaltraktes, des Rektums und der Vagina. Unter normalen
            Umständen ist er nicht in der Lage eine Infektion zu verursachen. Liegt
            jedoch eine Immunschwäche, zum Beispiel bei Zytostase, AIDS oder eine
            konsumierende Erkrankung vor, kann eine endogene Infektion hervorgerufen
            werden. Auch eine Intrapartale Übertragung auf das Neugeborene ist
            möglich.
          </p>
        </div>
        <p>
          <span className="startGallery" data-gallery-item={1}>
            <img src="thumbs/candida_albicans.png" alt="Candina Albicans" />
          </span>
        </p>
        <div>
          <br />
          Klinik der Candidiasis:
          <ul>
            <li>
              Akute (pseudomembranöse oder erythematöse Form) oder chronische
              (hyperplastische, plaqueartige oder pseudomembranöse Form) Candidiasis
            </li>
            <li>
              Vor allem im Bereich des Gaumens (bei Prothesenträgern), der Zunge und
              des Planum buccale zu finden
            </li>
            <li>
              Häufig <strong>epimuköse, abwischbare weiße Beläge</strong>,
              Schleimhaut darunter wie „gezuckert“
            </li>
            <li>Umgebung der Beläge ist gerötet, Blutung beim Abwischen dieser</li>
            <li>Foetor ex ore</li>
            <li>Geschmacksveränderungen oder –verlust</li>
            <li>Brennen</li>
            <li>Juckreiz</li>
            <li>Dysphagie</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <span className="startGallery" data-gallery-item={2}>
              <img src="thumbs/candidiasis.png" alt="Candidiasis"/>
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            Zur Diagnosesicherung bei dem oben beschriebenen Krankheitsbild sollte
            der Pilz im<strong> Nativpräparat</strong> nachgewiesen und in einer{" "}
            <strong>Kultur</strong> angezüchtet werden.
          </p>
          <p>
            Die Therapie der Wahl ist eine lokale Applikation von{" "}
            <strong>Antimykotika</strong>, wie Nystatin oder Imidazolpräparaten, in
            Form von Salben oder Mundspülungen. Bei einer systemischen Infektion
            kann Fluconazol verabreicht werden.
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ textDecoration: "underline" }}>Aspergillose</span>
          </p>
          <p>
            Die Aspergillose wird durch <strong>Aspergillus fumigatus</strong>, den
            "Schimmelpilz", verursacht. Dies ist ein ubiquitär vorkommender und sehr
            resistenter keim, der in Hefe- oder Schimmelform wachsen kann. Er ist
            ein fakultativ-pathogener Erreger, da gesunde Menschen normalerweise
            nicht erkranken. Übertragen wird er in der Regel durch Inhalation
            infektiöser Sporen.
          </p>
          <p>
            <span className="startGallery" data-gallery-item={3}>
              <img
                src="thumbs/aspergillus_fumigatus.png"
                alt="Aspergillus fumigatus auf einer Zellkultur"
              />
            </span>
          </p>
          <p>
            <span className="startGallery" data-gallery-item={4}>
              <img
                src="thumbs/aspergillom.png"
                alt="Aspergillom der linken Kieferhöhle"
              />
            </span>
          </p>
          <p>
            Die klinische Symptomatik der Aspergillose ist abhängig von der
            Ausbreitung und dem Krankheitsstadium.
          </p>
          <ul>
            <li>
              Nicht invasive Aspergillose (Aspergillom = „Pilzball“)
              <ul>
                <li>
                  Kann Nasennebenhöhlen, Emphysemblasen und Tbc-Kavernen ausfüllen
                </li>
                <li>Typischerweise nur eine Seite befallen</li>
                <li>
                  meist Zufallsbefund, evtl. eitrige Sekretion, Nasenbluten,
                  Druckgefühl
                </li>
                <li>
                  in die Kieferhöhle überpresstes Wurzelfüllmaterial (ZnO/Eugenol
                  Basis + Kortikoide) dient als Nährboden für den Pilz
                </li>
                <li>
                  Makropatho: grünlich-schwarzer Stein, der aus nekrotischen
                  Pilzmassen und aus verstoffwechseltem Calcium besteht
                </li>
                <li>Prognose: keine Langzeitfolgen</li>
              </ul>
            </li>
            <li>
              Invasive Aspergillose:
              <ul>
                <li>Vorwiegend bei Immunsupprimierten</li>
                <li>Pulmonal oder systemisch-disseminiert</li>
                <li>
                  Affinität zu Blutgefäßen führt gerne zu hämorrhagischen Nekrosen
                </li>
                <li>Nach Candidose die zweithäufigste invasive Mykose</li>
                <li>
                  Streuung per continuitatem oder hämatogen, sodass eine
                  extrapulmonale Aspergillose mit Absiedlung in verschiedenen
                  Organen und entsprechender Klinik entsteht<br />
                  <ul>
                    <li>In 80% der Fälle wird A. fumigatus isoliert</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Mykotoxikose entsteht durch die Aufnahme von sekundären
              Stoffwechselprodukten aus Schimmelpilzen. Wirkungen der Mykotoxine
              sind: <br />
              <ul>
                <li>karzinogen</li>
                <li>neruotoxisch</li>
                <li>immunsuppressiv</li>
                <li>mutagen</li>
                <li>teratogen</li>
                <li>hepatotoxisch oder nephrotoxisch</li>
                <li>allergische Reaktionen</li>
              </ul>
            </li>
          </ul>
          <p>
            Bei der Diagnostik erfolgt zunächst eine Bildgebung mittels
            Röntgen-Thorax, DVT oder CT. Der Befund kann biopsiert werden und
            serologisch können Antigen und Antikörper nachgewiesen werden. Zur
            Diagnosesicherung erfolgt ein{" "}
            <strong>mikroskopischer Erregernachweis</strong> oder unter kultureller
            Anzucht.
          </p>
          <p>
            <span className="startGallery" data-gallery-item={5}>
              <img
                src="thumbs/aspergillom2.png"
                alt="Aspergillom der linken Kieferhöhle im CT"
              />
            </span>
          </p>
          <p>
            Die Therapie einer Schimmelpilz-Allergie ist zunächst die{" "}
            <strong>Expositionsvermeidung</strong> oder eine{" "}
            <strong>Desensibilisierung</strong>. Ein Aspergillom sollte immer{" "}
            <strong>chirurgisch</strong> entfernt und<strong>
              {" "}
              Amphotericin B
            </strong>{" "}
            intravenös verabreicht werden. Bei einer invasiven Aspergillose kann
            Amphotericin B mit eventuell Flucytosin und Azol-Antimykotika gegeben
            werden.
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ textDecoration: "underline" }}>Kryptokokkose</span>
          </p>
          <p>
            Die Kryptokokkose wird durch <strong>Cryptococcus neoformans</strong>{" "}
            verursacht. Dies ist ein grampositiver, bekapselter Hefepilz. Er ist
            ubiquitär verbreitet und kommt gehäuft vor in Fäkalien von Tauben und
            Papageien. Die Kryptokokkose ist eine{" "}
            <strong>seltene, opportunistische Pilzerkrankung</strong>, die bei einer
            zellulären Abwehrschwäche (z.B. HIV, malignen Tumoren, Chemotherapie)
            auftritt. Die Infektion findet durch die Einatmung von erregerhaltigen{" "}
            <strong>Stäuben von Vogelkot</strong> statt. Die Inkubationszeit dauert
            mehrere Wochen bis Monate.
          </p>
          <p>
            <span className="startGallery" data-gallery-item={7}>
              <img
                src="thumbs/kryptokokkus.png"
                alt="Cryptococcus neoformans lichtmikroskopisch vergörßert auf einer Zellkultur."
              />
            </span>
          </p>
          <p>Klinisch zeigen sich folgende Symptome :</p>
          <ul>
            <li>Pulmonale, zerebrale und mukokutane Manifestationen</li>
            <li>
              Bei Abwehrschwäche zunächst milde, granulomatöse Pneumonie,
              anschließend rasche Hämatogene Dissemination
            </li>
            <li>
              Aufgrund eines ausgeprägten Neurotropismus Absiedlung im ZNS mit Folge
              einer akuten oder chronischen (Meningo-)Enzephalitis
            </li>
          </ul>
          <p>
            Zur Diagnosesicherung sollte ein{" "}
            <strong>direkter Erregernachweis</strong> durch eine Anzucht in
            Spezialmedien erfolgen. Ein direkter Erregernachweis ist auch
            mikroskopisch aus Liquor im Tusche-Präparat möglich. Histologisch kann
            dieser Pilz nach Giemsa- bzw. Mucicarminfärbung dargestellt werden.
          </p>
          <p>
            Als Therapie der Kryptokokkose wird{" "}
            <strong>Amphotericin B und 5-Fluorocytosin</strong> über mehrere Wochen
            empfohlen. Immunsupprimierte Patienten sollten eine lebenslange
            Rezidivprophylaxe mit Fluconazol einnehmen.
          </p>
        </div>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/candida_albicans.png" alt=""/>
          <div className="media-link-title">Candida albicans</div>
          <div className="media-link-description">
            Mikroskopische Aufnahme des Pilzes Candida albicans.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/candidiasis.png" alt=""/>
          <div className="media-link-title">Candida albicans</div>
          <div className="media-link-description">
            Weißlich abwischbarer Belag auf der Schleimhaut. Darunter ist die Haut
            wie "gezuckert".
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/aspergillus_fumigatus.png" alt=""/>
          <div className="media-link-title">Aspergillose</div>
          <div className="media-link-description">
            Aspergillus fumigatus auf einer Zellkultur.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/aspergillom.png" alt=""/>
          <div className="media-link-title">Aspergillose</div>
          <div className="media-link-description">
            Aspergillom der linken Kieferhöhle.
          </div>
        </div>
        <div data-media-id={5} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/aspergillom2.png" alt=""/>
          <div className="media-link-title">Aspergillom</div>
          <div className="media-link-description">
            Aspergillom der linken Kieferhöhle im CT.
          </div>
        </div>
        <div data-media-id={6} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/aspergillom.png" alt=""/>
          <div className="media-link-title">Aspergillom</div>
          <div className="media-link-description">
            Aspergillom in der linken Nasenhaupthöhle im CT.
          </div>
        </div>
        <div data-media-id={7} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="images/klinik.png" alt=""/>
          </div>
          <img src="images/kryptokokkus.png" alt=""/>
          <div className="media-link-title">Kryptokokkose</div>
          <div className="media-link-description">
            Cryptococcus neoformans lichtmikroskopisch vergörßert auf einer
            Zellkultur.
          </div>
        </div>
      </div>
    </div>;
  </div>

);
}

export default Spezifische_infektionen;
