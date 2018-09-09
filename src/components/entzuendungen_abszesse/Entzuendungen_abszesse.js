import React from "react";

function Entzuendungen_abszesse(props) {
  return (
    <div>
      <div id="aetiologie" className="chapters">
        <div className="chapterTitle">
          <h3>Ätiologie</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Jeder das physiologische Maß übersteigende Reiz kann eine Entzündung
            auslösen. Es gibt{" "}
            <strong>physikalische, chemische und biologische Reize</strong>. Der
            Reiz kann in einm umschriebenen Gebiet oder systemisch auftreten.
          </p>
          <p>
            Eine Infektion kann durch ein{" "}
            <strong>aktives oder passives Eindringen</strong> von Erregern
            entstehen. Nach dem Eindringen haften sie an Zelloberflächen an und
            vermehren sich in dem Wirt.
          </p>
          <p>
            Zervikofazialer (Weichteil-)Infektionen bestehen in den meisten
            Fällen aus einer <strong>Mischflora</strong>, die sich aus Folgenden
            Erregern zusammensetzt:
          </p>
          <table
            className="table table-bordered table-striped"
            style={{ fontWeight: "bold" }}
          >
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>Gram +</td>
                <td>Gram -</td>
              </tr>
              <tr>
                <td>Aerobe Kokken</td>
                <td>Staphylokokken Streptokokken</td>
                <td>Neisserien</td>
              </tr>
              <tr>
                <td>Aerobe Stäbchen</td>
                <td>Corneybakterien</td>
                <td>
                  Haemophilus influenza E. Coli Klebsiella pneumonia Serratia
                  Enterobacter Proteus mirabillis Pseudomonas aeroginosa
                </td>
              </tr>
              <tr>
                <td>Anaerobe Kokken</td>
                <td>Peptokokken Peptostreptokokken</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Anaerobe Stäbchen</td>
                <td>Actinomyces israelii</td>
                <td>
                  Prevotella Bakteroides Fusobakterium nucleatum Porphyromonas
                  gingivalis
                </td>
              </tr>
              <tr>
                <td>Anaerobe Spirochäten</td>
                <td>&nbsp;</td>
                <td>Actino bacillus actinomycetem comitans Treponema</td>
              </tr>
            </tbody>
          </table>
          <p>
            <br />
            Weichteilinfektionen im Kopf/Halsbereich können dentogene und nicht
            dentogene Ursachen haben. In etwa <strong>93%</strong> sind die{" "}
            <strong>Zähne die Ursache</strong>. Meistens handelt es sich dann um
            aerobe/anaerobe <strong>Mischinfektionen</strong>.
          </p>
          <ul>
            <li>
              Dentogene Ursachen sind:<br />
              <ul>
                <li>Parodontitis apicalis</li>
                <li>Parodontitis marginalis</li>
                <li>Pericoronitis (Dent. diff.)</li>
                <li>Zysten</li>
                <li>Radix relicta</li>
                <li>Post extractionem</li>
              </ul>
            </li>
            <li>
              Nicht dentogene Ursachen sind:<br />
              <ul>
                <li>Spritzenabzess</li>
                <li>Operationswunde</li>
                <li>Bruchspaltabszess</li>
                <li>Karzinome</li>
                <li>Furunkel, Karbunkel</li>
                <li>Fremdkörper</li>
                <li>Herpes</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="links" />
      </div>
      <div id="symptome" className="chapters">
        <div className="chapterTitle">
          <h3>Symptome</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>Lokale Symptome einer Entzündung sind:</p>
          <ul>
            <li>
              <strong>Rötung</strong>
            </li>
            <li>
              <strong>Überwärmung</strong>
            </li>
            <li>
              <strong>Schwellung</strong>
            </li>
            <li>
              <strong>Schmerz</strong>
            </li>
            <li>
              <strong>eingeschränkte Funktion</strong>
            </li>
          </ul>
          <p>
            Weitere Entzündungszeichen sind Fieber, Leukozytose und BSG
            Erhöhung. <br />
            <strong>Perkussions- und Aufbissschmerz</strong> deuten auf eine
            dentogene Ursache hin. Ist die Kaumuskulatur infiltriert, treten
            häufig <strong>Mundöffnungsbehinderungen</strong> auf.&nbsp; Weitere
            Symptome können <strong>Schluckbeschwerden</strong> bis hin zur{" "}
            <strong>Atemnot</strong> sein, was auf eine systemische Ausbreitung
            hinweist. <br />
            <br />
          </p>
          <p>
            <span className="startGallery" data-gallery-item={2}>
              <img
                src="thumbs/butoi_a._230277_d01_2014.06.07-02.png"
                alt="Einseitige LKG Spalte Galerie"
              />
            </span>
          </p>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/butoi_a._230277_d01_2014.06.07-02.png" />
            <div className="media-link-title">Entzündungszeichen</div>
            <div className="media-link-description">
              Klassiche Entzündungszeichen bei einem submandibulären Abszess:
              Rötung und Schwellung. Außerdem gab der Patient Schmerzen an und
              die Haut war überwärmt.
            </div>
          </div>
        </div>
      </div>
      <div id="einteilungen" className="chapters">
        <div className="chapterTitle">
          <h3>Einteilungen</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Entzündungen im Kopf-Hals-Bereich werden, unabhängig von ihrer
            Ursache, generell in{" "}
            <strong>Weichteilinfektionen und Osteomyelitiden</strong>{" "}
            unterteilt.
          </p>
          <p>Man unterscheidet bei den Weichteilinfektionen:</p>
          <ul>
            <li>Unspezifische Infektionen ((Logen-)Abszess, Phlegmone)</li>
            <li>Spezifischen Infektionen (LUES, Tbc, Actinomykose)</li>
          </ul>
          <p>
            <br />
            Bei den Osteomyelitiden gibt es drei Verlaufsformen der Entzündung:
          </p>
          <ul>
            <li>Akut</li>
            <li>Chronisch</li>
            <li>Sonderformen</li>
          </ul>
        </div>
        <div className="links" />
      </div>
      <div id="logenabszesse" className="chapters">
        <div className="chapterTitle">
          <h3>Logenabszesse</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Therapie aller Abszesse ist die<strong>
              {" "}
              Spaltung und Drainage
            </strong>{" "}
            am „tiefsten Punkt“!
          </p>
          <p>
            <br />
            Im Kopf-Hals-Bereich gibt es verschiedene Subtypen von Abszessen. Im
            folgenden sind einige aufgeführt.
          </p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>Perimandibulär</span>
          </p>
          <p>
            Der perimandibuläre Abszess beginnt lateral des Unterkiefers und
            umgreift ihn nach medial. Die Ursache ist meist dentogen. Etwa 40%
            aller Abszesse sind perimandibuläre Abszesse. <br />Die Leitsymptome
            sind:
          </p>
          <ul>
            <li>
              <strong>Unterkieferrand nicht tastbar</strong>
            </li>
            <li>Mäßige Schluckbeschwerden</li>
            <li>Kieferklemme</li>
          </ul>
          <p>
            Die Therapie der Wahl ist die Inzision von extraoral und die
            Extraktion des schuldigen Zahnes.
          </p>
          <p>
            <span className="startGallery" data-gallery-item={2}>
              <img
                src="thumbs/perimandibulärerabszess1.png"
                alt="Einseitige LKG Spalte Galerie"
              />
            </span>
          </p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>Submandibulär</span>
          </p>
          <p>
            Der submandibuläre Abszess ist lokalisiert zwischen dem M.
            mylohyoideus, der Fascia colli superficialis und dem vorderen Bauch
            des M. digastricus. Etwa 20% aller Abszesse sind submandibuläre
            Abszesse. <br />Die Leitsymptome sind:
          </p>
          <ul>
            <li>Unterkieferrand tastbar</li>
            <li>mäßige Schluckbeschwerden</li>
            <li>Mundöffnung möglich</li>
          </ul>
          <p>
            Bei diesem Abszess sollte immer auf eine Mundbodenbeteiligung
            geachtet werden, da es im schlimmsten Fall zu einer akuten
            Anschwellung mit <strong>Erstickungstod</strong> kommen kann.
          </p>
          <p>&nbsp;</p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>Paramandibulär</span>
          </p>
          <p>
            Der paramandibuläre Abszess befindet sich lateral des Unterkiefers.
            Hier ist der Unterkieferrand noch tastbar. Etwa 10% aller Abszesse
            sind paramandibuläre Abszesse.
          </p>
          <p>&nbsp;</p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              Pterygomandibulärer Abszess
            </span>
            <br />
            Der Pterygomandibuläre Abszess ist lokalisiert zwischen dem M.
            pterygoideus medialis und der Unterkieferinnenseite.<br />Die
            Leitsymptome sind:
          </p>
          <ul>
            <li>
              <strong>Schluckbeschwerden!</strong>
            </li>
            <li>
              <strong>Mundöffnungseinschränkung!</strong>
            </li>
            <li>geringe äußere Weichteilschwellung</li>
            <li>
              <strong>Arcus palatoglossus geschwollen!</strong>
            </li>
            <li>Druckdolenz am Kieferwinkel und retromandibulär</li>
          </ul>
          <p>
            Die Therapie besteht in der Regel aus einer extraoralen Inzision
            zwei Querfinger breit (3-4cm) kaudal des tastbaren Unterkieferrandes
            und in Höhe des Kieferwinkels. Es werden Röhrchen eingelegt und
            anschließend regelmäßig über diese gespült. Eine Abzesseröffnung von
            intraoral erfolgt nur in seltenen Fällen. Um die eingeschränkte
            Mundöffnung zu therapieren sollten bei Bedarf adjuvant Spatelübungen
            und Mikrowellenbehandlungen durchgeführt werden. <br />&nbsp;In
            Abhängigkeit vom Allgemeinzustand und von der Tendenz zur
            Ausbreitung sind Antibiotika indiziert.
          </p>
          <p>&nbsp;</p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              Massetericomandibulärer Abszess
            </span>
            <br />
            Der massetercomandibuläre Abszess ist zwischen dem M. masseter und
            der Außenfläche des Unterkiefers lokalisiert. <br />Die Symptome
            sind:
          </p>
          <ul>
            <li>Rötung und Druckdolenz der Masseterregion</li>
            <li>nicht verschiebliche Schwellung e.o.</li>
            <li>
              der Unterkieferrand ist meistens (wegen Infiltrat/Ödem) nicht
              tastbar
            </li>
            <li>Kieferklemme</li>
          </ul>
          <p>Die Therapie ist folgende:</p>
          <ul>
            <li>
              Intraorale Inzision im lateralen Bereich der intermaxillären Falte
            </li>
            <li>Drainage</li>
            <li>Spülungen</li>
            <li>
              In Abhängigkeit vom Allgemeinzustand und von der Tendenz zur
              Ausbreitung sind Antibiotika indiziert
            </li>
            <li>
              Therapie des schuldigen Zahnes -&gt; meist Dentito difficilis der
              unteren Weisheitszähne
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              Submentaler Abszess/Kinnabszess
            </span>
            <br />
            Der submentale Abszess ist im ventralen Unterkieferbereich
            lokalisiert und wird begrenzt durch den M. mentalis. <br />Die
            Symptome sind:
          </p>
          <ul>
            <li>Rötung und Druckdolenz des Kinns</li>
            <li>
              meist mittig liegende nicht verschiebliche Schwellung über dem
              Kinn
            </li>
            <li>Intraorale Schwellung des Mundvorhofes</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              Sublingualer Abszess
            </span>
            <br />
            Sublinguale Abszesse liegen zwischen der Mundbodenschleimhaut und M.
            mylohyoideus. Medial ist die Zungenmuskulatur und ventral, sowie
            lateral ist der Unterkiefer lokalisiert.<br />Die Symptome sind:
          </p>
          <ul>
            <li>
              <strong>angehobener Mundboden</strong>
              , glasige Rötung der Mundbodenschleimhaut
            </li>
            <li>
              <strong>kloßige Sprache</strong> durch Verdrängung der Zunge zur
              gesunden Seite
            </li>
          </ul>
          <p>
            Therapiert wird der sublinguale Abszess durch eine Inzision in
            Mundbodennähe des Alveolarkammes. Dabei muss beachtet werden, dass
            lateral dicht am Periost des unteren 8’ers der N. lingualis
            verläuft! <br />Außerdem besteht bei sublingualen Abszessen immer
            die Gefahr einer postoperativen Schwellung mit Atemwegsverlegung!
          </p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              Temporaler Abszess
            </span>
            <br />
            Die Leitsymptome des temporalen Abszesses sind eine{" "}
            <strong>eingeschränkte Mundöffnung</strong> durch Infiltration der
            Kaumuskulatur und das<strong> Sanduhrenphänomen</strong> an der
            Schläfe. <br />Bei diesem Abszess besteht immer die Gefahr der
            Orbitabeteiligung, eines Hirnabszesses, der Beteiligung des
            Parapharyngealraumes, des Retropharyngealraumes oder ein
            Paratonsillärabszess, sowie die Gefahr der absteigenden Infektion
            mit Folge Mediastinitis und Thoraxempyem bis zum Exitus. Außerdem
            besteht die Gefahr einer aufsteigende Infektion über<strong>
              {" "}
              V. angularis in Richtung des Sinus cavernosus
            </strong>, die zu einer Thrombose und letztendlich zum Exitus führen
            kann.
          </p>
          <p>
            Die Therapie besteht auch hier aus einer extra- und intraoralen
            inzision des Abszesses.
          </p>
          <p>
            <span className="startGallery" data-gallery-item={3}>
              <img
                src="thumbs/sanduhrenphänomen.png"
                alt="Einseitige LKG Spalte Galerie"
              />
            </span>
          </p>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/parotisabszess.png" />
            <div className="media-link-title">Abszess Glandula parotis</div>
            <div className="media-link-description">
              Abszess der Glandula parotis.
            </div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/perimandibul%C3%A4rerabszess1.png" />
            <div className="media-link-title">Perimandibulärer Abszess</div>
            <div className="media-link-description">
              Perimandibulärer Abszess
            </div>
          </div>
          <div data-media-id={3} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/sanduhrenph%C3%A4nomen.png" />
            <div className="media-link-title">Abszess der Temporalisloge</div>
            <div className="media-link-description">Temporaler Abszess</div>
          </div>
          <div data-media-id={4} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/perimandibul%C3%A4rerabszess2.png" />
            <div className="media-link-title">
              Perimandibulärer Abszess postoperativ
            </div>
            <div className="media-link-description">
              Eröffneter perimandibulärer Abszess mit Einlage von 3 Röhrchen,
              welche durch Sicherheitsnadeln fixiert sind.
            </div>
          </div>
          <div data-media-id={5} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/fossacanina_1.png" />
            <div className="media-link-title">Abszess der Fossa canina</div>
            <div className="media-link-description">
              Abzess der Fossa canina
            </div>
          </div>
          <div data-media-id={6} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/submandibul%C3%A4rerabszess.png" />
            <div className="media-link-title">Submandibulärer Abszess</div>
            <div className="media-link-description">
              Submandibulärer Abszess
            </div>
          </div>
        </div>
      </div>
      <div id="phlegmone" className="chapters">
        <div className="chapterTitle">
          <h3>Phlegmone</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Eine Phlegmone ist definiert als eine wässrig bis eitrige, sich{" "}
            <strong>diffus ausbreitende Weichteilinfektion</strong>. <br />Die
            verursachenden Erreger sind häufig <strong>Streptokokken</strong>{" "}
            und seltender Staphylokokkus aureus. Meistens treten sie über{" "}
            <strong>kleine Wunde der Haut</strong> in das Weichgewebe ein, um
            sich dann "schrankenlos" auszubreiten.{" "}
          </p>
          <p>
            Therapiert wird die Phlegmone in erster Linie mit{" "}
            <strong>Antibiotika</strong>. Eine chirurgische Behandlung erfolgt
            nur, wenn es zu einer Abzessbildung kommt.
          </p>
          <p>&nbsp;</p>
          <p>
            <span className="startGallery" data-gallery-item={7}>
              <img
                src="thumbs/phlegmone_1.png"
                alt="Einseitige LKG Spalte Galerie"
              />
            </span>
          </p>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/phlegmone_1.png" />
            <div className="media-link-title">Phlegmone</div>
            <div className="media-link-description">
              Phlegmonöse Entzündung des Mittelgesichts.
            </div>
          </div>
        </div>
      </div>
      <div id="osteomyelitis" className="chapters">
        <div className="chapterTitle">
          <h3>Osteomyelitis</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Die Osteomyelitis ist definiert als eine{" "}
            <strong>infektiöse Entzündung des Knochenmarks</strong>. Sie kann
            infektiös (Bakteriell, Aktinomykose), mechanisch (okklusale
            Traumata), physikalisch (ionisierende Strahlen, ORN) oder
            chemisch/Medikamentös (Phosphor/Bisphosphonate, Kortison,
            monoklonale Antikörper) bedingt sein.
          </p>
          <p>
            <br />
            Die Ursachen hierfür können sein:
          </p>
          <ul>
            <li>Devitale Zähne</li>
            <li>Schwere Parodontalerkrankungen</li>
            <li>Periapikale Parodontitis</li>
            <li>Zahnextraktionen im akut entzündlichen Zustand</li>
            <li>
              Postoperativ (iatrogene Kontamination)
              <ul>
                <li>56-90%</li>
              </ul>
            </li>
            <li>Offene Frakturen (zahntragende Kieferabschnitte)</li>
            <li>Radiatio (Osteoradionekrose)</li>
            <li>Fortgeleitet (Sinusitis maxillaris)</li>
            <li>
              Hämatogen („Metastatisch“)
              <ul>
                <li>3-5%</li>
              </ul>
            </li>
          </ul>
          <p>
            <br />
            Prädisponierende Faktoren für eine Osteomyelitis sind:
          </p>
          <ul>
            <li>
              schlechte Durchblutung des Knochens (Folge: Red. Immunabwehr)
            </li>
            <li>Diabetes mellitus</li>
            <li>Leber/Nierenerkrankungen</li>
            <li>Malignome</li>
            <li>Nikotin- und Alkoholkonsum</li>
            <li>Immunkompromittierung (angeboren, erworben, therapeutisch)</li>
          </ul>
          <p>
            <br />
            Im Keimspektrum befinden sich meistens{" "}
            <strong>Mischpopulationen aus aeroben und anaeroben Keimen</strong>.
            Des Weiteren können Staphylokokkus aureus, Enterobakterien,
            Enterokokken, Klebsiellen, Pseudomonas aeroguinosa, Haemophilus
            influenzae oder Actinomyces israelii die verursachenden Erreger
            sein.<br />Die Entzündung spielt sich vor allem im Mark und
            Gefäßbindegewebe (-myelitis) ab. Die "Havers-" und
            "Volkmann-Kanäle", sowie das Periost sind betroffen. Das Hartgewebe
            ist nur indirekt von der Entzündung betroffen. <br />Durch die
            Entzündungsreaktion kommt es zu{" "}
            <strong>
              Gewebeeinschmelzungen mit Abszessbildung und Knochennekrosen
            </strong>{" "}
            (Sequester). Dabei kommt es zum Absterben von Osteoblasten und
            Vermehren der Osteoklasten, sodass Knochensubstanz resorbiert wird
            (Lakune). Teilweise kommt es zu eienr Neubildung von
            Bindegewebsfasern und Periostproliferationen. <br />
            <br />
            Die Diagnostik beinhaltet:
          </p>
          <ul>
            <li>Röntgen in 2 Ebenen, DVT, CT</li>
            <li>
              „wolkiges Aussehen“ = Wechsel von osteolytischen Arealen und
              Sklerosierungen
            </li>
            <li>99m Technetium Szintigraphie zeigt die Entzündungsaktivität</li>
            <li>
              Mikrobiologie: Entnahme unter sterilen Kautelen (Mundflora!!!)
            </li>
            <li>Labordiagnostik: Leukos, BSG, CRP, Keimdiagnostik</li>
          </ul>
          <p>
            <br />
            Die Vorstufe der Osteomyelitis ist die{" "}
            <strong>Alveolitis/Dry socket</strong>. Tritt sie auf, sollte sie
            durch CHKM-Streifen, H2O2 Spülungen oder Jodoformtamponaden
            therapiert werden.
            <br />
            <br />
          </p>
          <p>
            <br />
            Osteomyelitiden wird wie folgt eingeteilt:
          </p>
          <p>
            <br />
            <strong>a) Akute Osteomyelitis</strong>
          </p>
          <p>
            Die akute Osteomyelitis ist heute ein seltenes Erscheinungsbild
            durch eine frühzeitige Antibiose. Die Symptome sind:
          </p>
          <ul>
            <li>Fieber</li>
            <li>Schmerzen</li>
            <li>Knochennekrose</li>
            <li>Zahnlockerung</li>
            <li>marginaler Eiteraustritt</li>
            <li>Spontanfraktur möglich</li>
            <li>Labor: Leukozytose, BSG und CRP-Erhöhung</li>
          </ul>
          <p>
            Die Therapie besteht aus einer i.v. Antibiose. Bei einem
            rechtzeitigem Therapiebeginn kann ein restitutio ad integrum
            erreicht werden.
          </p>
          <p>
            <br />
            <strong>b) Akute eitrige Osteomyelitis</strong>
          </p>
          <p>
            Die aktue eitrige Osteomyelitis entsteht meist aufgrund einer
            Pulpitis /Parodontitis.&nbsp; Die Ausdehnung kann lokalisiert (meist
            Maxilla) oder diffus (Mandibula) sein.
          </p>
          <p>Die Symptome sind:</p>
          <ul>
            <li>Fieber</li>
            <li>BSG Erhöhung</li>
            <li>Schmerzen im Bereich des Alveolarfortsatzes</li>
            <li>Perkussionsempfindliche Zähne</li>
            <li>Zahnlockerungen</li>
            <li>
              Parästhesie oder Anästhesie (wenn mandibulärer Kanal betroffen)
            </li>
          </ul>
          <ul>
            <li>
              Pathologie:
              <ul>
                <li>
                  durch Destruktion des Knochengewebes und erhöhten Druck im
                  Knochenmark kommt es zur Abnahme der Vaskularisation
                </li>
                <li>
                  eine Ausbreitung erfolgt über die Havers Kanäle zur Kortikalis
                  und zum Periost, dadurch kommt es zu einer zusätzlichen
                  Abnahme der Vaskularisation, verbunden mit einer lokale
                  Ischämie und irreversiblen Knochennekrose
                </li>
              </ul>
            </li>
            <li>
              Verlauf: nach 1-2 Wochen Ausbildung von Resorptionslakunen mit
              Sequesterbildung
            </li>
            <li>
              Therapie:
              <ul>
                <li>Medikamentös durch Antibiose</li>
                <li>Chirurgisch: Inzision</li>
              </ul>
            </li>
          </ul>
          <p>
            <br />
            <strong>c) Chronische Osteomyelitis</strong>
          </p>
          <p>
            Die chronische Osteomyelitis ist am häufigsten im Unterkiefer
            lokalisiert, da dort kompakter Knochen und eine schlechte Perfusion
            vorhanden ist. Nur selten ist sie im Oberkiefer lokalisiert. In
            diesem Fall ist sie auf Alveolarfortsatz beschränkt und nur selten
            kommt es Sequestrieren. Insgesamt hat der Oberkiefer bessere
            Heilungschancen, als der Unterkiefer.<br />In der Regel hat die
            chronische Osteomyelitis einen <strong>„stummen“ Verlauf</strong>{" "}
            mit Infiltraten. Erst später kommt es zu:
          </p>
          <ul>
            <li>Abszessen</li>
            <li>Sequestern</li>
            <li>Fistelbildung</li>
            <li>LK-Schwellung</li>
            <li>selten Rubor</li>
            <li>unregelmäßig Dolor</li>
            <li>selten Calor</li>
            <li>gelegentlich Tumor</li>
            <li>
              VINCENT – Syndrom: Anästhesie im Ausbreitungsgebiet des N. V. 3
            </li>
          </ul>
          <p>
            Das Labor ist meist unauffällig. Sonderformen sind Periostitis mit
            Sequesterbildung oder proliferative Form mit überschießender
            Knochenproduktion mit zum Teil mehrjährigen Verläufen. Die Therapie
            besteht aus einer i.v. Antibiose, einer
            Excochleation/Sequesterotomie, sowie einer Dekortikationen und
            Resektion.
          </p>
          <p>
            <br />
            <strong>d) Chronisch eitrige Osteomyelitis</strong>
          </p>
          <p>
            Die chronsiche eitrige Osteomyelitis entsteht aus einer nicht
            heilenden akuten eitrigen Osteomyelitis (sekundär chronische OM).
            Alternativ kann sie auch direkt aus einer dentogenen Infektion
            (primär chronische Infektion) entstehen, was heutzutage häufiger vor
            kommt.<br />Die Symptome sind:
          </p>
          <ul>
            <li>geringe Schmerzen</li>
            <li>leichte Temperaturerhöhung</li>
            <li>geringe Leukozytose</li>
            <li>Wechsel von symptomarmen und symptomfreien Intervallen</li>
            <li>
              akute Exazerbationen i.S. einer akuten eitrigen Osteomyelitis
              möglich
            </li>
            <li>Knochenperforationen zur Mukosa und zur Haut möglich</li>
            <li>Parästhesie, Hypästhesie -&gt; Vincent Syndrom</li>
            <li>Resorption/Abstoßung von Sequestern (Röntgen)</li>
            <li>
              Umbauvorgänge/Knochenneubildung/Entmineralisierung (Röntgen)
            </li>
            <li>innere/äußere Fistelbildung</li>
          </ul>
          <p>
            Differentialdiagnostisch sollte man immer ein Osteosarkom
            auschließen!
          </p>
          <p>
            <br />
            <strong>e) Chronische, fokal sklerosierende Osteomyelitis</strong>
          </p>
          <p>
            Die chronische, fokal sklerosierende Osteomyelitis ist eine
            Sonderform der chronischen Osteomyelitis mit{" "}
            <strong>überschießend reaktiver Knochenneubildung</strong> im
            Gefolge einer Karies/Perikoronitis. Klinisch ist sie meist
            asymptomatisch und gewöhnlich ist sie auf einen Zahn lokalisiert. Am
            häufigsten kommt sie im Bereich des 1. Unterkiefermolar vor. Von der
            Erkrankung betroffen sind fast ausschließlich bei Jugendlichen bis
            zum 20. Lebensjahr.
          </p>
          <p>
            <br />
            <strong>f) Bisphosphonatassoziierte Kiefernekrose</strong>
          </p>
          <p>
            Bisphosphonatassiziierte Kiefernekrosen sind seit 2003 bekannt (Marx
            et al.). In der Regel tritt sie nach zahnärztlich-chirurgischen
            Maßnahmen auf, bei Patienten die Bisphosphonate des Amidtypes
            erhalten haben.<br />Die Symptome sind:
          </p>
          <ul>
            <li>
              <strong>nicht heilende Extraktionswunden</strong>
            </li>
            <li>„Wiederaufgehen“ von OP-Wunden</li>
            <li>Superinfektion bis zur Nekrose</li>
            <li>Spontanes Auftreten von freiliegendem Knochen</li>
          </ul>
          <p>
            Ein genauerer Hintergrund ist bisher nicht bekannt, vermutlich ist
            der Mechanismus auf die molekularer Ebene zurückzuführen. <br />Wichtig
            ist, dass vor&nbsp;Therapiebeginn mit Bisphosphonaten eine
            zahnärztliche Patientenvorstellung und entsprechende Fokussanierung
            vorgenommen wird.
          </p>
          <p>
            Die Therapieempfehlung nach Leitlinie ist eine angepasste{" "}
            <strong>Stufentherapie</strong>.
          </p>
          <p style={{ paddingLeft: 30 }}>
            1. Schritt: Ggf. Zahnextraktion, i.v. Antibiose, Debridement, Spül-
            oder Saugdrainage, Medikamenteneinlage<br />2. Schritt:
            Dekortikation<br />3. Schritt: Kontinuitätsresektion
          </p>
          <p>
            Bei einem unzureichenden Therapieergebnis kann adjuvant beim 2. und
            3. Schritt eine <strong>hyperbare Sauerstofftherapie</strong>{" "}
            durchgeführt werden. Sie besteht aus&nbsp;&nbsp; 5-10 Sitzungen
            präoperativ und&nbsp; 5-7-10 Sitzungen postoperativ.
          </p>
          <p>&nbsp;</p>
          <p>
            <span className="startGallery" data-gallery-item={8}>
              <img src="thumbs/bronj.png" alt="Einseitige LKG Spalte Galerie" />
            </span>
          </p>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/bronj.png" />
            <div className="media-link-title">
              Bisphosphonat-assoziierte Nekrose des Unterkiefers
            </div>
            <div className="media-link-description">
              Bisphosphonat-assoziierte Nekrose in regio 036 und 044-048.
            </div>
          </div>
        </div>
      </div>
      <div id="therapie" className="chapters">
        <div className="chapterTitle">
          <h3>Therapie</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>Allgemeines zur antibiotischen Therapie von Entzündungen:</p>
          <ul>
            <li>Gezielte antibiotische Therapie um Resistenzen zu vermeiden</li>
            <li>
              Bei akuter Infektion mit einem unbekannten Erreger sind
              Breitspektrumpenicilline Antibiotika der 1. Wahl, gezielte
              Antibiose nach Identifikation und Resistenzbestimmung des Keimes
            </li>
            <li>Clindamycin oder Makrolide bei Penicillinallergie</li>
            <li>
              Bei chronischen, therapierefraktären Infektionen kann es sich auch
              um Malignome handeln
            </li>
          </ul>
          <p>
            <br />
            Erkrankungen mit Erregerspektrum und (antibiotischer) Therapie
          </p>
          <table
            className="table table-bordered table-striped"
            style={{ fontWeight: "bold" }}
          >
            <tbody>
              <tr>
                <td>
                  <strong>
                    <span style={{ textDecoration: "underline" }}>
                      Erkrankung
                    </span>
                  </strong>
                </td>
                <td>
                  <strong>
                    <span style={{ textDecoration: "underline" }}>
                      Chirurgische Therapie
                    </span>
                  </strong>
                </td>
                <td>
                  <strong>
                    <span style={{ textDecoration: "underline" }}>Erreger</span>
                  </strong>
                </td>
                <td>
                  <strong>
                    <span style={{ textDecoration: "underline" }}>
                      Antibiotische Therapie
                    </span>
                  </strong>
                </td>
                <td>
                  <strong>
                    <span style={{ textDecoration: "underline" }}>Dauer</span>
                  </strong>
                </td>
              </tr>
              <tr>
                <td>Dentogener Logenabszess („Ludwig´s disease“)</td>
                <td>
                  Inzision unterhalb des P. m. und Drainage „Ubi pus, ibi
                  evacua“
                </td>
                <td>Aerobe und Anaerobe Mischflora</td>
                <td>
                  Clindamycin, Moxifloxacin, Vancomycin/Teicoplanin bei MRSA
                </td>
                <td>3 bis 14 Tage</td>
              </tr>
              <tr>
                <td>Phlegmone</td>
                <td>
                  Mehrfachinzisionen und Drainage im gesamten Ausbreitungsgebiet
                </td>
                <td>
                  Streptokokken (Phlegmone) Seltener: Staphylokokken,
                  Prevotellaspp. Fusobakterien Bacteroidesspp. Veillonellen
                  Peptostreptokokken
                </td>
                <td>
                  Clindamycin i.v., Penicillin G+ Metronidazol, Cephalosporin ½
                  + Metronidazol. Ggf. + Fosfomycin, Imipenem
                </td>
                <td>3 bis 14 Tage</td>
              </tr>
              <tr>
                <td>Akute Osteomyelitis</td>
                <td>
                  i.d.R. chirurgische Beseitigung der odontogenen Ursache bzw.
                  Osteomyelitis
                </td>
                <td>
                  Aerobe und Anaerobe Mischflora (Schwerpunkt : Anaerobier)
                </td>
                <td>
                  Penicillin V/G (+/- Metronidazol), Aminopenicillin +
                  Betalaktamase-Inhibitor, Clindamycin
                </td>
                <td>4 – 6 Wochen</td>
              </tr>
              <tr>
                <td>Chronische Osteomyelitis</td>
                <td>
                  Excochleation -&gt; Sequesterotomie -&gt; Dekortikation -&gt;
                  Kontinuitäts-resektion
                </td>
                <td>
                  Aerobe und Anaerobe Mischflora (Schwerpunkt : Anaerobier)
                </td>
                <td>
                  Penicillin V/G (+/- Metronidazol), Aminopenicillin +
                  Betalaktamase-Inhibitor, Clindamycin
                </td>
                <td>4 – 6 Wochen</td>
              </tr>
              <tr>
                <td>LUES</td>
                <td>Primär keine! Sekundär rekonstruktiv!</td>
                <td>Treponema pallidum</td>
                <td>1 x 2,4 Mio Einheiten Penicillin i.m. wöchentlich</td>
                <td>3 Wochen</td>
              </tr>
              <tr>
                <td>Tuberkulose</td>
                <td>Primär keine! Sekundär rekonstruktiv!</td>
                <td>Mycobakterium tuberculosis</td>
                <td>
                  Ethambutol, Pyrazinamid, Isoniazid, Rifampicin Streptomycin
                </td>
                <td>6 Monate</td>
              </tr>
              <tr>
                <td>Tetanus</td>
                <td>
                  Primär Keine! Chirurgische Versorgung der infizierten Wunde
                </td>
                <td>Clostridium tetani</td>
                <td>
                  Penicillin G (bakterizid) oder Metronidazol (bakteriostatisch)
                  + Toxin-Antikörpergabe
                </td>
                <td>Nachweis Kontrolliert unter intensiv med. Bed.</td>
              </tr>
              <tr>
                <td>Actinomykose (Cave: Mischinfektion)</td>
                <td>
                  Inzision, Drainage, Exkochleation, Sekundär rekonstruktiv!
                </td>
                <td>
                  Haupterreger: Actinomyces israelii (Stahlenpilz, anaerob)
                </td>
                <td>
                  Aminopenicillin + Betalaktamase-Inhibitor, Penicillin G/V +/-
                  Metronidazol, Aminopenicillin +/- Metronidazol
                </td>
                <td>Mindestens 4 Wochen</td>
              </tr>
              <tr>
                <td>Mykosen (Aspergillom, Soor, Dermatom.)</td>
                <td>Osteoplastische KH-Revision (Aspergillom)</td>
                <td>Candida albicans Aspergillus fumigatus</td>
                <td>Soor: Lokal: Econazol, Amphotericin B, Nystatin,</td>
                <td>5 - 7 Tage länger als Symptomende</td>
              </tr>
            </tbody>
          </table>
          <p>
            <span className="startGallery" data-gallery-item={1}>
              <img
                src="thumbs/abszess_extraoraler_zugang.png"
                alt="Perimandibulärer Abszess"
              />
            </span>
          </p>
          <div className="startGallery" data-gallery-item={1}>
            <img className="galleryPoster" src="thumbs/video0.png" />
            <p className="gallerieThumbDescription">Abszess</p>
            <img
              className="galleryPoster"
              src="thumbs/Play_experimentell.png"
            />
          </div>
          <div className="links">
            <div data-media-id={1} data-media-type="image">
              <div className="data-media-thumbnail">
                <img src="images/klinik.jpg" />
              </div>
              <img src="images/abszess_extraoraler_zugang.png" />
              <div className="media-link-title">Perimandibulärer Abszess</div>
              <div className="media-link-description">
                Von extraoral eröffneter perimandibulärer Abszess.
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="video">
            <div className="media-link-video-id">0</div>
            <div className="media-link-title">Abszess</div>
            <div className="media-link-description">Abszess</div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/abszess_extraoraler_zugang.png" />
            <div className="media-link-title">Perimandibulärer Abszess</div>
            <div className="media-link-description">
              Von extraoral eröffneter perimandibulärer Abszess
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entzuendungen_abszesse;
