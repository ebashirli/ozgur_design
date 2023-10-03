function Project({ project }) {
  const { img, title, address } = project;
  return (
    <div className="max-w-fit">
      <img src={img} alt="" />
      <div className="bg-primary text-white p-3 grid gap-3">
        <h5>{title}</h5>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default Project;
