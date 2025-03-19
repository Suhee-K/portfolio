interface ExperienceItemProps {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  companyName: string;
  address: string;
  descriptions: string[];
  website?: string;
}

export const ExperienceItem = (data: ExperienceItemProps) => {
  return (
    <div className="experience-item">
      <div className="flex justify-between items-center">
        <span className="subheading">{data.companyName}</span>
        <p className="text-base">
          {data.startDate} - {data.endDate}
        </p>
      </div>
      <p className="mb-3">
        <span className="text-base">{data.address}</span>
      </p>
      <ul className="list-disc ml-5 mb-3">
        {data.descriptions.map((description, index) => (
          <li key={index} className="mb-1 text-base">
            {description}
          </li>
        ))}
      </ul>
      {data.website && (
        <div className="flex text-base">
          <p className="font-semibold ">Website:</p>
          <a
            href={data.website}
            target="_blank"
            rel="noreferrer"
            className="text-primary ml-2"
          >
            {data.website}
          </a>
        </div>
      )}
    </div>
  );
};

export const ExperienceItemTitle = (data: ExperienceItemProps) => {
  return <div className="header">{data.title}</div>;
};
