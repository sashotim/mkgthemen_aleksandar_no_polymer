import React from 'react';

function Komplikationen(props) {
  return (
<div>
  <div id="zahnextraktion" className="chapters">
    <div className="chapterTitle">
      <h3>Komplikationen nach Zahnextraktion</h3>
      <hr />
    </div>;


    <div className="content-block">
    <p>
      Im folgenden Abschnitt werden einzelne wichtige mögliche Komplikationen bei
      Zahnextraktionen hervorgehoben.
    </p>;

    <p>&nbsp;</p>;

    <p>
      <span style={{ textDecoration: "underline" }}>1. Nervläsion</span>
    </p>;

    <p>
      Nervläsionen bei Zahnextraktionen treten am häufigsten am N. alveolaris
      inferior und N. lingualis auf.
    </p>;

    <p>Die Ursache für diese Schäden sind:</p>;

    <ul>
      <li>
        meistens Entfernung der unteren Weisheitszähne (Schnittführung, Ostektomie)
      </li>
      <li>Entfernung verlagerter und retinierter Zähne</li>
      <li>Insertion von Implantaten</li>
      <li>Wurzelspitzenresektion oder Wurzelrestentfernung</li>
      <li>Tumorresektion</li>
      <li>Osteosynthese von Frakturen</li>
      <li>Dysgnathieoperationen</li>
      <li>Injektion von Leitungsanästhesien</li>
      <li>Entfernung von Zysten</li>
    </ul>;

    <div className="startGallery" data-gallery-item={5}>
      <img
        className="galleryPoster"
        src="thumbs/video0.png"
        alt="Weisheitszahnextraktion"
      />
      <p className="gallerieThumbDescription">Weisheitszahnextraktion</p>
      <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
    </div>;

    <p>
      Klinisch stellen sich Schädigungen des N. lingualis dar durch
      Sensibilitätsdefizite der vorderen 2/3 der ipsilateralen Zungenhälfte,
      Geschmacksbeeinträchtigungen und Schwierigkeiten beim Sprechen.
    </p>;

    <p>
      Bei einer Schädigung des N. alveolaris inferior kommt es vor allem zu
      Sensibilitätsausfällen der Zähne und im Bereich der ipsilateralen Unterlippen-
      und Kinnregion. Durch den Gefühlsverlust kann es dann zu unbemerkten Austreten
      von Spiechel und Nahrungsbestandteilen und Verbrühungen durch den Verzehr zu
      heißer Speisen bzw. Getränke. Außerdem treten Gefühlsstörungen im Bereich der
      bukalen Gingiva in der Prämolaren- und Molarenregion auf.
    </p>;

    <p>
      Verletzungen des N. mentalis zeichnen sich ebenfalls durch
      Sensibilitätsausfälle im Berreich der Zähne und der ipsilateralen Unterlippen-
      und Kinnregion aus. Auch hier kann es, durch den Gefühlsverlust, zu
      unbemerkten Austritt von Speichel und Nahrungsbestandteilen sowie Verbrühungen
      durch den Verzehr zu heißer Speisen kommen.
    </p>;

    <p>Die Nervläsionen können nach Seddon klassifiziert werden:</p>;

    <ul>
      <li>
        Neurapraxie
        <ul>
          <li>Keine Strukturunterbrechung des Nervs</li>
          <li>Markscheidenzerfall und anschließende Regeneration</li>
          <li>
            bei elektorischer Erregbarkeit des distalen Nervenabschnitts
            vollständige Rückbildung
          </li>
          <li>Regenerationszeit abhängig von Länge der geschädigten Strecke</li>
        </ul>
      </li>
      <li>
        Axonotmesis
        <ul>
          <li>Selektive Konituitätsunterbrechung einzelner Axone</li>
          <li>äußere Kontinuität des Nervs erhalten</li>
          <li>
            Waller'sche Degeneration (Auflösung des Axons und der Markscheide distal
            der Läsion) des distalen Segments
          </li>
          <li>
            das endo-, peri- und epineurale Stützgerüst dient als Leitschiene für
            das Wachstum der geschädigten Axone, somit ist eine Reinnervation unter
            günstigen Voraussetzungen möglich
          </li>
        </ul>
      </li>
      <li>
        Neuotmesis
        <ul>
          <li>Komplette Durchtrennung des Nervens</li>
          <li>Spontane Regeneration äußerst selten</li>
          <li>häufig Neurombildung am proximalen Nervenstumpf</li>
        </ul>
      </li>
    </ul>;

    <div className="startGallery imageContainer" data-gallery-item={1}>
      <img src="thumbs/teilschädigung_nerv.png" alt="Axonotmesis" />
    </div>;

    <p>&nbsp;</p>;

    <p>Eine weitere gängige Klassifikation wurde von Sunderland erstellt:</p>;

    <ul>
      <li>Läsionsgrad 1° entspricht Neuropraxie</li>
      <li>Läsionsgrad 2° entspricht Axonotmesis</li>
      <li>
        Läsionsgrad 3°
        <ul>
          <li>äußere Kontinuität des Nervs ist erhalten</li>
          <li>Diskontinuität der Axone und ihrer Basallamina</li>
          <li>Perineurium intakt</li>
          <li>
            da Endoneuralrohre nicht mehr intakt sind, intrafaszikuläres Mismatching
          </li>
          <li>
            Intrafaszikuläre Blutungen, Ödeme oder Ischämien führen zu
            endoneurinalen Fibrosierungen
          </li>
          <li>Komplette Regeneration ist sehr unwahrscheinlich</li>
        </ul>
      </li>
      <li>
        Läsionsgrad 4°
        <ul>
          <li>Kontinuität der Faszikel und des Perineuriums sind unterbrochen</li>
          <li>äußere Kontinuität des Nervs ist intakt</li>
          <li>Häufig axonale Fehlsprossungen und Neurombildung</li>
          <li>
            Waller'sche Degeneration (Auflösung des Axons und der Markscheide distal
            der Läsion) sehr ausgeprägt
          </li>
        </ul>
      </li>
      <li>Läsionsgrad 5° entspricht Neurotmesis</li>
      <li>
        Läsionsgrad 6° nach MacKinnon/Dellon
        <ul>
          <li>Longitudinale Läsion</li>
          <li>
            Wechsel zwischen diskontinuierlichen Verletzungsarealen mit gesunden
            Gewebezonen
          </li>
        </ul>
      </li>
    </ul>;

    <p>&nbsp;</p>
    <p>
    Um eine Nervläsion zu diagnostizieren eignen sich folgende Methoden:
    </p>
    <ul>
      <li>
        Testung der Druck- und Berührungsempfindlichkeit (z.B. mit Wattebausch)
      </li>
      <li>Testung der Schmerzempfindung (z.B. mit Einmalkanüle)</li>
      <li>Spitz-Stumpf-Unterscheidung (z.B. mit Zahnarztsonde)</li>
      <li>
        Temperaturprüfung (z.B. mit Kugelsonde oder Zahnarztspiegel erwärmt oder
        abgekühlt)
      </li>
      <li>Geschmacksüberprüfung mit konzentrierten Lösungen</li>
      <li>
        Bildgebung:
        <ul>
          <li>Hochauflösende CT</li>
          <li>
            MRT
            <ul>
              <li>begrenzte Aussagekraft</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>;

    <p>&nbsp;</p>
    <p>
      Je nach Art der Nervschädigung und Läsionsgrad muss eine entsprechende
      Therapie zur Heilung angewandt werden:
    </p>;

    <ul>
      <li>
        Nach Nerveninjektionsschaden meist Spontanremission nach einigen Wochen
      </li>
      <li>
        Therapie von Verletzungen durch chirurgische Eingriffe je nach
        Verletzungsgrad:
        <ul>
          <li>Konservativ-abwartendes Vorgehen</li>
          <li>
            Chirurgische Exploration und mikroneurale Interventionen, wie Neurolyse,
            End-zu-End-Anastomose, Entubulationsverfahren oder Nervinterposition
          </li>
          <li>
            Vorteil der Versorgung innerhalb von 1-2 Wochen:
            <ul>
              <li>unveränderte Elastizität</li>
              <li>direkte Verbindung der Nervstücke möglich ohne Spannung</li>
              <li>keine Waller'sche Degeneration</li>
            </ul>
          </li>
          <li>
            Nachteil der Versorgung innerhalb von 1-2 Wochen:
            <ul>
              <li>schlechte Wundverhältnisse</li>
              <li>Längsausdehnung nicht einschätzbar</li>
            </ul>
          </li>
          <li>Je früher die Versorgung, desto besser die Prognose</li>
        </ul>
      </li>
    </ul>;

    <div className="startGallery" data-gallery-item={6}>
      <img
        className="galleryPoster"
        src="thumbs/video1.png"
        alt="Nervtransposition"
      />
      <p className="gallerieThumbDescription">Nervtransposition</p>
      <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
    </div>;

                <p>&nbsp;</p>
    <p>
      <span style={{ textDecoration: "underline" }}>
        2. Entzündung nach Zahnextraktion
      </span>;
    </p>;

    <p>
      Nach Zahnextraktionen kommt es häufig zu Entzündungen des Weichgewebes. Die
      Ursachen dafür können der Zerfall des Blutkoagels in der Extraktionsalveole
      infolge bakterielle Besiedlung sein oder eine angeborene und erworbene
      Immunsuppression.
    </p>;

    <p>
      Auch im Bereich des Mundes gelten die gängigen Kardinalsymptome für eine
      Entzündung:
    </p>;

    <ul>
      <li>Rubor</li>
      <li>Calor</li>
      <li>Dolor</li>
      <li>Tumor</li>
      <li>Functio laesa</li>
    </ul>;

    <div className="startGallery imageContainer" data-gallery-item={2}>
      <img src="thumbs/atherom.png" alt="Abszess" />
    </div>;
    <p>
      Im Falle einer Abszessbildung gilt auch heute noch der Grundsatz "ubi pus, ibi
      evacua". Das bedeutet, dass der Abzess mit einer chirurgischen Inzision
      entlastet und anschließend dauerhaft eine ausreichende Drainage für das
      entzündliche Exsudat vorhanden ist.
    </p>;

    <p>
      Je nach Ausmaß der Entzündung und Lokalisation muss entschieden werden, welche
      Therapie angewandt wird. Zur Verfügung stehen folgende Optionen:
    </p>;

    <ul>
      <li>
        Desinfizierende und antibakterielle Einlagen in die Extraktionsalveole
      </li>
      <li>Ggf. Abszessspaltung von intra- oder extraoral</li>
      <li>
        Spülungen, um die Wunde zu reinigen und den Abfluss des Eiters zu sichern
      </li>
      <li>
        Antibiotikum, ggf. auf das Keimspektrum nach Abstrichentnahme abgestimmt
      </li>
      <li>Analgetikum, um die Schmerzen des Patienten zu lindern</li>
    </ul>;

                <p>&nbsp;</p>
    <p>
      <span style={{ textDecoration: "underline" }}>
        3. Blutungen nach Zahnextraktion
      </span>
    </p>;

    <p>
      Nach Zahnextraktionen kommt es häufig zu Nachblutungen. Die Ursachen dafür
      sind:
    </p>;

    <ul>
      <li>
        Angeborene oder hämorrhagische Diathese (krankhaft gesteigerte
        Blutungsneigung)
      </li>
      <li>Einnahme von gerinnungshemmenden Medikamenten</li>
      <li>Wärmeapplikation</li>
      <li>Häufiges Ausspülen der Mundhöhle</li>
      <li>Gefäßerweiterung durch Kaffee und Alkohol</li>
      <li>Inzision eines hyperäamischen Gewebes</li>
    </ul>;

    <p>
      Es gibt drei typische Zeitpunkte für das Auftreten einer Blutung nach
      Zanextraktion. Ersten ist es typisch, dass eine Blutung unmittelbar nach der
      Operation auftritt. In der Regel hat dann keine adäquate Blutstillung
      intraoperativ stattgefunden. Hier kommt die Blutung aus dem Knochen der
      Gingiva oder dem umliegenden Weichgewebe. Der zweite Zeitpunkt ist ca. 2-6
      Stunden nach der Operation. Die Blutung entsteht hier durch eine reaktive
      Hyperämie nach abklingen der Wirkung des Vasokonstringens. Der dritte
      Zeitpunkt ist einige Tage nach der Operation bei einem entzündlichen Zerfall
      des Koagulums in der Alveole.
    </p>;

                <p>
    Die Therapie zur Stillung der Blutung ist:
    </p>
                <ul>
      <li>Kompression (z.B. mit Wattetupfer)</li>
      <li>Blutstillende Medikamente (z.B. Tranexamsäure)</li>
      <li>Übernähung der Wunde</li>
      <li>Anlage eines Druckverbandes</li>
      <li>Gefäßligatur</li>
      <li>selektive Embolisation</li>
      <li>Einsetzten einer präoperativ angefertigten Verbandplatte</li>
      <li>Auftragen von Fibrinkleber</li>
    </ul>;

    <div className="startGallery imageContainer" data-gallery-item={3}>
      <img src="thumbs/haematom_nach_x.png" alt="Hämatom" />
    </div>;



                <p>&nbsp;</p>
                <p>
    <span style={{textDecoration: 'underline'}}>
    4. Luxation des Zahnes
    </span>
    </p>
                <p>
    In seltenen Fällen kommt es während der Extraktion zu einer Luxation des Zahnes in das umliegende Gewebe. Bevorzugte Orte in die Zähne luxieren sind die Kieferhöhle, der Mundboden, der Weichgaumen und der retromolarer Bereich. Der Patient sollte dann über das Geschehen informiert werden und unmittelbar an eine chirurgische Fachklinik überwiesen werden, wo der Zahn sicher geborgen werden kann.
    </p>
                <p>&nbsp;</p>
    <div className="startGallery" data-gallery-item={7}>
      <img className="galleryPoster" src="thumbs/video2.png" />
      <p className="gallerieThumbDescription">Weisheitszahn Komplikationen</p>
      <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
    </div>;


                <p>&nbsp;</p>
                <p>
    <span style={{textDecoration: 'underline'}}>
    5. Fraktur des Unterkiefers
    </span>
    </p>
                <p>
    Wenn eine starke Unterkieferatrophie vorliegt oder ein tief gelegener Weisheitszahn entfernt wurde, kann es zu einer extremen Schwächung des Knochens durch die Extraktion von Zähnen kommen. Bereits intraoperativ kann der Kiefer durch den Druckaufbau der Hebelwirkung brechen. Unmittelbar postoperativ oder einige Wochen später kann, durch den Verzehr "härterer" Nahrung, ebenfalls eine Fraktur entstehen.
    </p>
                <div
    className="startGallery imageContainer"
    data-gallery-item={3}>
    <img
    src="thumbs/frakturnachzahnx.png"
    alt="Unterkieferfraktur nach Zahnextraktion" />
    </div>
    </div>
    <div className="links">
                <div data-media-id={1} data-media-type="image">
                  <div className="data-media-thumbnail">
    <img src="thumbs/klinik.jpg" />
    </div>
                  <img src="images/teilsch%C3%A4digung_nerv.png" />
                  <div className="media-link-title">Axonotmesis</div>
                  <div className="media-link-description">
    Gezeigt ist eine Teilschädigung des N. alveolaris inferior.
    </div>
                </div>
                <div data-media-id={2} data-media-type="image">
                  <div className="data-media-thumbnail">
    <img src="thumbs/klinik.jpg" />
    </div>
                  <img src="images/atherom.png" />
                  <div className="media-link-title">Abszess</div>
                  <div className="media-link-description">Auf dem Bild ist eine deutliche Entzündung des Weichgewebes erkennbar.
                    Die Entzündung ist ausgehend von einer infizierten Extraktionsalveole regio 48.
                  </div>
                </div>
                <div data-media-id={3} data-media-type="image">
                  <div className="data-media-thumbnail">
    <img src="thumbs/klinik.jpg" />
    </div>
                  <img src="images/haematom_nach_x.png" />
                  <div className="media-link-title">Hämatom</div>
                  <div className="media-link-description">Gezeigt ist eine massiven Einblutung des Mundbodens nach einer
                    Zahnextraktion.
                  </div>
                </div>
                <div data-media-id={4} data-media-type="image">
                  <div className="data-media-thumbnail">
    <img src="thumbs/klinik.jpg" />
    </div>
                  <img src="images/frakturnachzahnx.png" />
                  <div className="media-link-title">
    Fraktur nach Zahnextraktion
    </div>
                  <div className="media-link-description">Im OPT sieht man in regio 038 einen Frakturspalt. Durch die
                    Zahnextraktion war der Knochen so geschwächt, dass er dem Kaudruck der Nahrungsaufnahme nicht
                    standhalten konnte.
                  </div>
                </div>
                <div data-media-id={5} data-media-type="video">
                  <div className="media-link-video-id">0</div>
                  <div className="media-link-title">Weisheitszahnosteotomie</div>
                  <div className="media-link-description">
    Video zur&nbsp;Weisheitszahnosteotomie
    </div>
                </div>
                <div data-media-id={6} data-media-type="video">
                  <div className="media-link-video-id">1</div>
                  <div className="media-link-title">Nervtransposition</div>
                  <div className="media-link-description">
    Video zur Nervtransposition
    </div>
                </div>
                <div data-media-id={7} data-media-type="video">
                  <div className="media-link-video-id">2</div>
                  <div className="media-link-title">
    Weisheitszahn Komplikationen
    </div>
                  <div className="media-link-description">
    Video zu Weisheitszahn Komplikationen
    </div>
                </div>
              </div>
    </div>
    <div id="implantation" className="chapters">
      <div className="chapterTitle">
        <h3>Komplikationen nach Implantation</h3>
        <hr />
      </div>
      <div className="content-block">
        <p>Im Rahmen der Implantation treten 5 häufige Komplikationen auf.</p>
        <p>&nbsp;</p>
        <p>
          <span style={{ textDecoration: "underline" }}>
            1. Postoperative Blutung und Hämatombildung
          </span>
        </p>
        <p style={{ paddingLeft: 30 }}>
          Blutungen und Hämatombildungen sind häufig auftretende Komplikationen, die
          durch eine Schädigung des Knochens und Weichgewebes auftreten. In der
          Regel ist hier keine Therapie erforderlich.
        </p>
        <p style={{ paddingLeft: 30 }}>&nbsp;</p>
        <p>
          <span style={{ textDecoration: "underline" }}>
            2. Wundheilungsstörungen bis hin zur Periimplantitis
          </span>
        </p>
        <p style={{ paddingLeft: 30 }}>
          Wundheilungsstörungen der Implantatregion werden am häufigsten verursacht
          durch Rauchen, Parodontitis und Immunsuppremierende Allgemeinerkrankungen.
        </p>
        <ul>
          <li>
            Therapie:
            <ul>
              <li>Ggf. Antibiotikagabe, jedoch ist die Erfolgsquote umstritten</li>
              <li>Knochenaufbauende Maßnahmen</li>
              <li>
                Kürretage mit Glätten der Implantatwindungen, ggf.
                Laserdekontamination
              </li>
              <li>Ultima ratio: Explantation des Implantats</li>
            </ul>
          </li>
        </ul>
        <div className="startGallery imageContainer" data-gallery-item={8}>
          <img
            src="thumbs/periimplantitis_schema.png"
            alt="Schema der Periimplantitis"
          />
        </div>
        <p>&nbsp;</p>
        <p>
          <span style={{ textDecoration: "underline" }}>3. Frakturen</span>
        </p>
        <p style={{ paddingLeft: 30 }}>
          Durch gewaltsames Einbringen von Implantaten oder einer bestehenden
          Osteoporoseerkrankungen des Patienten kann es bei der Insertionen von
          Implantaten zu Frakturen kommen.
        </p>
        <ul>
          <li>
            Therapie:
            <ul>
              <li>Entfernung des Implantats</li>
              <li>Adäquate Versorgung der Fraktur</li>
              <li>
                Ggf. erneute Implantation nach abgeschlossener Wundheilung und
                Knochenneubildung
              </li>
            </ul>
          </li>
        </ul>
        <div className="startGallery imageContainer">
          <img
            src="thumbs/fraktur_nach_implantation_images.png"
            alt="Fraktur nach Implantation"
          />
        </div>
        <p>&nbsp;</p>
        <p>
          <span style={{ textDecoration: "underline" }}>4. "lost in space"</span>
        </p>
        <p style={{ paddingLeft: 30 }}>
          Dislokationen von Implantaten treten in der Regel auf bei einer falschen
          Planung, Osteoporose oder einem ungenügenden Knochenangebot.
        </p>
        <ul>
          <li>
            Therapie:
            <ul>
              <li>Entfernung des Implantats</li>
              <li>
                Ggf. erneute Implantation nach abgeschlossener Wundheilung und
                Knochenneubildung
              </li>
            </ul>
          </li>
        </ul>
        <div className="startGallery imageContainer" data-gallery-item={4}>
          <img src="thumbs/lostinspace_images.png" alt="Lost in Space" />
        </div>
        <p>&nbsp;</p>
        <p>
          <span style={{ textDecoration: "underline" }}>
            5. Implantatschäden bis hin zum Ermüdungsbruch
          </span>
        </p>
        <p style={{ paddingLeft: 30 }}>
          Die Ursachen für Implantatschäden, die nicht durch den Hersteller
          verursacht wurden, sind zu dünne Implantatdimensionen oder Fehlbelastungen
          durch eine falsche Planung oder periimplantären Knochenabbau.
        </p>
        <p style={{ paddingLeft: 30 }}>
          Im Falle eines Implantatbruchs muss das Implantat explantiert werden.
          Frakturen von Aufbauteilen können ersetzt werden.
        </p>
      </div>
      <div className="links">
        <div data-media-id={1} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/fraktur_nach_implantation.png" />
          <div className="media-link-title">Fraktur nach Implantation</div>
          <div className="media-link-description">
            Im OPT ist eine Fraktur in regio 044 in unmittelbarer Nähe des
            Implantates gezeigt.
          </div>
        </div>
        <div data-media-id={2} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/fraktur_nach_implantation2.png" />
          <div className="media-link-title">Fraktur nach Implantation</div>
          <div className="media-link-description">
            Fraktur des Unterkiefers nach Implantation in regio 034.
          </div>
        </div>
        <div data-media-id={3} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/fraktur_nach_implantation3.png" />
          <div className="media-link-title">Fraktur nach Implantation</div>
          <div className="media-link-description">
            Klinisches Beispiel einer Fraktur durch die Einsetzung eines Implantats.
          </div>
        </div>
        <div data-media-id={4} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/lostinspace.png" />
          <div className="media-link-title">Lost in space</div>
          <div className="media-link-description">
            Auf dem Bild ist die Dislokation eines Implantats gezeigt, welches
            ursprünglich in regio 036 implantiert wurde.
          </div>
        </div>
        <div data-media-id={5} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/lostinspace3.png" />
          <div className="media-link-title">Lost in space</div>
          <div className="media-link-description">
            Gezeigt ist ein disloziertes Implantat in der Nasenhaupthöhle.
          </div>
        </div>
        <div data-media-id={6} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/lostinspace4.png" />
          <div className="media-link-title">Lost in space</div>
          <div className="media-link-description">
            Gezeigt ist ein disloziertes Implantat in der Nasenhaupthöhle.
          </div>
        </div>
        <div data-media-id={7} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/lostinspace2.png" />
          <div className="media-link-title">Lost in space</div>
          <div className="media-link-description">
            Implantat, welches nach einem osteoplastischen Kieferhöhlenzugang unter
            der Schneider'schen Membran zum Vorschein kommt.
          </div>
        </div>
        <div data-media-id={8} data-media-type="image">
          <div className="data-media-thumbnail">
            <img src="thumbs/klinik.jpg" />
          </div>
          <img src="images/periimplantitis_schema.png" />
          <div className="media-link-title">Schema Periimplantitis</div>
          <div className="media-link-description">Schema Periimplantitis</div>
        </div>
      </div>
    </div>;

    <div id="sinuslift" className="chapters">
    <div className="chapterTitle">
      <h3>Komplikationen nach Sinuslift</h3>
      <hr />
    </div>;

    <div className="content-block">
      <p>
        Die häufigste Komplikation bei der Durchführung eines Sinuslifts ist die
        Perforation der Schneider'schen Membran.
      </p>
      <ul>
        <li>
          Therapie
          <ul>
            <li>Naht der Membran mit Nahtstärke ca. 7.0</li>
            <li>Verkleben der Membran mit Fibrinkleber</li>
            <li>Deckung mit Hilfe lokaler Plastiken</li>
            <li>
              Deckung mittels einer synthetischen Membran bei größeren Defekten
            </li>
          </ul>
        </li>
      </ul>
      <div className="startGallery imageContainer">
        <img
          src="thumbs/schneiderschemembran.png"
          alt="Perforierte Schneider'sche Membran"
        />
      </div>
    </div>;

    <div className="links">
      <div data-media-id={1} data-media-type="image">
        <div className="data-media-thumbnail">
          <img src="thumbs/klinik.jpg" />
        </div>
        <img src="images/schneiderschemembran.png" />
        <div className="media-link-title">Perforierte Schneider'sche Membran</div>
        <div className="media-link-description">
          Perforierte Schneider'sche Membran bei einem osteoplastischen
          Kieferhöhlenzugang.
        </div>
      </div>
    </div>;
  </div>
</div>

);
}

export default Komplikationen;
