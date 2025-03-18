interface ExperienceItemProps {
  ID: number;
  Title: string;
  Date: string;
  CompanyName: string;
  Address: string;
  Details: string[];
  Website?: string;
}

export const ExperienceItem = (data: ExperienceItemProps) => {
  return (
    <div className="experience-item">
      <div className="flex justify-between">
        <span className="subheading">{data.CompanyName}</span>
        <span className="subheading">{data.Date}</span>
      </div>
      <p className="mb-3">
        <span className="text-base">{data.Address}</span>
      </p>
      <ul className="list-disc ml-5 mb-3">
        {data.Details.map((detail, index) => (
          <li key={index} className="mb-1 text-base">
            {detail}
          </li>
        ))}
      </ul>
      {data.Website && (
        <div className="flex text-base">
          <p className="font-semibold ">Website:</p>
          <a
            href={data.Website}
            target="_blank"
            rel="noreferrer"
            className="text-primary ml-2"
          >
            {data.Website}
          </a>
        </div>
      )}
    </div>
  );
};

export const ExperienceItemTitle = (data: ExperienceItemProps) => {
  return <div className="header">{data.Title}</div>;
};
