function Text({ job }) {
  return (
    <div className="job__text">
      <div className="text__header">
        <p className="header__title">{job.company}</p>
        <div className="tags">
          {job.new && <p className="tag tag--new">new!</p>}
          {job.featured && <p className="tag tag--featured">featured!</p>}
        </div>
      </div>
      <h2 className="job__title">{job.position}</h2>
      <div className="details">
        <ul className="details__list">
          <p className="list__item-time">{job.postedAt}</p>
          <li className="list__item">{job.contract}</li>
          <li className="list__item">{job.location}</li>
        </ul>
      </div>
    </div>
  );
}

export default Text
