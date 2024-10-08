const Description = ({ data }: { data: string[] }) => {
  return data.map((text: string, i: number) => <p key={i}>{text}</p>);
};

export default Description;
