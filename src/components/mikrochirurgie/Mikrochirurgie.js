import React from 'react';

function Mikrochirurgie(props) {
  return (
    <div>
      <div id="grundlagen" className="chapters">
        <div className="chapterTitle">
          <h3>Grundlagen</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Ein <strong>Transplantat</strong> ist definiert als einer Gewebeeinheit
            oder ein Organ, das an einer Spenderregion entnommen und an eine
            Empfängerregion verpflanzt wird, mit dem Ziel es dort in den Gewebeverbund
            einwachsen zu lassen oder zu integrieren
          </p>
          <p>
            Bei mikrochirurgischen Transplantaten wird das{" "}
            <strong>Transplantat mit seinem ernährendem Blutgefäßsystem&nbsp;</strong>(Arterie,
            Vene und zwischengeschaltetem Kapillarbett) verpflanzt.
          </p>
          <p>
            Die entnommenen Blutgefäße werden{" "}
            <strong>mikrochirurgisch an die ortsständigen Gefäße</strong>
            angeschlossen. Man unterscheidet zwischen <strong>End-zu-End-</strong> und
            <strong>End-zu-Seit-Anastomosen</strong>.
          </p>
          <p>&nbsp;</p>
          <div className="startGallery" data-gallery-item={1}>
            <img className="galleryPoster" src="thumbs/video15.png" />
            <p className="gallerieThumbDescription">Anastomose</p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
          <p>
            <br />
            Nachteil dieser Vorgehensweise ist, dass teilweise erhebliche Komorbidität
            an der Entnahmestelle und bei der Päparation der Anschlussgefäße
            entstehen. Auch ästhetisch sind mikrochirurgische Transplantate meist
            ungünstig, da sie sich vom umgebenden Gewebe in Farbe und Textur
            unterscheiden. Außerdem sind meist mehrere Lappenanpassungen erforderlich,
            bis eine optimale Passung erreicht ist.
          </p>
          <p>
            Dementsprechend sind mikrochrurgische Transplantate bei großen, nicht
            primär verschließbaren Defekten indiziert.
          </p>
          <p>
            <br />
            Ein <strong>Implantat</strong> ist definiert als ein, in einen Organismus,
            eingepflanztes künstliches Material.
          </p>
          <p>&nbsp;</p>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="video">
            <div className="media-link-video-id">15</div>
            <div className="media-link-title">Anastomose</div>
            <div className="media-link-description">Anastomose</div>
          </div>
        </div>
      </div>;
      <div id="radialistransplantat" className="chapters">
        <div className="chapterTitle">
          <h3>Radialistransplantat</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Der Radialislappen ist normalerweise ein{" "}
            <strong>fasziokutaner Lappen</strong>. Es gibt jedoch verschiedene
            Variationen, wie z.B. ein reiner Faszienlappen oder ein epifasziales
            Transplantat. Bei den meisten Patienten handelt es sich um ein sehr dünnes
            Transplantat, da in dieser Region des Körpers wenig subkutanes Fettgewebe
            vorhanden ist. Die maximale Größe des Transplantates ist 10x20 cm.
          </p>
          <p>
            Den Lappenstiel bilden die{" "}
            <strong>A. radialis und ihre Begleitvenen</strong> (Venae comitantes). Um
            zu überprüfen, ob ein Radialistransplantat gehoben werden kann, ohne die
            Durchblutung der Hand zu gefährden, wird der <strong>Allen-Test</strong>{" "}
            präoperativ durchgeführt. Dieser Test zeigt, ob die Hand ausreichend über
            die A. ulnaris versorgt wird. Ist der Test negativ, ist der Arcus palmaris
            superficialis unterbrochen und somit ist die Hebung eines
            Radialistransplantats kontraindiziert.&nbsp;
          </p>
          <p>&nbsp;</p>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/allentest_images.png" />
          </div>
          <p>
            <br />
            Ein Radialistransplantat hat folgende Indikationen:
          </p>
          <ul>
            <li>vor allem flache, oberflächliche Defekte</li>
            <li>für Haut als auch Schleimhaut geeignet</li>
            <li>
              Defekte an Hart- und Weichgaumen, Zunge, Mundboden und Planum buccale
            </li>
            <li>
              in Kombination mit Knochensegment des Radius Verwendung zur
              Unterkiefer-, Oberkiefer- oder Nasenrekonstruktion theoretisch möglich
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>Vorteile:</p>
          <ul>
            <li>einfache Lappenhebung</li>
            <li>langer Gefäßstiel</li>
            <li>Option der sensiblen Reinnervation</li>
          </ul>
          <p>Nachteil:</p>
          <ul>
            <li>ästhetisch auffällige Entnahmestelle</li>
            <li>
              durch Opferung der A. radialis leichter Kraftverlust und Kälteintoleranz
              möglich
            </li>
            <li>
              meist Spalthaut- oder Vollhaut-Transplantat zur Defektdeckung der
              Entnahmestelle
            </li>
          </ul>
          <p>&nbsp;</p>
          <div className="startGallery imageContainer" data-gallery-item={4}>
            <img src="thumbs/radialis_images.png" />
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/allen.png" />
            <div className="media-link-title">Allen-Test</div>
            <div className="media-link-description">Normal durchblutete Hand.</div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/allen1.png" />
            <div className="media-link-title">Allen-Test</div>
            <div className="media-link-description">
              Abdrücken der A. radialis und A. ulnaris.
            </div>
          </div>
          <div data-media-id={3} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/allen2.png" />
            <div className="media-link-title">Allen-Test</div>
            <div className="media-link-description">
              Unter Abdrücken der A. radialis wird nur die ulnare Hälfte der Hand von
              der A. ulnaris versorgt. Das bedeutet, dass hier der Arcus palmaris
              nicht durchgängig ist. Der Test ist positiv.
            </div>
          </div>
          <div data-media-id={4} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsd_7202.png" />
            <div className="media-link-title">Radialis-Lappen</div>
            <div className="media-link-description">
              Präparation des Radilaislappens.
            </div>
          </div>
          <div data-media-id={5} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsd_7370.png" />
            <div className="media-link-title">Radialis-Lappen</div>
            <div className="media-link-description">
              Komplett gehobener Radialis-Lappen vor Durchtrennung der Gefäße.
            </div>
          </div>
          <div data-media-id={6} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsd_7378.png" />
            <div className="media-link-title">Radialis-Lappen</div>
            <div className="media-link-description">
              Situs nach Entfernung des Radilais-Lappens. Der Defekt kann nun mit
              Spalt- oder Vollhaut gedeckt werden.
            </div>
          </div>
          <div data-media-id={7} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsd_7382.png" />
            <div className="media-link-title">Radialis-Lappen</div>
            <div className="media-link-description">
              Gehobener Radialis-Lappen vor dem mikrochirurgischen Anschluss.
            </div>
          </div>
          <div data-media-id={8} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/radialis.png" />
            <div className="media-link-title">Radialis-Lappen</div>
            <div className="media-link-description">
              Transplantierter Radialis-Lappen am Weich- bzw. Hartgaumen.
            </div>
          </div>
        </div>
      </div>;
      <div id="ulnaristransplantat" className="chapters">
        <div className="chapterTitle">
          <h3>Ulnaristransplantat</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Der Ulnarislappen ist ein <strong>fasziokutaner Lappen</strong> des
            distalen Unterarmanteils. Die axiale Gefäßversorgung erfolgt durch die{" "}
            <strong>A. ulnaris</strong> und die venöse Drainage über die{" "}
            <strong>Begleitvenen oder die V. basilica</strong>. Der{" "}
            <strong>umgekehrte Allen-Test</strong>
            dient der Überprüfung der Gefäße. Ist der Allen-Test negativ, z.B. durch
            anatomische oder traumatische Unterbrechung des oberflächlichen
            Hohlhandbogens, ist eine Hebung des Ulnaristransplantats kontraindiziert.{" "}
            <br />Die maximale Transplantatgröße beträgt bis zu 8 x 12 cm.
          </p>
          <p>
            <br />
            Indiziert ist der Ulnarislappen vor allem bei flachen, oberflächlichen
            Defekten. Das Transplantat eignet sich sowohl für normale Haut, als auch
            für Schleimhaut, sodass auch Defekte in der Mundhöhle und im Pharynx
            gedeckt werden können. <br />
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>geringere Behaarung als auf radialer Seite</li>
            <li>ästhetisch günstigere Lage</li>
            <li>geringere Komplikationsrate an Entnahmestelle</li>
          </ul>
          <p>
            <br />
            Die Nachteil dieses Transplantats sind:
          </p>
          <ul>
            <li>unsichere Vaskularisation</li>
            <li>
              schwierige Präparation, aufgrund der dünnen Begleitvenen und des N.
              ulnaris in unmittelbarer Nähe
            </li>
            <li>relativ kurzer Gefäßstiel mit einem kleinen Transferradius</li>
            <li>Spalthaut zur Defektdeckung der Entnahmestelle</li>
          </ul>
        </div>
        <div className="links" />
      </div>;
      <div id="lateraleroberarmlappen" className="chapters">
        <div className="chapterTitle">
          <h3>Lateraler Oberarmlappen</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Der laterale Oberamlappen ist ein <strong>septokutaner Lappen</strong>. Er
            weißt ein größeres Volumen als fasziokutane Lappen auf und kann eine
            maximale Größe von 18 x 11 cm einnehmen. Das versorgende Gefäß ist des
            Endast der <strong>A. profunda brachii</strong> (A. collateralis radialis
            posterior).
            <br />
            <br />
            Das Transplantat ist indiziert bei Deckungen von Gesichtshautdefekten und
            für intraorale Rekonstruktionen. Bei Bedarf kann der Lappen mit einem
            Humerusspan, Muskel oder sensiblem Nerv gehoben werden.
          </p>
          <p>
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>gesichtsähnliche Hautfarbe und geringe Behaarung</li>
            <li>Primärverschluss bei Lappenbreite ≤ 6cm möglich</li>
          </ul>
          <p>
            <br />
            Die Nachteile dieses Transplantats sind:
          </p>
          <ul>
            <li>
              anspruchsvolle Entnahme, wegen tief lokalisiertem Gefäßstiel und Nähe
              des N. radialis
            </li>
            <li>relativ kurzer und kaliberschwacher Gefäßstiel</li>
          </ul>
          <p>&nbsp;</p>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/lateraleroberarmlappen_images.png" />
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/lateraler_oberarm-lappen.png" />
            <div className="media-link-title">Lateraler Oberarmlappen</div>
            <div className="media-link-description">
              Schematische Darstellung der Schnittführung des lateralen
              Oberarmlappens.
            </div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/lateraler_oberarm-lappen2.png" />
            <div className="media-link-title">Lateraler Oberarmlappen</div>
            <div className="media-link-description">
              Gehobenes Transplantat vor Absetzten des Gefäßsstiels.
            </div>
          </div>
        </div>
      </div>;
      <div id="latissimusdorsilappen" className="chapters">
        <div className="chapterTitle">
          <h3>Latissimus dorsi Lappen</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Der Latissimus dorsi Transplantat ist ein m<strong>
              uskulokutaner, muskulofaszialer oder osteomuskulokutaner Lappen
            </strong>. Er wird über die <strong>A. und V. thoracodorsalis</strong>{" "}
            gestielt. Auch eine Transplantation mit N. thoracodorsalis kann
            durchgeführt werden. Der Lappen kann von unterhalb der Axilla bis einige
            Zentimeter oberhalb des Beckenkamms gehoben werden. <br />
            <br />
            Das Transplantat hat folgende Indikationen:
          </p>
          <ul>
            <li>
              große und tiefgreifende Defekte im Gesichts-, Hals- und Kopfbereich
            </li>
            <li>Rekonstruktion der Schädelbasis</li>
            <li>(sub)totale Zungenrekonstruktion</li>
            <li>perforierte Wangendefekte</li>
            <li>
              knöcherne Rekonstruktion durch Mitnahme des am R. angularis gestielten
              Angulus inferior der Skapula
            </li>
          </ul>
          <p>
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>kaliberstarkes Gefäß</li>
            <li>sichere Anatomie, keine Voruntersuchungen notwendig</li>
          </ul>
          <p>
            <br />
            Der Nachteil dieses Transplantats ist:
          </p>
          <ul>
            <li>
              aufgrund der Lagerung Schwierigkeiten beim Arbeiten mit zwei Teams.
            </li>
          </ul>
        </div>
        <div className="links" />
      </div>;
      <div id="rectusabdominislappen" className="chapters">
        <div className="chapterTitle">
          <h3>Rectus abdominis Lappen</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Der Rectus abdominis Lappen kann als{" "}
            <strong>muskulokutaner oder muskuloperitonealer Lappen</strong> gehoben
            werden. Die beiden Varianten werden als TRAM-Flap
            (Transverse-Rectus-Abdominis-Myocutaneous-Flap) oder DIEP-Flap
            (Deep-Inferior-Epigastric-Perforator-Flap) bezeichnet. Gestielt ist das
            Transplantat über&nbsp; <strong>A. und V. epigastrica inferior</strong>.
          </p>
          <p>&nbsp;</p>
          <div className="startGallery" data-gallery-item={5}>
            <img className="galleryPoster" src="thumbs/video16.png" />
            <p className="gallerieThumbDescription">Rectus Abdominis Lappen</p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
          <p>
            <br />
            Das Transplantat hat folgende Indikationen:
          </p>
          <ul>
            <li>Vor allem Brustrekonstruktionen nach Ablatio mammae</li>
            <li>große tiefgreifende Defekte</li>
            <li>durchgehende Wangendefekte</li>
            <li>
              Rekonstruktion nach extendierter Maxillektomie mit Exenteratio orbitae
            </li>
          </ul>
          <p>
            <br />
            Vorteil dieses Transplantat ist, dass es aufgrund seiner Dicke besonders
            gut für tiefgreifende Defekte geeignet ist.
          </p>
          <p>
            Nachteil dieses Transplantat ist, dass es durch Schwächung der Bauchwand
            häufig zu Herniationen beim TRAM-Flap kommt.
          </p>
          <p>&nbsp;</p>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/rectus_images.png" />
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsc_2730.png" />
            <div className="media-link-title">Rectus-Abdominis-Lappen</div>
            <div className="media-link-description">
              Präparation der oberen Schichten des Rectus-Abdominis-Lappens.
            </div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsc_2837.png" />
            <div className="media-link-title">Rectus-Abdominis-Lappen</div>
            <div className="media-link-description">
              Präparation der Unterseite des Lappens. Sichtbar sind die versorgenden
              Gefäße des Transplantats.
            </div>
          </div>
          <div data-media-id={3} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsc_2938.png" />
            <div className="media-link-title">Rectus-Abdominis-Lappen</div>
            <div className="media-link-description">
              Vollständig gehobenes Transplantat bevor die versorgenden Gefäße
              abgesetzt sind.
            </div>
          </div>
          <div data-media-id={4} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsc_2963.png" />
            <div className="media-link-title">Rectus-Abdominis-Lappen</div>
            <div className="media-link-description">
              Entferntes Transplantat und teilweise verschlossenes Transplantatlager.
            </div>
          </div>
          <div data-media-id={5} data-media-type="video">
            <div className="media-link-video-id">16</div>
            <div className="media-link-title">Rectus Abdominis Lappen</div>
            <div className="media-link-description">Rectus Abdominis Lappen</div>
          </div>
        </div>
      </div>;
      <div id="anterolateraltightflap" className="chapters">
        <div className="chapterTitle">
          <h3>Anterolateral tight flap </h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Der anterolateral tight flap wird auch als "M. vastus lateralis Lappen"
            bezeichnet. Er ist ein ein{" "}
            <strong>myokutaner oder ein rein muskulärer Lappen</strong>.&nbsp; Der
            Gefäßstiel wird gebildet aus den Perforansgefäßen des{" "}
            <strong>
              R. descendens der A. circumflexa femoris lateralis und ihren
              Begleitvenen
            </strong>. Hier ist jedoch zu berücksichtigen, dass je nach Individuum
            starke Gefäßvariationen auftreten können.
          </p>
          <p>
            <br />
            Das Transplantat hat folgende Indikationen:
          </p>
          <ul>
            <li>
              Weichgewebsrekonstruktionen im Kopf-Hals-Gebiet (Gesicht, Skalp,
              Kalotte, intraoral)
            </li>
            <li>auch für tiefe Defekte geeignet</li>
            <li>gestielter regionaler Schwenklappen in Glutealregion</li>
          </ul>
          <p>
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>gute Beweglichkeit des Lappens</li>
            <li>
              Dicke und Volumen können durch primäre Lappenausdünnung angepasst werden
            </li>
            <li>
              falls mehrere Perforatoren vorhanden sind, können verschiedene frei
              bewegliche Hautinseln präpariert werden
            </li>
          </ul>
          <p>
            <br />
            Die Nachteile dieses Transplantats sind:
          </p>
          <ul>
            <li>
              Verlauf der Perforansgefäße variabel (septokutan,myokutan, in seltenen
              Fällen nicht aus dem R. descendens)
            </li>
            <li>postoperativ starke Schrumpfung des Lappens</li>
          </ul>
          <p>&nbsp;</p>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/alt_images.png" />
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/alt1.png" />
            <div className="media-link-title">ALT-Lappen</div>
            <div className="media-link-description">
              Eingezeichnete Schnittführung zur Hebung des Transplantats.
            </div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/alt2.png" />
            <div className="media-link-title">ALT-Lappen</div>
            <div className="media-link-description">
              Gehobener ALT-Lappen vor Absetzen der Gefäße.
            </div>
          </div>
        </div>
      </div>;
      <div id="jejunumtransplantat" className="chapters">
        <div className="chapterTitle">
          <h3>Jejunum-Transplantat</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Das Jejunum-Transplantat ist ein <strong>Segment des Darms</strong>, die
            kontramesenteriell aufgetrennt als Patch transplantiert werden. Als
            Gefäßstiel dienen die{" "}
            <strong>
              jejunalen Äste der A. mesenterica superior und ihre Begleitvenen
            </strong>. Die maximale Länge beträgt 10-12 cm.{" "}
          </p>
          <p>
            <br />
            Das Transplantat ist indiziert zum Ersatz von Mund- und Rachenschleimhaut,
            sowie bei großflächige Schleimhautdefekten. Heutzutage wird das
            Transplantat jedoch aufgrund der zahlreichen Nachteile und verhältnismäßig
            großen Morbidität nur noch selten eingesetzt.
          </p>
          <p>
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>Röhrenform erspart lange Naht</li>
            <li>lässt sich gut adaptieren</li>
            <li>
              nach Transplantation weiterhin Sekretion von Darmsekret, was eine
              radiogene Mundtrockenheit kompensieren kann
            </li>
          </ul>
          <p>
            <br />
            Die Nachteile dieses Transplantats sind:
          </p>
          <ul>
            <li>
              nicht keratinisiert Oberfläche und daher bei mechanischer Belastung
              leicht verletzbar
            </li>
            <li>
              Eigenmotilität und Peristaltik über Plexus myentericus (Auerbach)
              bleiben bestehen
            </li>
            <li>Laparotomie mit Komplikationsmöglichkeiten</li>
            <li>Beteiligung der Viszeralchirurgen</li>
          </ul>
        </div>
        <div className="links" />
      </div>;
      <div id="scapulatransplantat" className="chapters">
        <div className="chapterTitle">
          <h3>Scapula-Transplantat</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Das Scapula-Transplantat kann als{" "}
            <strong>muskuloossärer oder osteomuskulokutaner Lappen</strong> gehoben
            werden. Der Gefäßstiel wird durch die{" "}
            <strong>A. und V. circumflexa scapulae</strong>
            gebildet. <br />
            <br />
            Das Transplantat hat folgende Indikationen:
          </p>
          <ul>
            <li>Hautdefekte</li>
            <li>flache subkutane Gewebedefekte</li>
            <li>
              Isolierte subkutane Weichgewebedefekte (Deepithelisierung des Lappens)
            </li>
            <li>
              mit Margo lateralis Versorgung der Defekte von Maxilla, Mandibula,
              Orbitaboden und Jochbein
            </li>
          </ul>
          <p>
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>meist wenig Behaarung</li>
            <li>problemloser Direktverschluss des Entnahmedefekts</li>
            <li>Gefäßstiel ist großkalibrig, lang und hat eine konstante Anatomie</li>
            <li>Kontur ähnlich der Gesichtshaut</li>
            <li>Gegeneinander verschiebbare Knochen- und Weichgewebsanteile</li>
          </ul>
          <p>
            <br />
            Die Nachteile dieses Transplantats sind:
          </p>
          <ul>
            <li>Intraoperative Umlagerung</li>
            <li>Schrumpfung des Lappens postoperativ</li>
            <li>
              Form und Größe der Skapulanur eingeschränkt für die Rekonstruktion von
              Unterkieferanteilen geeignet, eher Oberkieferrekonstruktionen
            </li>
          </ul>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/scapula.png" />
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/scapula.png" />
            <div className="media-link-title">Scapula-Transplantat</div>
            <div className="media-link-description">
              Schematische Darstellung eines gehobenen Scapula-Transplantats.
            </div>
          </div>
        </div>
      </div>;
      <div id="fibulatransplantat" className="chapters">
        <div className="chapterTitle">
          <h3>Fibula-Transplantat</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Das Fibula-Transplantat kann als{" "}
            <strong>muskuloossärer oder osteomuskulokutaner Lappen</strong> gehoben
            werden. Der Gefäßstiel wird durch die{" "}
            <strong>A. peronea und Perforansgefäße</strong>
            sowie deren <strong>Begleitvenen</strong> gebildet. Je nach Individuum
            treten deutliche Variationen im Verlauf und Lokalisation der
            Perforansgefäße auf. Diesbezüglich muss präoperativ eine Angiographie bzw.
            eine MR-Angiographie durchgeführt werden.
          </p>
          <p>
            <br />
            DasTransplantat ist vor allem indiziert bei langstreckigen
            Unterkieferdefekten. Außerdem eignet es sich zum Verschluss perforierter
            Wangendefekte.
          </p>
          <p>
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>
              kann den kompletten Unterkiefer ersetzen bei einer Länge bis zu 30cm
            </li>
            <li>optionale Anpassung der Position und Größe der Hautinsel</li>
            <li>überschaubare Morbidität nach Fibulaentnahme</li>
          </ul>
          <p>
            <br />
            Die Nachteile dieses Transplantats sind:
          </p>
          <ul>
            <li>
              geringe Höhe und Breite, die eher einem atrophierten Knochen entspricht
            </li>
            <li>
              bei Kindern nach Entnahme der Fibula Verbiegung der Tibia und
              Valgusdeformität beschrieben
            </li>
          </ul>
          <p>&nbsp;</p>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/fibula_images.png" />
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/fibula1.png" />
            <div className="media-link-title">Fibula-Transplantat</div>
            <div className="media-link-description">
              Eingezeichnete Schnittführung für das Fibula-Transplantat.
            </div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/fibula2.png" />
            <div className="media-link-title">Fibula-Transplantat</div>
            <div className="media-link-description">
              Gehobenes Fibula-Transplantat vor Absetzten der Gefäße.
            </div>
          </div>
          <div data-media-id={3} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/fibula3.png" />
            <div className="media-link-title">Fibula-Transplantat</div>
            <div className="media-link-description">
              In den Defekt eingefügtes Fibula-Transplantat.
            </div>
          </div>
        </div>
      </div>;
      <div id="beckenkammtransplantat" className="chapters">
        <div className="chapterTitle">
          <h3>Beckenkamm-Transplantat</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            Das Beckenkammtransplantat ist ein{" "}
            <strong>muskuloossärer oder osteomuskulokutaner Lappen</strong>. Der
            Gefäßstiel wird durch die{" "}
            <strong>A.und V. circumflexa ilium profunda</strong> gebildet. Die
            maximale Ausdehnung dieses Transplantats sind 20 cm Länge bei minimaler
            Lappenbreite.
          </p>
          <p>
            <br />
            Das Beckenkammtransplantat hat folgende Indikationen:
          </p>
          <ul>
            <li>umfangreiche Defekte im Unter- oder Oberkiefer</li>
            <li>Aufbau extrem atrophierter Kiefer</li>
            <li>
              Variation mit Muskelschürze vom M. obliquus internus abdominis zur
              Weichgewebskonstruktion möglich
            </li>
            <li>Rekonstruktionen des Mittelgesichts</li>
          </ul>
          <p>&nbsp;</p>
          <div className="startGallery" data-gallery-item={6}>
            <img className="galleryPoster" src="thumbs/video17.png" />
            <p className="gallerieThumbDescription">Rekonstruktion Mittelgesicht</p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
          <p>
            <br />
            Die Vorteile dieses Transplantats sind:
          </p>
          <ul>
            <li>
              eignet sich sehr gut für Unterkieferersatz wegen großen Knochenangebotes
            </li>
            <li>
              kann max. bis zu 2/3 des Unterkiefers ersetzen, eher limitiert auf den
              Ersatz der Hemimandibula
            </li>
            <li>gute Voraussetzung für Insertion von dentalen Implantaten</li>
            <li>
              Implantation bei Rekonstruktion möglich, besser nach Einheilung des
              Transplantates
            </li>
          </ul>
          <p>
            <br />
            Nachteil dieses Transplantats ist:
          </p>
          <ul>
            <li>
              bei osteomuskolokutanen Lappen reicht das tiefe Gefäßsystem in ca. 20%
              der Fälle nicht zur Versorgung der Haut aus
              <br />
              <br />
            </li>
          </ul>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/becken_images.png" />
          </div>
          <p>
            <br />
            Fallbeispiel Beckenkammtransplantat mit Sofortimplantation
          </p>
          <div className="startGallery" data-gallery-item={5}>
            <img className="galleryPoster" src="thumbs/video11.png" />
            <p className="gallerieThumbDescription">Beckenkamm Implantate</p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
          <div className="startGallery" data-gallery-item={7}>
            <img className="galleryPoster" src="thumbs/video18.png" />
            <p className="gallerieThumbDescription">
              Metallentfernung Beckenkammtransplantat
            </p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
          <div className="startGallery" data-gallery-item={8}>
            <img className="galleryPoster" src="thumbs/video19.png" />
            <p className="gallerieThumbDescription">
              Implantatfreilegung + Vestibulumplastik
            </p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
          <p>
            <br />
            Des Weiteren eignet sich das Beckenkammtransplantat gut zur Rekonstruktion
            größerer Defekte und kann mit einem künstlichen Kiefergelenksersatz
            kombiniert werden.
          </p>
          <div className="startGallery" data-gallery-item={9}>
            <img className="galleryPoster" src="thumbs/video20.png" />
            <p className="gallerieThumbDescription">
              Beckenkammtransplantat mit Kiefergelenk
            </p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
          <p>
            <br />
            Müssen die Kiefergelenke isoliert ersetzt werden, können die
            Totalendoprothesen selbstverständlich auch an einer gesunden, bestehenden
            Mandibula befestigt werden.
          </p>
          <div className="startGallery" data-gallery-item={10}>
            <img className="galleryPoster" src="thumbs/video21.png" />
            <p className="gallerieThumbDescription">
              Beckenkammtransplantat mit Kiefergelenk
            </p>
            <img className="galleryPoster" src="thumbs/Play_experimentell.png" />
          </div>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/becken1.png" />
            <div className="media-link-title">Beckenkamm-Transplantat</div>
            <div className="media-link-description">
              Präparation der oberflächlichen Hautschicht bis zur Darstellung des
              Gefäßstiels.
            </div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/becken2.png" />
            <div className="media-link-title">Beckenkamm-Transplantat</div>
            <div className="media-link-description">
              Darstellung des Beckens und der Gefäße für das Beckenkamm-Transplantat.
            </div>
          </div>
          <div data-media-id={3} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/becken3.png" />
            <div className="media-link-title">Beckenkamm-Transplantat</div>
            <div className="media-link-description">
              Gehobenes Beckenkamm-Transplantat vor Absetzten des Gefäßstiels.
            </div>
          </div>
          <div data-media-id={4} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/becken4.png" />
            <div className="media-link-title">Beckenkamm-Transplantat</div>
            <div className="media-link-description">
              Transplantiertes Beckenkammtransplantat im Defekbereich des
              Unterkiefers.
            </div>
          </div>
          <div data-media-id={5} data-media-type="video">
            <div className="media-link-video-id">11</div>
            <div className="media-link-title">Beckenkamm Implantate</div>
            <div className="media-link-description">
              Video zu Beckenkammtransplantat
            </div>
          </div>
          <div data-media-id={6} data-media-type="video">
            <div className="media-link-video-id">17</div>
            <div className="media-link-title">Rekonstruktion Mittelgesicht</div>
            <div className="media-link-description">Rekonstruktion Mittelgesicht</div>
          </div>
          <div data-media-id={7} data-media-type="video">
            <div className="media-link-video-id">18</div>
            <div className="media-link-title">
              Metallentfernung Beckenkammtransplantat
            </div>
            <div className="media-link-description">
              Metallentfernung Beckenkammtransplantat
            </div>
          </div>
          <div data-media-id={8} data-media-type="video">
            <div className="media-link-video-id">19</div>
            <div className="media-link-title">
              Implantatfreilegung + Vestibulumplastik Beckenkammtransplantat
            </div>
            <div className="media-link-description">
              Implantatfreilegung + Vestibulumplastik Beckenkammtransplantat
            </div>
          </div>
          <div data-media-id={9} data-media-type="video">
            <div className="media-link-video-id">20</div>
            <div className="media-link-title">Beckenkamm mit Kiefergelenk</div>
            <div className="media-link-description">Beckenkamm mit Kiefergelenk</div>
          </div>
          <div data-media-id={10} data-media-type="video">
            <div className="media-link-video-id">21</div>
            <div className="media-link-title">Totalendoprothese Kiefergelenk</div>
            <div className="media-link-description">
              Totalendoprothese Kiefergelenk
            </div>
          </div>
        </div>
      </div>;
      <div id="perforaterlappen" className="chapters">
        <div className="chapterTitle">
          <h3>Perforater-Lappen</h3>
          <hr />
        </div>
        <div className="content-block">
          <p>
            <span style={{ textDecoration: "underline" }}>
              Allgemeines zu Perforator- bzw. Perforanslappen
            </span>
            <br />
            Perforatorlappen sind definiert als <strong>Weichgewebslappen</strong>,
            die von einzelnen (nicht namentlich beschriebenen) die Faszie
            perforierenden <strong>Endgefäßen</strong> versorgt werden.
          </p>
          <p>
            <br />
            Sie werden folgendermaßen klassifiziert:
          </p>
          <ul>
            <li>
              Direkte Gefäße
              <ul>
                <li>
                  direkter Verlauf vom Basisgefäß durch das subkutane Fettgewebe zur
                  Haut
                </li>
                <li>perforieren nur tiefe Faszie</li>
              </ul>
            </li>
            <li>
              Indirekte Gefäße
              <ul>
                <li>indirekter Verlauf zur Haut</li>
                <li>muskulokutane oder septokutane Perforanslappen</li>
                <li>
                  folgen Faszienräumen, intermuskuläre Septen oder durchqueren
                  Muskelgewebe
                </li>
              </ul>
            </li>
          </ul>
          <p>
            <br />
            Es gibt eine viele unterschiedliche Entnahmeregionen:
          </p>
          <ul>
            <li>Anterolaterale, laterale und medialer Oberschenkel</li>
            <li>Latissimus dorsi</li>
            <li>Rectus abdominis</li>
            <li>Glutealregion</li>
            <li>Distale Extremitäten</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              Allgemeine Vor- und Nachteile
            </span>
            <br />
            Die Vorteile der Perforatorlappen sind:
          </p>
          <ul>
            <li>geringe Entnahmemorbidität</li>
            <li>individuelle Anpassung des Lappens möglich</li>
          </ul>
          <p>
            <br />
            Die Nachteile der Perforatorlappen sind:
          </p>
          <ul>
            <li>Setzt exakte Kenntnis der Gefäßanatomie voraus</li>
            <li>
              anspruchsvolle Gefäßanastomosen, da Gefäßkaliber häufig sehr gering
              sind, d.h. weniger als 1mm
            </li>
            <li>
              häufig kurzer Gefäßstiel, welcher die Flexibilität des Lappens deutlich
              einschränkt
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>ALT-Perforatorlappen</span>
            <br />
            Der ALT-Perforator-Lappen ist indiziert zur Rekonstruktion von
            Weichgewebsdefekten intra- oder extraoral. Gestielt ist das Transplantat
            über kleine <strong>Perforansgefäße mit Venae comitantes</strong>, meist
            aus dem{" "}
            <strong>R. descendens der A. circumflexa femoris lateralis</strong>.
          </p>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              Soleus-Perforatorlappen
            </span>
            <br />
            Der Soleus-Perforator-Lappen ist indiziert zur Rekonstruktion von
            Weichgewebsdefekten intra- oder extraoral. Das Transplantat ist gestielt
            über kleine{" "}
            <strong>Perforansgefäße mit Venae comitantes aus der A. peronea</strong>.
          </p>
          <div className="startGallery imageContainer" data-gallery-item={1}>
            <img src="thumbs/perforator_images.png" />
          </div>
          <p>
            <br />
            <span style={{ textDecoration: "underline" }}>
              DIEAP (Deep Inferior Epigastric Artery-Perforator Flap)-Perforatorlappen
            </span>
            <br />
            Der DIEAP-Lappen ist ebenfalls indiziert zur Rekonstruktion von
            Weichgewebsdefekten intra- oder extraoral. Das Transplantat ist gestielt
            über kleine{" "}
            <strong>
              Perforansgefäße mit Venae comitantes aus der A. epigastrica inferior
            </strong>.
          </p>
        </div>
        <div className="links">
          <div data-media-id={1} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsd_7404.png" />
            <div className="media-link-title">Soleus-Lappen</div>
            <div className="media-link-description">
              Darstellung der Perorator-Gefäße am Unterschenkel.
            </div>
          </div>
          <div data-media-id={2} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsd_7477.png" />
            <div className="media-link-title">Soleus-Lappen</div>
            <div className="media-link-description">
              Vollständig gehobener Perforator-Lappen vor Durchtrennung des
              Gefäßstiels.
            </div>
          </div>
          <div data-media-id={3} data-media-type="image">
            <div className="data-media-thumbnail">
              <img src="images/klinik.jpg" />
            </div>
            <img src="images/dsd_7493.png" />
            <div className="media-link-title">Soleus-Lappen</div>
            <div className="media-link-description">
              Perforator-Lappen und Entnahmestelle nach Lappenstieldurchtrennung.
            </div>
          </div>
        </div>
      </div>;
  </div>

);
}

export default Mikrochirurgie;
