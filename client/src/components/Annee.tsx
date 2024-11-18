import "../styles/Annee.css";

interface AnneeProps {
  isOpena: boolean;
  setIsOpena: (open: boolean) => void;
}

export default function Annee({ isOpena, setIsOpena }: AnneeProps) {
  return (
    isOpena && (
      <div className="buttonsa">
        <img
          src="../src/assets/images/return.png"
          alt="retour"
          onClick={() => setIsOpena(false)}
          onKeyDown={() => setIsOpena(false)}
          className="return"
        />

        <h2>
          Année
          <img
            className="logobutton"
            src="../src/assets/images/annee.png"
            alt="genre"
          />
        </h2>
        <button className="buttona" type="button">
          2024
        </button>
        <button className="buttona" type="button">
          2023
        </button>
        <button className="buttona" type="button">
          2022
        </button>
        <button className="buttona" type="button">
          2021
        </button>
        <button className="buttona" type="button">
          2020
        </button>
        <button className="buttona" type="button">
          2019
        </button>
        <button className="buttona" type="button">
          2018
        </button>
        <button className="buttona" type="button">
          2017
        </button>
        <button className="buttona" type="button">
          2016
        </button>
        <button className="buttona" type="button">
          2015
        </button>
        <button className="buttona" type="button">
          2014
        </button>
        <button className="buttona" type="button">
          2013
        </button>
        <button className="buttona" type="button">
          2012
        </button>
        <button className="buttona" type="button">
          2011
        </button>
        <button className="buttona" type="button">
          2010
        </button>
        <button className="buttona" type="button">
          2009
        </button>
        <button className="buttona" type="button">
          2008
        </button>
        <button className="buttona" type="button">
          2007
        </button>
        <button className="buttona" type="button">
          2006
        </button>
        <button className="buttona" type="button">
          2005
        </button>
        <button className="buttona" type="button">
          2004
        </button>
        <button className="buttona" type="button">
          2003
        </button>
        <button className="buttona" type="button">
          2002
        </button>
        <button className="buttona" type="button">
          2001
        </button>
        <button className="buttona" type="button">
          2000
        </button>
        <button className="buttona" type="button">
          1999
        </button>
        <button className="buttona" type="button">
          1998
        </button>
        <button className="buttona" type="button">
          1997
        </button>
        <button className="buttona" type="button">
          1996
        </button>
        <button className="buttona" type="button">
          1995
        </button>
        <button className="buttona" type="button">
          1994
        </button>
        <button className="buttona" type="button">
          1993
        </button>
        <button className="buttona" type="button">
          1992
        </button>
        <button className="buttona" type="button">
          1991
        </button>
        <button className="buttona" type="button">
          1990
        </button>
        <button className="buttona" type="button">
          1989
        </button>
        <button className="buttona" type="button">
          1988
        </button>
        <button className="buttona" type="button">
          1987
        </button>
        <button className="buttona" type="button">
          1986
        </button>
        <button className="buttona" type="button">
          1985
        </button>
        <button className="buttona" type="button">
          1984
        </button>
        <button className="buttona" type="button">
          1983
        </button>
        <button className="buttona" type="button">
          1982
        </button>
        <button className="buttona" type="button">
          1981
        </button>
        <button className="buttona" type="button">
          1980
        </button>
        <button className="buttona" type="button">
          1979
        </button>
        <button className="buttona" type="button">
          1978
        </button>
        <button className="buttona" type="button">
          1977
        </button>
        <button className="buttona" type="button">
          1976
        </button>
        <button className="buttona" type="button">
          1975
        </button>
        <button className="buttona" type="button">
          1974
        </button>
        <button className="buttona" type="button">
          1973
        </button>
        <button className="buttona" type="button">
          1972
        </button>
        <button className="buttona" type="button">
          1971
        </button>
        <button className="buttona" type="button">
          1970
        </button>
      </div>
    )
  );
}
