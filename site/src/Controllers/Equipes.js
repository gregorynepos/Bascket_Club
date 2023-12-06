import { useEffect, useState } from "react";
import DreamTeam from "../Components/DataEquipes/DreamTeam";
import U11M1 from "../Components/DataEquipes/U11M1";
import U11M2 from "../Components/DataEquipes/U11M2";
import U13M1 from "../Components/DataEquipes/U13M1";
import U13M2 from "../Components/DataEquipes/U13M2";
import U15M1 from "../Components/DataEquipes/U15M1";
import U15M2 from "../Components/DataEquipes/U15M2";
import U17M1 from "../Components/DataEquipes/U17M1";
import U17M2 from "../Components/DataEquipes/U17M2";

const Equipes = () => {


  const [team, setTeam] = useState("select your team");
  const [DreamTeamContentVisible, setDreamTeamContentVisible] = useState(false);
  const [U11M1ContentVisible, setU11M1ContentVisible] = useState(false);
  const [U11M2ContentVisible, setU11M2ContentVisible] = useState(false);
  const [U13M1ContentVisible, setU13M1ContentVisible] = useState(false);
  const [U13M2ContentVisible, setU13M2ContentVisible] = useState(false);
  const [U15M1ContentVisible, setU15M1ContentVisible] = useState(false);
  const [U15M2ContentVisible, setU15M2ContentVisible] = useState(false);
  const [U17M1ContentVisible, setU17M1ContentVisible] = useState(false);
  const [U17M2ContentVisible, setU17M2ContentVisible] = useState(false);

  useEffect(() => {
    team === "DreamTeam" ? setDreamTeamContentVisible(true) : setDreamTeamContentVisible(false);
    team === "U11-M1" ? setU11M1ContentVisible(true) : setU11M1ContentVisible(false);
    team === "U11-M2" ? setU11M2ContentVisible(true) : setU11M2ContentVisible(false);
    team === "U13-M1" ? setU13M1ContentVisible(true) : setU13M1ContentVisible(false);
    team === "U13-M2" ? setU13M2ContentVisible(true) : setU13M2ContentVisible(false);
    team === "U15-M1" ? setU15M1ContentVisible(true) : setU15M1ContentVisible(false);
    team === "U15-M2" ? setU15M2ContentVisible(true) : setU15M2ContentVisible(false);
    team === "U17-M1" ? setU17M1ContentVisible(true) : setU17M1ContentVisible(false);
    team === "U17-M2" ? setU17M2ContentVisible(true) : setU17M2ContentVisible(false);
  }, [team]);

  const handleOnChange = (e) => {
    setTeam(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    team === "select your team"
      ? (result = "select your dream team")
      : (result = makeFirstLetterCapital(team));
    return result;
  };


  return (
    <>
      <section className='equipes'>
      <div style={{
          backgroundImage: `url("./img/Screenshot2.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>

        <div>
          <div className="s1">
            <div className="S2">
              <h1>Hello {renderResult()}</h1>
            </div>
            <div className="team">
              <select className="form-select" value={team} onChange={handleOnChange}>
                <option value="select your team">select your dream team</option>
                <option value="DreamTeam">Dream Team</option>
                <option value="U11-M1">U11-M1</option>
                <option value="U11-M2">U11-M2</option>
                <option value="U13-M1">U13-M1</option>
                <option value="U13-M2">U13-M2</option>
                <option value="U15-M1">U15-M1</option>
                <option value="U15-M2">U15-M2</option>
                <option value="U17-M1">U17-M1</option>
                <option value="U17-M2">U17-M2</option>
              </select>
            </div>
            {DreamTeamContentVisible && <DreamTeam />}
            {U11M1ContentVisible && <U11M1 />}
            {U11M2ContentVisible && <U11M2 />}
            {U13M1ContentVisible && <U13M1 />}
            {U13M2ContentVisible && <U13M2 />}
            {U15M1ContentVisible && <U15M1 />}
            {U15M2ContentVisible && <U15M2 />}
            {U17M1ContentVisible && <U17M1 />}
            {U17M2ContentVisible && <U17M2 />}
          </div>

        </div>
        </div>
      </section>
    </>
  );
}

export default Equipes;

