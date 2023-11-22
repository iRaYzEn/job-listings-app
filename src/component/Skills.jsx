function Skills({ lang, level, role, tools, onShow}) {

  return (
    <div onClick={onShow} className="job__skills">
      {role && <p key={Math.random()} className="skill">{role}</p>}
      {level && <p key={Math.random()} className="skill">{level}</p>}
      {lang && lang.map(lang => <p key={Math.random()} className="skill">{lang}</p>)}
      {tools && tools.map(tool => <p key={Math.random()} className="skill">{tool}</p>)}
    </div>
  );
}

export default Skills
