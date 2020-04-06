import React from 'react'

import './../styles/Instruction.css'

export default class Instruction extends React.Component {

  render() {
    return (
      <>
        <div className="Instruction">
          <h1>Instrukcja</h1>
          <div className="InstructionInfo">
            <h2>Obsługujemy rekrutacje:</h2>
            <ul>
              <li>Stara punktacja (v1): <strong>2015/16</strong>, <strong>2016/17</strong>, <strong>2017/18</strong> <span role="img" aria-label="Correct">✔️</span></li>
              <li>Nowa punktacja (v2): <strong>2018/19</strong> <span role="img" aria-label="Correct">✔️</span></li>
              <li><strong>2019/20</strong> - Czekamy na opublikowanie Informatora z progami <span role="img" aria-label="Clock">⏰</span></li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <h2>Autor Kalkulatora</h2>
            <ul>
              <li>Marcin Wielgos</li>
              <li>Strona autora: <a href="https://wielgos.me" target="_blank" rel="noopener noreferrer">wielgos.me</a> | GitHub: <a href="http://github.com/mwvabes" target="_blank" rel="noopener noreferrer">mwvabes</a></li>
              <li>Kontakt mailowy: <strong>kontakt.vabes@gmail.com</strong></li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <ul>
              <li><span className="important">Strona została wykonana w celach hobbystycznych i <strong>nie jest</strong> oficjalną stroną udostępnianą przez Politechnikę Rzeszowską</span></li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <h2>Wyniki maturalne, progi, egzaminy ustne</h2>
            <ul>
              <li>Wystarczy, że uzupełnisz tylko okienka przedmiotów, z których zdawałeś maturę. Resztę okienek możesz zostawić puste.</li>
              <li>Po uzupełnieniu, w okienku z Twoimi punktami wyświetli się odpowiednia punktacja, a progi zaświecą się na <span className="higherPoints pointsInstruction">zielono</span> jeśli Twój wynik jest większy lub równy, a na <span className="lowerPoints pointsInstruction">czerwono</span>, gdy jest mniejszy niż dany próg.</li>
              <li>Na dzień 31.03.2020 na Politechnice Rzeszowskiej nie są brane pod uwagę wyniki egzaminów ustnych, dlatego Kalkulator nie uwzględnia tych wyników.</li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <h2>Egzaminy wstępne</h2>
            <ul>
              <li>Przedmioty oznaczone etykietą <strong>Obowiązuje egzamin wstępny</strong> mają zaplanowany wstępny egzamin który również wlicza się do wysokości progu. Niniejszy Kalkulator nie uwzględnia wyniku egzaminu wstępnego. Weź to pod uwagę analizując swoje wyniki.</li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <h2>Zmiany w liczeniu punktów</h2>
            <ul>
              <li>W rekrutacjach 2015/16, 2016/17, 2017/18, obowiązywał inny sposób obliczania punktów niż w nowych rekrutacjach. W niniejszym kalkulatorze Twoje punkty liczone według starego sposobu oznaczone są jako <strong>(v1)</strong>. </li>
              <li>W rekrutacji 2018/19 wprowadzono nowy sposób liczenia punktów. Twoje punkty obliczone w ten sposób oznaczono symbolem <strong>(v2)</strong>.</li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <ul>
              <li>Pamiętaj, aby nie kierować się w całości wynikiem pokazywanym przez Kalkulator. Progi punktowe oraz poziom rekrutacji zależą również od popytu na dany kierunek w danym roku, poziomu trudności matury, czy ilości miejsc, która z roku na rok może się zmieniać.</li>
              <li>Nie gromadzimy informacji o Twoich wynikach.</li>
              <li>Liczenie odbywa się lokalnie, a użycie cookies jest potrzebne do lokalnego zapisu wyników, aby przeglądarka uzupełniła je za Ciebie gdy wrócisz oraz o danych statystycznych o ilości wizyt na stronie.</li>
              <li><span className="important">Informacje dostępne na stronie mają charakter informacyjny i nie dają gwarancji dostania się na wybrane studia.</span></li>
              <li>Autor strony nie ponosi odpowiedzialności za szkody powstałe w wyniku działania Kalkulatora.</li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <h2>Dane</h2>
            <ul>
              <li>Informacje o progach pochodzą z Informatorów Politechniki Rzeszowskiej.</li>
              <li>Ostatnia aktualizacja danych: <span className="lastUpdated">31.03.2020</span></li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <h2>Inne uczelnie</h2>
            <ul>
              <li>Aktualnie Kalkulator obsługuje tylko uczelnię Politechniki Rzeszowskiej. Jeśli chcesz, aby obsługiwał inne, daj nam o tym znać na maila <strong>kontakt.vabes@gmail.com</strong></li>
            </ul>
          </div>
          <div className="InstructionInfo">
            <ul>
              <li>Powodzenia na maturze i podczas rekrutacji!</li>
            </ul>
          </div>
        </div>

        <p className="CookiesInfoBottom">Strona korzysta z cookies i pamięci przeglądarki w celu zbierania danych Google Analytics oraz lokalnego przechowywania wyników. Strona nie zbiera informacji o wynikach maturalnych.</p>

      </>
    )
  }

}