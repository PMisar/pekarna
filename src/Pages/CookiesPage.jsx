import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="cookies-policy-page" id="pages">
      <h1>Jaké soubory cookies používáme?</h1>
      <ul>
        <li>
          Nezbytné cookies: Tyto cookies jsou nezbytné pro správné fungování
          našich webových stránek. Bez těchto cookies by nebylo možné poskytovat
          základní funkce, jako je přihlašování nebo košík pro nákupy.{" "}
        </li>
        <li>
          Analytické cookies: Tyto cookies nám pomáhají sledovat, jak se
          uživatelé pohybují na našich webových stránkách, abychom mohli
          vylepšovat jejich funkčnost. Analytické cookies nám poskytují anonymní
          informace o tom, jaký obsah je nejvíce pro naše uživatele relevantní.{" "}
        </li>
        <li>
          Funkční cookies: Tyto cookies umožňují webovým stránkám zapamatovat si
          vaše preference a personalizovat tak vaši uživatelskou zkušenost.
          Například si pamatují vaše předvolby jazyka nebo regionu.{" "}
        </li>{" "}
        <li>
          Reklamní cookies: Tyto cookies se používají k personalizaci
          reklamových obsahů na základě vašich zájmů. Pomáhají nám zobrazovat
          vám relevantní reklamy na základě vašeho prohlížení našich webových
          stránek a dalších internetových stránek.
        </li>
      </ul>
      <h2>Jak můžete spravovat cookies?</h2>
      <p>
        Ve většině webových prohlížečů můžete nastavit preference pro přijímání
        nebo odmítání cookies. Můžete také smazat všechny cookies uložené ve
        vašem prohlížeči. Upozorňujeme však, že odmítnutí cookies může omezit
        funkcionalitu našich webových stránek.
      </p>
      <h2>Další informace</h2>
      <p>
        Pro více informací o cookies a ochraně soukromí na našich webových
        stránkách si prosím přečtěte naši zásady ochrany osobních údajů. Pokud
        máte jakékoliv dotazy týkající se našich zásad používání cookies,
        neváhejte nás kontaktovat. Děkujeme za vaši důvěru a za to, že jste si
        vybrali naše webové stránky.
      </p>
    </div>
  );
};

export default CookiesPolicy;
